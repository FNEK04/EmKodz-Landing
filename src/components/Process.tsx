import { useSettings } from '../contexts/SettingsContext';

export default function Process() {
  const { t } = useSettings();

  return (
    <section id="process" className="py-24 bg-[#f4f1eb] dark:bg-[#0a0a0a] transition-colors duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-6">
        <div className="font-mono-upper text-brand-light mb-12">
          {t.process.title}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.items.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 border-t border-black/10 dark:border-white/10 pt-8 mt-4"
            >
              <div className="absolute -top-5 left-6 bg-[#f4f1eb] dark:bg-[#0a0a0a] px-2 font-mono text-3xl text-[#1a1a1a]/20 dark:text-white/20 transition-colors duration-700 ease-out">
                {item.step}
              </div>
              <h3 className="text-xl font-curious text-[#1a1a1a] dark:text-white mb-4 mt-2">
                {item.title}
              </h3>
              <p className="text-[#666] dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
