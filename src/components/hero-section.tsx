import React from "react";
import HeroLottie from "@/components/hero-lottie";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="container mx-auto flex items-center gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-black">יצירת חשבוניות מזויפת ב-15 שניות</h1>
            <p className="text-muted-foreground max-w-lg">
              אי פעם קרה לכם שבאתם להוציא ללקוח חשבונית מזויפת בגלל שהוא דורש
              מכם חשבונית אבל אתם עובדים בשחור כי אתם רוצים את כל הכסף? מע״מ על
              הזין שלכם? מס הכנסה יכולים ללכת למצוץ? הגעתם למקום הנכון. תוכלו
              ליצור אינסוף חשבוניות מזויפות ב-15 שניות (אם אתם איטיים).
            </p>
          </div>
          <div className="flex gap-4">
            <Button>חשבונית חדשה</Button>
            <Button variant="outline">יצירת קשר</Button>
          </div>
        </div>
        <div className="flex-1">
          <HeroLottie />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
