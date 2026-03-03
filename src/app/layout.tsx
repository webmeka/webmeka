import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import WebmekaNavbar from "@/components/navbar";
import ScrollToTop from "@/components/ui/scrollToTop";
import FooterSection from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webmeka.com/"),
  title: "WEBMEKA - Strategy Driven Creative Design Agency. Web Design, Web Development, Branding, Digital Marketing in Nairobi, Kenya.",
  keywords: [
    "web design agency",
    "digital creative agency",
    "web development company",
    "UI/UX design",
    "branding services",
    "digital strategy",
    "Nairobi based web design",
    "responsive web design",
    "e-commerce development",
    "SEO services",
    "software engineering",
    "digital marketing",
    "creative design agency",
    "design studio",
    "website mantainance services",
    "social media marketing",
    "social media management",
  ],
  description:
    "WEBMEKA is a strategy-driven creative design agency based in Nairobi, Kenya. The only team your brand needs! specializing in web design, UI/UX, branding, digital marketing, and modern web development. We help businesses grow through thoughtful design, clear strategy, and innovative digital experiences that engage audiences and drive results. Reach out to our team to get started on your next project and see how we can help you achieve your goals.",

  openGraph: {
    title: "WEBMEKA - Strategy Driven Creative Design Agency. Web Design, Web Development, Branding, Digital Marketing in Nairobi, Kenya.",
    description:
      "WEBMEKA is a strategy-driven digital creative agency in Kenya, specializing in web design, UI/UX, branding, digital marketing, and modern web development. We help businesses grow through thoughtful design, clear strategy, and innovative digital experiences that engage audiences and drive results.",
    url: "/",
    siteName: "WEBMEKA",
    images: [
      {
        url: "https://res.cloudinary.com/deudsgjbm/image/upload/v1770936542/webmeka_og_image_inxi5n.png",
        width: 1200,
        height: 630,
        alt: "WEBMEKA creative design agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@webmeka",
    title: "WEBMEKA - Strategy Driven Creative Design Agency. Web Design, Web Development, Branding, Digital Marketing in Nairobi, Kenya.",
    description:
      "Strategy + Design. Digital experiences that actually work.",
    images: [ { url: "https://res.cloudinary.com/deudsgjbm/image/upload/v1770936542/webmeka_og_image_inxi5n.png" }],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} antialiased font-fredoka bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <WebmekaNavbar />
            {children}
            <FooterSection />
            <ScrollToTop />
          </ThemeProvider>
      </body>
    </html>
  );
}
