"use client";

import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const DialogWrapper = ({
  children,
  DialogComponent,
}: {
  children: React.ReactNode;
  DialogComponent: React.ElementType;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogComponent onSuccess={() => setOpen(false)} />
    </Dialog>
  );
};

export const CustomDialogTrigger = ({
  children,
  text,
  Icon,
}: {
  children?: React.ReactNode;
  text?: string;
  Icon?: React.ReactNode;
}) => (
  <DialogTrigger asChild>
    {children ?? (
      <Button>
        {Icon}
        {text || "הוסף"}
      </Button>
    )}
  </DialogTrigger>
);
