import { useSettings } from '../contexts/SettingsContext';

const projects = [
  {
    id: 1,
    title: 'NeonSpace',
    categoryKey: 'Fintech App',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    title: 'GreenEat',
    categoryKey: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 3,
    title: 'AeroDynamics',
    categoryKey: 'Corporate Portal',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 4,
    title: 'CryptoFlow',
    categoryKey: 'Web3 Dashboard',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800',
    color: 'from-brand-light/20 to-brand-green/20'
  }
];

export default function Portfolio() {
  const { t } = useSettings();

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="font-mono-upper text-brand-light text-lg">
            {t.portfolio.title}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="portfolio-card group relative rounded-[4px] overflow-hidden cursor-pointer shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-brand-light/10 transition-shadow duration-500"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-img w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay`} />
                <div className="portfolio-overlay absolute inset-0 bg-black/40 dark:bg-black/50" />
                
                {/* Content Overlay */}
                <div className="portfolio-info absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 dark:from-black to-transparent flex flex-col justify-end">
                  <div className="font-mono-upper text-brand-light text-xl mb-2">{project.title}</div>
                  <div className="text-base text-white/90 dark:text-white/80">{t.portfolio.categories[project.categoryKey as keyof typeof t.portfolio.categories]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
