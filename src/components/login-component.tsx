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
import { useRouter } from "next/navigation";
import { loginWithEmail } from "@/lib/auth/login";
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

const LoginComponent = () => {
  const [formData, setFormData] =
    React.useState<FormDataProps>(INITAL_FORM_DATA);

  const router = useRouter();

  const handleSubmit = async (evt: React.SubmitEvent) => {
    evt.preventDefault();
    const { data, errorMessage } = await loginWithEmail(formData);

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
        <CardTitle>התחברות</CardTitle>
        <CardDescription>
          הזן את הפרטים על מנת להתחבר למשתמש שלך
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              className="placeholder:text-secondary-foreground"
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

          <Button type="submit">התחבר</Button>
          <p className="text-sm text-center">
            אין לכם משתמש?
            <Link className="font-semibold" href="/auth/sign-up">
              {" "}
              להרשמה
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
export default LoginComponent;
