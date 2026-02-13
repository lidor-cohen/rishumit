import React from "react";
import { getInvoices } from "@/lib/db/db-utils";
import { NewspaperIcon } from "lucide-react";
import EmptySection from "@/components/dashboard/empty-section";

const Page = async () => {
  const invoices = await getInvoices();
  return (
    <section className="px-6 flex-1 flex flex-col">
      <h2 className="font-bold">החשבוניות שלי</h2>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {invoices.length > 0 ? (
          <h2></h2>
        ) : (
          <EmptySection
            name="invoices"
            title="עוד לא יצרת חשבוניות"
            description="יאללה, צריך להתחיל ליצור חשבוניות על מנת שהמערכת תעשה את מה
                ששילמת לה לעשות. קדימה אתה לא פראייר."
            buttonText="צור חשבונית חדשה"
            Icon={NewspaperIcon}
          />
        )}
      </div>
    </section>
  );
};
export default Page;
