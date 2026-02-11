import React from "react";
import { getClients } from "@/lib/db/db-utils";

const Page = async () => {
  const clients = await getClients();
  return (
    <section className="px-6">
      <h2 className="font-bold">הלקוחות שלי</h2>
    </section>
  );
};
export default Page;
