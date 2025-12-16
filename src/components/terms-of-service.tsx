"use client";

import { useEffect } from "react";
import Link from "next/link";

const TermsOfService = () => {
     useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <section
      id="terms"
      className="w-full min-h-screen px-5 md:px-10 lg:px-20 2xl:px-70 pb-20"
    >
      <h2 className="text-4xl text-center font-medium pt-10 mb-14">
        Our <span className="text-webmeka">Terms Of Service</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-12 text-base leading-relaxed text-neutral-400">

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            1. Introduction
          </h3>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
            consulting and professional services (the &quot;Services&quot;) provided by webmeka
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms constitute a legally binding agreement
            between you and webmeka. By accessing or using our Services, you acknowledge
            that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            2. Definitions
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Client, you, your</strong> refer to the individual or entity
              accessing or using our Services.
            </li>
            <li>
              <strong>Deliverables</strong> means the work product, reports, analyses,
              presentations, or other materials we provide.
            </li>
            <li>
              <strong>Intellectual Property Rights</strong> include all patent,
              copyright, trademark, trade secret, and related rights.
            </li>
            <li>
              <strong>Statement of Work (SOW)</strong> refers to any written document
              describing the Services, deliverables, timeline, and fees.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            3. Acceptance of Terms
          </h3>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If
            you are using the Services on behalf of an organization, you represent that
            you have authority to bind that organization. If you do not agree, you may
            not use the Services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            4. Changes to Terms
          </h3>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the
            Services after changes are posted constitutes acceptance of the revised
            Terms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            5. Services
          </h3>
          <p>
            Services will be provided as described in any applicable SOW. We will use
            reasonable skill, care, and diligence in accordance with professional
            standards.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            6. Your Responsibilities
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide timely access to required information and resources</li>
            <li>Make decisions and approvals without unreasonable delay</li>
            <li>Pay all fees as agreed</li>
            <li>Use Deliverables in compliance with applicable laws</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            7. Fees and Payment
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fees are quoted in KES</li>
                <li>
            A deposit of 50% of the total project fee is required before any work
            commences.
            </li>
            <li>
            The remaining balance is payable upon project completion and delivery of
            the agreed Deliverables, unless otherwise stated in a Statement of Work.
            </li>
            <li>
            Invoices will be issued at each agreed payment stage.
            </li>
            <li>
            The initial deposit is non-refundable once work has commenced, as it
            covers project setup, planning, and resource allocation.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            8. Term and Termination
          </h3>
          <p>
            Either party may terminate according to the terms outlined in the applicable
            SOW. Obligations incurred before termination survive.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            9. Confidentiality
          </h3>
          <p>
            Both parties agree to protect confidential information and use it solely for
            purposes related to the Services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            10. Intellectual Property
          </h3>
          <p>
            Pre-existing materials remain our property. Upon full payment, you receive
            a limited license to use Deliverables internally.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            11. Representations and Warranties
          </h3>
          <p>
            Services are provided professionally, without additional warranties beyond
            those expressly stated.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            12. Limitation of Liability
          </h3>
          <p>
            To the maximum extent permitted by law, webmeka shall not be liable for
            indirect or consequential damages.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            13. Indemnification
          </h3>
          <p>
            Each party agrees to indemnify the other against claims arising from misuse
            or legal violations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            14. Independent Contractor
          </h3>
          <p>
            webmeka acts as an independent contractor and not as an employee or partner.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-200">
            16. Governing Law and Disputes
          </h3>
          <p>
            These Terms are governed by the Kenyan laws, where webmeka is
            headquartered, with disputes resolved through arbitration.
          </p>
        </div>

        <div className="pt-10 border-t text-xs text-neutral-500">
          <p>Last Updated: 2025-12-15</p>
        </div>

      </div>
            <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className="px-6 py-3 border-2 border-webmeka text-webmeka rounded-full hover:bg-webmeka/10 transition"
        >
          Return to Homepage
        </Link>
      </div>
    </section>
  );
};

export default TermsOfService;
