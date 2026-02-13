import React from "react";
import { getClients } from "@/lib/db/db-utils";
import { Plus, Users2 } from "lucide-react";
import EmptySection from "@/components/dashboard/empty-section";
import { ClientsList } from "@/components/dashboard/clients/clients-list";
import {
  CustomDialogTrigger,
  DialogWrapper,
} from "@/components/dashboard/dialog-wrapper";
import NewClientDialog from "@/components/dashboard/new-client-dialog";

const Page = async () => {
  const clients = await getClients();
  return (
    <DialogWrapper DialogComponent={NewClientDialog}>
      <section className="px-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <h2 className="font-bold">הלקוחות שלי</h2>
          {clients.length > 0 && (
            <CustomDialogTrigger text="הוסף לקוח חדש" Icon={<Plus />} />
          )}
        </div>

        {clients.length > 0 ? (
          <ClientsList clients={clients} />
        ) : (
          <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            <EmptySection
              title="עוד אין לך לקוחות"
              description="עדיין לא הוספת אף לקוח..."
              buttonText="צור לקוח חדש"
              Icon={Users2}
            />
          </div>
        )}
      </section>
    </DialogWrapper>
  );
};

export default Page;
