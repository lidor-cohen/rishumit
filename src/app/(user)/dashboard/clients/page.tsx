import React from "react";
import { getClients } from "@/lib/db/db-utils";
import { Users2 } from "lucide-react";
import EmptySection from "@/components/dashboard/empty-section";

const Page = async () => {
  const clients = await getClients();
  return (
    <section className="px-6 flex-1 flex flex-col">
      <h2 className="font-bold">הלקוחות שלי</h2>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {clients.length > 0 ? (
          <h2></h2>
        ) : (
          <EmptySection
            name="clients"
            title="עוד אין לך לקוחות"
            description="עדיין לא הוספת אף לקוח! הוסף עכשיו לקוחות לעסק שלך על מנת להתחיל
                ליצור מסמכים."
            buttonText="צור לקוח חדש"
            Icon={Users2}
          />
        )}
      </div>
    </section>
  );
};
export default Page;
