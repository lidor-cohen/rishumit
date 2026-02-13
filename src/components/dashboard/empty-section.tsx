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
import { DialogTrigger } from "@/components/ui/dialog";

const EmptySection = ({
  title,
  description,
  buttonText,
  Icon,
}: {
  title: string;
  description: string;
  buttonText: string;
  Icon: React.ElementType;
}) => (
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
);

export default EmptySection;
