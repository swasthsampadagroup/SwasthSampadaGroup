import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  X,
  Package,
  Mail,
  Layers3,
  HeartPulse,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

/* =========================================================
   TYPES
========================================================= */

type Highlight = {
  title: string;
  icon: LucideIcon;
  description: string;
};

type Medicine = {
  id: number;
  name: string;
  dosage: string;
  category: string;
  image?: string;
};

/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights: Highlight[] = [
  {
    title: 'Common Brand Portfolio',
    icon: Layers3,
    description:
      'Pharmaceutical brands marketed through both Swasth Sampada Healthcare and Simpson Healthcare.',
  },
  {
    title: 'Shared Healthcare Solutions',
    icon: HeartPulse,
    description:
      'Selected products supported through the combined healthcare and marketing network of both companies.',
  },
  {
    title: 'Expanding Portfolio',
    icon: TrendingUp,
    description:
      'A growing portfolio of healthcare brands serving diverse therapeutic requirements.',
  },
];

/* =========================================================
   COMMON BRANDS
========================================================= */

const medicines: Medicine[] = [
  {
    id: 1,
    name: 'SQ PRO',
    dosage: 'Tablet',
    category: 'Common Brand',
    image: '/Images/SQ_pro.png',
  },
  {
    id: 2,
    name: 'WOMCAL-XT',
    dosage: 'Tablet',
    category: 'Common Brand',
    image: '/Images/xt.png',
  },
  {
    id: 3,
    name: 'Z-FIT',
    dosage: 'Tablet',
    category: 'Common Brand',
    image: '/Images/Z_fit.png',
  },
  {
    id: 4,
    name: 'SS UTI',
    dosage: 'Tablet',
    category: 'Common Brand',
    image: '/Images/SS_Uti.png',
  },
  {
    id: 5,
    name: 'L-CO-9',
    dosage: 'Tablet',
    category: 'Common Brand',
    image: '/Images/lco9.png',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function CommonBrands() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All Brands');

  const [selectedMedicine, setSelectedMedicine] =
    useState<Medicine>(medicines[0]);

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredMedicines = useMemo(() => {
    const value = search.toLowerCase().trim();

    return medicines.filter((medicine) => {
      const matchesSearch =
        !value ||
        medicine.name.toLowerCase().includes(value) ||
        medicine.dosage.toLowerCase().includes(value) ||
        medicine.category.toLowerCase().includes(value);

      const matchesFilter =
        filter === 'All Brands' ||
        medicine.category === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  /* =======================================================
     SELECT PRODUCT
  ======================================================= */

  const handleSelectMedicine = (medicine: Medicine) => {
    setSelectedMedicine(medicine);

    setTimeout(() => {
      document
        .getElementById('common-brand-product-details')
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
    setSearch('');
    setFilter('All Brands');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title="Common Brands"
        subtitle="Healthcare products marketed across multiple pharmaceutical divisions of Swasth Sampada Group."
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
            label: 'Common Brands',
          },
        ]}
      />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            eyebrow="COMMON BRANDS"
            title="Brands Across Our Healthcare Network"
            subtitle="A portfolio of brands marketed through both Swasth Sampada Healthcare and Simpson Healthcare."
          />

          {/* =================================================
              HIGHLIGHT ICON CARDS
          ================================================= */}

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-12">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    group
                    bg-white
                    border
                    border-gray-200
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:border-forest-200
                  "
                >

                  {/* =================================================
                      ICON AREA
                  ================================================= */}

                  <div
                    className="
                      relative
                      h-52
                      md:h-56
                      bg-gradient-section
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                    "
                  >

                    {/* Background decoration */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-white/40
                        via-transparent
                        to-forest-50/40
                      "
                    />

                    {/* Decorative circle */}

                    <div
                      className="
                        absolute
                        -top-16
                        -right-16
                        w-40
                        h-40
                        rounded-full
                        bg-forest-100/30
                        transition-transform
                        duration-500
                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-20
                        -left-16
                        w-44
                        h-44
                        rounded-full
                        bg-white/50
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* Product / Healthcare Icon */}

                    <div
                      className="
                        relative
                        z-10
                        w-24
                        h-24
                        md:w-28
                        md:h-28
                        rounded-full
                        bg-white
                        border
                        border-forest-100
                        flex
                        items-center
                        justify-center
                        shadow-md
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:shadow-xl
                      "
                    >

                      <Icon
                        size={48}
                        strokeWidth={1.7}
                        className="
                          text-forest-700
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />

                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-7 md:p-8">

                    <h3
                      className="
                        font-heading
                        text-xl
                        font-semibold
                        text-forest-900
                        mb-3
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        font-body
                        text-sm
                        md:text-base
                        text-gray-600
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          BRAND PORTFOLIO
      ===================================================== */}

      <section className="py-20 md:py-24 bg-gradient-section">

        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="OUR PORTFOLIO"
            title="Common Healthcare Brands"
            subtitle="Explore the common brands available across the Swasth Sampada healthcare network."
          />

          {/* =================================================
              RESULTS BAR
          ================================================= */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              mt-7
              mb-7
            "
          >

            <p className="font-body text-sm text-gray-500">

              Showing{' '}

              <span className="font-semibold text-forest-800">
                {filteredMedicines.length}
              </span>{' '}

              of {medicines.length} common brands

            </p>

            {(search || filter !== 'All Brands') && (

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
                  transition-colors
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

          <div
            className="
              grid
              lg:grid-cols-[380px_1fr]
              gap-6
              lg:gap-8
              items-start
            "
          >

            {/* =================================================
                LEFT PRODUCT LIST
            ================================================= */}

            <div className="border border-gray-200 bg-white">

              {/* HEADER */}

              <div
                className="
                  px-6
                  py-5
                  border-b
                  border-gray-200
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-forest-700
                      "
                    >
                      Product List
                    </p>

                    <h3
                      className="
                        font-heading
                        text-xl
                        font-semibold
                        text-forest-900
                        mt-1
                      "
                    >
                      Common Brands
                    </h3>

                  </div>

                  <div
                    className="
                      w-9
                      h-9
                      bg-forest-50
                      flex
                      items-center
                      justify-center
                    "
                  >

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

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >

                          {/* PRODUCT NAME */}

                          <div className="min-w-0">

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

                            <p
                              className="
                                text-xs
                                text-gray-500
                                mt-1
                              "
                            >
                              {medicine.dosage}
                            </p>

                          </div>

                          {/* ARROW */}

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

                  /* =================================================
                     NO RESULTS
                  ================================================= */

                  <div className="py-16 px-6 text-center">

                    <Search
                      size={30}
                      className="
                        mx-auto
                        text-gray-300
                        mb-4
                      "
                    />

                    <h4
                      className="
                        font-heading
                        font-semibold
                        text-forest-900
                        mb-2
                      "
                    >
                      No Common Brands Found
                    </h4>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        mb-5
                      "
                    >
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
                        transition-colors
                      "
                    >

                      Show All Brands

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
              id="common-brand-product-details"
              className="
                border
                border-gray-200
                bg-white
                lg:sticky
                lg:top-28
              "
            >

              {selectedMedicine && (

                <>

                  {/* =================================================
                      PRODUCT IMAGE AREA
                  ================================================= */}

                  <div
                    className="
                      relative
                      bg-gradient-section
                      min-h-[400px]
                      md:min-h-[360px]
                      flex
                      items-center
                      justify-center
                      p-10
                      overflow-hidden
                    "
                  >

                    {/* DECORATIVE BACKGROUND */}

                    <div
                      className="
                        absolute
                        w-72
                        h-72
                        rounded-full
                        bg-white/50
                        blur-3xl
                      "
                    />

                    {/* LARGE PRODUCT IMAGE */}

                    <div
                      className="
                        relative
                        z-10
                        w-56
                        h-56
                        md:w-64
                        md:h-64
                        bg-white
                        shadow-lg
                        border
                        border-gray-100
                        flex
                        items-center
                        justify-center
                        p-7
                        transition-all
                        duration-300
                        hover:shadow-xl
                      "
                    >

                      {selectedMedicine.image ? (

                        <img
                          src={selectedMedicine.image}
                          alt={selectedMedicine.name}
                          className="
                            max-w-full
                            max-h-full
                            object-contain
                            transition-transform
                            duration-500
                            hover:scale-105
                          "
                        />

                      ) : (

                        <div
                          className="
                            text-center
                            text-gray-400
                            text-sm
                          "
                        >
                          Product Image
                        </div>

                      )}

                    </div>

                  </div>

                  {/* =================================================
                      PRODUCT CONTENT
                  ================================================= */}

                  <div className="p-7 md:p-9">

                    {/* BADGES */}

                    <div className="flex flex-wrap gap-2 mb-5">

                      <span
                        className="
                          inline-flex
                          items-center
                          bg-forest-50
                          text-forest-700
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wide
                        "
                      >
                        Common Brand
                      </span>

                      <span
                        className="
                          inline-flex
                          items-center
                          bg-gray-100
                          text-gray-600
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wide
                        "
                      >
                        {selectedMedicine.dosage}
                      </span>

                    </div>

                    {/* PRODUCT NAME */}

                    <h2
                      className="
                        font-heading
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-forest-900
                        leading-tight
                        mb-5
                      "
                    >
                      {selectedMedicine.name}
                    </h2>

                    <div
                      className="
                        w-14
                        h-0.5
                        bg-gold-400
                        mb-7
                      "
                    />

                    {/* DESCRIPTION */}

                    <p
                      className="
                        font-body
                        text-sm
                        md:text-base
                        text-gray-600
                        leading-relaxed
                        mb-8
                      "
                    >
                      Healthcare product available across multiple
                      Swasth Sampada Group companies and supported
                      through the group’s connected pharmaceutical
                      network.
                    </p>

                    {/* =================================================
                        PRODUCT INFORMATION
                    ================================================= */}

                    <div
                      className="
                        grid
                        sm:grid-cols-2
                        gap-4
                        mb-8
                      "
                    >

                      {/* PRODUCT */}

                      <div
                        className="
                          border
                          border-gray-100
                          p-5
                        "
                      >

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-gray-400
                            font-semibold
                            mb-2
                          "
                        >
                          Product
                        </p>

                        <p
                          className="
                            font-heading
                            font-semibold
                            text-forest-900
                          "
                        >
                          {selectedMedicine.name}
                        </p>

                      </div>

                      {/* DOSAGE */}

                      <div
                        className="
                          border
                          border-gray-100
                          p-5
                        "
                      >

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-gray-400
                            font-semibold
                            mb-2
                          "
                        >
                          Dosage Form
                        </p>

                        <p
                          className="
                            font-heading
                            font-semibold
                            text-forest-900
                          "
                        >
                          {selectedMedicine.dosage}
                        </p>

                      </div>

                      {/* CATEGORY */}

                      <div
                        className="
                          border
                          border-gray-100
                          p-5
                          sm:col-span-2
                        "
                      >

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-gray-400
                            font-semibold
                            mb-2
                          "
                        >
                          Brand Category
                        </p>

                        <p
                          className="
                            font-heading
                            font-semibold
                            text-forest-900
                          "
                        >
                          {selectedMedicine.category}
                        </p>

                      </div>

                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <div className="flex flex-wrap gap-3">

                      {/* PRODUCT ENQUIRY */}

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

                      {/* EMAIL */}

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
                              `Common Brand Enquiry - ${selectedMedicine.name}`
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
          PORTFOLIO SUMMARY
      ===================================================== */}

      <section className="bg-forest-900 py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              grid
              sm:grid-cols-3
              gap-8
              md:gap-12
              text-center
            "
          >

            {/* COMMON BRANDS */}

            <div>

              <p
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                05
              </p>

              <p
                className="
                  font-body
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  mt-2
                "
              >
                Common Brands
              </p>

            </div>

            {/* HEALTHCARE DIVISIONS */}

            <div
              className="
                sm:border-l
                sm:border-white/10
              "
            >

              <p
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                02
              </p>

              <p
                className="
                  font-body
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  mt-2
                "
              >
                Healthcare Divisions
              </p>

            </div>

            {/* HEALTHCARE CHANNELS */}

            <div
              className="
                sm:border-l
                sm:border-white/10
              "
            >
              <p
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                Multiple
              </p>
              <p
                className="
                  font-body
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  mt-2
                "
              >
                Healthcare Channels
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}