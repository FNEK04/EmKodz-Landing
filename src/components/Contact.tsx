import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useSettings();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel p-8 md:p-16 relative overflow-hidden">
          {/* Decor */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-light/10 rounded-full blur-[80px]" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="font-mono-upper text-brand-light mb-6">
                {t.contact.title}
              </div>
              <h2 className="text-4xl md:text-5xl font-curious mb-6 text-[#1a1a1a] dark:text-white leading-[0.9]">
                {t.contact.heading1}<br />
                <span className="text-brand-light">{t.contact.headingHighlight}</span>
              </h2>
              <p className="text-[#666] dark:text-gray-400 text-lg mb-10 max-w-md">
                {t.contact.desc}
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:hello@emkodz.ru" className="text-2xl text-[#1a1a1a] dark:text-white hover:text-brand-light dark:hover:text-brand-light transition-colors">hello@emkodz.ru</a>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <a href="tel:+79991234567" className="text-2xl text-[#1a1a1a] dark:text-white hover:text-brand-light dark:hover:text-brand-light transition-colors">+7 (999) 123-45-67</a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono-upper text-[10px] text-[#666] dark:text-gray-400">{t.contact.name}</label>
                    <input required type="text" className="w-full bg-transparent border-b-2 border-black/10 dark:border-[#333] px-0 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:border-brand-light focus:shadow-[0_1px_0_0_var(--brand-color)] transition-all duration-300 rounded-none" placeholder={t.contact.namePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono-upper text-[10px] text-[#666] dark:text-gray-400">{t.contact.contact}</label>
                    <input required type="text" className="w-full bg-transparent border-b-2 border-black/10 dark:border-[#333] px-0 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:border-brand-light focus:shadow-[0_1px_0_0_var(--brand-color)] transition-all duration-300 rounded-none" placeholder={t.contact.contactPlaceholder} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono-upper text-[10px] text-[#666] dark:text-gray-400">{t.contact.project}</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b-2 border-black/10 dark:border-[#333] px-0 py-3 text-[#1a1a1a] dark:text-white focus:outline-none focus:border-brand-light focus:shadow-[0_1px_0_0_var(--brand-color)] transition-all duration-300 resize-none rounded-none" placeholder={t.contact.projectPlaceholder} />
                </div>
                <button type="submit" className="shimmer-btn w-full bg-brand-light text-black font-mono-upper font-bold py-4 text-[12px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  {submitted ? t.contact.submitted : t.contact.submit}
                  {!submitted && <Send size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
