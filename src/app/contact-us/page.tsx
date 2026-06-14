import type { Metadata } from "next";
import ContactForm from "@/components/ui/contact/contact-form"
import ContactMap from "@/components/ui/contact/contact-map"
import { Mail, MessageCircle, Phone } from "lucide-react"


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

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white ">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        
        {/* Left */}
        <div className="flex flex-col justify-between">
          <div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let’s build
              <span className="block text-white/80">something bold.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Have a website idea, redesign project, brand concept, or digital
              product in mind? Reach out and let&apos;s steer your brand growth.
            </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            <a
              href="mailto:team@webmeka.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-sky-300" />
              team@webmeka.com
            </a>

            <a
              href="https://wa.me/254727756658"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-emerald-300" />
              +254 727 756 658
            </a>

            <a
              href="tel:+254792823034"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-webmeka" />
              +254 792 823 034
            </a>
          </div>
          </div>

          <div className="mt-14 lg:mt-0">
            <ContactMap />
          </div>
        </div>

        {/* Right */}
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}