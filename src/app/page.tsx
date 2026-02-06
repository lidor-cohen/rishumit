import HeroSection from "@/components/hero-section";
import CardsSection from "@/components/cards-section";
import NumbersSection from "@/components/numbers-section";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HeroSection />
      <CardsSection />
      <NumbersSection />
    </div>
  );
}
