import HeroSectionOne from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ChooseUsSection from "@/components/why-us-section";
import ContactUsSection from "@/components/contact-us-section";
import  WebmekaFAQs from "@/components/faq-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="font-sans mt-5 relative flex flex-col overflow-x-hidden items-center justify-items-center mx-auto">
      <div className="w-full">
       <div className="relative w-full overflow-hidden">
        <BackgroundBeamsWithCollision className="absolute z-0">
          <></>
        </BackgroundBeamsWithCollision>
        <HeroSectionOne />
      </div>
        <ServicesSection />
        <ChooseUsSection />
        <WebmekaFAQs />
        <ContactUsSection />
      </div>
    </main>
  );
}
