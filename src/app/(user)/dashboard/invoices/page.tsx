import React from "react";
import { getInvoices } from "@/lib/db/db-utils";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { NewspaperIcon } from "lucide-react";

const Page = async () => {
  const clients = await getInvoices();
  return (
    <section className="px-6 flex-1 flex flex-col">
      <h2 className="font-bold">החשבוניות שלי</h2>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {clients.length > 0 ? (
          <h2></h2>
        ) : (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <NewspaperIcon />
              </EmptyMedia>
              <EmptyTitle>עוד לא יצרת חשבוניות</EmptyTitle>
              <EmptyDescription>
                יאללה, צריך להתחיל ליצור חשבוניות על מנת שהמערכת תעשה את מה
                ששילמת לה לעשות. קדימה אתה לא פראייר.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
              <Button>צור חשבונית חדשה</Button>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </section>
  );
};
export default Page;
