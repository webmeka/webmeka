import type { Metadata } from "next";
import TermsOfService from "@/components/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service | WEBMEKA Creative Design Studio",
  description:
    "Read the terms and conditions governing the use of WEBMEKA's services and website.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | WEBMEKA Creative Design Studio",
    description:
      "The terms and conditions that govern the use of WEBMEKA's services and website.",
    url: "/terms-of-service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | WEBMEKA Creative Design Studio",
    description:
      "Read the terms and conditions governing the use of WEBMEKA's services and website.",
  },
};

export default function WebmekaTerms() {
  return (
    <TermsOfService />
  );
}
