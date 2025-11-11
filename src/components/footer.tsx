import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from "@/components/ui/socials"

const links = [
    {
        title: 'Services',
        href: '#services',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
    {
        title: 'FAQs',
        href: '#faqs',
    },
    {
        title: 'About',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="pb-16 md:py-28">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Image
                    src="/Logo.svg"
                    alt="Webmeka Logo"
                    width={80}
                    height={80}
                    priority
                    />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="mb-8"><SocialLinks /></div>
                <span className="text-muted-foreground block text-center text-sm mb-4"> Crafted with 🩵 by team Webmeka</span>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} WEBMEKA - All rights reserved.</span>
            </div>
        </footer>
    )
}
