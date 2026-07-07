import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <footer className="bg-charcoal-dark text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-6 space-y-6">
            <Logo light />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Citi Nexus Agency is committed to connecting talented professionals with leading
              organizations through reliable, efficient, and professional recruitment solutions. We help
              businesses find exceptional talent and guide candidates toward outstanding career growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-6 md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-gold-warm uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-emerald-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1 sm:col-span-6 md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-gold-warm uppercase">
              Legal Info
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-emerald-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Citi Nexus Agency. All Rights Reserved.</p>
          <p className="text-[10px] tracking-wider text-gold-warm/60 uppercase">
            Connecting Talent. Building Careers.
          </p>
        </div>
      </div>
    </footer>
  );
}
