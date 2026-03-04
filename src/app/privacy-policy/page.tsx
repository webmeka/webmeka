import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | WEBMEKA Creative Design Studio",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | WEBMEKA Creative Design Studio",
    description:
      "Our privacy policy explains how we handle your personal data.",
    url: "/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | WEBMEKA Creative Design Studio",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function WebmekaPolicy() {
  return (
    <PrivacyPolicy />
  );
}
