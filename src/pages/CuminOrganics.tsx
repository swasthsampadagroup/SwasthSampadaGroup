import { Factory, Microscope, Package, Settings, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

const sections = [
  { icon: Factory, title: 'Manufacturing', text: 'Modern pharmaceutical manufacturing facilities designed for controlled, hygienic, and consistent medicine production.' },
  { icon: ShieldCheck, title: 'Quality', text: 'Rigorous quality-control processes at every stage, from raw material evaluation to finished-product packaging.' },
  { icon: Microscope, title: 'Research', text: 'Continuous focus on formulation improvement, product development, manufacturing processes, and healthcare innovation.' },
  { icon: Package, title: 'Production', text: 'Efficient and scalable production capabilities supporting a growing portfolio of pharmaceutical products and healthcare formulations.' },
  { icon: Settings, title: 'Infrastructure', text: 'Modern pharmaceutical infrastructure, equipment, and controlled manufacturing systems designed to support quality, safety, and operational efficiency.' },
  { icon: TrendingUp, title: 'Future Manufacturing', text: 'Expanding our manufacturing capabilities with new products, improved processes, and increased production capacity to meet evolving healthcare needs.' },
];

const specs = [
  { label: 'Processing Capacity', value: 'Large-scale organic processing' },
  { label: 'Quality Standards', value: 'International organic certifications' },
  { label: 'Product Range', value: 'Premium cumin and organic spices' },
  { label: 'Packaging', value: 'Hygienic, food-grade packaging' },
  { label: 'Storage', value: 'Climate-controlled warehousing' },
  { label: 'Testing', value: 'In-house laboratory testing' },
];

export default function CuminOrganics() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      <PageHero
        title="Cumin Organics"
        subtitle="Premium organic manufacturing with a focus on quality cumin production, research-driven processes, and world-class infrastructure."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Cumin Organics' }]}
      />

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionHeading
                eyebrow="Organic Manufacturing"
                title="Quality from Seed to Shelf"
              />
              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                Cumin Organics is the dedicated Pharmaceutical Manufacturing Division of Swasth Sampada Group, focused on the development and manufacturing of quality medicines designed to support better health and wellbeing.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                With a commitment to quality, safety, consistency, and responsible manufacturing, our pharmaceutical operations combine modern manufacturing practices with rigorous quality-control processes. We strive to ensure that every medicine manufactured under our brands meets defined quality standards and delivers dependable value to healthcare professionals and patients.
              </p>
              <p>
                Our manufacturing portfolio includes a growing range of healthcare products and formulations, developed with a focus on patient needs, product quality, and manufacturing excellence.
              </p>
            </div>
            <div className="reveal-right">
              <div className="bg-gradient-to-br from-forest-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <Factory size={300} className="absolute -bottom-10 -right-10 text-forest-800" />
                </div>
                <img src="./assets/Cumin_about.jpeg" alt="Cumin Organics" className="h-100 w-auto object-contain relative z-10" />
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
            eyebrow="Our Operations"
            title="Manufacturing Excellence"
            subtitle="Every aspect of our operation is designed to deliver premium organic products."
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

      {/* PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Our Products"
            title="Quality Pharmaceutical Products"
            subtitle="A growing portfolio of pharmaceutical medicines manufactured with a strong commitment to quality, safety, consistency, and healthcare."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                name: 'Pharmaceutical Medicines',
                desc: 'Quality medicines manufactured through controlled pharmaceutical processes with a strong focus on safety, consistency, and reliability.',
                image: './assets/009.jpeg',
              },
              {
                name: 'Healthcare Formulations',
                desc: 'A diverse range of pharmaceutical formulations developed and manufactured to support evolving healthcare requirements.',
                image: './assets/010.jpeg',
              },
              {
                name: 'Specialised Products',
                desc: 'Specialised healthcare products manufactured with careful attention to quality, formulation, reliability, and patient needs.',
                image: './assets/011.jpeg',
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-gradient-section p-5 md:p-6 card-hover reveal group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >

                {/* Product Image */}
                <div className="h-64 bg-white mb-6 relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="text-center px-3 pb-3">
                  <h3 className="font-heading text-xl font-semibold text-forest-900 mb-3">
                    {p.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TECHNICAL SPECS */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-500 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <SectionHeading
            centered
            light
            eyebrow="Specifications"
            title="Technical Specifications"
            subtitle="Our manufacturing capabilities and quality standards at a glance."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="glass p-6 flex items-center gap-4 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-gold-300" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-wide uppercase text-gray-400 font-semibold mb-0.5">{spec.label}</p>
                  <p className="font-body text-sm text-white">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Cumin Organics"
        subtitle="Discover premium organic manufacturing capabilities for your business needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}
