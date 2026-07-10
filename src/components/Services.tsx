import { Layout, Smartphone, Database, Palette, Search, ShieldCheck } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

const iconMap = [
  <Layout className="w-10 h-10" />,
  <Smartphone className="w-10 h-10" />,
  <Palette className="w-10 h-10" />,
  <Database className="w-10 h-10" />,
  <Search className="w-10 h-10" />,
  <ShieldCheck className="w-10 h-10" />
];

export default function Services() {
  const { t } = useSettings();
  
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono-upper text-brand-light mb-2">
            {t.services.title}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, idx) => (
            <div
              key={idx}
              className="border-left-neon bg-neon-gradient p-6 group card-glow hover:shadow-lg dark:hover:shadow-brand-light/5 transition-all duration-500 hover:-translate-y-1 rounded-[4px]"
            >
              <div className="w-10 h-10 text-brand-light mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,179,89,0.4)]">
                {iconMap[idx]}
              </div>
              <h3 className="font-curious text-[20px] text-[#1a1a1a] dark:text-white mb-2">{service.title}</h3>
              <p className="text-base text-[#666] dark:text-white/70 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
