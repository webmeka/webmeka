"use client";

import ContactPage from "@/components/ui/contact-us";

const ContactUsSection = () => {
  return (
    <section id="contact" className="min-h-[100vh] w-full px-5 md:px-10 lg:px-20 pt-10">
        <h2 className="text-4xl font-bold text-center  pt-25 mb-10"><span className='text-cyan-400'>Contact</span> Us</h2>
        <ContactPage />
    </section>
  )
}

export default ContactUsSection