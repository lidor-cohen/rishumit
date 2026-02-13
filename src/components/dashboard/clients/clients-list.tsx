import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Client {
  id: string;
  organizationId: string;
  name: string;
  phone: string;
  email: string | null;
  taxId: string | null;
  city: string | null;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const ClientCard = ({
  name,
  phone,
}: {
  name: string | undefined;
  phone: string | undefined;
}) => {
  return (
    <div className="p-6 w-full flex items-center justify-between gap-4 bg-card text-card-foreground rounded-xl shadow-lg">
      <div className="flex flex-col">
        <h4 className="font-bold">{name}</h4>
        <p>{phone}</p>
      </div>

      <Button>
        <ExternalLink />
      </Button>
    </div>
  );
};

export const ClientsList = ({ clients }: { clients: Partial<Client>[] }) => {
  return (
    <div className="flex flex-col w-full mt-8 gap-8">
      {clients
        .filter((client) => client.name && client.phone)
        .map((client) => (
          <ClientCard key={client.id} name={client.name} phone={client.phone} />
        ))}
    </div>
  );
};
