import type { Metadata } from "next";
import  WebmekaFAQs from "@/components/faq-section";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "FAQs | WEBMEKA Creative Design Studio",
  description:
    "Find answers to common questions about WEBMEKA services, process, pricing, timelines and support.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "WEBMEKA FAQs | Your Questions Answered",
    description:
      "Clear answers about our web design, branding and digital services, including pricing, workflow and support.",
    url: "/faqs",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBMEKA FAQs",
    description:
      "Everything you need to know about working with WEBMEKA.",
  },
};

export default function WebmekaFAQS() {
  return (
    <div className="mb-20">
    <WebmekaFAQs />
    <BackButton/>
    </div>
  );
}
