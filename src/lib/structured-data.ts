import type { ProfessionalService, WebSite, WebPage, OfferCatalog } from "schema-dts"
 
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
  hasOfferCatalog: {
  "@id": "https://webmeka.com/#services",
  },
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
  mainEntity: {
    "@id": "https://webmeka.com/#organization",
 },
  about: {
    "@id": "https://webmeka.com/#organization",
  },
}

export const webmekaServices: OfferCatalog = {
  "@type": "OfferCatalog",
  "@id": "https://webmeka.com/#services",
  name: "WEBMEKA Services",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Design & Development",
        description:
          "Building responsive, high-performance websites with modern frameworks and designs.",
        provider: {
          "@id": "https://webmeka.com/#organization",
        },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Branding & Visual Identity",
        description:
          "Defining bold brand systems that unify visuals and UX across every digital touchpoint.",
        provider: {
          "@id": "https://webmeka.com/#organization",
        },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Creative Strategy & Content",
        description:
          "Designing digital campaigns, motion graphics, and branded content that amplify your brand.",
        provider: {
          "@id": "https://webmeka.com/#organization",
        },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "SEO & Web Performance",
        description:
          "Optimizing for visibility, speed, and engagement through technical and content-focused SEO.",
        provider: {
          "@id": "https://webmeka.com/#organization",
        },
      },
    },
  ],
}