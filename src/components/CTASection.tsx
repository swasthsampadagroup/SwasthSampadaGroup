import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = 'Ready to Partner With Us?',
  subtitle = 'Discover how Swasth Sampada Group is building a healthier, greener, and more sustainable tomorrow across four divisions.',
  buttonText = 'Contact Us',
  buttonLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative py-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-forest-500 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-gold-300 font-semibold mb-4">
          Let's Build Together
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6" />
        <p className="font-body text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link to={buttonLink} className="btn-gold ripple group">
          {buttonText}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
