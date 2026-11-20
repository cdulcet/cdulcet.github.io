import { Terminal } from 'lucide-react';
import { skillCategories } from '@/data/cv';

export default function Skills() {
  return (
    <section id="habilidades" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> Stack Tecnológico
          </p>
          <h2 className="section-title">Habilidades</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-card glow-border p-6 hover:border-nebula-500/40 transition-colors duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nebula-500/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-nebula-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-nebula-100/90">{skill.name}</span>
                        <span className="font-mono text-xs text-stardust-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-space-700/60 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-nebula-500 to-stardust-400 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
