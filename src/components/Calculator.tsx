import { useState } from 'react';
import { useSettings } from '../contexts/SettingsContext';

export default function Calculator() {
  const [pages, setPages] = useState(1);
  const [designLevel, setDesignLevel] = useState(1); // 1: Базовый, 2: Уникальный, 3: Премиум
  const [hasBackend, setHasBackend] = useState(false);
  
  const { t, language } = useSettings();

  const calculatePrice = () => {
    let base = 50000; // Базовая стоимость
    
    // Страницы
    base += (pages - 1) * 10000;
    
    // Дизайн
    if (designLevel === 2) base *= 1.5;
    if (designLevel === 3) base *= 2.5;

    // Бэкенд/Интеграции
    if (hasBackend) base += 80000;

    return Math.round(base);
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#f4f1eb] dark:bg-[#0a0a0a] transition-colors duration-700 ease-out">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono-upper text-brand-light text-lg">
            {t.calculator.title}
          </div>
        </div>

        <div className="bg-[#ffffff] dark:bg-[#111] rounded-[8px] p-6 md:p-12 shadow-lg dark:shadow-none border border-black/5 dark:border-transparent transition-colors duration-700 ease-out">
          <div className="space-y-10">
            
            {/* Ползунок страниц */}
            <div>
              <div className="flex justify-between items-end mb-4 font-mono-upper text-sm text-[#1a1a1a] dark:text-gray-300">
                <span>{t.calculator.pages}</span>
                <span className="text-brand-light text-xl">{pages}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="w-full h-[4px] bg-[#e0e0e0] dark:bg-[#333] rounded-[2px] appearance-none cursor-pointer accent-brand-light outline-none transition-colors"
              />
            </div>

            {/* Уровень дизайна */}
            <div>
              <div className="font-mono-upper text-sm text-[#1a1a1a] dark:text-white block mb-4">{t.calculator.designLevel}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { level: 1, name: t.calculator.designBasic, desc: t.calculator.designBasicDesc },
                  { level: 2, name: t.calculator.designUnique, desc: t.calculator.designUniqueDesc },
                  { level: 3, name: t.calculator.designPremium, desc: t.calculator.designPremiumDesc }
                ].map((item, idx) => (
                  <button
                    key={item.level}
                    onClick={() => setDesignLevel(item.level)}
                    className={`p-5 rounded-[4px] text-left border transition-colors duration-500 hover:-translate-y-1 ${
                      designLevel === item.level
                        ? 'border-brand-light bg-brand-light/10 dark:bg-brand-light/5'
                        : 'border-black/10 dark:border-[#333] hover:border-black/30 dark:hover:border-white/30 bg-transparent'
                    }`}
                  >
                    <div className="font-curious text-[#1a1a1a] dark:text-white mb-2 text-xl not-italic">{item.name}</div>
                    <div className="text-sm text-[#666] dark:text-gray-400">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Доп опции */}
            <div>
              <label 
                className="flex items-center gap-4 cursor-pointer p-4 rounded-[4px] border border-black/10 dark:border-[#333] hover:border-black/30 dark:hover:border-white/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={hasBackend}
                    onChange={(e) => setHasBackend(e.target.checked)}
                  />
                  <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${
                    hasBackend ? 'bg-brand-light border-brand-light' : 'border-gray-400 dark:border-gray-500'
                  }`}>
                    {hasBackend && (
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-lg text-[#1a1a1a] dark:text-white">{t.calculator.backend}</div>
                  <div className="text-base text-[#666] dark:text-gray-400">{t.calculator.backendDesc}</div>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 dark:border-[#333] flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
            <div className="flex items-center gap-4 w-full justify-between md:justify-start text-[#1a1a1a] dark:text-gray-300">
              <span className="font-mono-upper text-base">{t.calculator.total}</span>
              <span
                key={calculatePrice()}
                className="font-curious text-4xl text-[#1a1a1a] dark:text-white"
              >
                {calculatePrice().toLocaleString(language === 'ru' ? 'ru-RU' : 'en-US')} {t.calculator.currency}
              </span>
            </div>
            <a
              href="#contact"
              className="shimmer-btn w-full md:w-auto bg-brand-light text-black font-mono-upper font-bold text-[12px] py-3 px-6 hover:opacity-90 transition-opacity text-center"
            >
              {t.calculator.order}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
