import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy",
  description: "Read the Cookie Policy for Citi Nexus Agency. Find out how we use cookies to improve user experience on our portal.",
};

export default function CookiePolicy() {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Cookie Policy
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
              This Cookie Policy explains how Citi Nexus Agency uses cookies and similar tracking technologies on our website. We believe in transparency regarding how we handle data and manage tracking.
            </p>

            <hr className="border-gray-100" />

            {/* 1. What Cookies Are */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">1. What Cookies Are</h2>
              <p>
                Cookies are small text files downloaded and stored on your computer, tablet, or mobile device when you visit websites. They act as a memory key, enabling the platform to identify your browser, remember preferred settings, and optimize page load paths.
              </p>
            </div>

            {/* 2. Why Cookies Are Used */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">2. Why We Use Cookies</h2>
              <p>
                Citi Nexus Agency utilizes cookies for several essential and diagnostic purposes, categorized as:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Critical files needed to operate secure user sessions, submit candidate profile forms, and route site navigation.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Cookies that remember custom parameters (e.g. language preferences, region variables, filter settings) to customize layout presentations.
                </li>
                <li>
                  <strong>Performance & Analytics:</strong> Cookies that aggregate anonymous visitor counts, bounce rates, and popular subpages, helping us evaluate user experience improvements.
                </li>
              </ul>
            </div>

            {/* 3. Managing Cookie Preferences */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">3. Managing Cookie Preferences</h2>
              <p>
                You can specify cookie choices by modifying settings on our privacy popups or by blocking files at the browser level. Please note that restricting cookies can disable key portals and affect the recruitment application upload functionalities.
              </p>
            </div>

            {/* 4. Browser Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">4. How to Manage Cookies in Browser Settings</h2>
              <p>
                Most modern browsers let you review, clear, or block cookies. To adjust these parameters, look at the Help or Settings menus of your preferred web browser:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Apple Safari</li>
                <li>Microsoft Edge</li>
              </ul>
            </div>

            {/* Contact Notice */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-charcoal-dark">5. Further Information</h2>
              <p>
                If you require more clarification regarding cookie deployment, please submit an enquiry on our web contact page.
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
