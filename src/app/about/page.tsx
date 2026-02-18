"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TrueFocus from "@/components/ui/trueFocus";
import Features from "@/components/features-12";
import BackButton from "@/components/ui/back-button";

export default function AboutPage() {
  return (
    <section className="relative mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center px-5">
<TrueFocus 
sentence="Team webmeka"
manualMode={false}
blurAmount={5}
borderColor="#00FFFF"
animationDuration={0.8}
pauseBetweenAnimations={1}
/>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-10 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400"
      >
        Team Webmeka was born from a simple observation, brands struggle not because
        they lack ideas, but because they lack clarity and creative
        direction.
      </motion.p>

      <Features />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="max-w-2xl text-center"
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

      <BackButton />
    </section>
  );
}