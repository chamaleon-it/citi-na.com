import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Review the Terms & Conditions for Citi Nexus Agency website and recruitment placement services.",
};

export default function TermsConditions() {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Terms & Conditions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-gray-400 text-xs sm:text-sm">
              Effective Date: July 7, 2026 | Last Updated: July 7, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal-dark">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="prose prose-emerald max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-charcoal-dark/80">
            <p className="font-medium text-charcoal-dark text-base sm:text-lg">
              Welcome to the Citi Nexus Agency website. By accessing or using our platform, services, and online portals, you agree to comply with and be bound by the following Terms & Conditions. If you disagree with any part of these terms, you must not use our website.
            </p>

            <hr className="border-gray-100" />

            {/* 1. Website Usage */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">1. Website Usage</h2>
              <p>
                You are granted permission to access our website for legitimate employment search, candidate submissions, and professional hiring enquiries. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deploy automated scrapers, indexers, or extraction scripts without authorization.</li>
                <li>Submit false, misleading, or fraudulent resume documentation or company specifications.</li>
                <li>Interfere with platform integrity, servers, or portal databases.</li>
              </ul>
            </div>

            {/* 2. Services */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">2. Recruitment & Staffing Services</h2>
              <p>
                Citi Nexus Agency provides professional recruitment, sourcing, and placement consulting. While we make every attempt to introduce qualified professionals and identify outstanding companies, our placement operations are subject to final contracting, corporate interviews, and candidate evaluations.
              </p>
            </div>

            {/* 3. User Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">3. User Responsibilities</h2>
              <p>
                Candidates are solely responsible for ensuring the accuracy and honesty of all credentials, resumes, employment history records, and licensing submissions. Employers are responsible for checking credentials and conducting all necessary company screenings before finalize employment contracts.
              </p>
            </div>

            {/* 4. Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">4. Intellectual Property</h2>
              <p>
                All elements of this site, including logos, graphics, text content, illustrations, custom icons, layout designs, and software systems, are the intellectual property of Citi Nexus Agency and are protected by international trademark and copyright laws.
              </p>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">5. Limitation of Liability</h2>
              <p>
                In no event will Citi Nexus Agency be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use this platform, or from the placement or non-placement of candidates, to the fullest extent permitted by applicable law.
              </p>
            </div>

            {/* 6. Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Changes take effect immediately upon being posted on this webpage. Your continued usage of the website after modifications indicates your acceptance of the updated terms.
              </p>
            </div>

            {/* Contact Info Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">7. Contact Enquiries</h2>
              <p>
                For questions regarding these Terms & Conditions, please connect with us using our web form.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider text-white bg-emerald-primary rounded-full hover:bg-emerald-primary-hover shadow-sm uppercase transition-all duration-300"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
