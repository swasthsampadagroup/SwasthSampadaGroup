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
  FlaskConical,
  ShieldCheck,
  Mail,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

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
  composition: string;
  description: string;
  image: string;
};

/* =========================================================
   THERAPEUTIC AREAS
========================================================= */

const therapeuticAreas: TherapeuticArea[] = [
  {
    name: 'Gynaecology',
    icon: HeartPulse,
    description:
      'Healthcare solutions focused on women’s health and gynaecological requirements.',
  },
  {
    name: 'Pediatrics',
    icon: Baby,
    description:
      'Dedicated healthcare solutions designed to support the health and wellbeing of children.',
  },
  {
    name: 'General Physician',
    icon: Stethoscope,
    description:
      'Pharmaceutical solutions supporting a broad range of general healthcare requirements.',
  },
  {
    name: 'Other Therapeutic Areas',
    icon: Pill,
    description:
      'A growing portfolio addressing diverse therapeutic and healthcare requirements.',
  },
];

/* =========================================================
   MEDICINE DATABASE
   IMPORTANT:
   All images should be inside:
   /assets/medicines/
========================================================= */

const medicines: Medicine[] = [
  {
    id: 1,
    name: 'ADDZOLED',
    category: 'Other Therapeutic Areas',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/addzoled.png',
  },
  {
    id: 2,
    name: 'CHIROFIT-M',
    category: 'Other Therapeutic Areas',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/chirofit_M.png',
  },
  {
    id: 3,
    name: 'DOXY-1ST',
    category: 'Other Therapeutic Areas',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/doxy.png',
  },
  {
    id: 4,
    name: 'SMILET 2.5MG',
    category: 'Other Therapeutic Areas',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/smilet_2.5.png',
  },
  {
    id: 5,
    name: 'SMILET 5MG',
    category: 'Other Therapeutic Areas',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/smilet_5mg.png',
  },
  {
    id: 6,
    name: 'WOMOSET-CR',
    category: 'Gynaecology',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Cr.png',
  },
  {
    id: 7,
    name: 'CHIROFIT-F',
    category: 'Gynaecology',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/chirofit_F.png',
  },
  {
    id: 8,
    name: 'ENTRA-RICH 10',
    category: 'General Physician',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Entrarich_10.png',
  },
  {
    id: 9,
    name: 'S-ELITE',
    category: 'Other Therapeutic Areas',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/assets/medicines/S-ELITE.png',
  },
  {
    id: 10,
    name: 'SS-ZYNE SYRUP',
    category: 'Pediatrics',
    dosage: 'Syrup',
    composition: 'Product composition',
    description:
      'Syrup formulation from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/SS_Zyne_Sryup.png',
  },
  {
    id: 11,
    name: 'SIMFERT-MAX',
    category: 'Gynaecology',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Simfert_max.png',
  },
  {
    id: 12,
    name: 'SIMFERT-F',
    category: 'Gynaecology',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Simfert_f.png',
  },
  {
    id: 13,
    name: 'DHEACURE',
    category: 'Gynaecology',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Dheacure.png',
  },
  {
    id: 14,
    name: 'L-CO9-D',
    category: 'General Physician',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical formulation from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/lco9d.png',
  },
  {
    id: 15,
    name: 'SIMFERT-GOLD',
    category: 'Gynaecology',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Simfert-gold.png',
  },
  {
    id: 16,
    name: 'SQ PRO',
    category: 'Other Therapeutic Areas',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/SQ_pro.png',
  },
  {
    id: 17,
    name: 'WOMCAL-XT',
    category: 'Gynaecology',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/xt.png',
  },
  {
    id: 18,
    name: 'Z-FIT',
    category: 'General Physician',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/Z_fit.png',
  },
  {
    id: 19,
    name: 'SS UTI',
    category: 'Gynaecology',
    dosage: 'Tablet',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/SS_Uti.png',
  },
  {
    id: 20,
    name: 'L-CO-9',
    category: 'General Physician',
    dosage: 'Product',
    composition: 'Product composition',
    description:
      'Pharmaceutical product from the Swasth Sampada Healthcare portfolio.',
    image: '/Images/lco9.png',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SwasthSampadaHealthcare() {
  const ref = useReveal();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const [selectedMedicine, setSelectedMedicine] =
    useState<Medicine>(medicines[0]);

  /* FIX:
     Tracks whether selected product image failed
  */
  const [imageError, setImageError] = useState(false);

  /* =======================================================
     FILTER MEDICINES
  ======================================================= */

  const filteredMedicines = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return medicines.filter((medicine) => {
      const matchesCategory =
        category === 'All' || medicine.category === category;

      const matchesSearch =
        !searchText ||
        medicine.name.toLowerCase().includes(searchText) ||
        medicine.category.toLowerCase().includes(searchText) ||
        medicine.dosage.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  /* =======================================================
     SELECT MEDICINE
  ======================================================= */

  const handleSelectMedicine = (medicine: Medicine) => {
    setSelectedMedicine(medicine);

    // IMPORTANT:
    // Reset image error when selecting another medicine.
    setImageError(false);

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
     RESET FILTERS
  ======================================================= */

  const clearFilters = () => {
    setCategory('All');
    setSearch('');
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-white"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title="Swasth Sampada Healthcare"
        subtitle="Quality pharmaceutical solutions focused on healthcare, safety, consistency, and patient wellbeing."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Pharma', path: '/pharma' },
          { label: 'Swasth Sampada Healthcare' },
        ]}
      />

      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-center">

              {/* LOGO */}

              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center p-8">
                  <img
                    src="/assets/SSHealthcare1.png"
                    alt="Swasth Sampada Healthcare Pvt. Ltd."
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error(
                        'Healthcare logo not found:',
                        e.currentTarget.src
                      );
                    }}
                  />
                </div>
              </div>

              {/* CONTENT */}

              <div>
                <p className="font-body text-xs tracking-[0.25em] uppercase font-semibold text-forest-700 mb-3">
                  Pharma Company
                </p>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 mb-5">
                  Swasth Sampada Healthcare Pvt. Ltd.
                </h1>

                <div className="w-16 h-0.5 bg-forest-700 mb-6" />

                <p className="font-body text-base text-gray-600 leading-relaxed mb-5">
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
          </div>
        </div>
      </section>

      {/* =====================================================
          THERAPEUTIC RANGE
      ===================================================== */}

      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            eyebrow="Therapeutic Range"
            title="Swasth Sampada Healthcare"
            subtitle="Explore our therapeutic focus areas."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

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
                      isSelected ? 'All' : area.name
                    )
                  }
                  className={`
                    text-left
                    bg-white
                    border
                    p-6
                    card-hover
                    transition-all
                    duration-300
                    ${
                      isSelected
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
                      ${
                        isSelected
                          ? 'bg-forest-800'
                          : 'bg-forest-50'
                      }
                    `}
                  >
                    <Icon
                      size={22}
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
          MEDICINE PORTFOLIO
      ===================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Our Medicines"
            title="Pharmaceutical Product Portfolio"
            subtitle="Explore our growing range of pharmaceutical products across different therapeutic areas."
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
                    placeholder="Search medicine or therapeutic area..."
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
                    All Therapeutic Areas
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
              RESULTS
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

              <div className="px-6 py-5 border-b border-gray-200">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
                      Product List
                    </p>

                    <h3 className="font-heading text-xl font-semibold text-forest-900 mt-1">
                      Our Medicines
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

                            <p className="text-xs text-gray-500 mt-2">
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

                    <p className="text-sm text-gray-500">
                      Try another medicine name or therapeutic area.
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
              className="
                border
                border-gray-200
                bg-white
                lg:sticky
                lg:top-28
                overflow-hidden
              "
            >

              {/* =================================================
                  PRODUCT IMAGE SECTION
              ================================================= */}

              <div
                className="
                  relative
                  bg-gradient-section
                  min-h-[340px]
                  md:min-h-[400px]
                  flex
                  items-center
                  justify-center
                  p-8
                  md:p-12
                  overflow-hidden
                "
              >

                {/* Decorative Background */}

                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-forest-100/50 blur-3xl" />

                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/70 blur-3xl" />

                {/* =================================================
                    PRODUCT IMAGE CARD
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    w-full
                    max-w-[360px]
                    h-[300px]
                    md:h-[350px]
                    bg-white
                    border
                    border-gray-100
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    p-8
                    group
                  "
                >

                  {/* =================================================
                      IMAGE LOAD SUCCESS
                  ================================================= */}

                  {!imageError ? (
                    <img
                      key={selectedMedicine.id}
                      src={selectedMedicine.image}
                      alt={`${selectedMedicine.name} pharmaceutical product`}
                      className="
                        max-w-full
                        max-h-full
                        w-auto
                        h-auto
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                      onError={(e) => {
                        console.error(
                          `Medicine image not found: ${selectedMedicine.image}`
                        );

                        setImageError(true);
                      }}
                    />
                  ) : (
                    /* =================================================
                       FALLBACK IMAGE
                    ================================================= */

                    <img
                      src="/assets/medicines/SQ-PRO.png"
                      alt="Swasth Sampada Healthcare product"
                      className="
                        max-w-full
                        max-h-full
                        w-auto
                        h-auto
                        object-contain
                      "
                      onError={(e) => {
                        console.error(
                          'Fallback image also not found:',
                          e.currentTarget.src
                        );
                      }}
                    />
                  )}

                </div>

              </div>

              {/* =================================================
                  PRODUCT CONTENT
              ================================================= */}

              <div className="p-7 md:p-9">

                {/* CATEGORY + DOSAGE */}

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
                  {selectedMedicine.description}
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

                  {/* THERAPEUTIC AREA */}

                  <div className="border border-gray-100 p-5 sm:col-span-2">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                      Therapeutic Area
                    </p>

                    <p className="font-heading font-semibold text-forest-900">
                      {selectedMedicine.category}
                    </p>
                  </div>

                  {/* COMPOSITION */}

                  <div className="border border-gray-100 p-5 sm:col-span-2">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-2">
                      Composition
                    </p>

                    <p className="font-heading font-semibold text-forest-900">
                      {selectedMedicine.composition}
                    </p>
                  </div>

                </div>

                {/* =================================================
                    ACTION BUTTONS
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
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUALITY SECTION
      ===================================================== */}

      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="font-body text-xs tracking-[0.25em] uppercase font-semibold text-forest-700 mb-3">
                Our Commitment
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-6">
                Quality Healthcare. Trusted Solutions.
              </h2>

              <div className="w-16 h-0.5 bg-gold-400 mb-6" />

              <p className="font-body text-base text-gray-600 leading-relaxed mb-5">
                Our pharmaceutical approach is built around quality,
                consistency, product integrity, and healthcare needs.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed">
                We continue to expand our product portfolio while maintaining
                a strong focus on responsible healthcare and long-term trust.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                {
                  icon: ShieldCheck,
                  title: 'Quality',
                  text: 'Strong focus on product quality and consistency.',
                },
                {
                  icon: FlaskConical,
                  title: 'Innovation',
                  text: 'Continuous development of healthcare solutions.',
                },
                {
                  icon: Package,
                  title: 'Product Integrity',
                  text: 'Attention to product handling and packaging.',
                },
                {
                  icon: HeartPulse,
                  title: 'Patient Focus',
                  text: 'Healthcare solutions designed around patient needs.',
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      bg-white
                      p-6
                      border
                      border-gray-200
                      hover:-translate-y-1
                      hover:shadow-md
                      transition-all
                      duration-300
                    "
                  >
                    <div className="w-10 h-10 bg-forest-50 flex items-center justify-center mb-4">
                      <Icon
                        size={22}
                        className="text-forest-700"
                      />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-forest-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-gray-600 leading-relaxed">
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