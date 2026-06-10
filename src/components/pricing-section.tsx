import { headers } from 'next/headers'
import Pricing from '@/components/ui/pricing'

export default async function PricingSection() {
    const headerList = await headers();
    const rawCountry = headerList.get('cf-ipcountry');
    const countryCode = rawCountry === 'KE' ? 'KE' : 'US';

    return (
        <section id='pricing' aria-label="WebMeka pricing section" className="py-10 max-w-7xl mx-auto w-full px-5 md:px-10 lg:px-20">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                    <span className="text-webmeka">Transparent Pricing</span> Tailored Solutions
                </h1>
                <p className="text-neutral-400">Choose a layout that works for you, or contact us for a custom-build solution.</p>
            </div>
            <Pricing countryCode={countryCode} />
        </section>
    )
}