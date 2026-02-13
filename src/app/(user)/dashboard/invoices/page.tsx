import React from "react";
import { getInvoices } from "@/lib/db/db-utils";
import { NewspaperIcon, Plus } from "lucide-react";
import EmptySection from "@/components/dashboard/empty-section";
import {
  CustomDialogTrigger,
  DialogWrapper,
} from "@/components/dashboard/dialog-wrapper";
import NewInvoiceDialog from "@/components/dashboard/new-invoice-dialog";

const Page = async () => {
  const invoices = await getInvoices();
  return (
    <DialogWrapper DialogComponent={NewInvoiceDialog}>
      <section className="px-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <h2 className="font-bold">החשבוניות שלי</h2>
          {invoices.length > 0 && (
            <CustomDialogTrigger text="הוסף חשבונית חדשה" Icon={<Plus />} />
          )}
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
          {invoices.length > 0 ? (
            <h2></h2>
          ) : (
            <EmptySection
              title="עוד לא יצרת חשבוניות"
              description="יאללה, צריך להתחיל ליצור חשבוניות על מנת שהמערכת תעשה את מה
                ששילמת לה לעשות. קדימה אתה לא פראייר."
              buttonText="צור חשבונית חדשה"
              Icon={NewspaperIcon}
            />
          )}
        </div>
      </section>
    </DialogWrapper>
  );
};
export default Page;
