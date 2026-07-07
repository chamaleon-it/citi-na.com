import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for Citi Nexus Agency. Understand how we collect, process, and secure user and applicant data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Privacy Policy
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
              At Citi Nexus Agency, we prioritize the protection of your personal information. This Privacy Policy describes how we collect, use, store, and share data obtained from candidates, business clients, and website visitors.
            </p>

            <hr className="border-gray-100" />

            {/* 1. Information Collection */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">1. Information Collection</h2>
              <p>
                We collect personal information to provide staffing and recruitment solutions. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Candidate Data:</strong> Names, qualifications, employment history, professional credentials, skills, reference assessments, and any files submitted through our portal.
                </li>
                <li>
                  <strong>Client Data:</strong> Names of contact representatives, company details, job description specifications, organizational parameters, and details shared during inquiries.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information automatically compiled during site visits, including IP addresses, browser specifications, and navigation paths.
                </li>
              </ul>
            </div>

            {/* 2. Data Usage */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">2. Data Usage</h2>
              <p>
                Citi Nexus Agency utilizes your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Evaluating candidate profiles for current and future employment opportunities.</li>
                <li>Providing custom staffing, executive search, and consulting services to clients.</li>
                <li>Communicating updates, screening outcomes, and contract parameters.</li>
                <li>Maintaining and optimizing our website functionality and candidate portal.</li>
                <li>Complying with applicable employment, data preservation, and corporate regulations.</li>
              </ul>
            </div>

            {/* 3. Cookies */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">3. Cookies & Tracking</h2>
              <p>
                Our platform uses standard functional cookies and session IDs to improve user experience, memorize preferences, and track traffic dynamics in the aggregate. You can configure your browser to reject cookies, though some web features may function sub-optimally.
              </p>
            </div>

            {/* 4. Data Protection */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">4. Data Protection</h2>
              <p>
                We implement industry-standard physical, electronic, and administrative safeguards to secure candidate and client information. While we apply strict security controls to minimize data exposure, please note that no digital transmission or database storage can be guaranteed 100% secure.
              </p>
            </div>

            {/* 5. User Rights */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">5. User Rights</h2>
              <p>
                Depending on your location and regional frameworks, you may have the following data management rights:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to request access to the personal data we preserve about you.</li>
                <li>The right to request immediate correction of inaccurate or outdated details.</li>
                <li>The right to request the erasure of your applicant data (subject to legal retentions).</li>
                <li>The right to object to or restrict processing operations under specific contexts.</li>
              </ul>
            </div>

            {/* 6. Contact Notice */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">6. Contact Notice</h2>
              <p>
                If you have questions about this policy, or if you would like to exercise any of your data rights, please submit an inquiry directly through our web interface. Our privacy officer will review your request.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider text-white bg-emerald-primary rounded-full hover:bg-emerald-primary-hover shadow-sm uppercase transition-all duration-300"
                >
                  Go To Contact Form
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
