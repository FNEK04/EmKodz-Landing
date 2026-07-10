import { useSettings } from '../contexts/SettingsContext';

const techData = {
  frontend: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux', 'Zustand'],
  backend: ['Node.js', 'NestJS', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  design: ['Figma', 'Framer', 'Spline', 'After Effects']
};

export default function TechStack() {
  const { t } = useSettings();

  return (
    <section id="tech-stack" className="py-24 bg-[#fbf9f6] dark:bg-[#050505] transition-colors duration-700 ease-out border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono-upper text-brand-light mb-6">
            {t.techStack.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-curious text-[#1a1a1a] dark:text-white max-w-2xl leading-[1.2]">
            {t.techStack.desc}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(techData).map(([category, techs], idx) => (
            <div key={idx}>
              <div className="text-sm font-mono-upper text-[#666] dark:text-gray-400 mb-6 border-b border-black/10 dark:border-white/10 pb-4">
                {t.techStack.categories[category as keyof typeof t.techStack.categories]}
              </div>
              <ul className="space-y-4">
                {techs.map((tech, techIdx) => (
                  <li key={techIdx} className="text-[#1a1a1a] dark:text-gray-200 text-base flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light/50 block" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
