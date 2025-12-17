"use client";

import { useEffect } from "react";
import BackButton from "./ui/back-button";

const PrivacyPolicy = () => {
     useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <section
      id="privacy"
      className="w-full min-h-screen px-5 md:px-10 lg:px-20 2xl:px-70 pb-20"
    >
      <h2 className="text-4xl text-center font-medium pt-10 mb-14">
        Our <span className="text-webmeka">Privacy Policy</span>
      </h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">1. Introduction</h3>
        <p className="text-neutral-300 mb-2">
          This Privacy Policy describes how Webmeka (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, 
          and discloses your personal information when you use our software as a service 
          (the &quot;Service&quot;).
        </p>
        <p className="text-neutral-300 mb-2">
          We are committed to protecting your personal information and your right to privacy. 
          When you visit our software as a service and use our products, you trust us with your 
          personal information. We take your privacy very seriously. This Privacy Policy explains 
          what information we collect, how we use it, and what rights you have in relation to it.
        </p>
        <p className="text-neutral-300">
          This Privacy Policy applies to all information collected through our Service, as well 
          as any related services, sales, marketing, or events.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">2. Definitions</h3>
        <ul className="list-disc list-inside text-neutral-300 space-y-1">
          <li><strong>Cookie:</strong> a small file placed on your device to enable certain features and functionality.</li>
          <li><strong>Company:</strong> refers to Webmeka (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).</li>
          <li><strong>Country:</strong> Kenya, where Webmeka or its founders are based.</li>
          <li><strong>Customer:</strong> the entity that signs up to use Webmeka Service.</li>
          <li><strong>Device:</strong> any internet-connected device used to access Webmeka.</li>
          <li><strong>Personal Data:</strong> information that can identify a natural person.</li>
          <li><strong>Service:</strong> Webmeka&apos;s software as a service platform.</li>
          <li><strong>Third-party service:</strong> advertisers, partners, or providers of content and services.</li>
          <li><strong>Website:</strong> https://webmeka.com</li>
          <li><strong>You:</strong> a person or entity registered to use the Service.</li>
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">3. Information We Collect</h3>
        <p className="text-neutral-300 mb-2">
          We collect several types of information to provide and improve our Service.
        </p>

        <h4 className="text-lg font-semibold mb-2 text-neutral-200">3.1 Personal Data</h4>
        <ul className="list-disc list-inside text-neutral-300 space-y-1 mb-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>project details provided via forms or direct communication.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2 text-neutral-200">3.3 Usage Data</h4>
        <p className="text-neutral-300">
          We may collect information about how the Service is accessed and used, including IP address, browser type, pages visited, time and date, and unique device identifiers.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">4. How We Use Your Information</h3>
        <ul className="list-disc list-inside text-neutral-300 space-y-1">
          <li>Provide and maintain our Service</li>
          <li>Notify you about changes to our Service</li>
          <li>Enable participation in interactive features</li>
          <li>Provide customer support</li>
          <li>Gather analysis to improve our Service</li>
          <li>Monitor usage</li>
          <li>Detect and address technical issues</li>
          <li>Provide news, offers, and information unless opted out</li>
          <li>Any other purpose with your consent</li>
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">6. Retention of Your Personal Data</h3>
        <p className="text-neutral-300 mb-2">
          Personal Data is retained only as long as necessary for the purposes described. Usage Data is generally retained for shorter periods unless required by law or for security purposes.
        </p>
        <p className="text-neutral-300">
          <strong>Data Retention for Physical Goods:</strong> For orders involving physical goods, shipping and billing information is retained as necessary for order fulfillment, returns, warranty claims, and legal obligations.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">7. Transfer of Your Personal Data</h3>
        <p className="text-neutral-300 mb-2">
          Your information may be transferred to and maintained on computers outside your jurisdiction, including Kenya. By using the Service, you consent to this transfer.
        </p>
        <p className="text-neutral-300">
          We take steps to ensure your data is secure and treated according to this Privacy Policy.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">8. Disclosure of Your Personal Data</h3>
        <p className="text-neutral-300 mb-2"><strong>Business Transactions:</strong> In case of merger, acquisition, or sale, your Personal Data may be transferred with notice.</p>
        <p className="text-neutral-300 mb-2"><strong>Disclosure for Law Enforcement:</strong> We may disclose data if required by law or valid public authority requests.</p>
        <p className="text-neutral-300"><strong>Legal Requirements:</strong> Data may be disclosed to comply with laws, protect rights, prevent wrongdoing, protect safety, or against legal liability.</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">9. Third-Party Disclosure</h3>
        <p className="text-neutral-300 mb-2"><strong>Analytics:</strong> We may use third-party services like Google Analytics to monitor and analyze Service usage. You can opt-out via Google Analytics opt-out browser add-on.</p>
        <p className="text-neutral-300 mb-2"><strong>Payments:</strong> Payment processing is handled by third-party processors like PayPal, Braintree, or Stripe. We do not store your card details.</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">10. Security of Your Personal Data</h3>
        <p className="text-neutral-300">
          We use commercially acceptable means to protect your data, but no method is 100% secure. Transmission over the Internet and electronic storage cannot be guaranteed completely secure.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">11. Children&apos;s Privacy</h3>
        <p className="text-neutral-300">
          Our Service does not target anyone under 13. We do not knowingly collect data from children under 13. Parents should contact us to remove any data inadvertently collected.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">12. Your Data Protection Rights</h3>
        <ul className="list-disc list-inside text-neutral-300 space-y-1">
          <li><strong>Access Your Data:</strong> Request a copy of your personal data in a machine-readable format.</li>
          <li><strong>Delete Your Data:</strong> Request deletion unless legally required to retain it.</li>
        </ul>
        <p className="text-neutral-300 mt-2">
          Requests are processed within 30 days and identity verification may be required.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">13. Service Providers</h3>
        <p className="text-neutral-300">
          Third-party companies may facilitate our Service. They have access to your data only to perform these tasks and must not use it for other purposes.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">14. Links to Other Sites</h3>
        <p className="text-neutral-300">
          We may link to other sites not operated by us. Review their privacy policies. We are not responsible for third-party content or practices.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">15. Changes to This Privacy Policy</h3>
        <p className="text-neutral-300">
          We may update this Privacy Policy from time to time. Changes take effect when posted. We will notify you via email or prominent notice prior to changes.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-neutral-200">16. Contact Us</h3>
        <p>Reach out to our team for questions regarding these policies:</p>
        <ul className="list-disc list-inside text-neutral-300 space-y-1">
          <li>Email: <a href="mailto:team@webmeka.com" className="text-webmeka">team@webmeka.com</a></li>
          <li>Contact Link: <a href="https://webmeka.com/#contact" className="text-webmeka">https://webmeka.com/#contact</a></li>
          <li>Phone: +254 727 756658</li>
        </ul>
      </div>
              <div className="pt-10 border-t text-xs text-neutral-500">
          <p>Last Updated: 2025-12-15</p>
        </div>
      <BackButton />
    </section>
  );
};

export default PrivacyPolicy;
