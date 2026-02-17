"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TrueFocus from "@/components/ui/trueFocus";

export default function AboutPage() {
  return (
    <section className="relative mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center px-5">
<TrueFocus 
sentence="Team webmeka"
manualMode={false}
blurAmount={5}
borderColor="#00FFFF"
animationDuration={0.5}
pauseBetweenAnimations={1}
/>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-6 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400"
      >
        Team Webmeka was born from a simple observation, brands struggle not because
        they lack ideas, but because they lack clarity and creative
        direction.
      </motion.p>


<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="mt-12 space-y-6 text-neutral-700 dark:text-neutral-300"
>
  <h1 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-100 md:text-6xl">
    About Webmeka
  </h1>

<div className="text-neutral-700 dark:text-neutral-300">
  
  <Image
    src="/Logo.svg"
    alt="Webmeka logo"
    width={250}
    height={250}
    className="
      float-none 
      mx-auto mb-6
      md:float-left 
      md:mr-6 
      md:mb-2
    "
  />

  <p>
    In the digital world, roles are often split. A FRONTEND DESIGNER handles
    the visuals. A BACKEND DEVELOPER handles the code. If you master both,
    you become a FULL-STACK DEVELOPER.
  </p>

  <p className="mt-4">
    But at Webmeka, we realized that even "FULL-STACK" isn't enough to move
    the needle in today's market. To truly grow a brand, you need more than
    just a functioning site; you need a cocktail of design, code, SEO, and
    growth strategy.
  </p>

  <p className="mt-4">
    When a Full-Stack developer applies the skills needed to run and scale a
    brand online, they become a WEBMEKA.
  </p>

</div>

</motion.div>

            <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="mt-16 max-w-2xl text-center"
      >
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Webmeka Studio
        </h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          We are a Team of passionate creatives. We blend strategic thinking with stunning designs to bring your brand to life.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative mt-16 w-full rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
          <Image
            src="/webmeka-eq.webp"
            alt="Webmeka visual"
            className="aspect-[16/9] w-full object-cover"
            width={1200}
            height={800}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="mt-16 max-w-2xl text-center"
      >
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Our Philosophy
        </h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Good design is not decoration. Good design is communication. It
          reduces friction, builds trust, guides attention, and tells a story
          without shouting.
        </p>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Strategy gives direction. Design gives form. Together, they create
          experiences people remember.
        </p>
      </motion.div>
    </section>
  );
}