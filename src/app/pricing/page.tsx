import type { Metadata } from "next";
import PricingSection from "@/components/pricing-section";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Pricing | WEBMEKA Web Design & Creative Services",
  description:
    "View WEBMEKA pricing for web design, branding, UI UX and digital strategy services in Nairobi, Kenya. Transparent packages built for growth.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "WEBMEKA Pricing | Transparent Creative Packages",
    description:
      "Explore clear, strategy driven pricing for web design, branding and digital services tailored for ambitious brands.",
    url: "/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBMEKA Pricing",
    description:
      "Transparent pricing for web design and creative services.",
  },
};

export default function WebmekaPricing() {
  return (
    <div className="-mt-5 mb-20">
    <PricingSection />
    <BackButton/>
    </div>
  );
}
