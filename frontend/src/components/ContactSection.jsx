import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';

export default function ContactSection() {
  const { submitContact } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Interior Architecture',
    budget: '₹25L - ₹50L',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { success: boolean, message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const result = await submitContact(formData);
    setSubmitting(false);

    if (result.success) {
      setStatus({
        success: true,
        message: 'Thank you! Your inquiry has been received. A senior principal architect will contact you within 24 hours.'
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: 'Interior Architecture',
        budget: '₹25L - ₹50L',
        message: ''
      });
    } else {
      setStatus({
        success: false,
        message: result.error || 'Unable to submit inquiry. Please verify your details or call our office.'
      });
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden">
      {/* Giant Background Watermark matching go.arch screenshot */}
      <div className="absolute top-12 right-10 watermark-text text-8xl md:text-[14rem] select-none opacity-20">
        contacts
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading matching "GET IN TOUCH" */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-white font-mono-num font-semibold">
            GET <span className="text-[#C5A880]">IN TOUCH</span>
          </span>
          <span className="w-16 h-[1px] bg-white/10"></span>
        </div>

        {/* 2-Column Layout matching go.arch screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
                HAVE A PROJECT IN MIND?
              </span>
              <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-white mb-4 leading-tight">
                Let’s Create Something Extraordinary.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-3">
                Whether you are planning a home, villa, office, commercial development, retail space, industrial facility or complete interior transformation, our team can help take your idea from concept to completion.
              </p>
              <p className="text-xs text-[#C5A880] font-mono-num uppercase tracking-wider">
                Tell us about your project. We’ll help you shape the vision.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono-num">
              <div className="flex items-center gap-3 text-neutral-200">
                <Phone className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <div>
                  <a href="tel:+919958323002" className="hover:text-[#C5A880] transition font-bold text-sm block">
                    +91 99583 23002
                  </a>
                  <span className="text-[11px] text-neutral-400">Direct Call & WhatsApp Consultation</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <Mail className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <a href="mailto:info@genrevinterio.com" className="hover:text-white transition">
                  info@genrevinterio.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#C5A880] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white block text-sm">Registered Office:</span>
                  <span className="text-xs text-neutral-300 leading-relaxed block mt-0.5">
                    C-587, Panki, Kanpur Nagar,<br />
                    Uttar Pradesh 208020
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-400">
                <Clock className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <span>Monday – Saturday: 10:00 AM – 07:30 PM IST</span>
              </div>
            </div>

            {/* Regional Network & Branch Offices */}
            <div className="p-5 rounded-2xl bg-[#14151B] border border-white/5 space-y-3 shadow-lg">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <span className="text-[10px] font-mono-num uppercase tracking-[0.2em] text-[#C5A880] font-semibold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>BRANCH OFFICES & REGIONAL NETWORK</span>
                </span>
                <span className="text-[9px] font-mono-num text-neutral-500 uppercase">North India</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { city: "Delhi NCR", lead: "Abhishek Singh" },
                  { city: "Noida", lead: "Abhishek Singh" },
                  { city: "New Delhi", lead: "Abhishek Singh" },
                  { city: "Ghaziabad", lead: "S. B. Gupta" },
                  { city: "Faridabad", lead: "Pankaj Sharma" },
                  { city: "Lucknow", lead: "Nitesh Bhaiya" },
                  { city: "Varanasi", lead: "Pushkar Srivastav" },
                  { city: "Bareilly", lead: "Shivani Singh" }
                ].map((b, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#C5A880]/30 transition group">
                    <span className="font-semibold text-white block text-[11px] group-hover:text-[#C5A880] transition-colors">{b.city}</span>
                    <span className="text-[10px] font-mono-num text-neutral-400">{b.lead}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919958323002?text=Hello%20Genrev%20Interio,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20and%20turnkey%20execution."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs font-semibold tracking-wider transition flex items-center gap-2"
              >
                <span>WhatsApp Us</span>
              </a>

              <a
                href="https://www.instagram.com/genrev.interio.pvt.ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#C5A880] text-neutral-300 hover:text-black border border-white/10 text-xs font-semibold tracking-wider transition flex items-center gap-2"
              >
                <span>Instagram @genrev.interio.pvt.ltd</span>
              </a>
            </div>

            {/* Turnkey Assurance Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs">
              <div className="flex items-center gap-2 text-[#C5A880] font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                Turnkey Execution & Vastu Guarantee
              </div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Site problem? We've got it covered. Complete transparency, on-time handover, and scientific spatial planning tailored to your family's legacy.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form - matching layout of go.arch screenshot */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#16171D] border border-white/10 shadow-2xl">
              {status && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs ${
                    status.success
                      ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/40 border border-rose-500/40 text-rose-300'
                  }`}
                >
                  {status.success ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] text-xs transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] text-xs transition"
                    />
                  </div>
                </div>

                {/* Row 2: Email and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] text-xs transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Private Estate / Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] text-xs transition"
                    />
                  </div>
                </div>

                {/* Service Interest & Approximate Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white focus:outline-none focus:border-[#C5A880] text-xs transition"
                    >
                      <option value="Residential Architecture">Residential Architecture</option>
                      <option value="Luxury Interior Design">Luxury Interior Design</option>
                      <option value="Commercial & Workplace">Commercial & Workplace</option>
                      <option value="Hospitality & Retreats">Hospitality & Retreats</option>
                      <option value="Turnkey Execution">Turnkey Execution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                      Target Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white focus:outline-none focus:border-[#C5A880] text-xs transition"
                    >
                      <option value="₹25L - ₹50L">₹25 Lakhs – ₹50 Lakhs</option>
                      <option value="₹50L - ₹1.5 Cr">₹50 Lakhs – ₹1.5 Crore</option>
                      <option value="₹1.5 Cr - ₹5 Cr">₹1.5 Crore – ₹5 Crore</option>
                      <option value="₹5 Cr+ / Ultra Luxury">₹5 Crore+ / Ultra Luxury</option>
                      <option value="International / Bespoke">International / Custom Scope</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                    Project Vision & Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your site location, scope of work, expected timelines, or design preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#111215] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C5A880] text-xs transition leading-relaxed resize-none"
                  />
                </div>

                {/* Submit Button matching "SEND ->" in go.arch screenshot */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-9 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#DFC49F] text-[#111215] font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#C5A880]/20 disabled:opacity-60 group"
                  >
                    <span>{submitting ? 'SENDING INQUIRY...' : 'SEND'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
