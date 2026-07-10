import { useSettings } from '../contexts/SettingsContext';

export default function FAQ() {
  const { t } = useSettings();
  
  return (
    <section id="faq" className="py-24 bg-[#fbf9f6] dark:bg-[#0a0a0a] transition-colors duration-700 ease-out">
      <div className="max-w-4xl mx-auto px-6">
        <div className="font-mono-upper text-brand-light mb-10">
          {t.faq.title}
        </div>
        
        <div className="space-y-4">
          {t.faq.items.map((faq, idx) => (
            <div key={idx} className="bg-[#ffffff] dark:bg-[#111] p-6 rounded-[8px] shadow-sm dark:shadow-none border border-black/5 dark:border-transparent transition-colors duration-700 ease-out">
              <div className="text-base text-[#666] dark:text-gray-300 mb-2 leading-relaxed">
                <b className="text-[#1a1a1a] dark:text-white">Q:</b> {faq.q}<br/>
                <b className="text-[#1a1a1a] dark:text-white mt-2 inline-block">A:</b> {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
