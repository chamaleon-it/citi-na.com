import ScrollReveal from "@/components/ScrollReveal";
import { Shield, Eye, Heart, Cpu, UserCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about Citi Nexus Agency, our mission, vision, and core values that drive our international recruitment and staffing services.",
};

export default function About() {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "We maintain the highest standards of honesty, fairness, and ethical behavior in every placement and partnership we establish."
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "We communicate clearly, openly, and honestly throughout the recruitment cycle, building long-term trust at every stage."
    },
    {
      icon: UserCheck,
      title: "Professionalism",
      desc: "We deliver exceptional quality service with courtesy, discretion, and deep industry expertise tailored to your operational environment."
    },
    {
      icon: Cpu,
      title: "Innovation",
      desc: "We employ cutting-edge hiring methodologies, advanced databases, and modern screening systems to connect candidate talent."
    },
    {
      icon: Heart,
      title: "Commitment",
      desc: "We are fully dedicated to the long-term career success of our candidates and the sustainable organizational growth of our clients."
    },
    {
      icon: Sparkles,
      title: "Excellence",
      desc: "We relentlessly pursue perfection in candidate sourcing, screening, background verification, and onboarding integration."
    }
  ];

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Soft decorative gradients */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />

      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-20 md:py-28">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs font-bold tracking-widest text-gold-warm uppercase">
              Who We Are
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              About Citi Nexus Agency
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Connecting exceptional talent with industry leaders to drive corporate excellence and professional career growth on a global scale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE PROFILE CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content text */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-primary">
                  Corporate Ethos
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <h2 className="text-3xl font-extrabold text-charcoal-dark leading-tight">
                  Driving Corporate Growth Through Strategic Placements
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="space-y-4 text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                  <p>
                    Citi Nexus Agency is a professional recruitment and staffing company committed to helping businesses find exceptional talent while supporting professionals in achieving their career goals. We operate as an essential link between qualified specialists and leading corporations.
                  </p>
                  <p>
                    With a client-focused approach and deep industry expertise, we provide customized recruitment solutions that create long-term value for both employers and candidates. Our approach goes beyond simple matchmaking; we take the time to evaluate skills, cultural fit, operational compatibility, and potential for growth.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right graphic visual */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-beige-soft border border-emerald-primary/10 rounded-2xl p-8 space-y-6 relative shadow-sm">
                  {/* Decorative corner node */}
                  <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gold-warm" />
                  
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-primary uppercase tracking-widest block">Our Standard</span>
                    <h3 className="font-extrabold text-lg text-charcoal-dark">Tailored Talent Acquisition</h3>
                  </div>

                  <ul className="space-y-3.5 text-sm text-charcoal-dark/80">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-warm mt-2 shrink-0" />
                      <span>Rigorous, multi-tier background and reference screening processes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-warm mt-2 shrink-0" />
                      <span>Decades of collective recruitment advisory experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-warm mt-2 shrink-0" />
                      <span>Specialized divisions covering major corporate and technical fields.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-beige-soft/40 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-emerald-primary/20 transition-all duration-300 h-full">
                {/* Visual side bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-primary" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal-dark group-hover:text-emerald-primary transition-colors duration-200">
                    Our Mission
                  </h3>
                  <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                    To connect businesses with exceptional professionals through reliable, transparent, and efficient recruitment services. We are dedicated to easing the placement cycle and helping teams achieve maximum productivity.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-gold-warm/20 transition-all duration-300 h-full">
                {/* Visual side bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-warm" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal-dark group-hover:text-gold-warm transition-colors duration-200">
                    Our Vision
                  </h3>
                  <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                    To become one of the most trusted recruitment partners by delivering innovative hiring solutions with integrity and excellence. We strive to set the global standard for modern candidate sourcing, client relationships, and quality integration.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-widest text-emerald-primary uppercase">
                Ethical Principles
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl font-extrabold text-charcoal-dark">
                Our Core Values
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                These six values outline who we are, how we select candidates, and how we interact with our international client partners.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.08 * idx}>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-emerald-primary/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
                    <span className="p-3 bg-emerald-primary/5 rounded-lg text-emerald-primary transition-colors duration-300 group-hover:bg-emerald-primary group-hover:text-white shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base text-charcoal-dark group-hover:text-emerald-primary transition-colors duration-200">
                        {val.title}
                      </h3>
                      <p className="text-charcoal-dark/75 text-xs sm:text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
