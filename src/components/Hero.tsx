import { Code2, Zap } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export default function Hero() {
  const { t } = useSettings();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="font-mono-upper text-[10px] text-brand-light mb-4">
            {t.hero.tagline}
          </div>
          <h1 className="text-6xl md:text-[82px] font-curious leading-[0.9] mb-4 text-[#1a1a1a] dark:text-white whitespace-pre-line min-h-[2.7em]">
            {t.hero.title1}<span className="text-brand-light">{t.hero.titleHighlight}</span>{t.hero.title2}
          </h1>
          <p className="text-lg text-[#666] dark:text-white/80 mb-8 max-w-[500px] leading-[1.6]">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="shimmer-btn inline-flex items-center justify-center bg-brand-light text-black font-mono-upper font-bold text-[12px] py-3 px-6 hover:opacity-90 transition-opacity"
            >
              {t.hero.btnDiscuss}
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center font-mono-upper text-[12px] py-3 px-6 text-[#1a1a1a] dark:text-white hover:text-brand-light transition-colors border border-transparent hover:border-neon"
            >
              {t.hero.btnWorks}
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full max-w-lg mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-light/10 to-transparent rounded-full blur-[100px] opacity-40" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full h-[80%]">
                <div className="flex flex-col gap-4">
                  <div className="flex-1 rounded-3xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden relative">
                    <div className="w-8 h-8 rounded-full bg-brand-light/10 flex items-center justify-center">
                      <Code2 size={16} className="text-brand-light" />
                    </div>
                    <div className="space-y-3 relative z-10">
                      <div className="h-1 w-1/2 bg-black/10 dark:bg-white/10 rounded-full" />
                      <div className="h-1 w-3/4 bg-black/10 dark:bg-white/10 rounded-full" />
                      <div className="h-1 w-1/3 bg-black/10 dark:bg-white/10 rounded-full" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-light/10 blur-2xl rounded-full translate-x-1/2 translate-y-1/2" />
                  </div>
                  <div className="h-32 rounded-3xl border border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#111] p-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                    <span className="font-mono-upper text-brand-light text-xs relative z-10">System_Ready</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 pt-12">
                  <div className="h-32 rounded-3xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 flex items-center justify-between">
                     <div className="font-curious text-4xl text-[#1a1a1a] dark:text-white">99.9%</div>
                     <Zap className="text-brand-light opacity-50" size={20} />
                  </div>
                  <div className="flex-1 rounded-3xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 flex flex-col items-start justify-end relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6">
                       <div className="w-2 h-2 rounded-full bg-brand-light" />
                     </div>
                     <div className="font-mono-upper text-[10px] text-black/40 dark:text-white/40 mb-3">Optimization</div>
                     <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-brand-light rounded-full" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
