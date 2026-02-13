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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { z } from "zod";

const FormDataValidator = z.object({
  productName: z.string().min(3),
  productPrice: z.number().min(1000000),
});

type FormDataProps = z.infer<typeof FormDataValidator>;
const INITIAL_FORM_DATA = {
  productName: "",
  productPrice: 0,
};

const NewProductDialog = () => {
  const [formData, setFormData] =
    React.useState<FormDataProps>(INITIAL_FORM_DATA);
  const handleSubmit = (evt: React.SubmitEvent) => {
    evt.preventDefault();
  };

  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>צור מוצר חדש</DialogTitle>
        <DialogDescription>
          צור מוצר חדש שתוכל להתחיל לחייב עליו בחשבוניות.
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FieldGroup className="gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="product-name-1">שם המוצר</FieldLabel>
              <Input
                id="product-name-1"
                name="product-name"
                placeholder="הקלד את שם המוצר"
                className="placeholder:text-muted-foreground/50"
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="product-price-1">מחיר</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="product-price-1"
                  name="product-price"
                  placeholder="הקלד את מחיר המוצר"
                  type="text"
                  inputMode="numeric"
                  className="placeholder:text-muted-foreground/50"
                  value={
                    formData.productPrice
                      ? new Intl.NumberFormat("en-US").format(
                          formData.productPrice,
                        )
                      : ""
                  }
                  onChange={(e) => {
                    const raw = e.target.value.replace(/,/g, "");
                    const num = Number(raw);
                    if (!isNaN(num)) {
                      setFormData({ ...formData, productPrice: num });
                    }
                  }}
                />

                <InputGroupAddon align="inline-end">
                  <InputGroupText>₪</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
        </FieldGroup>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline">בטל</Button>
          </DialogClose>
          <Button type="submit">שמור מוצר</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
export default NewProductDialog;
