"use client";

import { cn } from "@/lib/utils";
import {
  IconHeartHandshake,
  IconDevices2,
  IconMoodSmileBeam,
  IconRocket,
} from "@tabler/icons-react";

export function WhyChooseWebmeka() {
  const features = [
    {
      title: "Strategic Creativity",
      description:
        "We blend art and strategy to make your brand stand out. With purpose and clarity.",
      icon: <IconRocket />,
    },
      {
      title: "Cross-Platform Focus",
      description:
        "From desktop to mobile, our designs adapt beautifully to every screen.",
      icon: <IconDevices2 />,
    },
    {
      title: "Collaborative Approach",
      description:
        "We co-create with our clients, your ideas shape our creative process.",
      icon: <IconHeartHandshake />,
    },
    {
      title: "Attention to Detail",
      description:
        "Clean code, cohesive visuals, and thoughtful micro-interactions define our craft.",
      icon: <IconMoodSmileBeam />,
    },
  ];

  return (
    <section id="WhyWebmeka" className="relative z-10 pt-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-medium text-center pb-20">Why <span className='text-cyan-400'>Choose Us?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 2) && "lg:border-l dark:border-neutral-800",
        index < 2 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 2 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-slate-900 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-slate-900 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-cyan-400">{icon}</div>
      <div className="text-lg font-medium mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-cyan-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block font-medium text-xl text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};