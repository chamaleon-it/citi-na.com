import Link from "next/link";
import {
  Award,
  Zap,
  Target,
  ShieldCheck,
  Sliders,
  Handshake,
  UserPlus,
  Clock,
  Crown,
  Globe,
  Users,
  FileCheck,
  Cpu,
  Activity,
  DollarSign,
  Wrench,
  Building2,
  Hotel,
  ShoppingBag,
  Truck,
  Factory,
  GraduationCap,
  FileText,
  Search,
  MessageSquare,
  CheckSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Experienced Recruitment Specialists",
      desc: "Our advisors possess deep, industry-specific knowledge to locate and screen high-performing talent that aligns with your specific company culture."
    },
    {
      icon: Zap,
      title: "Fast Hiring Process",
      desc: "Leveraging our extensive candidate network and proprietary screening methodologies, we significantly reduce your average time-to-hire."
    },
    {
      icon: Target,
      title: "Industry-Focused Recruitment",
      desc: "We specialize in targeted sectors, ensuring we understand the technical demands, licensing, and compliance requirements of each role."
    },
    {
      icon: ShieldCheck,
      title: "Verified Candidates",
      desc: "Every professional in our database undergoes rigorous credential checking, reference verification, and initial technical screening."
    },
    {
      icon: Sliders,
      title: "Personalized Hiring Solutions",
      desc: "Whether you need a single executive placement, temporary project staffing, or a fully outsourced HR model, we customize our strategy."
    },
    {
      icon: Handshake,
      title: "Long-Term Business Partnerships",
      desc: "We prioritize building deep, lasting relationships with clients, acting as an extension of your internal talent acquisition team."
    }
  ];

  const services = [
    {
      icon: UserPlus,
      title: "Permanent Recruitment",
      desc: "Source and secure qualified full-time personnel who add permanent strength, knowledge, and value to your core team."
    },
    {
      icon: Clock,
      title: "Contract Staffing",
      desc: "Gain immediate access to skilled contractors and temporary staff to support peak cycles or critical project milestones."
    },
    {
      icon: Crown,
      title: "Executive Search",
      desc: "A meticulous, confidential search methodology to identify, attract, and place senior executive leaders and board members."
    },
    {
      icon: Globe,
      title: "Remote Hiring",
      desc: "Expand your horizons by hiring elite global talent, managed efficiently through structured compliance and virtual onboarding."
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      desc: "End-to-end recruitment partnerships that manage your talent pipeline from candidate attraction through contract signing."
    },
    {
      icon: FileCheck,
      title: "Candidate Screening",
      desc: "Outsource your vetting processes with our professional verification checks, skill assessment tools, and structured screening."
    }
  ];

  const industries = [
    { icon: Cpu, name: "Information Technology" },
    { icon: Activity, name: "Healthcare" },
    { icon: DollarSign, name: "Finance" },
    { icon: Wrench, name: "Engineering" },
    { icon: Building2, name: "Construction" },
    { icon: Hotel, name: "Hospitality" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Truck, name: "Logistics" },
    { icon: Factory, name: "Manufacturing" },
    { icon: GraduationCap, name: "Education" }
  ];

  const steps = [
    {
      step: "01",
      title: "Understand Requirements",
      desc: "We analyze your specific business objectives, team dynamics, skill gaps, and role parameters to define the ideal candidate profile."
    },
    {
      step: "02",
      title: "Source Candidates",
      desc: "Utilizing our proprietary database, industry connections, and proactive headhunting, we identify qualified passive and active talent."
    },
    {
      step: "03",
      title: "Interview & Screening",
      desc: "We run comprehensive, competency-based interviews, evaluate technical capabilities, and verify work history background details."
    },
    {
      step: "04",
      title: "Shortlisting",
      desc: "You receive a curated selection of top candidates matching your specifications, complete with detailed dossiers and profiles."
    },
    {
      step: "05",
      title: "Successful Placement",
      desc: "We facilitate offer negotiations, manage coordinate handovers, support onboarding, and follow up during the transition phase."
    }
  ];

  const statistics = [
    { value: 2500, suffix: "+", label: "Successful Placements" },
    { value: 350, suffix: "+", label: "Business Clients" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      quote: "Citi Nexus Agency transformed our hiring process. Within two weeks, they presented three exceptional candidates for our leadership role. The candidate we selected has exceeded all of our key performance targets.",
      name: "Marcus Vance",
      title: "VP of Operations, Crestview Technologies"
    },
    {
      quote: "Their team understands the complex compliance requirements in our industry. Every candidate they send is thoroughly vetted, verified, and ready to contribute immediately. A truly trusted partner.",
      name: "Dr. Evelyn Ross",
      title: "Chief Medical Officer, Vanguard Care Network"
    },
    {
      quote: "Finding high-caliber specialists in a competitive market is a massive challenge. Citi Nexus Agency utilizes an executive search approach that consistently delivers outstanding talent others cannot reach.",
      name: "Arthur Pendelton",
      title: "Director of HR, Sterling & Gold Finance"
    }
  ];

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background soft beige decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-50" />

      {/* HERO SECTION */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero text content */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-primary bg-emerald-primary/10 border border-emerald-primary/10">
                  Global Recruitment & Staffing
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal-dark tracking-tight leading-[1.1]">
                  Find Exceptional Talent.<br />
                  <span className="text-gradient-emerald-gold">Shape a Better Future.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-charcoal-dark/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Citi Nexus Agency is a trusted recruitment and staffing partner dedicated to connecting talented professionals with outstanding employers. We help organizations build stronger teams while supporting job seekers in finding meaningful career opportunities across diverse industries.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wider text-white bg-emerald-primary rounded-full hover:bg-emerald-primary-hover shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase"
                  >
                    Find Talent
                  </Link>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wider text-charcoal-dark bg-white border border-charcoal-dark/10 rounded-full hover:bg-beige-soft shadow-sm hover:shadow transition-all duration-300 uppercase"
                  >
                    Explore Careers
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Image / Illustration */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  {/* Outer decorative card pattern */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-primary to-gold-warm opacity-15 blur-xl rounded-2xl" />
                  
                  {/* Premium Vector UI Illustration representation of recruiters and network */}
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-primary/10 p-6 sm:p-8">
                    <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                      <div className="flex gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                        <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                        <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-gold-warm">Citi Nexus Talent Suite</span>
                    </div>

                    {/* SVG Graphic showing recruiting networks */}
                    <svg viewBox="0 0 400 250" fill="none" className="w-full h-auto py-6" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid background */}
                      <line x1="20" y1="10" x2="20" y2="240" stroke="#f1ece3" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="120" y1="10" x2="120" y2="240" stroke="#f1ece3" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="220" y1="10" x2="220" y2="240" stroke="#f1ece3" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="320" y1="10" x2="320" y2="240" stroke="#f1ece3" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="10" y1="60" x2="390" y2="60" stroke="#f1ece3" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="10" y1="150" x2="390" y2="150" stroke="#f1ece3" strokeWidth="1" strokeDasharray="4 4" />

                      {/* Connection paths */}
                      <path d="M60 125 C 130 60, 270 190, 340 125" stroke="#0F766E" strokeWidth="3" strokeDasharray="2 2" />
                      <path d="M60 125 L 200 65 L 340 125" stroke="#C89B3C" strokeWidth="2" opacity="0.6" />
                      <path d="M60 125 L 200 185 L 340 125" stroke="#0F766E" strokeWidth="2" opacity="0.4" />

                      {/* Center Recruiting Hub Node */}
                      <circle cx="200" cy="125" r="30" fill="#1F2937" />
                      <circle cx="200" cy="125" r="22" fill="#0F766E" />
                      <circle cx="200" cy="125" r="8" fill="#C89B3C" />

                      {/* Professional Candidate Node 1 */}
                      <g transform="translate(60, 125)">
                        <circle cx="0" cy="0" r="18" fill="#F8F5F0" stroke="#0F766E" strokeWidth="2" />
                        <path d="M-6 8 C -6 2, 6 2, 6 8" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none" />
                        <circle cx="0" cy="-3" r="4" fill="#1F2937" />
                      </g>

                      {/* Professional Candidate Node 2 (Top Left) */}
                      <g transform="translate(140, 50)">
                        <circle cx="0" cy="0" r="14" fill="#F8F5F0" stroke="#C89B3C" strokeWidth="2" />
                        <path d="M-5 6 C -5 1, 5 1, 5 6" stroke="#1F2937" strokeWidth="2.5" fill="none" />
                        <circle cx="0" cy="-2.5" r="3.5" fill="#1F2937" />
                      </g>

                      {/* Professional Candidate Node 3 (Top Right) */}
                      <g transform="translate(260, 50)">
                        <circle cx="0" cy="0" r="14" fill="#F8F5F0" stroke="#0F766E" strokeWidth="2" />
                        <path d="M-5 6 C -5 1, 5 1, 5 6" stroke="#1F2937" strokeWidth="2.5" fill="none" />
                        <circle cx="0" cy="-2.5" r="3.5" fill="#1F2937" />
                      </g>

                      {/* Professional Candidate Node 4 (Bottom Left) */}
                      <g transform="translate(140, 200)">
                        <circle cx="0" cy="0" r="14" fill="#F8F5F0" stroke="#0F766E" strokeWidth="2" />
                        <path d="M-5 6 C -5 1, 5 1, 5 6" stroke="#1F2937" strokeWidth="2.5" fill="none" />
                        <circle cx="0" cy="-2.5" r="3.5" fill="#1F2937" />
                      </g>

                      {/* Professional Candidate Node 5 (Bottom Right) */}
                      <g transform="translate(260, 200)">
                        <circle cx="0" cy="0" r="14" fill="#F8F5F0" stroke="#C89B3C" strokeWidth="2" />
                        <path d="M-5 6 C -5 1, 5 1, 5 6" stroke="#1F2937" strokeWidth="2.5" fill="none" />
                        <circle cx="0" cy="-2.5" r="3.5" fill="#1F2937" />
                      </g>

                      {/* Client Placement Node */}
                      <g transform="translate(340, 125)">
                        <circle cx="0" cy="0" r="18" fill="#F8F5F0" stroke="#C89B3C" strokeWidth="2" />
                        <rect x="-6" y="-6" width="12" height="12" rx="1.5" fill="#C89B3C" />
                        <path d="M-9 10 L 9 10" stroke="#C89B3C" strokeWidth="2" />
                      </g>
                    </svg>

                    {/* Stats Summary overlay */}
                    <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-5 text-center">
                      <div className="space-y-0.5">
                        <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider">Candidates</span>
                        <span className="block text-sm font-bold text-emerald-primary">Verified</span>
                      </div>
                      <div className="space-y-0.5 border-x border-gray-100">
                        <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider">Placement</span>
                        <span className="block text-sm font-bold text-gold-warm">98% Match</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[10px] uppercase font-semibold text-gray-400 tracking-wider">Coverage</span>
                        <span className="block text-sm font-bold text-charcoal-dark">Global</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 md:py-28 bg-beige-soft/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-widest text-emerald-primary uppercase">
                Our Competitive Advantage
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-dark">
                Why Choose Citi Nexus Agency
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                We combine global recruitment capacities with customized, relationship-first staffing procedures to ensure your hiring criteria are met with absolute precision.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.1 * (idx % 3)}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 h-full shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-5 group">
                    <span className="p-3 bg-emerald-primary/10 rounded-lg text-emerald-primary transition-colors group-hover:bg-emerald-primary group-hover:text-white">
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-charcoal-dark group-hover:text-emerald-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-dark/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs font-bold tracking-widest text-gold-warm uppercase">
                  Tailored Staffing Solutions
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-dark">
                  Our Premier Recruitment Services
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.3}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-primary hover:text-gold-warm transition-colors duration-300 group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.1 * (idx % 3)}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 h-full shadow-sm hover:shadow-lg border border-gray-100 hover:border-gold-warm/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
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
                        Enquire Now
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

      {/* INDUSTRIES WE SERVE SECTION */}
      <section className="py-20 md:py-28 bg-charcoal-dark text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-widest text-gold-warm uppercase">
                Diverse Global Sectors
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Industries We Serve
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Our recruiting divisions are segmented by industry, employing dedicated specialists who understand the distinct challenges of each vertical market.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.05 * idx}>
                  <div className="bg-white/5 hover:bg-white/10 rounded-xl p-5 border border-white/5 hover:border-gold-warm/20 flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 group h-32">
                    <span className="text-gold-warm group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-8 h-8" />
                    </span>
                    <span className="font-semibold text-xs sm:text-sm tracking-wide text-gray-300 group-hover:text-white transition-colors duration-200">
                      {ind.name}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECRUITMENT PROCESS SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-widest text-emerald-primary uppercase">
                Workflow Methodology
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-dark">
                Our Recruitment Process
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-charcoal-dark/70 text-sm sm:text-base leading-relaxed">
                A structured, systematic, and fully transparent hiring process designed to ensure consistent delivery of top-tier talent.
              </p>
            </ScrollReveal>
          </div>

          {/* Visual Timeline layout */}
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {steps.map((step, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md relative h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      {/* Circular marker */}
                      <div className="w-10 h-10 rounded-full bg-emerald-primary/10 text-emerald-primary flex items-center justify-center font-bold text-sm tracking-wider transition-colors duration-300 group-hover:bg-emerald-primary group-hover:text-white">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-base text-charcoal-dark group-hover:text-emerald-primary transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-charcoal-dark/70 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 md:py-24 bg-beige-soft text-charcoal-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {statistics.map((stat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-primary flex items-center justify-center">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal-dark/70 uppercase">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-bold tracking-widest text-emerald-primary uppercase">
                Success Stories
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-dark">
                What Our Clients Say
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.15 * idx}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md flex flex-col justify-between h-full relative">
                  {/* Decorative quotes */}
                  <span className="absolute top-4 right-6 text-7xl font-serif text-gray-100 pointer-events-none select-none">
                    “
                  </span>
                  
                  <div className="space-y-4">
                    <p className="text-charcoal-dark/80 italic text-sm sm:text-base leading-relaxed relative z-10">
                      "{test.quote}"
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-gray-100 space-y-1">
                    <h4 className="font-bold text-sm text-charcoal-dark">
                      {test.name}
                    </h4>
                    <p className="text-xs font-semibold tracking-wide text-gold-warm">
                      {test.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-charcoal-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        {/* Soft background gold glow decoration */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-warm opacity-10 rounded-full filter blur-3xl -translate-y-1/2 -z-10" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Ready to Build Your Team?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Partner with Citi Nexus Agency and discover exceptional recruitment solutions tailored to your business. Let us connect you with candidate professionals who drive growth.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wider text-charcoal-dark bg-gold-warm rounded-full hover:bg-gold-warm-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
