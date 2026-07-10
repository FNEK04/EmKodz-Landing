import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useState } from 'react';
import { useSettings } from '../contexts/SettingsContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, language, setLanguage, t } = useSettings();

  const links = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.techStack, href: '#tech-stack' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.calculator, href: '#calculator' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-black/5 dark:border-white/5 transition-colors duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="font-curious text-2xl font-bold tracking-[-1px] text-[#1a1a1a] dark:text-white group-hover:text-brand-light transition-colors duration-500">
            Em<span className="text-brand-light">KodZ</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono-upper text-sm text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-black/10 dark:border-white/10">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-[#666] dark:text-gray-400 hover:text-brand-light transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')} className="text-[#666] dark:text-gray-400 hover:text-brand-light transition-colors font-mono-upper text-sm flex items-center gap-1">
              <Globe size={16} /> {language.toUpperCase()}
            </button>
          </div>
          <a
            href="#contact"
            className="font-mono-upper text-sm text-brand-light hover:text-[#1a1a1a] dark:hover:text-white transition-colors ml-4"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="md:hidden absolute top-20 left-0 right-0 bg-[#ffffff] dark:bg-[#0a0a0a] border-b border-black/5 dark:border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#1a1a1a] dark:text-gray-300 hover:text-brand-light"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-black/10 dark:border-white/10">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-[#1a1a1a] dark:text-gray-300 hover:text-brand-light transition-colors flex items-center gap-2">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />} Theme
            </button>
            <button onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')} className="text-[#1a1a1a] dark:text-gray-300 hover:text-brand-light transition-colors font-mono-upper text-sm flex items-center gap-2">
              <Globe size={16} /> {language.toUpperCase()}
            </button>
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-center px-5 py-3 rounded-xl bg-brand-light text-black font-bold text-lg"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
