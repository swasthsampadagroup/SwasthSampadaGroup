import { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from 'lucide-react';

import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

/* =========================================================
   TYPES
========================================================= */

type Opening = {
  position: string;
  department: string;
  location: string;
  experience: string;
  type: string;
};

/* =========================================================
   DATA
========================================================= */

const openings: Opening[] = [
  {
    position: 'Sales Executive',
    department: 'Healthcare',
    location: 'Gujarat',
    experience: 'Fresher / Experienced',
    type: 'Full Time',
  },
  {
    position: 'Medical Representative',
    department: 'Healthcare',
    location: 'Gujarat',
    experience: '0–3 Years',
    type: 'Full Time',
  },
  {
    position: 'Data Analyst',
    department: 'IT',
    location: 'Ahmedabad',
    experience: '1–3 Years',
    type: 'Full Time',
  },
  {
    position: 'HR Executive',
    department: 'HR',
    location: 'Ahmedabad',
    experience: '1–2 Years',
    type: 'Full Time',
  },
  {
    position: 'Agriculture Officer',
    department: 'Farms',
    location: 'Ahmedabad',
    experience: '2+ Years',
    type: 'Full Time',
  },
  {
    position: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Ahmedabad',
    experience: '1–3 Years',
    type: 'Full Time',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'Career Growth',
    text: 'Build expertise, take ownership and grow with a forward-looking organisation.',
  },
  {
    icon: GraduationCap,
    number: '02',
    title: 'Continuous Learning',
    text: 'Gain practical exposure, develop new skills and learn from experienced professionals.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Collaborative Culture',
    text: 'Work with teams that value ideas, accountability, teamwork and mutual respect.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Employee Wellbeing',
    text: 'A people-focused environment designed to support performance and professional balance.',
  },
  {
    icon: WalletCards,
    number: '05',
    title: 'Recognition',
    text: 'Meaningful contributions are appreciated and recognised as part of our culture.',
  },
  {
    icon: Target,
    number: '06',
    title: 'Purposeful Work',
    text: 'Contribute to businesses working across healthcare, agriculture and sustainable growth.',
  },
];

const process = [
  {
    no: '01',
    title: 'Apply',
    text: 'Share your profile and apply for a suitable opportunity.',
  },
  {
    no: '02',
    title: 'Screening',
    text: 'Our HR team reviews your profile and experience.',
  },
  {
    no: '03',
    title: 'Interview',
    text: 'Meet HR and the relevant department team.',
  },
  {
    no: '04',
    title: 'Selection',
    text: 'Selected candidates move to the final stage.',
  },
  {
    no: '05',
    title: 'Onboarding',
    text: 'Start your professional journey with Swasth Sampada.',
  },
];

const faqs = [
  {
    q: 'Can freshers apply?',
    a: 'Yes. Fresh graduates can apply for suitable entry-level positions and internship opportunities.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The recruitment timeline generally takes around 1–3 weeks depending on the position and selection process.',
  },
  {
    q: 'Where are the opportunities located?',
    a: 'Current opportunities are primarily available across Ahmedabad and Gujarat, depending on the role.',
  },
  {
    q: 'Can I apply if my profile does not match a listed opening?',
    a: 'Yes. You can still share your resume with our HR team. We may consider your profile for future suitable opportunities.',
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-gold-400" />

      <span
        className={`text-[10px] font-bold uppercase tracking-[0.28em] ${light ? 'text-gold-400' : 'text-forest-700'
          }`}
      >
        {children}
      </span>
    </div>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-heading text-3xl leading-[1.08] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-forest-950'
        }`}
    >
      {children}
    </h2>
  );
}

/* =========================================================
   CAREERS PAGE
========================================================= */

export default function Careers() {
  const ref = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main
      ref={ref}
      className="min-h-screen overflow-hidden bg-white text-gray-800"
    >

      {/* =====================================================
          01. SINGLE HERO
          IMPORTANT: NO PageHero HERE
      ===================================================== */}

      {/* =====================================================
    01. CAREERS HERO
===================================================== */}

      <section className="relative overflow-hidden bg-forest-950">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)
      `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Background Glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-700/20 blur-[150px]" />

        <div className="absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-slate-700/30 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">

          {/* Breadcrumb */}
          <div className="mb-10 flex justify-center">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em]">
              <a
                href="/"
                className="text-white/50 transition hover:text-white"
              >
                Home
              </a>

              <span className="text-white/20">/</span>

              <span className="text-gold-400">
                Careers
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-5xl text-center">

            {/* Eyebrow */}
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-400">
              Careers at Swasth Sampada
            </p>

            {/* Main Heading */}
            <h1 className="mx-auto mt-6 max-w-5xl font-heading text-5xl leading-[0.98] text-white sm:text-6xl lg:text-[76px]">
              Build Your Career.
              <br />
              <span className="text-gold-400">
                Grow With Purpose.
              </span>
            </h1>

            {/* Divider */}
            <div className="mx-auto mt-8 h-px w-20 bg-gold-400" />

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Join a growing organisation where ambitious people, meaningful
              work and long-term opportunities come together.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-3">

              <a
                href="#openings"
                className="inline-flex items-center gap-3 bg-gold-400 px-7 py-4 text-xs font-bold uppercase tracking-wide text-forest-950 transition hover:bg-white"
              >
                Explore Opportunities
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#apply"
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white hover:text-forest-950"
              >
                Apply Now
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. CAREER INTRODUCTION / ABOUT
      ===================================================== */}

      <section className="relative overflow-hidden  py-24 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
            {/* TEXT */}

            <div>
              <SectionLabel >
                Careers at Swasth Sampada
              </SectionLabel>

              <h2 className="max-w-xl font-heading text-5xl leading-[.98] text-black sm:text-6xl">
                Grow your
                <br />
                <span className="text-gold-400">career</span> with
                <br />
                purpose.
              </h2>

              <div className="mt-8 h-px w-20 bg-gold-400" />

              <p className="mt-7 max-w-xl text-base leading-8 text-black/60">
                At Swasth Sampada Group, we believe people are at the heart
                of every successful organisation.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/45">
                Whether you are beginning your professional journey or
                bringing years of experience, we provide opportunities to
                learn, contribute, innovate and create meaningful impact.
              </p>
            </div>

            {/* IMAGE COLLAGE */}

            <div className="grid grid-cols-6 gap-3">

              <div className="col-span-3 overflow-hidden rounded-[28px]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                  alt="Team collaboration"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="col-span-3 space-y-3">

                <div className="overflow-hidden rounded-[25px]">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85"
                    alt="Healthcare professionals"
                    className="h-[500PX] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. WHY JOIN US
      ===================================================== */}

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

            <div>
              <SectionLabel>Why Join Us</SectionLabel>

              <SectionTitle>
                More than a job.
                <br />
                A place to grow.
              </SectionTitle>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-gray-600">
                We believe strong organisations are built by people who are
                encouraged to learn, contribute and take ownership.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                At Swasth Sampada, you can work across healthcare, agriculture,
                technology, marketing and sustainable business initiatives.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700 hover:shadow-xl"
                >

                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-gold-400/10 transition duration-500 group-hover:scale-150" />

                  <div className="relative flex items-start justify-between">

                    <span className="font-heading text-3xl text-gold-400/60">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center bg-forest-50">
                      <Icon className="h-5 w-5 text-forest-700" />
                    </div>

                  </div>

                  <h3 className="relative mt-9 font-heading text-2xl text-forest-950">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>

                  <div className="mt-7 h-px w-10 bg-gold-400 transition-all group-hover:w-20" />

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          04. CURRENT OPENINGS
      ===================================================== */}

      <section
        id="openings"
        className="scroll-mt-20 bg-gradient-section py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="flex flex-col justify-between gap-8 border-b border-gray-200 pb-9 md:flex-row md:items-end">

            <div>
              <SectionLabel>Current Openings</SectionLabel>

              <SectionTitle>
                Find your next
                <br />
                opportunity.
              </SectionTitle>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Explore our current career opportunities and discover where your
              skills, experience and ambitions can create value.
            </p>

          </div>

          {/* DESKTOP */}

          <div className="mt-10 hidden overflow-hidden border border-gray-200 bg-white shadow-sm md:block">

            <table className="w-full border-collapse">

              <thead className="bg-forest-950">
                <tr>
                  {[
                    'Position',
                    'Department',
                    'Location',
                    'Experience',
                    'Type',
                    '',
                  ].map((heading, index) => (
                    <th
                      key={index}
                      className="px-6 py-5 text-left text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>

                {openings.map((job) => (
                  <tr
                    key={job.position}
                    className="group border-t border-gray-100 transition hover:bg-forest-50/50"
                  >

                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-forest-50">
                          <Briefcase className="h-4 w-4 text-forest-700" />
                        </div>

                        <span className="font-heading text-lg text-forest-950">
                          {job.position}
                        </span>

                      </div>
                    </td>

                    <td className="px-6 py-6 text-sm text-gray-500">
                      {job.department}
                    </td>

                    <td className="px-6 py-6 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-gold-500" />
                        {job.location}
                      </span>
                    </td>

                    <td className="px-6 py-6 text-sm text-gray-500">
                      {job.experience}
                    </td>

                    <td className="px-6 py-6">
                      <span className="border border-gold-400/40 bg-gold-400/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-gold-700">
                        {job.type}
                      </span>
                    </td>

                    <td className="px-6 py-6 text-right">
                      <a
                        href="#apply"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-forest-950"
                      >
                        Apply
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </a>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          {/* MOBILE */}

          <div className="mt-8 space-y-4 md:hidden">

            {openings.map((job) => (
              <div
                key={job.position}
                className="border border-gray-200 bg-white p-5 shadow-sm"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-forest-50">
                      <Briefcase className="h-4 w-4 text-forest-700" />
                    </div>

                    <div>
                      <h3 className="font-heading text-xl text-forest-950">
                        {job.position}
                      </h3>

                      <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                        {job.department}
                      </p>
                    </div>

                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-wider text-gold-600">
                    {job.type}
                  </span>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-wider text-gray-400">
                      Location
                    </p>

                    <p className="text-xs text-gray-600">
                      {job.location}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-wider text-gray-400">
                      Experience
                    </p>

                    <p className="text-xs text-gray-600">
                      {job.experience}
                    </p>
                  </div>

                </div>

                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-forest-950"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          05. RECRUITMENT PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest-950 py-24 lg:py-28">

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <SectionLabel light>How We Hire</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">

            <div>

              <SectionTitle light>
                A simple,
                <br />
                transparent journey.
              </SectionTitle>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                Our recruitment process is straightforward, respectful and
                focused on finding the right fit for both the candidate and
                the organisation.
              </p>

            </div>

            <div className="grid overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-5">

              {process.map((step) => (
                <div
                  key={step.no}
                  className="border-b border-white/10 p-6 transition hover:bg-white/[0.03] lg:border-b-0 lg:border-r last:border-r-0"
                >

                  <span className="font-heading text-3xl text-gold-400">
                    {step.no}
                  </span>

                  <h3 className="mt-10 font-heading text-xl text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/40">
                    {step.text}
                  </p>

                  <div className="mt-7 h-px w-7 bg-gold-400" />

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06. LIFE AT SWASTH SAMPADA
      ===================================================== */}

      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">

            <div>

              <SectionLabel>Life At Swasth Sampada</SectionLabel>

              <SectionTitle>
                Work with
                <br />
                purpose.
              </SectionTitle>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                From teamwork and learning to field experiences and everyday
                achievements, our workplace is shaped by people who care about
                what they do.
              </p>

              <div className="mt-8 space-y-3">

                {[
                  'Collaborative working environment',
                  'Opportunities to learn and develop',
                  'Cross-functional exposure',
                  'Meaningful professional experiences',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">

                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" />

                    <span className="text-sm text-gray-600">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <a
                href="#apply"
                className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-forest-950"
              >
                Become Part of Our Team
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>

            {/* GALLERY */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {[
                {
                  title: 'Team Collaboration',
                  image:
                    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
                },
                {
                  title: 'Modern Workplace',
                  image:
                    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
                },
                {
                  title: 'Learning',
                  image:
                    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
                },
                {
                  title: 'Agriculture',
                  image:
                    'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=85',
                },
                {
                  title: 'Rose Nursery',
                  image:
                    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85',
                },
                {
                  title: 'Team Events',
                  image:
                    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <p className="absolute bottom-4 left-4 right-4 text-[10px] font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          08. FAQ
      ===================================================== */}

      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <SectionLabel>
              Career FAQ
            </SectionLabel>

            <SectionTitle>
              Questions, answered.
            </SectionTitle>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
              Find answers to commonly asked questions about careers at
              Swasth Sampada Group.
            </p>

          </div>

          <div className="mt-12 border-t border-gray-200">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="border-b border-gray-200"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >

                    <span className="font-heading text-xl text-forest-950 sm:text-2xl">
                      {faq.q}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-200">

                      <ChevronDown
                        className={`h-4 w-4 text-gold-500 transition ${isOpen ? 'rotate-180' : ''
                          }`}
                      />

                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${isOpen
                      ? 'grid-rows-[1fr] pb-6'
                      : 'grid-rows-[0fr]'
                      }`}
                  >

                    <div className="overflow-hidden">

                      <p className="max-w-3xl text-sm leading-7 text-gray-500">
                        {faq.a}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          09. APPLY / HR CONTACT
      ===================================================== */}

      <section
        id="apply"
        className="scroll-mt-20 bg-gradient-section py-24 lg:py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="relative overflow-hidden bg-forest-950">

            <div className="relative grid lg:grid-cols-[1fr_.7fr]">

              {/* LEFT */}

              <div className="p-8 sm:p-12 lg:p-16">

                <SectionLabel light>
                  Join Our Team
                </SectionLabel>

                <h2 className="max-w-2xl font-heading text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  Ready to shape
                  <br />
                  your <span className="text-gold-400">future?</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
                  If you are passionate about healthcare, agriculture,
                  technology, organic products or sustainable innovation,
                  we would love to hear from you.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=career@swasthsampada.com"
                    className="inline-flex items-center justify-center gap-2 bg-gold-400 px-6 py-4 text-xs font-bold uppercase tracking-wide text-forest-950 transition hover:bg-white"
                  >
                    Submit Your Resume
                    <Send className="h-4 w-4" />
                  </a>
                  <a
                    href="#openings"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white hover:text-forest-950"
                  >
                    View Positions
                  </a>
                </div>
              </div>

              {/* RIGHT */}

              <div className="border-t border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">

                <div className="flex h-12 w-12 items-center justify-center bg-gold-400/10">
                  <Users className="h-5 w-5 text-gold-400" />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">
                  Human Resources
                </p>

                <h3 className="mt-3 font-heading text-3xl text-white">
                  Contact HR
                </h3>

                <div className="mt-9 space-y-7">


                  {/* PHONE */}
                  <li className="flex items-center gap-3">
                    <Phone
                      size={17}
                      className="text-gold-400 flex-shrink-0"
                    />

                    <div className="flex flex-col gap-2">

                      {/* PHONE NUMBER */}
                      <span className="font-body text-sm text-gray-400">
                        +91 8347196983
                      </span>

                      {/* CALL + WHATSAPP OPTIONS */}
                      <div className="flex items-center gap-2">

                        {/* CALL */}
                        <a
                          href="tel:+918347196983"
                          className="
          inline-flex
          items-center
          gap-1.5
          px-3
          py-1.5
          text-xs
          font-semibold
          text-gray-300
          border
          border-gray-700
          hover:border-gold-400
          hover:text-gold-300
          transition-colors
        "
                        >
                          <Phone size={13} />
                          Call
                        </a>

                        {/* WHATSAPP */}
                        <a
                          href="https://wa.me/918347196983"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
          inline-flex
          items-center
          gap-1.5
          px-3
          py-1.5
          text-xs
          font-semibold
          text-gray-300
          border
          border-gray-700
          hover:border-gold-400
          hover:text-gold-300
          transition-colors
        "
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </li>


                  {/* EMAIL */}

                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/5">
                      <Mail className="h-4 w-4 text-gold-400" />
                    </div>

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                        Email
                      </p>

                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=career@swasthsampada.com"
                        className="mt-1 block break-all text-sm text-white/75 hover:text-gold-400"
                      >
                        careers@swasthsampada.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}