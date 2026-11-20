import { Satellite, Send } from 'lucide-react';
import { socialLinks } from '@/data/cv';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle flex items-center justify-center gap-2">
            <Satellite className="w-4 h-4" /> Comunicaciones
          </p>
          <h2 className="section-title">Contacto</h2>
          <p className="text-nebula-100/60 mt-4 max-w-lg mx-auto">
            ¿Tienes un proyecto en mente o quieres conectar? Transmite una señal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isEmail = link.icon.name === 'Mail';
            return (
              <a
                key={link.label}
                href={link.href}
                {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group glass-card glow-border p-6 flex items-center gap-4 hover:border-nebula-500/40 transition-all duration-500 hover:translate-y-[-2px]"
              >
                <div className="w-12 h-12 rounded-xl bg-nebula-500/15 flex items-center justify-center group-hover:bg-nebula-500/25 transition-colors">
                  <Icon className="w-6 h-6 text-nebula-300" />
                </div>
                <div className="flex-1">
                  <p className="font-display font-semibold text-white">{link.label}</p>
                  <p className="text-sm text-nebula-200/50 font-mono">
                    {link.href.replace('mailto:', '').replace('https://', '')}
                  </p>
                </div>
                <Send className="w-4 h-4 text-nebula-300/40 group-hover:text-stardust-400 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
