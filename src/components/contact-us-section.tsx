"use client";

import ContactPage from "@/components/ui/contact-us";

const ContactUsSection = () => {
  return (
    <section id="contact" className="w-full px-5 md:px-10 lg:px-20 pt-10">
        <h2 className="text-4xl text-center font-medium pt-25 mb-10"><span className='text-webmeka'>Contact</span> Us</h2>
        <ContactPage />
    </section>
  )
}

export default ContactUsSection