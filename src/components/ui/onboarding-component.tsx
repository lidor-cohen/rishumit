"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { z } from "zod";
import parsePhoneNumber from "libphonenumber-js";
import { toast } from "sonner";
import { useSession } from "@/lib/auth/auth-client";
import { createOrganization } from "@/lib/auth/create-organization";
import { useRouter } from "next/navigation";

const FormDataValidation = z.object({
  organizationName: z
    .string()
    .min(3, { error: "שם העסק חייב להיות לפחות 3 אותיות" }),
  phoneNumber: z
    .string()
    .refine((val) => parsePhoneNumber(val, "IL")?.isValid(), {
      error: "מספר הטלפון אינו תקין",
    }),
  email: z.email({ error: "כתובת האימייל אינה תקינה" }),
  address: z.string().min(5, { error: "כתובת העסק קצרה מדי" }),
  logo: z.url("הקישור לתמונה חייב להיות תקין").optional(),
});

type FormDataProps = z.infer<typeof FormDataValidation>;

const INITIAL_FORM_DATA = {
  organizationName: "",
  phoneNumber: "",
  email: "",
  address: "",
  logo: "",
};

const OnboardingComponent = () => {
  const session = useSession();
  const user = session?.data?.user;
  const router = useRouter();

  const [formData, setFormData] =
    React.useState<FormDataProps>(INITIAL_FORM_DATA);

  const handleSubmit = async (evt: React.SubmitEvent) => {
    evt.preventDefault();

    const parsed = FormDataValidation.safeParse(formData);

    if (parsed.error) {
      toast.error(Object.values(parsed.error.flatten().fieldErrors).join(", "));
      return null;
    }

    if (!user) {
      toast.error("שגיאה: משתמש לא מחובר");
      return null;
    }

    const metadata = {
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
    };

    const result = await createOrganization({
      name: formData.organizationName,
      slug: crypto.randomUUID(),
      logo: formData.logo || "https://placehold.co/400x400.png",
      metadata,
      userId: user.id,
      keepCurrentActiveOrganization: false,
    });

    if (result.errorMessage) {
      toast.error(result.errorMessage);
      return null;
    }
    toast.success("העסק נוצר בהצלחה");
    router.push("/dashboard");
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-4 border-b-2 border-muted/50 pb-4">
        <Image
          src="/next.svg"
          alt="logo"
          width={100}
          height={75}
          className="pb-2 border-b-2 border-primary"
        />
        <div className="flex flex-col gap-2">
          <CardTitle>פרטי העסק</CardTitle>
          <CardDescription>
            על מנת שנוכל ליצור מסמכים מותאמים אישית עבורך - נצטרך את פרטי העסק
            שלך
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="organizationName">שם העסק *</FieldLabel>
              <Input
                id="organizationName"
                name="organizationName"
                placeholder="הקלד את שם העסק"
                className="placeholder:text-secondary-foreground/50"
                type="text"
                value={formData.organizationName}
                onChange={(e) =>
                  setFormData({ ...formData, organizationName: e.target.value })
                }
                required
              />
            </Field>
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="organizationPhone">מספר טלפון *</FieldLabel>
              <Input
                id="organizationPhone"
                name="organizationPhone"
                placeholder="הקלד את מספר הטלפון של העסק"
                className="placeholder:text-secondary-foreground/50"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </Field>
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="organizationEmail">אימייל *</FieldLabel>
              <Input
                id="organizationEmail"
                name="organizationEmail"
                placeholder="הקלד את כתובת האימייל של העסק"
                className="placeholder:text-secondary-foreground/50"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </Field>
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="organizationAddress">כתובת *</FieldLabel>
              <Input
                id="organizationAddress"
                name="organizationAddress"
                placeholder="הקלד את כתובת העסק"
                className="placeholder:text-secondary-foreground/50"
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
              />
            </Field>
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="organizationLogo">לוגו העסק</FieldLabel>
              <Input
                id="organizationLogo"
                name="organizationLogo"
                placeholder="הכנס את הקישור לתמונת העסק"
                className="placeholder:text-secondary-foreground/50"
                type="text"
                value={formData.logo}
                onChange={(e) =>
                  setFormData({ ...formData, logo: e.target.value })
                }
              />
            </Field>
          </FieldGroup>

          <Button type="submit" className="w-full">
            המשך <ArrowLeft />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default OnboardingComponent;
