import { Briefcase, ExternalLink, Calendar } from 'lucide-react';
import { experiences } from '@/data/cv';

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4" /> Trayectoria
          </p>
          <h2 className="section-title">Experiencia Profesional</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-500/40 via-space-600/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.logo;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${i}`}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-space-800 border-2 border-nebula-500/50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-nebula-300" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card glow-border p-6 hover:border-nebula-500/40 transition-all duration-500 hover:translate-y-[-2px]">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-white">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-stardust-400">{exp.role}</p>
                        </div>
                        {exp.projectUrl && (
                          <a
                            href={exp.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-nebula-300 hover:text-nebula-100 transition-colors"
                          >
                            {exp.project}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs text-nebula-200/50 font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>

                      <p className="text-sm text-nebula-100/70 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((h, hi) => (
                            <li
                              key={hi}
                              className="flex items-start gap-2.5 text-sm text-nebula-100/65 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-stardust-400 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-space-700/40 border border-space-600/30 text-xs text-nebula-200/80 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
