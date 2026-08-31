import { useMemo, useState } from 'react'; 
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  X,
  HeartPulse,
  Baby,
  Stethoscope,
  Pill,
  Package,
  ShieldCheck,
  Mail,
  FlaskConical,
  ImageOff,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

/* =========================================================
   TYPES
========================================================= */

type TherapeuticArea = {
  name: string;
  icon: React.ElementType;
  description: string;
};

type Medicine = {
  id: number;
  name: string;
  category: string;
  dosage: string;
  image: string;
  commonBrand?: boolean;
};

/* =========================================================
   THERAPEUTIC AREAS
========================================================= */

const therapeuticAreas: TherapeuticArea[] = [
  {
    name: "Women's Healthcare",
    icon: HeartPulse,
    description:
      "Focused healthcare solutions addressing the unique needs of women across different stages of life.",
  },
  {
    name: 'Pediatrics',
    icon: Baby,
    description:
      "Specialised healthcare solutions with a focus on children's health and wellbeing.",
  },
  {
    name: 'Child Care',
    icon: Baby,
    description:
      'Healthcare products developed with attention to the specific needs of children.',
  },
  {
    name: 'Other Healthcare Areas',
    icon: Stethoscope,
    description:
      'An expanding range of healthcare solutions supporting broader therapeutic requirements.',
  },
];

/* =========================================================
   MEDICINES
   ---------------------------------------------------------
   Put product images inside:
   /assets/products/
========================================================= */

const medicines: Medicine[] = [
  {
    id: 1,
    name: 'ENTRARICH CAP',
    category: "Women's Healthcare",
    dosage: 'Capsule',
    image: '/Images/ENTRA_RICH.png',
  },
  {
    id: 2,
    name: 'ENTRARICH DRY SYP.',
    category: 'Child Care',
    dosage: 'Dry Syrup',
    image: '/Images/Entrarich.png',
  },
  {
    id: 3,
    name: 'SS ZYNE TAB',
    category: 'Pediatrics',
    dosage: 'Tablet',
    image: '/Images/SS_Zyne.png',
  },
  {
    id: 4,
    name: 'SS ZYNE SYP.',
    category: 'Pediatrics',
    dosage: 'Syrup',
    image: '/Images/SS_Zyne_Sryup.png',
  },
  {
    id: 5,
    name: 'SS BABY C DROP',
    category: 'Child Care',
    dosage: 'Drops',
    image: '/Images/c_drop.png',
  },
  {
    id: 6,
    name: 'BABY D3 DROP',
    category: 'Child Care',
    dosage: 'Drops',
    image: '/Images/D3.png',
  },
  {
    id: 7,
    name: 'BABY D3 NANO SHOT',
    category: 'Child Care',
    dosage: 'Nano Shot',
    image: '/Images/Nano_Shot.png',
  },
  {
    id: 8,
    name: 'SS BABY O',
    category: 'Child Care',
    dosage: 'Drops',
    image: '/Images/ss_Baby_O.png',
  },
  {
    id: 9,
    name: 'SS BABY P125',
    category: 'Child Care',
    dosage: 'Syrup',
    image: '/Images/ss_Baby_p_125.png',
  },
  {
    id: 10,
    name: 'SS BABY P250',
    category: 'Child Care',
    dosage: 'Syrup',
    image: '/Images/ss_p_250.png',
  },
  {
    id: 11,
    name: 'SSC-4',
    category: 'Other Healthcare Areas',
    dosage: 'Tablet',
    image: '/assets/products/ssc-4.png',
  },
  {
    id: 12,
    name: 'SIP',
    category: 'Other Healthcare Areas',
    dosage: 'Tablet',
    image: '/assets/products/sip.png',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SimpsonHealthcare() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const [selectedMedicine, setSelectedMedicine] =
    useState<Medicine>(medicines[0]);

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredMedicines = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return medicines.filter((medicine) => {
      const matchesCategory =
        category === 'All' || medicine.category === category;

      const matchesSearch =
        !searchValue ||
        medicine.name.toLowerCase().includes(searchValue) ||
        medicine.category.toLowerCase().includes(searchValue) ||
        medicine.dosage.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  /* =======================================================
     SELECT PRODUCT
  ======================================================= */

  const handleSelectMedicine = (medicine: Medicine) => {
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

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  const clearFilters = () => {
    setCategory('All');
    setSearch('');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title="Simpson Healthcare"
        subtitle="Specialised healthcare solutions designed around specific patient needs."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Pharma', path: '/pharma' },
          { label: 'Simpson Healthcare' },
        ]}
      />

      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}

      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="border border-gray-100 shadow-sm bg-white p-8 md:p-12 lg:p-16">

            <div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-center">

              {/* LOGO */}

              <div className="flex justify-center">

                <div className="w-48 h-48 md:w-52 md:h-52 flex items-center justify-center bg-white">

                  <img
                    src="/assets/Healthcare1.png"
                    alt="Simpson Healthcare"
                    className="w-full h-full object-contain"
                  />

                </div>

              </div>

              {/* COMPANY CONTENT */}

              <div>

                <p className="font-body text-xs tracking-[0.28em] uppercase font-semibold text-forest-700 mb-3">
                  Healthcare Division
                </p>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
                  Simpson Healthcare
                </h1>

                <div className="w-16 h-0.5 bg-forest-700 mt-5 mb-7" />

                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed mb-5">
                  Simpson Healthcare is a healthcare company within the
                  pharmaceutical division, focused on specialised healthcare
                  requirements and targeted product solutions.
                </p>

                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed">
                  Its healthcare portfolio supports women’s healthcare,
                  pediatrics, child care, and other evolving healthcare
                  requirements through high-quality pharmaceutical products.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SIMPSON HEALTHCARE BANNER
      ===================================================== */}

      <section className="py-16 md:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              shadow-xl
              bg-white
            "
          >

            <img
              src="/assets/banner.png"
              alt="Simpson Healthcare"
              className="
                w-full
                h-auto
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          THERAPEUTIC RANGE
      ===================================================== */}

      <section className="py-20 md:py-24 bg-gradient-section">

        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            eyebrow="Therapeutic Range"
            title="Simpson Healthcare"
            subtitle="Specialised healthcare solutions designed around specific patient needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-12">

            {therapeuticAreas.map((area) => {

              const Icon = area.icon;
              const isSelected = category === area.name;

              return (
                <button
                  key={area.name}
                  type="button"
                  onClick={() =>
                    setCategory(
                      isSelected ? 'All' : area.name
                    )
                  }
                  className={`
                    text-left
                    bg-white
                    border
                    p-6
                    md:p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    ${
                      isSelected
                        ? 'border-forest-700 shadow-lg'
                        : 'border-gray-200'
                    }
                  `}
                >

                  <div
                    className={`
                      w-11 h-11
                      flex items-center justify-center
                      mb-6
                      ${
                        isSelected
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

                  <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">
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
            eyebrow="Our Brands"
            title="Healthcare Products"
            subtitle="Explore the Simpson Healthcare portfolio across specialised healthcare categories."
          />

          {/* =================================================
              SEARCH
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
                    onChange={(e) => setSearch(e.target.value)}
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
                  onChange={(e) => setCategory(e.target.value)}
                  className="
                    min-w-[240px]
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

              of {medicines.length} products

            </p>

            {(category !== 'All' || search) && (

              <button
                type="button"
                onClick={clearFilters}
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
              TWO COLUMN PRODUCT AREA
          ================================================= */}

          <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-start">

            {/* =================================================
                LEFT PRODUCT LIST
            ================================================= */}

            <div className="border border-gray-200 bg-white">

              {/* LIST HEADER */}

              <div className="px-6 py-5 border-b border-gray-200">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
                      Product List
                    </p>

                    <h3 className="font-heading text-xl font-semibold text-forest-900 mt-1">
                      Our Brands
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

              {/* PRODUCT LIST */}

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
                          handleSelectMedicine(medicine)
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
                          ${
                            active
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
                                  ${
                                    active
                                      ? 'text-forest-900'
                                      : 'text-gray-800'
                                  }
                                `}
                              >
                                {medicine.name}
                              </h4>

                              {medicine.commonBrand && (

                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[9px] font-semibold tracking-wide">
                                  COMMON BRAND
                                </span>

                              )}

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
                              ${
                                active
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

                    <p className="text-sm text-gray-500 mb-5">
                      Try another search term or category.
                    </p>

                    <button
                      type="button"
                      onClick={clearFilters}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-forest-800
                        text-white
                        px-5
                        py-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        hover:bg-forest-700
                      "
                    >

                      Show All Products

                      <ArrowRight size={14} />

                    </button>

                  </div>

                )}

              </div>

            </div>

            {/* =================================================
                RIGHT PRODUCT DETAILS
            ================================================= */}

            <div
              id="product-details"
              className="
                border
                border-gray-200
                bg-white
                lg:sticky
                lg:top-28
                overflow-hidden
              "
            >

              {selectedMedicine && (

                <>

                  {/* =================================================
                      PRODUCT IMAGE SECTION
                  ================================================= */}

                  <div
                    className="
                      relative
                      bg-gradient-section
                      min-h-[360px]
                      md:min-h-[430px]
                      flex
                      items-center
                      justify-center
                      p-8
                      md:p-12
                      overflow-hidden
                    "
                  >

                    {/* COMMON BRAND BADGE */}

                    {selectedMedicine.commonBrand && (

                      <div className="absolute top-6 left-6 z-10">

                        <span className="inline-flex bg-green-100 text-green-700 px-3 py-1.5 text-[10px] font-semibold tracking-wide">
                          COMMON BRAND
                        </span>

                      </div>

                    )}

                    {/* PRODUCT IMAGE CARD */}

                    <div
                      className="
                        relative
                        z-10
                        w-56
                        h-64
                        md:w-64
                        md:h-72
                        bg-white
                        border
                        border-gray-100
                        shadow-xl
                        flex
                        items-center
                        justify-center
                        p-5
                        transition-all
                        duration-500
                        hover:scale-[1.02]
                      "
                    >

                      <img
                        key={selectedMedicine.image}
                        src={selectedMedicine.image}
                        alt={`${selectedMedicine.name} product`}
                        className="
                          max-w-[85%]
                          max-h-[85%]
                          w-auto
                          h-auto
                          object-contain
                          transition-all
                          duration-500
                        "
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';

                          const fallback =
                            event.currentTarget
                              .parentElement
                              ?.querySelector(
                                '.product-image-fallback'
                              ) as HTMLElement | null;

                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />

                      {/* FALLBACK */}

                      <div
                        className="
                          product-image-fallback
                          hidden
                          absolute
                          inset-0
                          items-center
                          justify-center
                          flex-col
                          bg-white
                          text-center
                          p-6
                        "
                      >

                        <ImageOff
                          size={48}
                          strokeWidth={1.2}
                          className="text-gray-300 mb-4"
                        />

                        <p className="text-xs text-gray-400">
                          Product image unavailable
                        </p>

                        <p className="text-sm font-semibold text-forest-900 mt-2">
                          {selectedMedicine.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      PRODUCT CONTENT
                  ================================================= */}

                  <div className="p-7 md:p-9">

                    {/* BADGES */}

                    <div className="flex flex-wrap gap-2 mb-5">

                      <span className="inline-flex items-center bg-forest-50 text-forest-700 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide">
                        {selectedMedicine.category}
                      </span>

                      <span className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide">
                        {selectedMedicine.dosage}
                      </span>

                    </div>

                    {/* PRODUCT NAME */}

                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 leading-tight mb-5">
                      {selectedMedicine.name}
                    </h2>

                    <div className="w-14 h-0.5 bg-gold-400 mb-7" />

                    {/* DESCRIPTION */}

                    <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                      Healthcare product from the Simpson Healthcare
                      portfolio, supporting specialised healthcare
                      requirements.
                    </p>

                    {/* =================================================
                        PRODUCT INFORMATION
                    ================================================= */}

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">

                      {/* PRODUCT */}

                      <div className="border border-gray-100 p-5">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                          Product
                        </p>

                        <p className="font-heading font-semibold text-forest-900">
                          {selectedMedicine.name}
                        </p>

                      </div>

                      {/* DOSAGE */}

                      <div className="border border-gray-100 p-5">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                          Dosage Form
                        </p>

                        <p className="font-heading font-semibold text-forest-900">
                          {selectedMedicine.dosage}
                        </p>

                      </div>

                      {/* HEALTHCARE AREA */}

                      <div className="border border-gray-100 p-5 sm:col-span-2">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                          Healthcare Area
                        </p>

                        <p className="font-heading font-semibold text-forest-900">
                          {selectedMedicine.category}
                        </p>

                      </div>

                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

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
          QUALITY / TRUST SECTION
      ===================================================== */}

      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <p className="font-body text-xs tracking-[0.28em] uppercase font-semibold text-forest-700 mb-3">
                Our Commitment
              </p>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
                Healthcare Solutions With Purpose
              </h2>

              <div className="w-16 h-0.5 bg-gold-400 mt-6 mb-7" />

              <p className="font-body text-base text-gray-600 leading-relaxed mb-5">
                Simpson Healthcare focuses on specialised healthcare
                requirements and targeted product solutions across women’s
                healthcare, pediatrics, child care, and other healthcare
                areas.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed">
                The portfolio continues to evolve around the needs of
                healthcare professionals and patients.
              </p>

            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: ShieldCheck,
                  title: 'Quality Focus',
                  text: 'A strong focus on healthcare product quality and consistency.',
                },
                {
                  icon: HeartPulse,
                  title: 'Patient Needs',
                  text: 'Products supporting specific healthcare requirements.',
                },
                {
                  icon: FlaskConical,
                  title: 'Product Portfolio',
                  text: 'A growing range of specialised healthcare products.',
                },
                {
                  icon: Package,
                  title: 'Healthcare Range',
                  text: 'Products across multiple healthcare categories.',
                },
              ].map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="
                      bg-gradient-section
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

                    <div className="w-10 h-10 bg-white flex items-center justify-center mb-5">

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

    </div>
  );
}