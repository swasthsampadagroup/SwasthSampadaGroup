import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  Building2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import { useReveal } from '@/hooks/useReveal';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const ref = useReveal();

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);
    setSubmitted(false);
    setError(false);

    try {
      const form = e.currentTarget;

      await emailjs.sendForm(
        'service_boq5wdk',
        'template_jykj77o',
        form,
        {
          publicKey: 'ONSTLDSh2wjYvE0JC',
        }
      );

      setSubmitted(true);
      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div ref={ref}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Swasth Sampada Group. We're here to answer your questions and explore partnerships."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            centered
            eyebrow="Get In Touch"
            title="Corporate Office"
            subtitle="Reach out to us through any of the channels below — we look forward to connecting with you."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* ADDRESS */}

            <div
              className="bg-gradient-section p-8 text-center card-hover reveal"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-14 h-14 bg-forest-800 flex items-center justify-center mx-auto mb-5">
                <Building2
                  size={22}
                  className="text-white"
                />
              </div>

              <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">
                Address
              </h3>

              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Siddhi Vinayak Tower
              </p>

              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Makarba, Ahmedabad
              </p>

              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Gujarat – 380051
              </p>
            </div>

            {/* PHONE */}

            <div
              className="bg-gradient-section p-8 text-center card-hover reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-14 h-14 bg-forest-800 flex items-center justify-center mx-auto mb-5">
                <Phone
                  size={22}
                  className="text-white"
                />
              </div>

              <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">
                Phone
              </h3>

              <a
                href="tel:+918347196983"
                className="font-body text-sm text-gray-600 leading-relaxed hover:text-forest-700 transition-colors"
              >
                +91 83471 96983
              </a>
            </div>

            {/* EMAIL */}

            <div
              className="bg-gradient-section p-8 text-center card-hover reveal"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-14 h-14 bg-forest-800 flex items-center justify-center mx-auto mb-5">
                <Mail
                  size={22}
                  className="text-white"
                />
              </div>

              <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">
                Email
              </h3>

              <a
                href="mailto:info@swasthsampada.com"
                className="font-body text-sm text-gray-600 leading-relaxed hover:text-forest-700 transition-colors break-all"
              >
                info@swasthsampada.com
              </a>
            </div>

            {/* WORKING HOURS */}

            <div
              className="bg-gradient-section p-8 text-center card-hover reveal"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-14 h-14 bg-forest-800 flex items-center justify-center mx-auto mb-5">
                <Clock
                  size={22}
                  className="text-white"
                />
              </div>

              <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">
                Working Hours
              </h3>

              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Mon – Sat: 10:00 AM – 6:00 PM
              </p>

              <p className="font-body text-sm text-gray-600 leading-relaxed">
                Sunday: Closed
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAP + CONTACT FORM
      ===================================================== */}

      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* =================================================
                GOOGLE MAP
            ================================================= */}

            <div className="reveal-left">

              <h3 className="font-heading text-2xl font-bold text-forest-900 mb-2">
                Find Us
              </h3>

              <div className="w-12 h-0.5 bg-gold-400 mb-6" />

              <a
                href="https://www.google.com/maps/place/SIDDHI+VINAYAK+TOWER,+Kataria+Automobiles+Rd,+Makarba,+Ahmedabad,+Gujarat+380051/data=!4m2!3m1!1s0x395e9ac2f8623323:0xc84338dfb6bdb047?sa=X&ved=1t:242&ictx=111&cshid=1785326776477765"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-forest-100 to-gray-100 flex items-center justify-center relative overflow-hidden border border-gray-200 hover:border-forest-700 transition-colors duration-300">

                  <div className="absolute inset-0 opacity-5">
                    <MapPin
                      size={300}
                      className="absolute -bottom-10 -right-10 text-forest-800"
                    />
                  </div>

                  <div className="text-center relative z-10">

                    <div className="w-16 h-16 bg-forest-800 flex items-center justify-center mx-auto mb-4 animate-float">
                      <MapPin
                        size={28}
                        className="text-white"
                      />
                    </div>

                    <p className="font-heading text-lg font-semibold text-forest-900 mb-1">
                      Google Map
                    </p>

                    <p className="font-body text-sm text-gray-500">
                      Siddhi Vinayak Tower, Makarba
                    </p>

                    <p className="font-body text-sm text-gray-500">
                      Ahmedabad, Gujarat – 380051
                    </p>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-forest-700">
                      Get Directions →
                    </p>

                  </div>
                </div>
              </a>

            </div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="reveal-right">

              <h3 className="font-heading text-2xl font-bold text-forest-900 mb-2">
                Send Us a Message
              </h3>

              <div className="w-12 h-0.5 bg-gold-400 mb-6" />

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME + COMPANY */}

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full px-5 py-3.5 border border-gray-300 bg-white font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-5 py-3.5 border border-gray-300 bg-white font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
                    />
                  </div>

                </div>

                {/* EMAIL + PHONE */}

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-5 py-3.5 border border-gray-300 bg-white font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-3.5 border border-gray-300 bg-white font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
                    />
                  </div>

                </div>

                {/* SUBJECT */}

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2"
                  >
                    Subject *
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help you?"
                    className="w-full px-5 py-3.5 border border-gray-300 bg-white font-body text-sm focus:outline-none focus:border-forest-700 transition-colors"
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-5 py-3.5 border border-gray-300 bg-white font-body text-sm focus:outline-none focus:border-forest-700 transition-colors resize-none"
                  />
                </div>

                {/* HIDDEN REPLY-TO */}

                <input
                  type="hidden"
                  name="reply_to"
                  value=""
                />

                {/* SUCCESS MESSAGE */}

                {submitted && (
                  <div className="flex items-start gap-3 bg-forest-50 border border-forest-200 px-4 py-4">

                    <CheckCircle2
                      size={20}
                      className="text-forest-700 flex-shrink-0 mt-0.5"
                    />

                    <div>
                      <p className="font-body text-sm font-semibold text-forest-900">
                        Message Sent Successfully!
                      </p>

                      <p className="font-body text-xs text-gray-600 mt-1">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </div>

                  </div>
                )}

                {/* ERROR MESSAGE */}

                {error && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 px-4 py-4">

                    <AlertCircle
                      size={20}
                      className="text-red-600 flex-shrink-0 mt-0.5"
                    />

                    <div>
                      <p className="font-body text-sm font-semibold text-red-800">
                        Message Could Not Be Sent
                      </p>

                      <p className="font-body text-xs text-red-600 mt-1">
                        Please try again or contact us directly by email.
                      </p>
                    </div>

                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSending}
                  className={`btn-primary ripple group w-full md:w-auto justify-center ${
                    isSending
                      ? 'opacity-70 cursor-not-allowed'
                      : ''
                  }`}
                >

                  {isSending
                    ? 'Sending...'
                    : submitted
                    ? 'Message Sent!'
                    : 'Submit'}

                  <Send
                    size={15}
                    className={
                      isSending
                        ? ''
                        : 'group-hover:translate-x-1 transition-transform'
                    }
                  />

                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WEBSITE / SOCIAL
      ===================================================== */}

      <section className="py-16 bg-forest-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <Globe
            size={32}
            className="text-gold-300 mx-auto mb-4"
          />

          <p className="font-heading text-xl text-white mb-2">
            www.swasthsampada.com
          </p>

          <p className="font-body text-sm text-gray-400">
            Connect with us across our divisions and social platforms.
          </p>

        </div>
      </section>

    </div>
  );
}