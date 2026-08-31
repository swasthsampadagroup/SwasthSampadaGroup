import { useReveal } from '@/hooks/useReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function StatsBar() {
  const ref = useReveal();
  const stats = [
    { end: 4, suffix: '', label: 'Business Divisions' },
    { end: 10, suffix: '+', label: 'Companies' },
    { end: 25, suffix: '+', label: 'Years of Vision' },
    { end: 500, suffix: '+', label: 'Team Members' },
  ];

  return (
    <section ref={ref} className="bg-forest-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <p className="font-heading text-4xl md:text-5xl font-bold text-gold-300 mb-2">
              <AnimatedCounter end={s.end} suffix={s.suffix} />
            </p>
            <p className="font-body text-xs md:text-sm text-gray-300 tracking-wide uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
