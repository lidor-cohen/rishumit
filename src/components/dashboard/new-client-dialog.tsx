"use client";

import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { checkIsraeliId } from "@/lib/utils";
import { isValidPhoneNumber } from "libphonenumber-js";
import { toast } from "sonner";
import { createClient } from "@/lib/db/clients";

const FormDataValidator = z.object({
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

type FormDataProps = z.infer<typeof FormDataValidator>;

const INITIAL_FORM_DATA = {
  name: "",
  taxId: "",
  email: "",
  phone: "",
};

const NewClientDialog = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [formData, setFormData] =
    React.useState<FormDataProps>(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (evt: React.SubmitEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    const parsed = FormDataValidator.safeParse(formData);
    if (parsed.error) {
      toast.error(Object.values(parsed.error.flatten().fieldErrors).join(", "));
      setIsLoading(false);
      return null;
    }

    const data = await createClient(formData);
    if (data.errorMessage) {
      toast.error(data.errorMessage);
      setIsLoading(false);
      return null;
    }

    toast.success("לקוח נוצר בהצלחה");
    setIsLoading(false);
    setFormData(INITIAL_FORM_DATA);
    onSuccess?.();
  };

  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>צור לקוח</DialogTitle>
        <DialogDescription>
          כאן תיצור לקוח חדש, אנא וודא שאתה ממלא את הפרטים הנכונים.
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <FieldGroup className="gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="name-1">שם הלקוח</FieldLabel>
              <Input
                id="name-1"
                name="name"
                placeholder="הקלד את שם הלקוח"
                className="placeholder:text-muted-foreground/50"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="taxid-1">ת״ז / ח.פ.</FieldLabel>
              <Input
                id="taxid-1"
                name="taxid"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="תעודת הזהות או מספר העוסק"
                className="placeholder:text-muted-foreground/50"
                value={formData.taxId}
                onChange={(e) =>
                  setFormData({ ...formData, taxId: e.target.value })
                }
                required
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="email-1">מייל</FieldLabel>
            <Input
              id="email-1"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="placeholder:text-muted-foreground/50"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone-1">טלפון</FieldLabel>
            <Input
              id="phone-1"
              name="phone"
              placeholder="054-1234567"
              type="tel"
              className="placeholder:text-muted-foreground/50"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </Field>
        </FieldGroup>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button disabled={isLoading} variant="outline">
              בטל
            </Button>
          </DialogClose>
          <Button disabled={isLoading} type="submit">
            שמור לקוח
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
export default NewClientDialog;
