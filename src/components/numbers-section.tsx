import React from "react";

const numbers: { percent: number; text: string }[] = [
  {
    percent: 99,
    text: "המערכת באוויר, עובדת וזמינה לשימוש. בלי תחזוקה ובלי תקלות",
  },
  {
    percent: 80,
    text: "חסכון בזמן התפעול בזכות הפיצ'רים המגוונים ונוחות המערכת",
  },
  {
    percent: 100,
    text: "ביטחון מפני פספוסים - לא משלמים אף מס מיותר",
  },
  {
    percent: 30,
    text: 'שיפור בגבייה בפועל, באשראי או מס"ב, בדפי תשלום או הוראות קבע',
  },
];

const NumberCard = ({ percent, text }: { percent: number; text: string }) => {
  return (
    <div className="p-6 bg-card text-card-foreground text-center rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2">
      <h3 className="text-4xl font-bold">{percent}%</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

const NumbersSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-24">
      <div className="container mx-auto flex md:flex-row flex-col gap-8 bg-primary text-primary-foreground rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col justify-center gap-4 flex-1">
          <h2 className="font-bold">קצת מספרים</h2>
          <p>
            עם תוצאות אי אפשר להתווכח. אנחנו מזמינים אותך להתנסות במערכת הניהול
            המקיפה בארץ, עם כלים חכמים לניהול הוצאות, הכנסות, סליקה ועוד פיצרים
            שיחסכו לך זמן וכסף וישאירו לך זמן להתעסק במה שחשוב באמת, קידום העסק
            שלך.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
          {numbers.map((number, index) => (
            <NumberCard key={index} {...number} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default NumbersSection;
