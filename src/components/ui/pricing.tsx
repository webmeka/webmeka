'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import GridBackground from "@/components/ui/grid-background"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface PricingProps {
    countryCode?: string;
}

export default function Pricing({ countryCode = 'KE' }: PricingProps) {
    const isKenya = countryCode === 'KE';

    const tiers = {
        starter: {
            title: "Starter System",
            price: isKenya ? "KES 55,000/-" : "$499",
            desc: "Bespoke digital foundations for startups, growing brands, or personal platforms.",
            features: ['1 - 5 Custom Pages', 'Fully Responsive UI/UX', 'Contact & Lead Integration', 'Core SEO Setup', 'Cloudflare Performance & Security', 'Social Media Integration', '1 Month Technical Support']
        },
        growth: {
            title: "Growth System",
            price: isKenya ? "KES 80,000/-" : "$749",
            desc: "Optimized for brands aiming to dominate their industry digital footprint.",
            features: ['Everything in Starter', '5 - 10 Core Pages', 'Dynamic Blog Architecture', 'Headless CMS Integration', 'Advanced Google Analytics & Tracking', 'Full-Scale SEO Engineering', '1 Month Dedicated Maintenance']
        },
        commerce: {
            title: "Commerce System",
            price: isKenya ? "KES 120,000/-" : "$1,199",
            desc: "High-performance digital storefronts scaled for seamless transactional growth.",
            features: ['Everything in Growth', 'Full eCommerce Infrastructure', 'Local & Global Payment Gateways', 'CRM & Inventory Pipeline Sync', 'Advanced Schema Optimization', '2 Months Priority Support']
        }
    };

    return (
        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">

            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="font-medium font-mono">{tiers.starter.title}</CardTitle>
                    <span className="my-3 block text-2xl font-mono font-semibold">{tiers.starter.price}</span>
                    <CardDescription className="text-sm">{tiers.starter.desc}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <hr className="border-dashed" />
                    <ul className="list-outside space-y-3 text-base">
                        {tiers.starter.features.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Check className="size-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter className="mt-auto font-mono">
                    <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-full hover:border-webmeka hover:border-2">
                        <Link href="/contact-us">Get Started</Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="relative flex flex-col justify-between h-full">
                <GridBackground />
                <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 bg-webmeka text-xs font-medium text-amber-950 ring-2 ring-webmeka ring-offset-2 ring-offset-card">Popular</span>

                <CardHeader>
                    <CardTitle className="font-medium font-mono">{tiers.growth.title}</CardTitle>
                    <span className="my-3 block text-2xl font-mono font-semibold">{tiers.growth.price}</span>
                    <CardDescription className="text-sm">{tiers.growth.desc}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 mt-5">
                    <ul className="list-outside space-y-3 text-sm">
                        {tiers.growth.features.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Check className="size-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter className="mt-10 font-mono">
                    <Button
                        asChild
                        className="w-full border-webmeka border-2 bg-transparent text-neutral-300 rounded-full hover:bg-transparent hover:scale-105">
                        <Link href="/contact-us">Get Started</Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="font-medium font-mono">{tiers.commerce.title}</CardTitle>
                    <span className="my-3 block text-2xl font-mono font-semibold">{tiers.commerce.price}</span>
                    <CardDescription className="text-sm">{tiers.commerce.desc}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <hr className="border-dashed" />
                    <ul className="list-outside space-y-3 text-sm">
                        {tiers.commerce.features.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Check className="size-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter className="mt-auto font-mono">
                    <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-full hover:border-webmeka hover:border-2">
                        <Link href="/contact-us">Get Started</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}