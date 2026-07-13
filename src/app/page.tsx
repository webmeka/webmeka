import HeroSectionOne from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ChooseUsSection from "@/components/why-us-section";
// import PricingSection from "@/components/pricing-section";
import ContactUsSection from "@/components/contact-us-section";
import  WebmekaFAQs from "@/components/faq-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/beams";

export default function Home() {
  return (
    <main className="mt-5 relative flex flex-col overflow-x-hidden items-center justify-items-center mx-auto">
      <div className="w-full">
       <div className="relative w-full overflow-hidden flex justify-center">
        <BackgroundBeamsWithCollision className="absolute md:w-[68%] 2xl:w-[48%]  z-0">
          <></>
        </BackgroundBeamsWithCollision>
        <HeroSectionOne />
      </div>
        <ServicesSection />
        <ChooseUsSection />
        {/* <PricingSection /> */}
        <WebmekaFAQs />
        <ContactUsSection />
      </div>
    </main>
  );
}
