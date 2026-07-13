import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from "@/components/ui/socials"

const links = [
    {
        title: 'Services',
        href: '/services',
    },
    // {
    //     title: 'Pricing',
    //     href: '/pricing',
    // },
    {
        title: 'FAQs',
        href: '/faqs',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact-us',
    },
]

export default function FooterSection() {
    return (
        <footer aria-label="Webmeka footer" className="pb-18 max-w-7xl mx-auto w-full px-5 md:px-10 lg:px-20">
                <Link
                    href="/"
                    aria-label="webmeka logo - click to go back to homepage"
                    className="mx-auto block size-fit">
                    <Image
                    src="/Logo.svg"
                    alt="Webmeka Logo in footer section."
                    width={150}
                    height={150}
                    />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            aria-label='Footer links to webmeka pages'
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                   <Link
                    href="/privacy-policy"
                    aria-label='link to webmeka privacy policy page'
                    className="text-muted-foreground hover:text-primary block duration-150"
                    >
                        <span>Privacy Policy</span>
                    </Link>
                    <Link
                        href="/terms-of-service"
                        aria-label='link to webmeka terms of service page'
                        className="text-muted-foreground hover:text-primary block duration-150"
                    >
                        <span>Terms Of Service</span>
                    </Link>
                </div>
                <div className="mb-8"><SocialLinks /></div>
                <span className="text-muted-foreground block text-center text-sm mb-4"> Crafted with 🩵 by Team WebMeka</span>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} WEBMEKA STUDIO | All rights reserved.</span>
        </footer>
    )
}
