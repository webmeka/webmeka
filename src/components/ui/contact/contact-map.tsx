"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[2rem] border border-white/5 sm:h-[320px]">
      
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          absolute 
          left-[62%] top-[18%] md:top-[5%]   /* desktop */
          z-20 -translate-x-1/2 
          rounded-full border border-white/10 
          bg-white/10 px-4 py-2 text-sm text-white/80 
          backdrop-blur-md
        "
      >
        We are here
      </motion.div>

      {/* Beam */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 130, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 4,
        }}
        className="
          absolute 
          left-[62%] top-[28%] md:top-[18%]
          z-10 w-[2px] -translate-x-1/2 
          bg-gradient-to-b from-webmeka to-transparent 
          shadow-[0_0_20px_rgba(59,130,246,0.7)]
        "
      />

      {/* Glow base */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.55, 0.9, 0.55],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute 
          left-[62%] top-[74%] md:top-[68%]
          z-10 h-10 w-10 -translate-x-1/2 
          rounded-full bg-webmeka/40 blur-xl
        "
      />

      {/* Pin center */}
      <div
        className="
          absolute 
          left-[62%] top-[74%] md:top-[68%]
          z-20 h-2 w-2 -translate-x-1/2 
          rounded-full bg-webmeka 
          shadow-[0_0_30px_rgba(59,130,246,0.9)]
        "
      />

      {/* Map */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-50">
        <img
          src="/world.svg"
          alt="World map"
          className="
            pointer-events-none w-full max-w-4xl 
            scale-[1.15] md:scale-[1.2] 
            object-contain opacity-50 
            [transform:perspective(1000px)_rotateX(35deg)]
            md:[transform:perspective(1000px)_rotateX(22deg)]
          "
        />
      </div>

      {/* Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  )
}