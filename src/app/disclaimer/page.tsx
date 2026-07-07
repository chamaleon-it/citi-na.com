import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description: "Read the official legal disclaimer for Citi Nexus Agency website and recruitment placement services.",
};

export default function Disclaimer() {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Disclaimer
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
              This Disclaimer governs your use of the Citi Nexus Agency website and any recruitment consulting, talent placements, and staffing evaluations associated with our brand.
            </p>

            <hr className="border-gray-100" />

            {/* 1. Information Accuracy */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">1. Information Accuracy</h2>
              <p>
                All materials, profiles, statistics, career descriptions, and placement advice published on this website are shared for general guidance and information purposes only. While we endeavor to preserve accuracy, Citi Nexus Agency makes no representations or warranties, express or implied, regarding the completeness, precision, suitability, or operational availability of any webpage content or candidate listing.
              </p>
            </div>

            {/* 2. Recruitment Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">2. Recruitment & Sourcing Facilitation</h2>
              <p>
                Citi Nexus Agency acts as a specialized placement intermediary connecting qualified candidates with client organizations. We are not a direct employer of candidates placed in permanent corporate positions, nor do we act as an agent of the employer unless specified by formal staffing contracts. Ultimate selection, visa sponsorship details, salary parameters, and workplace policies are decided exclusively between the employer and candidate.
              </p>
            </div>

            {/* 3. Third-Party Links */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">3. External Links</h2>
              <p>
                Our platform may incorporate links leading to third-party web domains, applicant assessment portals, or company websites. These external connections are provided purely for utility. Citi Nexus Agency has no administrative control over, and assumes no responsibility for, the safety, privacy protocols, content, or validity of external sites.
              </p>
            </div>

            {/* 4. No Employment Guarantee */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">4. No Employment Guarantee</h2>
              <p>
                Submission of a resume, profile dossier, or project staffing enquiry through our site does not guarantee candidate interview selection, job placement, or employment offers. Similarly, client registration does not guarantee the immediate delivery of suitable candidates matching specialized skills in specific geographical regions.
              </p>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">5. Limitation of Liability</h2>
              <p>
                Under no context will Citi Nexus Agency, its advisors, directors, or representatives, be held liable for any loss, damage, expense, or operational disruption (including indirect, accidental, or consequential losses) resulting from website downtime, resume processing delays, or employment contract decisions made between third parties.
              </p>
            </div>

            {/* Contact Notice */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">6. Inquiries</h2>
              <p>
                If you have questions regarding this Disclaimer, please communicate with our administration through our official web interface.
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
