import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Microscope,
  Truck,
  Package,
  HeartPulse,
  Baby,
  Stethoscope,
  Users,
  Pill,
  FlaskConical,
} from 'lucide-react';

import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

/* =========================================================
   SWASTH SAMPADA HEALTHCARE - THERAPEUTIC AREAS
========================================================= */

const swasthTherapeuticAreas = [
  {
    title: 'Gynaecology',
    description:
      'Healthcare solutions focused on women’s health and gynaecological requirements.',
    icon: HeartPulse,
  },
  {
    title: 'Pediatrics',
    description:
      'Dedicated healthcare solutions designed to support the health and wellbeing of children.',
    icon: Baby,
  },
  {
    title: 'General Physician',
    description:
      'Pharmaceutical solutions supporting a broad range of general healthcare requirements.',
    icon: Stethoscope,
  },
  {
    title: 'Other Therapeutic Areas',
    description:
      'A growing portfolio addressing diverse therapeutic and healthcare requirements.',
    icon: Pill,
  },
];

/* =========================================================
   SIMPSON HEALTHCARE - THERAPEUTIC AREAS
========================================================= */

const simpsonTherapeuticAreas = [
  {
    title: "Women's Healthcare",
    description:
      'Focused healthcare solutions addressing the unique needs of women across different stages of life.',
    icon: HeartPulse,
  },
  {
    title: 'Pediatrics',
    description:
      'Specialised healthcare solutions with a focus on children’s health and wellbeing.',
    icon: Baby,
  },
  {
    title: 'Child Care',
    description:
      'Healthcare products developed with attention to the specific needs of children.',
    icon: Users,
  },
  {
    title: 'Other Healthcare Areas',
    description:
      'An expanding range of healthcare solutions supporting broader therapeutic requirements.',
    icon: ShieldCheck,
  },
];

/* =========================================================
   PHARMA CAPABILITIES
========================================================= */

const pharmaCapabilities = [
  {
    icon: ShieldCheck,
    title: 'Quality Focus',
    text: 'A strong commitment to quality, safety, consistency, and reliable pharmaceutical solutions.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    text: 'Dedicated manufacturing capabilities supporting the development of quality pharmaceutical products.',
  },
  {
    icon: Microscope,
    title: 'Research & Development',
    text: 'Continuous focus on product development, formulation improvement, and healthcare innovation.',
  },
  {
    icon: Truck,
    title: 'Distribution',
    text: 'A growing distribution network supporting reliable availability of pharmaceutical products.',
  },
  {
    icon: FlaskConical,
    title: 'Innovation',
    text: 'A forward-looking approach to pharmaceutical products and evolving healthcare requirements.',
  },
  {
    icon: Package,
    title: 'Product Integrity',
    text: 'Strong attention to product quality, packaging, consistency, and patient safety.',
  },
];

/* =========================================================
   COMMON BRANDS
========================================================= */

/* =========================================================
   MAIN PHARMA PAGE
========================================================= */

export default function Pharma() {
  const ref = useReveal();

  return (
    <div ref={ref}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title="Pharma Division"
        subtitle="Healthcare excellence through quality pharmaceutical solutions, trusted healthcare brands, and our own manufacturing portfolio."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Pharma' },
        ]}
      />

      {/* =====================================================
          SECTION 1 - PHARMA
      ===================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="reveal-left">

              <SectionHeading
                eyebrow="Pharma"
                title="Healthcare Built Around Quality"
                subtitle="Our pharmaceutical division brings together healthcare companies, common brands, and our own manufacturing portfolio."
              />

              <p className="font-body text-base text-gray-600 leading-relaxed mb-5">
                The Pharma division of Swasth Sampada Group is focused on
                delivering quality pharmaceutical and healthcare solutions
                with a strong commitment to safety, consistency, and patient
                wellbeing.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed mb-6">
                Our pharmaceutical portfolio brings together Swasth Sampada
                Healthcare, Simpson Healthcare, Common Brands, and our Own
                Manufacturing Brands under one integrated healthcare division.
              </p>

            </div>

            {/* RIGHT FEATURES */}
            <div className="reveal-right grid grid-cols-2 gap-4">

              {pharmaCapabilities.slice(0, 4).map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-gradient-section p-6 border-l-2 border-forest-700 card-hover"
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <Icon
                      size={24}
                      className="text-forest-700 mb-3"
                    />

                    <h4 className="font-heading text-base font-semibold text-forest-900 mb-2">
                      {feature.title}
                    </h4>

                    <p className="font-body text-xs text-gray-600 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 2 - SWASTH SAMPADA HEALTHCARE
      ===================================================== */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white p-8 md:p-10 lg:p-16 shadow-xl reveal">

            {/* COMPANY HEADER */}
            <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">

              {/* LOGO */}
              <div className="bg-gradient-to-br from-forest-50 to-gray-50 p-8 flex items-center justify-center flex-shrink-0 w-full lg:w-auto">
                <img
                  src="./assets/SSHealthcare1.png"
                  alt="Swasth Sampada Healthcare Pvt. Ltd."
                  className="h-28 w-40 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div>

                <p className="font-body text-xs tracking-[0.2em] uppercase font-semibold text-forest-700 mb-2">
                  Pharma Company
                </p>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                  Swasth Sampada Healthcare Pvt. Ltd.
                </h2>

                <div className="divider-green mb-5" />

                <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                  Swasth Sampada Healthcare Pvt. Ltd. is a key pharmaceutical
                  company within Swasth Sampada Group, focused on quality
                  healthcare products and pharmaceutical solutions.
                </p>

                <p className="font-body text-base text-gray-600 leading-relaxed">
                  With a commitment to quality, safety, consistency, and
                  healthcare needs, the company continues to build a growing
                  portfolio across multiple therapeutic areas.
                </p>

              </div>
            </div>

            {/* THERAPEUTIC AREAS */}
            <div className="mb-8">

              <SectionHeading
                eyebrow="Therapeutic Range"
                title="Swasth Sampada Healthcare"
                subtitle="Explore our therapeutic focus areas."
              />

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {swasthTherapeuticAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="p-6 border border-gray-200 card-hover reveal"
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <div className="w-11 h-11 bg-forest-50 flex items-center justify-center mb-4">
                      <Icon
                        size={20}
                        className="text-forest-700"
                      />
                    </div>

                    <h4 className="font-heading text-base font-semibold text-forest-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="font-body text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <Link
                to="/pharma/swasthsampadahealthcare"
                className="inline-flex items-center gap-2 text-forest-700 font-body text-sm font-semibold uppercase tracking-wide hover:text-forest-900 transition-colors"
              >
                Explore Swasth Sampada Healthcare
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 3 - SIMPSON HEALTHCARE
      ===================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white border border-gray-200 p-8 md:p-10 lg:p-16 shadow-lg reveal">

            {/* COMPANY HEADER */}
            <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">

              {/* LOGO */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 flex items-center justify-center flex-shrink-0 w-full lg:w-auto">
                <img
                  src="./assets/Healthcare1.png"
                  alt="Simpson Healthcare"
                  className="h-28 w-40 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div>

                <p className="font-body text-xs tracking-[0.2em] uppercase font-semibold text-forest-700 mb-2">
                  Pharma Company
                </p>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                  Simpson Healthcare
                </h2>

                <div className="w-16 h-0.5 bg-gold-400 mb-5" />

                <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                  Simpson Healthcare is a healthcare company within the
                  pharmaceutical division, with a focus on specialised
                  healthcare requirements and targeted product solutions.
                </p>

                <p className="font-body text-base text-gray-600 leading-relaxed">
                  Its healthcare portfolio supports areas including women’s
                  healthcare, pediatrics, child care, and other evolving
                  healthcare requirements.
                </p>

              </div>

            </div>

            {/* THERAPEUTIC RANGE */}

            <div className="mb-8">

              <SectionHeading
                eyebrow="Therapeutic Range"
                title="Simpson Healthcare"
                subtitle="Specialised healthcare solutions designed around specific patient needs."
              />

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {simpsonTherapeuticAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="p-6 border border-gray-200 card-hover reveal"
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <div className="w-11 h-11 bg-forest-50 flex items-center justify-center mb-4">
                      <Icon
                        size={20}
                        className="text-forest-700"
                      />
                    </div>

                    <h4 className="font-heading text-base font-semibold text-forest-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="font-body text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* BUTTON */}

            <div className="mt-10">

              <Link
                to="/Pharma/SimpsonHealthcare"
                className="inline-flex items-center gap-2 text-forest-700 font-body text-sm font-semibold uppercase tracking-wide hover:text-forest-900 transition-colors"
              >
                Explore Simpson Healthcare
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 4 - COMMON BRANDS
      ===================================================== */}
      {/* <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Common Brands"
            title="Brands Across Our Healthcare Network"
            subtitle="A portfolio of brands marketed through both Swasth Sampada Healthcare and Simpson Healthcare."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {commonBrands.map((brand, index) => (
              <div
                key={brand.name}
                className="bg-white p-8 border border-gray-200 card-hover reveal"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="w-12 h-12 bg-forest-800 flex items-center justify-center mb-5">
                  <Pill
                    size={21}
                    className="text-white"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-forest-900 mb-3">
                  {brand.name}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-5">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/pharma/commonbrands"
              className="inline-flex items-center gap-2 px-7 py-3 border border-forest-800 text-forest-800 text-sm font-semibold uppercase tracking-wide hover:bg-forest-800 hover:text-white transition-all duration-300"
            >
              View Common Brands
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          SECTION 5 - OWN MANUFACTURING BRANDS
      ===================================================== */}
      {/* <section className="py-24 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Our Own Manufacturing Brands"
            title="Selected Pharmaceutical Portfolio"
            subtitle="A selection of our in-house pharmaceutical brands, developed with a focus on quality, reliability, and healthcare needs."
          />
        
          <div className="grid lg:grid-cols-12 gap-6 mt-14">

            {manufacturingBrands.slice(0, 1).map((brand) => (
              <div
                key={brand.name}
                className="lg:col-span-5 relative overflow-hidden bg-forest-900 p-8 lg:p-10 min-h-[380px] flex flex-col justify-between group"
              >

                <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full border border-white/10" />
                <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full border border-white/10" />
                <div>
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8">
                    <Factory
                      size={22}
                      className="text-white"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-semibold">
                    Featured Brand
                  </span>
                  <h3 className="font-heading text-3xl font-semibold text-white mt-3 mb-5">
                    {brand.name}
                  </h3>
                  <p className="font-body text-sm leading-7 text-white/70 max-w-md">
                    {brand.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 text-white text-xs uppercase tracking-wider font-semibold">
                  In-House Manufacturing
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            ))}

        
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

              {manufacturingBrands.slice(1, 4).map((brand, index) => (
                <div
                  key={brand.name}
                  className="bg-white border border-gray-200 p-7 group hover:border-forest-700 hover:shadow-lg transition-all duration-300"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-10 h-10 bg-forest-50 flex items-center justify-center group-hover:bg-forest-800 transition-colors duration-300">
                      <Factory
                        size={18}
                        className="text-forest-700 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <span className="text-[10px] text-gray-400 font-semibold tracking-wider">
                      0{index + 2}
                    </span>

                  </div>

                  <h3 className="font-heading text-xl font-semibold text-forest-900 mt-7 mb-3 group-hover:text-forest-700 transition-colors">
                    {brand.name}
                  </h3>

                  <p className="font-body text-xs text-gray-600 leading-6">
                    {brand.description}
                  </p>

                </div>
              ))}

              <div className="bg-forest-50 border border-forest-100 p-7 flex flex-col justify-center items-start">

                <span className="text-[10px] uppercase tracking-[0.25em] text-forest-700 font-semibold">
                  Pharmaceutical Portfolio
                </span>

                <h3 className="font-heading text-xl font-semibold text-forest-900 mt-3 mb-3">
                  More Brands in Our Portfolio
                </h3>

                <p className="font-body text-xs text-gray-600 leading-6 mb-5">
                  Explore our complete range of proprietary pharmaceutical brands
                  across multiple therapeutic segments.
                </p>

                <Link
                  to="/pharma/our-own-manufacturing-brands"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-800 hover:text-forest-600 transition-colors"
                >
                  View Full Portfolio
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-gray-200 pt-8">
            <div>
              <p className="font-heading text-lg font-semibold text-forest-900">
                Quality-driven pharmaceutical manufacturing
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Discover our complete range of proprietary healthcare products.
              </p>
            </div>
            <Link
              to="/pharma/manufacturingbrands"
              className="inline-flex items-center gap-2 px-7 py-3 bg-forest-800 text-white text-sm font-semibold uppercase tracking-wide hover:bg-forest-700 transition-all duration-300"
            >
              Explore Full Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section> */}


      {/* =====================================================
          PHARMA CAPABILITIES
      ===================================================== */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Our Strength"
            title="Built Around Healthcare Excellence"
            subtitle="Our pharmaceutical approach combines quality, manufacturing, innovation, distribution, and product integrity."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {pharmaCapabilities.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white p-7 border border-gray-200 card-hover reveal"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >

                  <div className="w-12 h-12 bg-forest-50 flex items-center justify-center mb-5">
                    <Icon
                      size={21}
                      className="text-forest-700"
                    />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-forest-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {feature.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <CTASection
        title="Connect With Swasth Sampada Group"
        subtitle="Have questions about our pharmaceutical products, healthcare brands, manufacturing portfolio, or business opportunities? Our team is ready to connect with you."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}