import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function PricingSection() {
    return (
        <section id='pricing' className="pt-32 pb-15">
            <div className="mx-auto max-w-7xl px-6 sm:px-10">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl"><span className="text-webmeka">Transparent Pricing</span> Tailored Solutions</h1>
                    <p>Choose a package that works for you, or contact us for a custom-build solution.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Starter Package</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">KES 55,000/-</span>
                            <CardDescription className="text-sm">Ideal for startups, small businesses or personal websites.</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-base">
                                {['1 - 5 Pages', 'Fully Responsive Design', 'Contact Form Integration', 'Basic SEO',  'Cloudflare Security Setup', 'Social Media Integration', '1 Month Maintenance & Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full rounded-full">
                                <Link href="#contact">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 bg-webmeka text-xs font-medium text-amber-950 ring-2 ring-webmeka ring-offset-2 ring-offset-card">Popular</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Business Package</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">KES 80,000/-</span>
                                <CardDescription className="text-sm">Optimized for established businesses looking to lead their industry</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {['Everything in Starter Package', '5 - 10 Pages', 'Blog Integration', 'CMS Integration', 'Google Analytics Integration', 'Standard SEO', 'Basic Logo & Business Card Design', '3 Month Mantainance & Support'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-10">
                                <Button
                                    asChild
                                    className="w-full border-webmeka border-2 bg-transparent text-neutral-300 rounded-full">
                                    <Link href="#contact">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">eCommerce Package</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">KES 120,000/-</span>
                            <CardDescription className="text-sm">Tailored for Corporations & businesses needing e-commerce</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Business Package', 'Full eCommerce System', 'Mobile & Card payment Intergration', 'CRM Intergration', 'Advanced SEO', '3 Month Mantainance', '1 Year Priority Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full rounded-full">
                                <Link href="#contact">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}