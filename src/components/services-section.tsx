import { WebmekaServices } from "@/data";
import Image from "next/image";
import { Button } from '@/components/ui/shiny-border';

const ServicesSection = ({ paused = true }: { paused?: boolean }) => {
  return (
    <section id="services" aria-label="Webmeka services section" className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-10">
        <h2 className="text-4xl text-center font-medium mb-10">Our <span className='text-webmeka'>Services</span></h2>
<div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
        {WebmekaServices.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 18000) + 18000}
            borderRadius="1.75rem"
            paused={paused}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white border-slate-800"
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