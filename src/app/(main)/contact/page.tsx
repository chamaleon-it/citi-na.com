"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required.";
    if (!formData.emailAddress.trim()) {
      tempErrors.emailAddress = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      tempErrors.emailAddress = "Email Address is invalid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message content is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error if typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");

    // Simulate network latency for a premium corporate portal feel
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormStatus("success");
    setFormData({
      fullName: "",
      emailAddress: "",
      companyName: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-beige-soft rounded-full filter blur-3xl -z-10 opacity-60" />

      {/* BANNER SECTION */}
      <section className="bg-charcoal-dark text-white relative py-20 md:py-28">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-charcoal opacity-95 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs font-bold tracking-widest text-gold-warm uppercase">
              Partnership Portal
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Get In Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              We welcome your inquiries and are always ready to discuss recruitment solutions tailored to your needs. Complete the form below and our team will respond as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-10 md:p-12 relative">
            {formStatus === "success" ? (
              // SUCCESS MESSAGE STATE
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="inline-flex p-4 bg-emerald-primary/10 rounded-full text-emerald-primary">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <div className="space-y-3 max-w-lg mx-auto">
                  <h2 className="text-2xl font-extrabold text-charcoal-dark">
                    Submission Received
                  </h2>
                  <p className="text-charcoal-dark/80 text-sm sm:text-base leading-relaxed">
                    Thank you for contacting Citi Nexus Agency. Our recruitment team will review your inquiry and get back to you soon.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-wider text-emerald-primary bg-emerald-primary/10 rounded-full hover:bg-emerald-primary/20 transition-all uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              // FORM STATE
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-bold text-charcoal-dark uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal-dark focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-400 bg-red-50/10"
                          : "border-gray-200 focus:border-emerald-primary bg-beige-soft/10"
                      }`}
                      placeholder="e.g. Alexander Mercer"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="emailAddress" className="block text-xs font-bold text-charcoal-dark uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal-dark focus:outline-none transition-colors ${
                        errors.emailAddress
                          ? "border-red-400 focus:border-red-400 bg-red-50/10"
                          : "border-gray-200 focus:border-emerald-primary bg-beige-soft/10"
                      }`}
                      placeholder="e.g. alexander@company.com"
                    />
                    {errors.emailAddress && (
                      <p className="text-xs text-red-500 font-medium">{errors.emailAddress}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name (Optional) */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-xs font-bold text-charcoal-dark uppercase tracking-wider">
                      Company Name <span className="text-gray-400 lowercase italic">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-primary bg-beige-soft/10 text-sm text-charcoal-dark focus:outline-none transition-colors"
                      placeholder="e.g. Crestview Logistics Corp"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold text-charcoal-dark uppercase tracking-wider">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal-dark focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-400 focus:border-red-400 bg-red-50/10"
                          : "border-gray-200 focus:border-emerald-primary bg-beige-soft/10"
                      }`}
                      placeholder="e.g. Executive Staffing Requirements"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 font-medium">{errors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-charcoal-dark uppercase tracking-wider">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal-dark focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 bg-red-50/10"
                        : "border-gray-200 focus:border-emerald-primary bg-beige-soft/10"
                    }`}
                    placeholder="Provide details about your recruitment needs, positions, or candidate profile requirements..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider text-white bg-emerald-primary rounded-lg hover:bg-emerald-primary-hover shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
