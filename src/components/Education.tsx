import { GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { education } from '@/data/cv';

export default function Education() {
  const edu = education;
  const Icon = edu.icon;

  return (
    <section id="educacion" className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4" /> Formación
          </p>
          <h2 className="section-title">Educación</h2>
        </div>

        <div className="glass-card glow-border p-8 md:p-10">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-nebula-500/15 flex items-center justify-center">
              <Icon className="w-7 h-7 text-nebula-300" />
            </div>

            <div className="flex-1">
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-xl font-semibold text-white hover:text-stardust-400 transition-colors"
              >
                {edu.institution}
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>

              <div className="flex items-center gap-1.5 mt-2 text-sm text-nebula-200/50">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
              </div>

              <p className="mt-4 text-nebula-100/90 font-medium">{edu.degree}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
