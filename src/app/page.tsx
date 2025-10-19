import HeroSectionOne from "@/components/hero-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="font-sans relative flex flex-col overflow-x-hidden items-center justify-items-center mx-auto">
      <div className="pt-20 w-full">
        <HeroSectionOne />
        <ServicesSection />
      </div>
    </main>
  );
}
