import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  X,
  Pill,
  Package,
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  Factory,
  HeartPulse,
  Baby,
  Stethoscope,
  Mail,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';

/* =========================================================
   TYPES
========================================================= */

type TherapeuticArea = {
  name: string;
  icon: React.ElementType;
  description: string;
};

type ManufacturingMedicine = {
  id: number;
  name: string;
  category: string;
  dosage: string;
  image?: string;
};

/* =========================================================
   THERAPEUTIC AREAS
========================================================= */

const therapeuticAreas: TherapeuticArea[] = [
  {
    name: 'Specialised Healthcare',
    icon: Stethoscope,
    description:
      'Focused pharmaceutical solutions developed for specific healthcare requirements.',
  },
  {
    name: 'Healthcare Supplements',
    icon: HeartPulse,
    description:
      'Healthcare and nutritional products supporting evolving wellness requirements.',
  },
  {
    name: 'Child Care',
    icon: Baby,
    description:
      'Products developed with attention to the specific healthcare needs of children.',
  },
  {
    name: "Women's Healthcare",
    icon: HeartPulse,
    description:
      'Focused healthcare solutions designed around women’s healthcare requirements.',
  },
  {
    name: 'General Healthcare',
    icon: Pill,
    description:
      'A growing range of healthcare products addressing broader therapeutic requirements.',
  },
];

/* =========================================================
   OWN MANUFACTURING MEDICINES
========================================================= */

const manufacturingMedicines: ManufacturingMedicine[] = [
  {
    id: 1,
    name: 'SS UTI',
    category: 'Specialised Healthcare',
    dosage: 'Tablet',
    image: './Images/SS_Uti.png',
  },
  {
    id: 2,
    name: 'SS ZYNE',
    category: 'Healthcare Supplements',
    dosage: 'Tablet',
    image: './Images/SS_Zyne.png',
  },
  {
    id: 3,
    name: 'Z-FIT',
    category: 'General Healthcare',
    dosage: 'Tablet',
    image: './Images/Z_fit.png',
  },
  {
    id: 4,
    name: 'SS BABY C',
    category: 'Child Care',
    dosage: 'Drops',
    image: './Images/c_drop.png',
  },
  {
    id: 5,
    name: 'L-CO9-D',
    category: 'General Healthcare',
    dosage: 'Tablet',
    image: './Images/lco9d.png',
  },
  {
    id: 6,
    name: 'SS ZYNE SYRUP',
    category: 'Healthcare Supplements',
    dosage: 'Syrup',
    image: './Images/SS_Zyne_Sryup.png',
  },
  {
    id: 7,
    name: 'ENTRARICH-10',
    category: "Women's Healthcare",
    dosage: 'Tablet',
    image: './Images/Entrarich_10.png',
  },
  {
    id: 8,
    name: 'ENTRARICH CAP',
    category: "Women's Healthcare",
    dosage: 'Capsule',
    image: './Images/ENTRA_RICH.png',
  },
  {
    id: 9,
    name: 'SIMFERT MAX',
    category: "Women's Healthcare",
    dosage: 'Tablet',
    image: './Images/Simfert_max.png',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ManufacturingBrands() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const [selectedMedicine, setSelectedMedicine] =
    useState<ManufacturingMedicine>(
      manufacturingMedicines[0]
    );

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredMedicines = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return manufacturingMedicines.filter((medicine) => {
      const matchesCategory =
        category === 'All' ||
        medicine.category === category;

      const matchesSearch =
        !searchValue ||
        medicine.name
          .toLowerCase()
          .includes(searchValue) ||
        medicine.category
          .toLowerCase()
          .includes(searchValue) ||
        medicine.dosage
          .toLowerCase()
          .includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  /* =======================================================
     SELECT PRODUCT
  ======================================================= */

  const handleSelectMedicine = (
    medicine: ManufacturingMedicine
  ) => {
    setSelectedMedicine(medicine);

    setTimeout(() => {
      document
        .getElementById('product-details')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title="Our Own Manufacturing Brands"
        subtitle="A focused portfolio of pharmaceutical and healthcare brands developed around quality, consistency and evolving healthcare requirements."
        crumbs={[
          {
            label: 'Home',
            path: '/',
          },
          {
            label: 'Pharma',
            path: '/pharma',
          },
          {
            label: 'Our Own Manufacturing Brands',
          },
        ]}
      />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="border border-gray-100 shadow-sm bg-white p-8 md:p-12 lg:p-16">

            <div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-center">

              {/* MANUFACTURING ICON */}

              <div className="flex justify-center">

                <div className="w-48 h-48 md:w-52 md:h-52 bg-gradient-section border border-gray-100 flex items-center justify-center">

                  <Factory
                    size={90}
                    strokeWidth={1.1}
                    className="text-forest-700"
                  />

                </div>

              </div>

              {/* CONTENT */}

              <div>

                <p className="font-body text-xs tracking-[0.28em] uppercase font-semibold text-forest-700 mb-3">
                  In-House Pharmaceutical Portfolio
                </p>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
                  Quality Brands. Focused Healthcare.
                </h1>

                <div className="w-16 h-0.5 bg-forest-700 mt-5 mb-7" />

                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-5">
                  Our own manufacturing portfolio brings together
                  a focused selection of pharmaceutical and healthcare
                  brands developed with an emphasis on quality,
                  consistency and evolving healthcare requirements.
                </p>

                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed">
                  From specialised healthcare products and nutritional
                  solutions to child-care and women’s healthcare
                  products, our portfolio continues to grow around
                  changing healthcare needs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          THERAPEUTIC RANGE
      ===================================================== */}

      <section className="py-20 md:py-24 bg-gradient-section">

        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Our Portfolio"
            title="Healthcare Categories"
            subtitle="Explore our manufacturing brands across focused healthcare categories."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6 mt-12">

            {therapeuticAreas.map((area) => {

              const Icon = area.icon;

              const isSelected =
                category === area.name;

              return (

                <button
                  key={area.name}
                  type="button"
                  onClick={() =>
                    setCategory(
                      isSelected
                        ? 'All'
                        : area.name
                    )
                  }
                  className={`
                    text-left
                    bg-white
                    border
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    ${isSelected
                      ? 'border-forest-700 shadow-lg'
                      : 'border-gray-200'
                    }
                  `}
                >

                  <div
                    className={`
                      w-11
                      h-11
                      flex
                      items-center
                      justify-center
                      mb-5
                      ${isSelected
                        ? 'bg-forest-800'
                        : 'bg-forest-50'
                      }
                    `}
                  >

                    <Icon
                      size={21}
                      className={
                        isSelected
                          ? 'text-white'
                          : 'text-forest-700'
                      }
                    />

                  </div>

                  <h3 className="font-heading text-base font-semibold text-forest-900 mb-3">
                    {area.name}
                  </h3>

                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {area.description}
                  </p>

                </button>

              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Our Own Brands"
            title="Manufacturing Portfolio"
            subtitle="Explore our complete range of in-house pharmaceutical and healthcare brands."
          />

          {/* =================================================
              SEARCH + FILTER
          ================================================= */}

          <div className="mt-12">

            <div className="bg-gradient-section border border-gray-100 p-5 md:p-6">

              <div className="grid lg:grid-cols-[1fr_auto] gap-4">

                {/* SEARCH */}

                <div className="relative">

                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search products, categories or dosage..."
                    className="
                      w-full
                      bg-white
                      border
                      border-gray-200
                      pl-11
                      pr-4
                      py-4
                      text-sm
                      text-gray-700
                      outline-none
                      focus:border-forest-700
                      transition-colors
                    "
                  />

                </div>

                {/* FILTER */}

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="
                    min-w-[250px]
                    bg-white
                    border
                    border-gray-200
                    px-5
                    py-4
                    text-sm
                    text-gray-700
                    outline-none
                    focus:border-forest-700
                  "
                >

                  <option value="All">
                    All Healthcare Areas
                  </option>

                  {therapeuticAreas.map((area) => (

                    <option
                      key={area.name}
                      value={area.name}
                    >
                      {area.name}
                    </option>

                  ))}

                </select>

              </div>

            </div>

          </div>

          {/* =================================================
              RESULTS BAR
          ================================================= */}

          <div className="flex flex-wrap items-center justify-between gap-4 mt-7 mb-6">

            <p className="font-body text-sm text-gray-500">

              Showing{' '}

              <span className="font-semibold text-forest-800">
                {filteredMedicines.length}
              </span>{' '}

              of {manufacturingMedicines.length} products

            </p>

            {(category !== 'All' || search) && (

              <button
                type="button"
                onClick={() => {
                  setCategory('All');
                  setSearch('');
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-forest-700
                  hover:text-forest-900
                "
              >

                Clear Filters

                <X size={14} />

              </button>

            )}

          </div>

          {/* =================================================
              PRODUCT AREA
          ================================================= */}

          <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-start">

            {/* =================================================
                LEFT PRODUCT LIST
            ================================================= */}

            <div className="border border-gray-200 bg-white">

              {/* HEADER */}

              <div className="px-6 py-5 border-b border-gray-200">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
                      Product List
                    </p>

                    <h3 className="font-heading text-xl font-semibold text-forest-900 mt-1">
                      Own Manufacturing Brands
                    </h3>

                  </div>

                  <div className="w-9 h-9 bg-forest-50 flex items-center justify-center">

                    <Package
                      size={18}
                      className="text-forest-700"
                    />

                  </div>

                </div>

              </div>

              {/* LIST */}

              <div className="max-h-[650px] overflow-y-auto">

                {filteredMedicines.length > 0 ? (

                  filteredMedicines.map((medicine) => {

                    const active =
                      selectedMedicine.id === medicine.id;

                    return (

                      <button
                        key={medicine.id}
                        type="button"
                        onClick={() =>
                          handleSelectMedicine(
                            medicine
                          )
                        }
                        className={`
                          w-full
                          text-left
                          px-6
                          py-5
                          border-b
                          border-gray-100
                          transition-all
                          duration-200
                          ${active
                            ? 'bg-forest-50 border-l-4 border-l-forest-700'
                            : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                          }
                        `}
                      >

                        <div className="flex items-start justify-between gap-4">

                          <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-2 mb-2">

                              <h4
                                className={`
                                  font-heading
                                  text-base
                                  font-semibold
                                  ${active
                                    ? 'text-forest-900'
                                    : 'text-gray-800'
                                  }
                                `}
                              >
                                {medicine.name}
                              </h4>

                            </div>

                            <p className="text-xs text-gray-500">
                              {medicine.category}
                            </p>

                          </div>

                          <ArrowRight
                            size={16}
                            className={`
                              flex-shrink-0
                              mt-1
                              ${active
                                ? 'text-forest-700'
                                : 'text-gray-300'
                              }
                            `}
                          />

                        </div>

                      </button>

                    );

                  })

                ) : (

                  <div className="py-16 px-6 text-center">

                    <Search
                      size={30}
                      className="mx-auto text-gray-300 mb-4"
                    />

                    <h4 className="font-heading font-semibold text-forest-900 mb-2">
                      No Products Found
                    </h4>

                    <p className="text-sm text-gray-500">
                      Try another search term or category.
                    </p>

                  </div>

                )}

              </div>

            </div>

            {/* =================================================
                RIGHT PRODUCT DETAILS
            ================================================= */}

            <div
              id="product-details"
              className="border border-gray-200 bg-white lg:sticky lg:top-28"
            >

              {selectedMedicine && (

                <>

                  {/* PRODUCT IMAGE */}

                  <div className="relative bg-gradient-section min-h-[300px] md:min-h-[360px] flex items-center justify-center p-10">
                    <div className="w-56 h-56 md:w-64 md:h-64 bg-white shadow-sm border border-gray-100 flex items-center justify-center p-6">

                      {selectedMedicine.image ? (

                        <img
                          src={selectedMedicine.image}
                          alt={selectedMedicine.name}
                          className="
                            max-w-full
                            max-h-full
                            object-contain
                            transition-all
                            duration-300
                          "
                        />

                      ) : (

                        <Pill
                          size={80}
                          strokeWidth={1.1}
                          className="text-forest-700"
                        />

                      )}

                    </div>

                  </div>

                  {/* PRODUCT CONTENT */}

                  <div className="p-7 md:p-9">

                    {/* TAGS */}

                    <div className="flex flex-wrap gap-2 mb-5">

                      <span className="inline-flex items-center bg-forest-50 text-forest-700 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide">
                        {selectedMedicine.category}
                      </span>

                      <span className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide">
                        {selectedMedicine.dosage}
                      </span>

                    </div>

                    {/* NAME */}

                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 leading-tight mb-5">
                      {selectedMedicine.name}
                    </h2>

                    <div className="w-14 h-0.5 bg-gold-400 mb-7" />

                    <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                      An in-house manufacturing brand from
                      the Swasth Sampada pharmaceutical portfolio,
                      developed to support specific healthcare
                      requirements.
                    </p>

                    {/* PRODUCT INFORMATION */}

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">

                      <div className="border border-gray-100 p-5">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                          Product
                        </p>

                        <p className="font-heading font-semibold text-forest-900">
                          {selectedMedicine.name}
                        </p>

                      </div>

                      <div className="border border-gray-100 p-5">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                          Dosage Form
                        </p>

                        <p className="font-heading font-semibold text-forest-900">
                          {selectedMedicine.dosage}
                        </p>

                      </div>

                      <div className="border border-gray-100 p-5 sm:col-span-2">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                          Healthcare Area
                        </p>

                        <p className="font-heading font-semibold text-forest-900">
                          {selectedMedicine.category}
                        </p>

                      </div>

                    </div>

                    {/* ACTIONS */}

                    <div className="flex flex-wrap gap-3">

                      <Link
                        to="/contact"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-6
                          py-3.5
                          bg-forest-800
                          text-white
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wide
                          hover:bg-forest-700
                          transition-colors
                        "
                      >

                        Product Enquiry

                        <ArrowRight size={14} />

                      </Link>

                      <button
                        type="button"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-6
                          py-3.5
                          border
                          border-gray-200
                          text-gray-700
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wide
                          hover:border-forest-700
                          hover:text-forest-700
                          transition-colors
                        "
                        onClick={() => {
                          window.location.href =
                            'mailto:info@swasthsampada.in?subject=' +
                            encodeURIComponent(
                              `Product Enquiry - ${selectedMedicine.name}`
                            );
                        }}
                      >

                        <Mail size={14} />

                        Enquire By Email

                      </button>

                    </div>

                  </div>

                </>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUALITY / MANUFACTURING SECTION
      ===================================================== */}

      <section className="py-20 md:py-24 bg-gradient-section">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <p className="font-body text-xs tracking-[0.28em] uppercase font-semibold text-forest-700 mb-3">
                Manufacturing Excellence
              </p>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
                Built Around Quality & Consistency
              </h2>

              <div className="w-16 h-0.5 bg-gold-400 mt-6 mb-7" />

              <p className="font-body text-base text-gray-600 leading-relaxed mb-5">
                Our own manufacturing portfolio reflects a focused
                approach to pharmaceutical and healthcare products,
                with attention to quality, consistency and dependable
                manufacturing processes.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed">
                The portfolio continues to expand across specialised
                healthcare, nutritional products, child care,
                women’s healthcare and other evolving healthcare
                requirements.
              </p>

            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: ShieldCheck,
                  title: 'Quality Focus',
                  text: 'Strong attention to product quality and consistency.',
                },
                {
                  icon: FlaskConical,
                  title: 'Controlled Processes',
                  text: 'Focused processes supporting dependable healthcare products.',
                },
                {
                  icon: Package,
                  title: 'Product Reliability',
                  text: 'A portfolio developed around evolving healthcare requirements.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Growing Portfolio',
                  text: 'Continuously expanding brands across healthcare categories.',
                },
              ].map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="
                      bg-white
                      border
                      border-gray-200
                      p-6
                      md:p-7
                      hover:-translate-y-1
                      hover:shadow-md
                      transition-all
                      duration-300
                    "
                  >

                    <div className="w-10 h-10 bg-forest-50 flex items-center justify-center mb-5">

                      <Icon
                        size={19}
                        className="text-forest-700"
                      />

                    </div>

                    <h3 className="font-heading text-base font-semibold text-forest-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PORTFOLIO SUMMARY
      ===================================================== */}

      <section className="bg-forest-900 py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-3 gap-8 md:gap-12 text-center">

            {/* 09 BRANDS */}

            <div>

              <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                09
              </p>

              <p className="font-body text-xs uppercase tracking-[0.2em] text-white/60 mt-2">
                Own Brands
              </p>

            </div>

            {/* CATEGORIES */}
            <div className="sm:border-l sm:border-white/10">
              <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                05+
              </p>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-white/60 mt-2">
                Healthcare Categories
              </p>
            </div>
            {/* DOSAGE */}
            <div className="sm:border-l sm:border-white/10">
              <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                Multiple
              </p>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-white/60 mt-2">
                Dosage Forms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}