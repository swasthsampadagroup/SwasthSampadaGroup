import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Leaf,
  Flower2,
  Carrot,
  Apple,
  TreePine,
  Sprout,
  Tractor,
  Sun,
  Droplets,
  Home,
  Bed,
  Sparkles,
  Trees,
} from 'lucide-react';

import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

/* =========================================================
   FARM SECTIONS
========================================================= */

const farmSections = [
  {
    icon: Sprout,
    title: 'Organic Farming',
    text: 'Chemical-free, sustainable farming practices that nurture the soil and produce wholesome, natural crops.',
  },
  {
    icon: Flower2,
    title: 'Rose Farming',
    text: 'Premium rose cultivation with carefully selected varieties, grown for fragrance, beauty, and commercial use.',
  },
  {
    icon: Carrot,
    title: 'Vegetables',
    text: 'A diverse range of fresh, organic vegetables grown with care and harvested at peak freshness.',
  },
  {
    icon: Apple,
    title: 'Fruits',
    text: 'Seasonal fruits cultivated using sustainable methods, rich in natural flavor and nutrition.',
  },
  {
    icon: TreePine,
    title: 'Flowers',
    text: 'A vibrant collection of flowers grown for decoration, fragrance, and commercial purposes.',
  },
  {
    icon: Droplets,
    title: 'Sustainable Farming',
    text: 'Water conservation, crop rotation, and natural pest management for long-term agricultural health.',
  },
];

/* =========================================================
   FARM INFRASTRUCTURE
========================================================= */

const infrastructure = [
  {
    icon: Tractor,
    title: 'Modern Equipment',
    text: 'State-of-the-art farming equipment for efficient and sustainable cultivation.',
  },
  {
    icon: Sun,
    title: 'Solar Integration',
    text: 'Solar-powered irrigation and energy solutions reducing our carbon footprint.',
  },
  {
    icon: Droplets,
    title: 'Water Management',
    text: 'Drip irrigation and rainwater harvesting systems for optimal water use.',
  },
  {
    icon: Leaf,
    title: 'Soil Health',
    text: 'Natural composting and organic soil enrichment for healthier, more productive farms.',
  },
];

/* =========================================================
   COTTAGE FEATURES
========================================================= */

const cottageFeatures = [
  {
    icon: Home,
    title: 'Peaceful Nature',
    text: 'A serene retreat surrounded by nature, away from the noise of city life.',
  },
  {
    icon: Bed,
    title: 'Comfortable Stay',
    text: 'Well-appointed accommodations designed for relaxation and comfort.',
  },
  {
    icon: Sparkles,
    title: 'Wellness',
    text: 'Holistic wellness experiences including yoga, meditation, and natural therapies.',
  },
  {
    icon: Trees,
    title: 'Garden',
    text: 'Beautifully landscaped gardens offering a tranquil space to unwind.',
  },
  {
    icon: Leaf,
    title: 'Retreat',
    text: 'A dedicated retreat space for individuals and groups seeking renewal.',
  },
];

/* =========================================================
   GALLERY
========================================================= */

const galleryItems = [
  {
    label: 'Rose Farm',
    image: '/Images/001.jpeg',
  },
  {
    label: 'Organic Farming',
    image: '/Images/002.jpeg',
  },
  {
    label: 'Vegetables',
    image: '/Images/003.jpeg',
  },
  {
    label: 'Fruits',
    image: '/Images/004.jpeg',
  },
  {
    label: 'Flowers',
    image: '/Images/005.jpeg',
  },
  {
    label: 'Cottage Exterior',
    image: '/Images/006.jpeg',
  },
  {
    label: 'Cottage Interior',
    image: '/Images/007.jpeg',
  },
  {
    label: 'Garden',
    image: '/Images/008.jpeg',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FarmsCottage() {
  const ref = useReveal();

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /* =======================================================
     EMAILJS FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        'service_boq5wdk',
        'template_j7p1bh8',
        form,
        {
          publicKey: 'ONSTLDSh2wjYvE0JC',
        }
      );

      setSuccessMessage(
        'Thank you! Your inquiry has been sent successfully.'
      );

      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);

      setErrorMessage(
        'Something went wrong while sending your inquiry. Please try again.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div ref={ref}>
      {/* ===================================================
          PAGE HERO
      =================================================== */}

      <PageHero
        title="Farms & Cottage"
        subtitle="Nurturing nature through organic farming, rose cultivation, and a peaceful cottage retreat — where sustainability meets serenity."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Farms & Cottage' },
        ]}
      />

      {/* ===================================================
          FARMS INTRO
      =================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionHeading
                eyebrow="Swasth Sampada Farms"
                title="Cultivating Nature's Best"
              />

              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                Swasth Sampada Farms is committed to organic and sustainable
                agriculture, growing fresh, wholesome crops while caring for
                the land and environment. Our farms produce a diverse range
                of organic vegetables, fresh fruits, and premium roses,
                cultivated with careful attention to quality, freshness, and
                natural growing practices.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                We believe healthy agriculture begins with healthy soil. Our
                farming approach focuses on soil health, responsible water
                conservation, and natural pest management to support
                long-term productivity and environmental balance.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                Sustainability is at the heart of everything we do. By
                combining responsible farming methods with modern agricultural
                practices, we aim to create a healthier connection between
                nature, farmers, and consumers.
              </p>

              <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                At Swasth Sampada Farms, we are growing more than crops — we
                are nurturing a greener future for generations to come.
              </p>
            </div>

            <div className="reveal-right">
              <div className="bg-gradient-to-br from-forest-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <Leaf
                    size={300}
                    className="absolute -bottom-10 -right-10 text-forest-800"
                  />
                </div>

                <img
                  src="./assets/farm_about.jpeg"
                  alt="Swasth Sampada Farms"
                  className="h-90 w-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FARM SECTIONS
      =================================================== */}

      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="What We Grow"
            title="Our Farming Operations"
            subtitle="A diverse range of organic crops and flowers, all grown with sustainable practices."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {farmSections.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 card-hover reveal group"
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="w-12 h-12 bg-forest-50 flex items-center justify-center mb-5 group-hover:bg-forest-800 transition-colors duration-300">
                  <s.icon
                    size={22}
                    className="text-forest-700 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="font-heading text-xl font-semibold text-forest-900 mb-2">
                  {s.title}
                </h3>

                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          FARM INFRASTRUCTURE
      =================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Infrastructure"
            title="Farm Infrastructure"
            subtitle="Modern, sustainable infrastructure supporting our farming operations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {infrastructure.map((item, i) => (
              <div
                key={i}
                className="text-center reveal"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="w-16 h-16 bg-forest-50 flex items-center justify-center mx-auto mb-4 card-hover">
                  <item.icon
                    size={26}
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
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          COTTAGE SECTION
      =================================================== */}

      <section className="py-24 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-forest-500 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.2em] uppercase font-semibold text-gold-300 mb-3">
              Swasth Sampada Cottage
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
              A Peaceful Nature Retreat
            </h2>

            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-5" />

            <p className="font-body text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Escape to serenity. Our cottage offers a peaceful retreat
              surrounded by nature — the perfect place to relax, recharge,
              and reconnect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cottageFeatures.map((f, i) => (
              <div
                key={i}
                className="glass p-8 reveal card-hover"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <f.icon
                  size={28}
                  className="text-gold-300 mb-4"
                />

                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {f.title}
                </h3>

                <p className="font-body text-sm text-gray-300 leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          GALLERY
      =================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Visual Tour"
            title="Farm & Cottage Gallery"
            subtitle="A glimpse into the natural beauty of our farms and cottage retreat."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 flex items-center justify-center reveal group relative overflow-hidden"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Gallery Image */}
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Label */}
                <p className="font-body text-xs tracking-[0.15em] uppercase text-white font-semibold relative z-10 text-center px-2 mt-auto mb-5 drop-shadow-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          INQUIRY FORM
      =================================================== */}

      <section className="py-24 bg-gradient-section">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            centered
            eyebrow="Plan Your Visit"
            title="Cottage Stay Inquiry"
            subtitle="Interested in experiencing our cottage retreat? Send us your details and we'll get back to you."
          />

          <form
            className="mt-12 space-y-5 reveal"
            onSubmit={handleSubmit}
          >
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3.5 border border-gray-300 font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-3.5 border border-gray-300 font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
              />
            </div>

            {/* PHONE + DATE */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-5 py-3.5 border border-gray-300 font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
              />

              <input
                type="date"
                name="date"
                required
                className="w-full px-5 py-3.5 border border-gray-300 font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your stay preferences..."
              required
              className="w-full px-5 py-3.5 border border-gray-300 font-body text-sm focus:outline-none focus:border-forest-700 transition-colors resize-none"
            />

            {/* SUCCESS MESSAGE */}
            {successMessage && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm">
                {successMessage}
              </div>
            )}

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                {errorMessage}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary ripple group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <CTASection />
    </div>
  );
}