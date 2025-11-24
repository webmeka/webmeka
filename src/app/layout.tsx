import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import WebmekaNavbar from "@/components/navbar";
import FooterSection from "@/components/footer";
import Script from "next/script";
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
  title: "WEBMEKA",
  description: "A Digital Creative Agency based in Nairobi, Kenya.",
    icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} antialiased font-fredoka`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <WebmekaNavbar />
            {children}
            <FooterSection />
          </ThemeProvider>
          <Script id="metricool-script">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
              c.type="text/javascript",
              c.src="https://tracker.metricool.com/resources/be.js",
              c.onreadystatechange=a,
              c.onload=a,
              b.appendChild(c)
            }
            loadScript(function(){
              beTracker.t({hash:"1976a7f0b59995eee9497f67b7d5fa19"})
            });
          `}
        </Script>
      </body>
    </html>
  );
}
