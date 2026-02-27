'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BadgePlus, Badge, ChartPie, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'
import logo1 from '../../public/logo/1.webp'
import logo2 from '../../public/logo/2.webp'
import logo3 from '../../public/logo/3.webp'
import logo4 from '../../public/logo/4.webp'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: logo1,
            alt: 'Webmeka logo variation 1',
        },
        'item-2': {
            image: logo2,
            alt: 'Webmeka logo variation 2',
        },
        'item-3': {
            image: logo3,
            alt: 'Webmeka logo variation 3',
        },
        'item-4': {
            image: logo4,
            alt: 'Webmeka official Logo. white and on dark background',
        },
    }

    return (
        <div className="py-12 md:py-20 lg:py-32">
            <div className="absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl block to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 [--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <h2 className="text-2xl font-semibold text-neutral-100">
                      <span className="text-webmeka">W</span>hy 
                      <span className="text-webmeka"> W</span>e
                      <span className="text-webmeka"> W</span>eave
                </h2>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Badge className="size-4" />
                                    The myth of Enough!
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>In the digital world, roles are often split. A FRONTEND DESIGNER handles the visuals. A BACKEND DEVELOPER handles the code. Master both and you become a FULL-STACK DEVELOPER.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartPie className="size-4" />
                                    NOT Enough!
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>But, we realized that even &quot;FULL-STACK&quot; isn&apos;t enough to move the needle in today&apos;s market. To truly grow a brand, you need more than just a functioning website; you need the full spectrum of design, code, SEO, marketing, and growth strategy.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <BadgePlus className="size-4" />
                                    Enter the webmeka
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>When development meets creative design and strategic growth, a new kind of creator emerges: the WEBMEKA. Weaving brands with the same passion spiders weave their web!</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <BadgeCheck className="size-4" />
                                    Webmeka studio
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>We are a Team of such creatives. We partner with ambitious brands to create digital experiences that drive real business results.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                        preload={true}
                                        placeholder="blur"
                                        loading="eager"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent to-transparent via-white/50"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
