import type { Metadata } from "next";
import ServicesSection from "@/components/services-section";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Web Design & Digital Services | WEBMEKA Creative Studio",
  description:
    "Explore WEBMEKA services including web design, web development, branding, UI UX design and digital strategy in Nairobi, Kenya.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "WEBMEKA Services | Web Design, Branding & Digital Strategy",
    description:
      "Discover strategy driven creative services from WEBMEKA, built to elevate brands and grow digital presence.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBMEKA Services",
    description:
      "Web design, branding, UI UX and digital strategy from WEBMEKA Studio.",
  },
};

export default function WebmekaServices() {
  return (
    <div className="mb-20">
    <ServicesSection paused={false} />
    <BackButton/>
    </div>
  );
}
