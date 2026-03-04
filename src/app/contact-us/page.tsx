import type { Metadata } from "next";
import ContactUsSection from "@/components/contact-us-section";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Contact WEBMEKA | Get in Touch with Our Creative Studio",
  description:
    "Reach out to WEBMEKA, a Nairobi based creative design studio. Contact us for web design, branding, UI UX, and digital strategy services.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact WEBMEKA | Creative Design Studio in Nairobi",
    description:
      "Connect with WEBMEKA for inquiries about web design, branding, UI UX, and digital services.",
    url: "/contact-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WEBMEKA",
    description:
      "Get in touch with WEBMEKA Studio for web design, branding, and digital strategy services.",
  },
};

export default function WebmekaContact() {
  return (
    <div className="mb-20">
    <ContactUsSection />
    <BackButton/>
    </div>
  );
}
