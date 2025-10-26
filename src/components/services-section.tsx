"use client";

import { WebmekaServices } from "@/data";
import Image from "next/image";
import React from 'react'
import { Button } from './ui/moving-border';

const ServicesSection = () => {
  return (
    <section id="services" className="w-full px-5 md:px-10 lg:px-20 pt-10">
        <h2 className="text-4xl text-center font-medium pt-25 mb-10">Our <span className='text-cyan-400'>Services</span></h2>
<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {WebmekaServices.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col items-center justify-center text-center lg:text-left lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
  <Image
    src={card.thumbnail}
    alt={card.thumbnail}
    width={128}
    height={128}
    className="lg:w-32 md:w-20 w-16"
  />
  <div className="lg:ms-5">
    <h1 className="text-2xl md:text-2xl font-medium text-center lg:text-left">
      {card.title}
    </h1>
    <p className="mt-3 text-center lg:text-left text-base text-white-100">
      {card.desc}
    </p>
  </div>
</div>
          </Button>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection