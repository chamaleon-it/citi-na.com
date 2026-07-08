import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  UserCheck,
  Briefcase,
  Crown,
  Target,
  ClipboardCheck,
  TrendingUp,
  FileText,
  FileSearch,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Our Services",
  description: "Explore the premium recruitment, contract staffing, executive search, and candidate career preparation services offered by Citi Nexus Agency.",
};

export default function Services() {
  const employerServices = [
    {
      icon: UserCheck,
      title: "Permanent Recruitment",
      desc: "Helping organizations hire qualified full-time professionals. We execute full candidate evaluations to ensure technical compatibility and absolute culture alignment."
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      desc: "Providing skilled professionals for temporary and project-based roles. Scale your workforce up or down dynamically depending on seasonal demands or project cycles."
    },
    {
      icon: Crown,
      title: "Executive Search",
      desc: "Finding experienced leadership and executive talent. We use discrete, direct outreach channels to attract high-performing leaders who can transform your enterprise."
    },
    {
      icon: Target,
      title: "Talent Acquisition",
      desc: "Complete recruitment solutions from sourcing to onboarding. We act as an outsourced talent partner, managing active pipelines and employer brand positioning."
    },
    {
      icon: ClipboardCheck,
      title: "Candidate Screening",
      desc: "Professional resume evaluation, interviews, and skill assessments. We run deep screening audits, credential reviews, and reference checks to guarantee quality."
    }
  ];

  const candidateServices = [
    {
      icon: TrendingUp,
      title: "Career Guidance",
      desc: "Supporting candidates with long-term career planning, sector assessment, and professional development path identification."
    },
    {
      icon: FileText,
      title: "Resume Assistance",
      desc: "Helping candidates craft high-impact, professional resumes optimized for applicant tracking systems and modern corporate reviewers."
    },
    {
      icon: FileSearch,
      title: "Interview Preparation",
      desc: "Preparing candidates to confidently succeed in interviews. We conduct mock simulations, share presentation tips, and align answers with target criteria."
    }
  ];

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />

      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-20 md:py-28">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs font-bold tracking-widest text-gold-warm uppercase">
              Solutions Matrix
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Recruitment Services
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              From localized project staffing to executive placement and candidate coaching, we deliver tailored recruitment services configured for business success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* EMPLOYER SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left max-w-2xl mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-primary">
                For Organizations
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl font-extrabold text-charcoal-dark">
                Enterprise Placement Solutions
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                Build high-performing teams with our certified candidate identification and professional screening methodologies.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employerServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.08 * (idx % 3)}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 h-full shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-5">
                      <span className="inline-flex p-3 bg-emerald-primary/10 rounded-lg text-emerald-primary transition-colors group-hover:bg-emerald-primary group-hover:text-white">
                        <IconComponent className="w-6 h-6" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-charcoal-dark group-hover:text-emerald-primary transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-charcoal-dark/70 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-start">
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-emerald-primary hover:text-gold-warm transition-colors uppercase tracking-wider flex items-center gap-1.5"
                      >
                        Find Talent
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CANDIDATE SERVICES */}
      <section className="py-20 bg-beige-soft/40 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left max-w-2xl mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-wider uppercase text-gold-warm">
                For Job Seekers
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl font-extrabold text-charcoal-dark">
                Candidate Development & Success
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                Empowering professionals to navigate recruitment processes successfully and establish solid, productive careers.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {candidateServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 h-full shadow-sm hover:shadow-md border border-gray-100 hover:border-gold-warm/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-5">
                      <span className="inline-flex p-3 bg-gold-warm/10 rounded-lg text-gold-warm transition-colors group-hover:bg-gold-warm group-hover:text-white">
                        <IconComponent className="w-6 h-6" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-charcoal-dark group-hover:text-gold-warm transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-charcoal-dark/70 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-start">
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-emerald-primary hover:text-gold-warm transition-colors uppercase tracking-wider flex items-center gap-1.5"
                      >
                        Explore Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL COLLABORATION CTA */}
      <section className="py-16 md:py-24 bg-charcoal-dark text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Need a Custom Placement Program?</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              If your corporate hiring requirements fall outside our standard offerings, our consulting team can construct a dedicated staffing framework from scratch.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wider text-charcoal-dark bg-gold-warm rounded-full hover:bg-gold-warm-hover shadow-md hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                Inquire Today
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
