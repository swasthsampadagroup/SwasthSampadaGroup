import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, ShieldCheck, Award, Users, Leaf, Lightbulb, Recycle, Heart, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import directorImage from '/assets/img1.jpeg';
import investorImage from '/assets/img2.jpeg';

const timeline = [
  { year: 'Foundation', title: 'The Beginning', text: 'Swasth Sampada Group was founded with a vision to build a diversified business spanning healthcare, agriculture, and sustainable energy.' },
  { year: 'Growth', title: 'Pharma Expansion', text: 'Established Swasth Sampada Healthcare Pvt. Ltd. and Simpsons Healthcare, expanding into quality pharmaceutical manufacturing.' },
  { year: 'Diversification', title: 'Farms & Organics', text: 'Ventured into organic farming, rose cultivation, and premium cumin manufacturing with Cumin Organics.' },
  { year: 'Future', title: 'Renewable Energy', text: 'Launched Wind Energy division focused on wind power generation and EV charging infrastructure for a greener tomorrow.' },
];

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'We conduct business with honesty, transparency, and ethical practices at every level.' },
  { icon: Leaf, title: 'Sustainability', text: 'Environmental responsibility is woven into every decision, from farming to manufacturing to energy.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We continuously invest in research and technology to deliver better products and solutions.' },
  { icon: Heart, title: 'Compassion', text: 'Our ultimate purpose is to improve lives — of our customers, employees, and communities.' },
  { icon: Award, title: 'Quality', text: 'Uncompromising standards across every division, every product, every single day.' },
  { icon: Users, title: 'People First', text: 'We believe our people are our greatest asset and invest in their growth and wellbeing.' },
];

const csr = [
  { icon: Heart, title: 'Healthcare Access', text: 'Supporting community health initiatives and providing access to quality medicines in underserved areas.' },
  { icon: Leaf, title: 'Green Initiatives', text: 'Tree plantation drives, sustainable farming education, and environmental conservation programs.' },
  { icon: Users, title: 'Community Welfare', text: 'Education support, skill development, and employment opportunities for local communities.' },
  { icon: Recycle, title: 'Sustainable Practices', text: 'Zero-waste manufacturing, water conservation, and renewable energy adoption across operations.' },
];

export default function About() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      <PageHero
        title="About 
        Swasth Sampada Group"
        subtitle="A diversified Indian business group building excellence across healthcare, agriculture, organic manufacturing, and renewable energy."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About Group' }]}
      />

      {/* STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionHeading
                eyebrow="Our Story"
                title="Built on a Foundation of Trust"
              />
              <p className="font-body text-base text-gray-600 leading-relaxed mb-2">
                Swasth Sampada Group was founded with a simple yet powerful belief: that a business can serve society while building sustainable value. Over the years, we have grown from a healthcare-focused enterprise into a diversified group with operations across pharmaceuticals, agriculture, organic manufacturing, and renewable energy.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-2">
                Each division operates with its own specialized expertise and infrastructure, yet all are united by a shared commitment to quality, sustainability, and innovation. We believe in building businesses that not only generate economic value but also create positive social and environmental impact.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                Today, Swasth Sampada Group stands as a testament to what can be achieved when vision, values, and execution come together — One Group, Four Divisions, One Shared Vision.
              </p>
            </div>
            <div className="reveal-right">
              <div className="aspect-square bg-gradient-to-br from-forest-50 to-gray-100 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <Sparkles size={300} className="absolute -top-10 -right-10 text-forest-800" />
                </div>
                <img
                  src="public/assets/about.jpeg"
                  alt="Swasth Sampada Group"
                  className="h-90 w-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
            subtitle="The principles that guide every decision we make and every product we deliver."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Target, title: 'Our Mission', text: 'To deliver excellence across healthcare, agriculture, organic manufacturing, and renewable energy — improving lives while protecting the planet for future generations.' },
              { icon: Eye, title: 'Our Vision', text: 'To be a globally recognized and trusted business group, known for innovation, sustainability, and an unwavering commitment to quality across all our divisions.' },
              { icon: ShieldCheck, title: 'Our Promise', text: 'To uphold the highest standards of integrity, quality, and sustainability in everything we do — from the medicines we make to the energy we generate.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 text-center card-hover reveal border-t-4 border-forest-700 shadow-lg"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 bg-forest-50 flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-forest-700" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-forest-900 mb-4">{item.title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Our Principles"
            title="Core Values"
            subtitle="The foundation of our culture and the compass that guides our growth."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-8 border border-gray-200 card-hover reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-forest-800 flex items-center justify-center mb-5 group-hover:bg-gold-400 transition-colors duration-300">
                  <v.icon size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-forest-900 mb-2">{v.title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-500 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <SectionHeading
            centered
            light
            eyebrow="Our Journey"
            title="The Swasth Sampada Timeline"
            subtitle="From a single vision to a diversified group spanning four industries."
          />
          <div className="mt-16 space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`flex gap-8 reveal ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="hidden md:block w-1/2" />
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gold-400 ring-4 ring-gold-400/30 absolute top-2 left-1/2 -translate-x-1/2" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gold-400/20" />
                </div>
                <div className="flex-1 pb-12">
                  <div className="bg-forest-900/50 glass p-6 border-l-2 border-gold-400">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-300 font-semibold mb-2">{item.year}</p>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* LEADERSHIP / PHILOSOPHY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-forest-700 mb-3">
              Our Leadership
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-forest-900 mb-5">
              Leadership with Vision & Purpose
            </h2>

            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>

            <p className="font-body text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Swasth Sampada Group is guided by visionary leadership committed to
              building responsible, sustainable, and future-ready businesses.
            </p>
          </div>

          {/* Directors & Investors */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Mr. Raghvendra Shukla */}
            <div className="group bg-[#FAFCFA] border border-gray-100
                      overflow-hidden hover:shadow-xl transition-all duration-500">

              <div className="relative h-[520px] overflow-hidden">
                <img
                  src={directorImage}
                  alt="Mr. Raghvendra Shukla - Director & Investor"
                  className="w-full h-full object-cover object-top
                       group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t
                          from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-body text-xs tracking-[0.2em] uppercase
                          text-gold-400 mb-2">
                    Director
                  </p>

                </div>
              </div>
              <h3 className="font-display text-3xl pt-4 px-8 text-black">
                Mr. Raghvendra Shukla
              </h3>

              <div className="p-8">
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  Mr. Raghvendra Shukla provides strategic leadership and direction
                  to the group while contributing to its long-term growth,
                  investment strategy, and future business development.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-gold-400"></div>

                  <span className="font-body text-xs uppercase tracking-wider
                             text-forest-700">

                  </span>
                </div>
              </div>
            </div>


            {/* Mrs. Smriti Shukla */}
            <div className="group bg-[#FAFCFA] border border-gray-100
                      overflow-hidden hover:shadow-xl transition-all duration-500">

              <div className="relative h-[520px] overflow-hidden">
                <img
                  src={investorImage}
                  alt="Mrs. Smriti Shukla - Director"
                  className="w-full h-full object-cover object-top
                       group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t
                          from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-body text-xs tracking-[0.2em] uppercase
                          text-gold-400 mb-2">
                    Director
                  </p>

                </div>
              </div>
              <h3 className="font-display text-3xl pt-4  px-8 text-black">
                Mrs. Smriti Shukla
              </h3>

              <div className="p-8">
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  Mrs. Smriti Shukla contributes to the group's strategic vision,
                  business growth, and investment initiatives, supporting the
                  development of sustainable and forward-looking ventures.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-gold-400"></div>

                  <span className="font-body text-xs uppercase tracking-wider
                             text-forest-700">
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Leadership Statement */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl text-forest-900 leading-relaxed">
              “Building businesses today with a vision for a healthier,
              sustainable, and prosperous tomorrow.”
            </p>
          </div>

        </div>
      </section>


      {/* CSR */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Giving Back"
            title="Corporate Social Responsibility"
            subtitle="We are committed to creating positive social and environmental impact through every division."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {csr.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 card-hover reveal text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-forest-50 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-forest-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">{item.title}</h3>
                <p className="font-body text-xs text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION & SUSTAINABILITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal-left p-10 bg-gradient-to-br from-forest-900 to-forest-950 text-white">
              <Lightbulb size={32} className="text-gold-300 mb-5" />
              <h3 className="font-heading text-2xl font-bold mb-4">Innovation</h3>
              <div className="w-12 h-0.5 bg-gold-400 mb-5" />
              <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">
                We invest in research and development across all divisions — from pharmaceutical formulations to organic farming techniques to renewable energy solutions.
              </p>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                Our upcoming product pipeline and future projects reflect our commitment to staying at the forefront of innovation.
              </p>
            </div>
            <div className="reveal-right p-10 bg-gradient-to-br from-navy-800 to-navy-950 text-white">
              <Recycle size={32} className="text-gold-300 mb-5" />
              <h3 className="font-heading text-2xl font-bold mb-4">Sustainability</h3>
              <div className="w-12 h-0.5 bg-gold-400 mb-5" />
              <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">
                From organic farming practices to wind energy generation, sustainability is embedded in our business model — not added as an afterthought.
              </p>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                We continuously work to reduce our environmental footprint while expanding our positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Why Choose Us"
            title="The Swasth Sampada Advantage"
            subtitle="Four reasons why partners, customers, and communities trust us."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Award, title: 'Quality Assurance', text: 'Uncompromising quality standards across every division and product line.' },
              { icon: Leaf, title: 'Sustainable Practices', text: 'Environmental responsibility embedded in our operations from farm to factory.' },
              { icon: Lightbulb, title: 'Innovation Driven', text: 'Continuous investment in research, technology, and future-ready solutions.' },
              { icon: Heart, title: 'Customer First', text: 'Every decision starts with what serves our customers and communities best.' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white shadow-lg flex items-center justify-center mx-auto mb-5 card-hover">
                  <item.icon size={26} className="text-forest-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-forest-900 mb-2">{item.title}</h3>
                <p className="font-body text-xs text-gray-600 leading-relaxed px-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
