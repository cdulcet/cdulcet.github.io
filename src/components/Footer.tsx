import { Rocket } from 'lucide-react';
import { navLinks } from '@/data/cv';

export default function Footer() {
  return (
    <footer className="relative border-t border-space-600/30 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-nebula-400" />
          <span className="font-display font-bold text-white tracking-wide text-sm">
            Carles Dulcet
          </span>
          <span className="text-nebula-200/40 text-sm font-mono">· Software &amp; IT</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-nebula-200/50 hover:text-nebula-200 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p className="text-xs text-nebula-200/40 font-mono">
          © {new Date().getFullYear()} · Hecho entre estrellas
        </p>
      </div>
    </footer>
  );
}
