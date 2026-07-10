import { useSettings } from '../contexts/SettingsContext';

export default function Footer() {
  const { t } = useSettings();
  
  return (
    <footer className="py-8 border-t border-black/10 dark:border-white/5 bg-[#fbf9f6] dark:bg-[#050505] transition-colors duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-curious text-2xl font-bold tracking-[-1px] text-[#1a1a1a] dark:text-white transition-colors duration-700">
          Em<span className="text-brand-light">KodZ</span>
        </div>
        <div className="text-gray-500 font-mono-upper text-sm">
          © {new Date().getFullYear()} EmKodZ Dev Studio. {t.footer.rights}.
        </div>
        <div className="flex items-center gap-6 font-mono-upper text-sm">
          <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">Behance</a>
          <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
