import { Rocket, ArrowDown, Code2, Briefcase, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Decorative orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-space-600/20 animate-float-slow" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-space-600/10 animate-float-slower" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-nebula-500/10 animate-pulse-glow" />
      </div>

      {/* Glowing planet */}
      <div className="absolute right-[8%] top-[25%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-nebula-600 via-stardust-600 to-space-800 opacity-30 blur-2xl animate-float-slow pointer-events-none" />
      <div className="absolute left-[10%] bottom-[20%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-accent-500 to-space-800 opacity-20 blur-2xl animate-float-slower pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-space-600/40 bg-space-800/30 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-twinkle" />
          <span className="font-mono text-xs tracking-widest text-nebula-200 uppercase">
            En órbita · Disponible para nuevos retos
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Carles Dulcet
        </h1>

        <p
          className="font-mono text-stardust-400 text-sm md:text-base tracking-widest uppercase mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Software Developer &amp; IT Director
        </p>

        <p
          className="text-nebula-100/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Profesional proactivo, de aprendizaje rápido y apasionado por la programación,
          con mentalidad inquieta y orientada a resolver problemas complejos del mundo real.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#experiencia"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-nebula-600 hover:bg-nebula-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-nebula-500/30"
          >
            <Briefcase className="w-4 h-4" />
            Ver Experiencia
          </a>
          <a
            href="#habilidades"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-space-600/50 hover:border-nebula-400/50 text-nebula-100 font-medium transition-all duration-300 hover:bg-space-700/30"
          >
            <Code2 className="w-4 h-4" />
            Habilidades
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-space-600/50 hover:border-accent-400/50 text-nebula-100 font-medium transition-all duration-300 hover:bg-space-700/30"
          >
            <GraduationCap className="w-4 h-4" />
            Contacto
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-nebula-300/60 hover:text-nebula-200 transition-colors animate-float-slow"
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDown className="w-6 h-6" />
      </button>

      {/* Rocket icon decorative */}
      <Rocket className="absolute top-28 right-10 w-6 h-6 text-nebula-400/30 animate-float-slow hidden lg:block" />
    </section>
  );
}
