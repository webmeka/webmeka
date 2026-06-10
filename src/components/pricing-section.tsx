import Link from 'next/link'
import { Button } from '@/components/ui/button'
import GridBackground from "@/components/ui/grid-background"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function PricingSection() {
    return (
        <section id='pricing' aria-label="Webmeka pricing section" className="py-10 max-w-7xl mx-auto w-full px-5 md:px-10 lg:px-20">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl"><span className="text-webmeka">Transparent Pricing</span> Tailored Solutions</h1>
                    <p>Choose a package that works for you, or contact us for a custom-build solution.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium font-mono">Starter System</CardTitle>
                            <span className="my-3 block text-2xl font-mono font-semibold">KES 55,000/-</span>
                            <CardDescription className="text-sm">Bespoke digital foundations for startups, growing brands, or personal platforms.</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-base">
                                {['1 - 5 Custom Pages', 'Fully Responsive UI/UX', 'Contact & Lead Integration', 'Core SEO Setup',  'Cloudflare Performance & Security', 'Social Media Integration', '1 Month Technical Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
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
                                <Link href="#contact">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative flex flex-col justify-between h-full">
                        <GridBackground />
                        <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 bg-webmeka text-xs font-medium text-amber-950 ring-2 ring-webmeka ring-offset-2 ring-offset-card">Popular</span>

                            <CardHeader>
                                <CardTitle className="font-medium font-mono">Growth System</CardTitle>
                                <span className="my-3 block text-2xl font-mono font-semibold">KES 80,000/-</span>
                                <CardDescription className="text-sm">Optimized for brands aiming to dominate their industry digital footprint.</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4 mt-5">
                                <ul className="list-outside space-y-3 text-sm">
                                    {['Everything in Starter', '5 - 10 Core Pages', 'Dynamic Blog Architecture', 'Headless CMS Integration', 'Advanced Google Analytics & Tracking', 'Full-Scale SEO Engineering', '1 Month Dedicated Maintenance'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
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
                                    <Link href="#contact">Get Started</Link>
                                </Button>
                            </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium font-mono">Commerce System</CardTitle>
                            <span className="my-3 block text-2xl font-mono font-semibold">KES 120,000/-</span>
                            <CardDescription className="text-sm">High-performance digital storefronts scaled for seamless transactional growth.</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Growth', 'Full eCommerce Infrastructure', 'Local & Global Payment Gateways', 'CRM & Inventory Pipeline Sync', 'Advanced Schema Optimization', '2 Months Priority Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
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
                                <Link href="#contact">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
        </section>
    )
}
