import HeroSectionOne from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ChooseUsSection from "@/components/why-choose-us";
import ContactUsSection from "@/components/contact-us-section";
import  WebmekaFAQs from "@/components/frequently-asked-questions";

export default function Home() {
  return (
    <main className="font-sans relative flex flex-col overflow-x-hidden items-center justify-items-center mx-auto">
      <div className="pt-20 lg:pt-15 w-full">
        <HeroSectionOne />
        <ServicesSection />
        <ChooseUsSection />
        <WebmekaFAQs />
        <ContactUsSection />
      </div>
    </main>
  );
}
