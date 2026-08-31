import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  bgImage?: string;
  logo?: string;
  logoAlt?: string;
}

export default function PageHero({ title, subtitle, crumbs = [], logo, logoAlt }: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-20 ">
      {/* Decorative overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-forest-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
      </div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        {logo && (
          <div className="mb-8 flex justify-center animate-fade-in">
            <img src={logo} alt={logoAlt || title} className="h-20 w-auto object-contain" />
          </div>
        )}

        {/* Breadcrumbs */}
        {crumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            {crumbs.map((crumb, i) => (
              <div key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="font-body text-xs tracking-wide text-gray-300 hover:text-gold-300 transition-colors uppercase">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-body text-xs tracking-wide text-gold-300 uppercase">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={12} className="text-gray-500" />}
              </div>
            ))}
          </nav>
        )}

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight text-shadow animate-fade-up">
          {title}
        </h1>
        <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-6" />
        {subtitle && (
          <p className="font-body text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-up">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
