import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Leaf, Factory, Wind, Target, Eye, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

const divisions = [
  {
    title: 'Pharma',
    path: '/pharma',
    icon: Heart,
    description: 'Healthcare excellence through Swasth Sampada Healthcare Pvt. Ltd. and Simpsons Healthcare, delivering quality medicines across multiple therapeutic categories.',
    logos: [
      { src: './assets/SSHealthcare1.png', alt: 'Swasth Sampada Healthcare' },
    ],
    cta: 'Explore Pharma',
  },
  {
    title: 'Farms & Cottage',
    path: '/farms-cottage',
    icon: Leaf,
    description: 'Organic farming, rose cultivation, and a peaceful cottage retreat — nurturing nature through sustainable agricultural practices.',
    logos: [{ src: './assets/Farms.png', alt: 'Swasth Sampada Farms' }],
    cta: 'Explore Farms',
  },
  {
    title: 'Cumin Organics',
    path: '/cumin-organics',
    icon: Factory,
    description: 'Premium organic manufacturing with a focus on quality cumin production, research-driven processes, and world-class infrastructure.',
    logos: [{ src: './assets/Organics.png', alt: 'Cumin Organics' }],
    cta: 'Explore',
  },
  {
    title: 'Wind Energy',
    path: '/wind-energy',
    icon: Wind,
    description: 'Renewable energy solutions including wind power generation, EV charging infrastructure, and green energy projects for a sustainable future.',
    logos: [{ src: './assets/Wind.png', alt: 'Wind Energy' }],
    cta: 'Explore',
  },
];

const values = [
  { icon: Target, title: 'Our Mission', text: 'To deliver excellence across healthcare, agriculture, organic manufacturing, and renewable energy — improving lives while protecting the planet.' },
  { icon: Eye, title: 'Our Vision', text: 'To be a globally trusted business group recognized for innovation, sustainability, and an unwavering commitment to quality.' },
  { icon: ShieldCheck, title: 'Our Values', text: 'Integrity, sustainability, innovation, and compassion guide every decision we make and every product we deliver.' },
];


const orbitLogos = [
  {
    src: "./assets/SSHealthcare1.png",
    alt: "Healthcare",
    label: "SSHC",

  },
  {
    src: "./assets/Farms.png",
    alt: "Swasth Sampada Farms",
    label: "FARMS",
  },
  {
    src: "./assets/Healthcare1.png",
    alt: "Simpsons Healthcare",
    label: "HEALTHCARE",

  },
  {
    src: "./assets/Organics.png",
    alt: "Organic Products",
    label: "CUMIN",
  },
  {
    src: "./assets/Wind.png",
    alt: "Wind Energy",
    label: "ENERGY",
  },
  {
    src: "./assets/EV.png",
    alt: "EV Charging",
    label: "EV",
  },
];

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* HERO */}
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-forest-500 blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gold-400 blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="relative z-10 mx-auto px-4 py-10">
              <p className="font-body text-m tracking-[0.3em] uppercase text-gold-300 font-semibold mb-6 animate-fade-in">
                Swasth Sampada Group
              </p>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] text-shadow animate-fade-up">
                Building a Healthier,<br />
                <span className="text-gold-300">Greener</span> & Sustainable Tomorrow
              </h2>
              <div className="w-24 h-0.5 bg-gold-400 mb-8 animate-scale-in" />
              <p className="font-body text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-up">
                Swasth Sampada Group is committed to excellence across Healthcare, Agriculture, Organic Manufacturing and Renewable Energy.
              </p>
              <div className="flex flex-col sm:flex-row  gap-4 animate-fade-up">
                <Link to="/about" className="btn-gold ripple group">
                  Explore Our Divisions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-outline ripple">
                  Contact Us
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <h3 className="text-4xl font-bold text-gold-300">4</h3>
                  <p className="text-gray-300 uppercase text-sm tracking-wider">
                    Business Divisions
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gold-300">500+</h3>
                  <p className="text-gray-300 uppercase text-sm tracking-wider">
                    Products & SKUs
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gold-300">15+</h3>
                  <p className="text-gray-300 uppercase text-sm tracking-wider">
                    Years of Legacy
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Orbit Graphic */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-[600px] h-[600px]">
                {/* Rings */}
                <div className="absolute inset-8 rounded-full border border-gold-400/40 animate-spin-slow"></div>
                <div className="absolute inset-20 rounded-full border border-gold-400/20 animate-spin-reverse"></div>
                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-white shadow-2xl flex items-center justify-center p-4">
                    <img
                      src="./assets/Group.png"
                      alt="Swasth Sampada Group"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0">
                  {orbitLogos.map((logo, index) => {
                    const angle = (index * 360) / orbitLogos.length - 90; // Start at top
                    const radius = 40; // Percentage from centre (adjust 38–45)
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                    return (
                      <div
                        key={index}
                        className="absolute -translate-x-1/2 -translate-y-1/2 orbit-node"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-20 h-20 object-contain rounded-full bg-white p-2 shadow-2xl hover:scale-110 transition duration-300"
                        />
                        {logo.label && (
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-semibold">
                            {logo.label}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >


      {/* ABOUT */}
      < section className="py-24 bg-gradient-section" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="font-body text-xs tracking-[0.2em] uppercase font-semibold text-forest-700 mb-3">
                Who We Are
              </p>
              <h2 className="section-heading text-forest-900 mb-5 leading-tight">
                A Diversified Group<br />Built on Trust & Excellence
              </h2>
              <div className="divider-green mb-6" />
              <p className="font-body text-base text-gray-600 leading-relaxed mb-5">
                Swasth Sampada Group is a diversified Indian business group with operations spanning pharmaceuticals, agriculture, organic manufacturing, and renewable energy. Our strength lies in our commitment to quality, sustainability, and innovation across every division.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-8">
                From life-saving medicines to organic farms, from premium organic manufacturing to wind-powered energy infrastructure — we are building a future that is healthier, greener, and more sustainable.
              </p>
              <Link to="/about" className="btn-primary ripple group">
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 reveal-right">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border-l-4 border-forest-700 shadow-lg card-hover"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-forest-50 flex items-center justify-center flex-shrink-0">
                      <v.icon size={22} className="text-forest-700" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-forest-900 mb-2">{v.title}</h3>
                      <p className="font-body text-sm text-gray-600 leading-relaxed">{v.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* DIVISIONS */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Our Businesses"
            title="Four Divisions. One Vision."
            subtitle="Each division operates with its own dedicated expertise, infrastructure, and leadership — yet all share a common commitment to excellence and sustainability."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {divisions.map((d, i) => (
              <div
                key={d.title}
                className="group bg-white border border-gray-200 overflow-hidden card-hover reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Logo header */}
                <div className="bg-gradient-to-br from-forest-50 to-gray-50 h-75 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <d.icon size={200} className="absolute -bottom-10 -right-10 text-forest-800" />
                  </div>
                  <img
                    src={d.logos[0].src}
                    alt={d.logos[0].alt}
                    className="h-40 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-forest-800 flex items-center justify-center">
                      <d.icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-forest-900">{d.title}</h3>
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">{d.description}</p>
                  <Link
                    to={d.path}
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-forest-700 hover:text-gold-500 transition-colors group/cta uppercase tracking-wide"
                  >
                    {d.cta}
                    <ArrowRight size={15} className="group-hover/cta:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* BRAND MESSAGE */}
      < section className="py-24 bg-forest-950 relative overflow-hidden" >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-forest-500 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight reveal">
            One Group. Four Divisions.<br/>
          </p>
            <span className="text-gold-300 text-xl md:text-3xl font-bold my-4">Endless Possibilities.</span>
          <div className="w-20 h-0.5 bg-gold-400 mx-auto my-4 reveal" />
          <p className="font-body text-lg text-gray-300 leading-relaxed reveal">
            Building Health. Cultivating Nature. Manufacturing Quality. Powering the Future.
          </p>
        </div>
      </section >

      <CTASection />
    </div >
  );
}
