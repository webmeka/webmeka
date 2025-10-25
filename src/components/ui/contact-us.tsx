import { MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const ContactPage = () => (
  <div className="flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
        Get In Touch
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground">
        Our friendly team is always here to chat.
      </p>
      <div className="max-w-(--breakpoint-xl) mx-auto py-26 grid lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-medium text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Reach out anytime by email.
          </p>
          <Link
            className="mt-4 text-primary"
            href="mailto:akashmoradiya3444@gmail.com"
          >
            team@webmeka.com
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
      <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
        <MessageCircleIcon />
      </div>
      <h3 className="mt-6 font-medium text-xl">WhatsApp</h3>
      <p className="mt-2 text-muted-foreground">
        Chat with us instantly on WhatsApp.
      </p>
      <Link
        className="mt-4 text-primary"
        href="https://wa.me/254727756658"
        target="_blank"
      >
        +254 727 756-658
      </Link>
    </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-medium text-xl">Phone</h3>
          <p className="mt-2 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
          <Link
            className="mt-4 text-primary"
            href="tel:+254792823034"
          >
            +254 792 823-034
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
