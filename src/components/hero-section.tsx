import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../public/banner.png";

export default function HeroSectionOne() {
  return (
    <section id="WebmekaHero" aria-label="Webmeka hero section" className="relative mx-auto mt-30 md:mt-18 flex max-w-7xl flex-col items-center justify-center">

      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80 md:translate-x-[-9vw]">
        <div className="absolute top-0 h-40 w-px bg-linear-to-b from-transparent via-webmeka to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80 md:translate-x-[9vw]">
        <div className="absolute h-40 w-px bg-linear-to-b from-transparent via-webmeka to-transparent" />
      </div>
      <div className="px-4 pt-10 md:pt-20">
        <h1 className="relative z-10 mx-auto font-bold font-sans max-w-4xl text-neutral-200 text-center text-3xl xs:text-5xl  lg:text-7xl">
         {"A Creative Design Studio"
            .split(" ")
            .map((word, index) => (
              <span
                key={index}
                className="mr-2 inline-block"
              >
                {word}
              </span>
            ))}
        </h1>
        <p
        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-400"
        >
        Webmeka is a team of passionate creatives. We blend strategic thinking with stunning designs to bring <span className="font-semibold underline">your brand</span> to life.
        </p>
        <div
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
          href="/services"
          className="inline-flex items-center justify-center w-58 md:w-40 transform rounded-lg px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 bg-white text-black hover:bg-gray-200" aria-label="Explore Webmeka services button">
            Explore Now
          </Link>
          <Link
          href="/contact-us"
          className="inline-flex items-center justify-center w-50 transform rounded-lg border px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 border-gray-700 bg-black text-white hover:bg-gray-900" aria-label="Contact Webmeka team button">
            Contact Us
          </Link>
        </div>
        <div
          className="relative z-10 mt-20 rounded-3xl border p-3 shadow-md border-neutral-800 bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-700">
            <Image
              src={bannerImage}
              preload={true}
              className="aspect-32/9 h-auto md:h-40 w-full object-cover"
              alt="Webmeka hero section banner image - steer your brand growth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
