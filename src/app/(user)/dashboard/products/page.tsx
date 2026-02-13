import React from "react";
import { getProducts } from "@/lib/db/db-utils";
import { Plus, ShoppingCart } from "lucide-react";
import EmptySection from "@/components/dashboard/empty-section";
import {
  CustomDialogTrigger,
  DialogWrapper,
} from "@/components/dashboard/dialog-wrapper";
import NewProductDialog from "@/components/dashboard/new-product-dialog";

const Page = async () => {
  const products = await getProducts();
  return (
    <DialogWrapper DialogComponent={NewProductDialog}>
      <section className="px-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <h2 className="font-bold">המוצרים שלי</h2>
          {products.length > 0 && (
            <CustomDialogTrigger text="הוסף מוצר חדש" Icon={<Plus />} />
          )}
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
          {products.length > 0 ? (
            <h2></h2>
          ) : (
            <EmptySection
              title="עוד לא יצרת מוצר"
              description="על מנת להתחיל ליצור חשבונית חדשה אתה צריך להוסיף לפחות מוצר אחד"
              buttonText="צור מוצר חדש"
              Icon={ShoppingCart}
            />
          )}
        </div>
      </section>
    </DialogWrapper>
  );
};
export default Page;
