import React from "react";
import { getProducts } from "@/lib/db/db-utils";
import { ShoppingCart } from "lucide-react";
import EmptySection from "@/components/dashboard/empty-section";

const Page = async () => {
  const products = await getProducts();
  return (
    <section className="px-6 flex-1 flex flex-col">
      <h2 className="font-bold">המוצרים שלי</h2>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {products.length > 0 ? (
          <h2></h2>
        ) : (
          <EmptySection
            name="products"
            title="עוד לא יצרת מוצר"
            description="על מנת להתחיל ליצור חשבונית חדשה אתה צריך להוסיף לפחות מוצר אחד"
            buttonText="צור מוצר חדש"
            Icon={ShoppingCart}
          />
        )}
      </div>
    </section>
  );
};
export default Page;
