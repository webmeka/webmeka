import JsonLd from "@/components/SEO/json-ld";
import {
  webmekaOrganization,
  webmekaWebsite,
  webmekaHomepage,
} from "@/lib/structured-data";
import type { Metadata } from "next";
import HeroSectionOne from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ChooseUsSection from "@/components/why-us-section";
import ContactUsSection from "@/components/contact-us-section";
import  WebmekaFAQs from "@/components/faq-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/beams";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webmekaOrganization,
          webmekaWebsite,
          webmekaHomepage,
        ]}
      />
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
        <WebmekaFAQs />
        <ContactUsSection />
      </div>
    </main>
    </>
  );
}
