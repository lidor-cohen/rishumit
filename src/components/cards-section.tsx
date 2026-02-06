import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "עצמאים",
    description:
      "כרגע מספיק לך להוציא חשבוניות דיגיטליות? מקסימום סליקה? אנחנו פה גם בשביל זה. וכשהעסק שלך יגדל… הכל כבר מוכן כדי לגדול איתך",
    image: "/images/independent.svg",
  },
  {
    title: "עסקים קטנים ובינוניים",
    description:
      "את החזון של העסק, אנחנו משאירים לך. כל השאר עלינו. המערכת שלנו כוללת את כל מה שצריך: חשבונות, תשלומים, גבייה, מעקב, דוחות. הכל כולל הכל.",
    image: "/images/businesses.svg",
  },
  {
    title: "עמותות",
    description:
      'לכם יש מטרה ברורה. גם לנו. אנחנו פה כדי שאתם תוכלו להמשיך ולקיים את העבודה החשובה שלכם. המערכת שלנו כוללת ניהול הוראות קבע באשראי ומס"ב, דפי תרומה וכל מה שתצטרכו כדי לנהל עמותה.',
    image: "/images/nonprofits.svg",
  },
];

const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="ring-1 ring-primary bg-card text-card-foreground flex items-center gap-6 p-6 rounded-3xl shadow-lg">
      <div className="flex flex-col gap-2 flex-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex-1">
        <Image src={image} alt={title} width={200} height={200} />
      </div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};
export default CardsSection;
