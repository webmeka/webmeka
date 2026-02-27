import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from "@/components/ui/socials"

const links = [
    {
        title: 'Services',
        href: '/services',
    },
        {
        title: 'Pricing',
        href: '/pricing',
    },
    {
        title: 'FAQs',
        href: '/faqs',
    },
        {
        title: 'Contact',
        href: '/contact-us',
    },
    {
        title: 'About',
        href: '/about',
    },
]

export default function FooterSection() {
    return (
        <footer aria-label="Webmeka footer" className="pb-16 md:py-28">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home."
                    className="mx-auto block size-fit">
                    <Image
                    src="/Logo.svg"
                    alt="Webmeka Logo in footer section."
                    width={80}
                    height={80}
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
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                   <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary block duration-150"
                    >
                        <span>Privacy Policy</span>
                    </Link>
                    <Link
                        href="/terms-of-service"
                        className="text-muted-foreground hover:text-primary block duration-150"
                    >
                        <span>Terms of Service</span>
                    </Link>
                </div>
                <div className="mb-8"><SocialLinks /></div>
                <span className="text-muted-foreground block text-center text-sm mb-4"> Crafted with 🩵 by team Webmeka</span>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} WEBMEKA STUDIO | All rights reserved.</span>
            </div>
        </footer>
    )
}
