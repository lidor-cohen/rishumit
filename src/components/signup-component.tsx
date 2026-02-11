"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { signUpWithEmail } from "@/lib/auth/sign-up";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface FormDataProps {
  name: string;
  email: string;
  password: string;
}

const INITAL_FORM_DATA: FormDataProps = {
  name: "",
  email: "",
  password: "",
};

const SignUpComponent = () => {
  const [formData, setFormData] =
    React.useState<FormDataProps>(INITAL_FORM_DATA);

  const router = useRouter();

  const handleSubmit = async (evt: React.SubmitEvent) => {
    evt.preventDefault();
    const { data, errorMessage } = await signUpWithEmail(formData);

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      setFormData(INITAL_FORM_DATA);
      router.push("/dashboard");
    }
  };

  return (
    <Card className="rounded-2xl shadow-lg bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>הרשמה</CardTitle>
        <CardDescription>הזן את הפרטים על מנת להירשם למערכת</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field className="flex flex-col gap-2">
            <FieldLabel htmlFor="name">שם מלא *</FieldLabel>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="הקלד את השם המלא שלך"
              className="placeholder:text-secondary-foreground/50"
              required
            />
          </Field>

          <Field className="flex flex-col gap-2">
            <FieldLabel htmlFor="email">אימייל *</FieldLabel>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="example@gmail.com"
              className="placeholder:text-secondary-foreground/50"
              required
            />
          </Field>

          <Field className="flex flex-col gap-2">
            <FieldLabel htmlFor="password">סיסמא *</FieldLabel>
            <Input
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              required
            />
          </Field>

          <Button type="submit">הרשמה</Button>
          <p className="text-sm text-center">
            יש לכם כבר משתמש?
            <Link className="font-semibold" href="/auth/sign-up">
              {" "}
              להתחברות
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
export default SignUpComponent;
