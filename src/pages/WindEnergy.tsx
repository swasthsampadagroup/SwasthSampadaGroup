import { Wind, Zap, TrendingUp, Building2, Leaf, Sun, Battery, Factory } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

const sections = [
  { icon: Wind, title: 'Renewable Energy', text: 'Clean, sustainable energy generation through wind power — reducing carbon emissions and powering communities.' },
  { icon: Zap, title: 'Wind Power', text: 'Modern wind turbines harnessing natural wind energy to generate electricity efficiently and reliably.' },
  { icon: TrendingUp, title: 'Future Projects', text: 'An ambitious pipeline of renewable energy projects in development, expanding our green energy capacity.' },
  { icon: Battery, title: 'EV Charging', text: 'Electric vehicle charging infrastructure supporting the transition to sustainable transportation.' },
  { icon: Building2, title: 'Green Infrastructure', text: 'Sustainable infrastructure development integrating renewable energy at every level.' },
  { icon: Leaf, title: 'Benefits', text: 'Environmental benefits, energy independence, and long-term sustainability for communities we serve.' },
];

const benefits = [
  { value: 'Clean', label: 'Energy Generation', text: 'Zero-emission electricity from wind power' },
  { value: 'Sustainable', label: 'Long-term Solution', text: 'Renewable energy that never runs out' },
  { value: 'Scalable', label: 'Growing Capacity', text: 'Projects designed for expansion' },
  { value: 'Green', label: 'EV Ready', text: 'Charging infrastructure for tomorrow' },
];

export default function WindEnergy() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      <PageHero
        title="Wind Energy"
        subtitle="Renewable energy solutions including wind power generation, EV charging infrastructure, and green energy projects for a sustainable future."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Wind Energy' }]}
      />

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionHeading
                eyebrow="Renewable Energy"
                title="Powering a Greener Future"
              />
              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                Swasth Sampada Group’s Wind Energy division is focused on building a cleaner, smarter, and more sustainable energy future. We are committed to harnessing the power of wind and developing renewable energy solutions that support the growing global transition toward clean electricity.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                Our vision extends beyond renewable power generation. We aim to create an integrated green-energy ecosystem that brings together wind energy, EV charging infrastructure, sustainable technology, and future-ready energy projects. By investing in clean energy infrastructure, we strive to contribute to a future where economic growth and environmental responsibility move forward together.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                From identifying opportunities for wind-powered electricity generation to developing modern EV charging facilities, our approach is centred on innovation, efficiency, reliability, and long-term sustainability.
              </p>
            </div>
            <div className="reveal-right">
              <div className="bg-gradient-to-br from-forest-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <Wind size={300} className="absolute -bottom-10 -right-10 text-forest-800" />
                </div>
                <img src="/assets/wind_about.jpeg" alt="Wind Energy" className="h-100 w-auto object-contain relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Our Capabilities"
            title="Energy Solutions"
            subtitle="Comprehensive renewable energy solutions for a sustainable tomorrow."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {sections.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 card-hover reveal group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-forest-50 flex items-center justify-center mb-5 group-hover:bg-forest-800 transition-colors duration-300">
                  <s.icon size={22} className="text-forest-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-forest-900 mb-2">{s.title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Why It Matters"
            title="Benefits of Wind Energy"
            subtitle="The impact of renewable energy extends far beyond electricity generation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-forest-50 flex items-center justify-center mx-auto mb-5 card-hover">
                  <Leaf size={26} className="text-forest-700" />
                </div>
                <p className="font-heading text-2xl font-bold text-forest-900 mb-1">{b.value}</p>
                <p className="font-body text-sm font-semibold text-forest-700 mb-1">{b.label}</p>
                <p className="font-body text-xs text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Power the Future With Us"
        subtitle="Explore partnership opportunities in renewable energy and green infrastructure."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}
