'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function WebmekaFAQs() {
    const faqItems = [
                {
            id: 'item-1',
            question: 'Do I get a say in the creative process?',
            answer: 'Absolutely. Collaboration is in our team\'s DNA. For every phase of the project, your ideas, preferences, and feedback shape the direction we take on. Whether you want to be closely involved in design decisions or give us full creative freedom, we adapt to your flow.',
        },
        {
            id: 'item-2',
            question: 'When can I expect my website to go live?',
            answer: 'Once you provide all necessary content and feedback, we launch your website within 4 weeks, depending on the complexity of the project and creative scope.',
        },
        {
            id: 'item-3',
            question: 'What is your payment process?',
            answer: 'All Webmeka invoices are processed through mobile payments. For standard projects, we require a 50% down payment to begin work. The remaining balance is due after your final website review.',
        },
        {
            id: 'item-4',
            question: 'Do I officially own my website and brand assets?',
            answer: 'Yes! After the final payment, ownership is fully yours. We use open technologies like Next.js, so you are never tied to any platform or dependency.',
        },
                {
            id: 'item-5',
            question: 'Do you use AI in your creative process?',
            answer: "Absolutely, AI helps us explore ideas faster, test designs, and refine content. It's a creative assistant. However, every decision and design choice is led by people, guided by purpose, and elevated by technology. That's who we are. Team Webmeka.",
        },
        {
            id: 'item-6',
            question: 'What next after my website launches?',
            answer: 'After your website goes live, we offer ongoing support and maintenance packages to ensure your site remains up-to-date and continues to meet your needs. We also provide basic training to help you manage your site effectively.',
        },
    ]

    return (
        <section id="faqs" className="pt-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance font-medium text-3xl md:text-4xl lg:text-5xl">Frequently <br /><span className='text-cyan-400'>Asked Questions</span></h2>
                    <p className="text-muted-foreground mt-4 text-balance">Get clear answers to the most common questions about our creative process and services.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 text-center px-8">
                        Can&#39;t find what you&#39;re looking for? Contact our{' '}
                        <Link
                            href="#contact"
                            className="text-cyan-400 font-medium hover:underline">
                             team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}