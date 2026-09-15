import type { ProfessionalService, WebSite, WebPage } from "schema-dts"
 
export const webmekaOrganization: ProfessionalService = {
  "@type": "ProfessionalService",
  "@id": "https://webmeka.com/#organization",
  name: "WEBMEKA",
  alternateName: "WEBMEKA STUDIO",
  url: "https://webmeka.com/",
  description:
    "WEBMEKA is a strategy-driven creative design studio specializing in web design, web development, branding, digital marketing, and modern digital experiences.",
  email: "team@webmeka.com",
  telephone: "+254 727 756 658",
  logo: "https://webmeka.com/Logo.svg",
  sameAs: [
  "https://www.instagram.com/webmeka",
  "https://x.com/webmeka",
  "https://www.tiktok.com/@webmeka",
  "https://github.com/webmeka/",
  "https://www.facebook.com/share/17911CWaJV/",
],
}

export const webmekaWebsite: WebSite = {
  "@type": "WebSite",
  "@id": "https://webmeka.com/#website",
  name: "WEBMEKA",
  url: "https://webmeka.com/",
  description:
    "WEBMEKA is a strategy-driven creative design studio specializing in web design, web development, branding, digital marketing, and modern digital experiences.",
  publisher: {
    "@id": "https://webmeka.com/#organization",
  },
}

export const webmekaHomepage: WebPage = {
  "@type": "WebPage",
  "@id": "https://webmeka.com/#webpage",
  url: "https://webmeka.com/",
  name: "WEBMEKA | Creative Design Studio",
  description:
    "WEBMEKA is a strategy-driven creative design studio specializing in web design, web development, branding, digital marketing, and modern digital experiences.",
  isPartOf: {
    "@id": "https://webmeka.com/#website",
  },
  about: {
    "@id": "https://webmeka.com/#organization",
  },
}