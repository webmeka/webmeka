import ContactPage from "@/components/ui/contact-us";

const ContactUsSection = () => {
  return (
    <section id="contact" aria-label="Webmeka contact us section" className="pt-10 max-w-7xl mx-auto w-full px-5 md:px-10 lg:px-20">
        <h2 className="text-4xl text-center font-medium mb-10"><span className='text-webmeka'>Contact</span> Us</h2>
        <ContactPage />
    </section>
  )
}

export default ContactUsSection