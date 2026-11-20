import { useEffect, useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { navLinks } from '@/data/cv';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-950/80 backdrop-blur-xl border-b border-space-600/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick('inicio')}
          className="flex items-center gap-2 group"
        >
          <Rocket className="w-5 h-5 text-nebula-400 group-hover:text-stardust-400 transition-colors" />
          <span className="font-display font-bold text-white tracking-wide">C.DULCET</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === link.id
                    ? 'text-nebula-300 bg-nebula-500/10'
                    : 'text-space-500 hover:text-nebula-200 hover:bg-space-700/30'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-nebula-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-space-900/95 backdrop-blur-xl border-t border-space-600/30">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-nebula-300 bg-nebula-500/10'
                      : 'text-nebula-100 hover:bg-space-700/40'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
