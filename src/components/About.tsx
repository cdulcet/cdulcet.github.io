import { User, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle flex items-center justify-center gap-2">
            <User className="w-4 h-4" /> Sobre Mí
          </p>
          <h2 className="section-title">Perfil Profesional</h2>
        </div>

        <div className="glass-card glow-border p-8 md:p-12">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
            {/* Avatar circle */}
            <div className="relative mx-auto md:mx-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-nebula-600 via-stardust-600 to-space-700 p-1">
                <div className="w-full h-full rounded-full bg-space-800 flex items-center justify-center">
                  <span className="font-display text-4xl md:text-5xl font-bold text-nebula-200">
                    CD
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-accent-500/20 border border-accent-400/40 flex items-center justify-center animate-twinkle">
                <Rocket className="w-5 h-5 text-accent-400" />
              </div>
            </div>

            <div className="space-y-4 text-nebula-100/80 leading-relaxed">
              <p className="text-lg md:text-xl text-white font-medium">
                Líder técnico con más de 10 años de experiencia en desarrollo de software,
                perfil full stack y especialización en backend.
              </p>
              <p>
                Amplia experiencia en diseño e implementación de APIs REST, arquitectura de
                software y gestión de bases de datos relacionales y NoSQL. Acostumbrado a
                tomar decisiones técnicas, coordinar equipos y aplicar buenas prácticas de
                desarrollo, con una visión práctica orientada a resultados.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { value: '10+', label: 'Años de experiencia' },
                  { value: 'Full Stack', label: 'Especialización Backend' },
                  { value: 'Pontevedra', label: 'Ubicación' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-space-700/30 border border-space-600/30"
                  >
                    <p className="font-display text-lg font-bold text-stardust-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-nebula-200/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
