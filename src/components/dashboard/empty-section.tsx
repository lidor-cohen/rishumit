import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import NewClientDialog from "@/components/dashboard/new-client-dialog";
import NewInvoiceDialog from "@/components/dashboard/new-invoice-dialog";
import NewProductDialog from "@/components/dashboard/new-product-dialog";

const EmptySection = ({
  name,
  title,
  description,
  buttonText,
  Icon,
}: {
  name: string;
  title: string;
  description: string;
  buttonText: string;
  Icon: React.ElementType;
}) => {
  return (
    <Dialog>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icon />
          </EmptyMedia>
          <EmptyTitle>{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <DialogTrigger asChild>
            <Button>{buttonText}</Button>
          </DialogTrigger>
        </EmptyContent>
      </Empty>

      {name === "clients" && <NewClientDialog />}
      {name === "invoices" && <NewInvoiceDialog />}
      {name === "products" && <NewProductDialog />}
    </Dialog>
  );
};
export default EmptySection;
