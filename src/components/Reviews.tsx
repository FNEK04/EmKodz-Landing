import { Quote } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export default function Reviews() {
  const { t } = useSettings();
  
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <div className="font-mono-upper text-brand-light">
            {t.reviews.title}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.items.map((review, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full card-glow hover:shadow-xl dark:hover:shadow-brand-light/5 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="text-black/20 dark:text-white/20 w-12 h-12 mb-6" />
              <p className="text-lg leading-[1.6] text-[#1a1a1a] dark:text-gray-100 opacity-90 flex-grow mb-8 font-curious">
                "{review.text}"
              </p>
              <div className="flex flex-col mt-auto border-t border-black/10 dark:border-[#333] border-dashed pt-4">
                <div className="text-right">
                  <div className="text-sm text-[#666] dark:text-gray-300 opacity-80">— {review.name}, {review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
