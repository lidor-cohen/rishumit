"use server";

import { z } from "zod";
import { checkIsraeliId } from "@/lib/utils";
import { isValidPhoneNumber } from "libphonenumber-js";
import prisma from "@/lib/db/prisma";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

const ClientValidator = z.object({
  name: z.string().min(2, { error: "שם הלקוח חייב להיות לפחות בעל 2 תווים" }),
  taxId: z
    .string()
    .length(9)
    .refine((id) => checkIsraeliId(id), { error: "תעודת זהות לא תקינה" }),
  email: z.email("כתובת המייל אינה תקינה"),
  phone: z.string().refine((phone) => isValidPhoneNumber(phone, "IL"), {
    error: "מספר הטלפון אינו תקין",
  }),
});

export type ClientProps = z.infer<typeof ClientValidator>;

export const createClient = async (raw: ClientProps) => {
  const parsed = ClientValidator.safeParse(raw);
  if (!parsed.success) {
    return {
      errorMessage: Object.values(parsed.error.flatten().fieldErrors).join(
        ", ",
      ),
    };
  }

  // get organization id
  const organizationId = await auth.api.listOrganizations({
    headers: await headers(),
  });

  if (organizationId.length < 1) return { errorMessage: "no organizations" };

  const data = await prisma.client.create({
    data: {
      organizationId: organizationId[0].id,
      name: raw.name,
      email: raw.email,
      taxId: raw.taxId,
      phone: raw.phone,
    },
  });

  revalidatePath("/dashboard/clients");
  return { data };
};
