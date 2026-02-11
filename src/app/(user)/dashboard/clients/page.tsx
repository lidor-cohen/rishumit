import React from "react";
import { getClients } from "@/lib/db/db-utils";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Users2 } from "lucide-react";

const Page = async () => {
  const clients = await getClients();
  return (
    <section className="px-6 flex-1 flex flex-col">
      <h2 className="font-bold">הלקוחות שלי</h2>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {clients.length > 0 ? (
          <h2></h2>
        ) : (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Users2 />
              </EmptyMedia>
              <EmptyTitle>עוד אין לך לקוחות</EmptyTitle>
              <EmptyDescription>
                עדיין לא הוספת אף לקוח! הוסף עכשיו לקוחות לעסק שלך על מנת להתחיל
                ליצור מסמכים.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
              <Button>צור לקוח חדש</Button>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </section>
  );
};
export default Page;
