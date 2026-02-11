"use server";

import { z } from "zod";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import parsePhoneNumber from "libphonenumber-js";

const organizationSchema = z.object({
  name: z.string().min(3, "שם העסק חייב לכלול לפחות 3 תווים"),
  slug: z.string().min(3),
  logo: z
    .union([z.url("הקישור לתמונה חייב להיות קישור תקין"), z.literal("")])
    .transform((val) => val || undefined)
    .optional(),
  userId: z.string().min(1),
  metadata: z.object({
    phoneNumber: z
      .string()
      .refine((val) => parsePhoneNumber(val, "IL")?.isValid(), {
        error: "מספר הטלפון אינו תקין",
      }),
    email: z.email({ error: "כתובת האימייל אינה תקינה" }),
    address: z.string().min(5, { error: "כתובת העסק קצרה מדי" }),
  }),
  keepCurrentActiveOrganization: z.boolean().default(false),
});

type organizationProps = z.infer<typeof organizationSchema>;

export const createOrganization = async (raw: organizationProps) => {
  const parsed = organizationSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errorMessage: Object.values(parsed.error.flatten().fieldErrors).join(
        ", ",
      ),
    };
  }

  const slugData = await auth.api.checkOrganizationSlug({
    body: {
      slug: parsed.data.slug,
    },
  });

  if (!slugData.status) return { errorMessage: "slug already exists" };
  const organizationData = await auth.api.createOrganization({
    body: parsed.data,
    headers: await headers(),
  });

  return { data: organizationData };
};
