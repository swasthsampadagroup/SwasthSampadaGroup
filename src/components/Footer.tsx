import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

/* =========================================================
   DIVISIONS
========================================================= */

const divisions = [
  {
    label: 'Pharma',
    path: '/pharma',
  },
  {
    label: 'Farms & Cottage',
    path: '/farms-cottage',
  },
  {
    label: 'Cumin Organics',
    path: '/cumin-organics',
  },
  {
    label: 'Wind Energy',
    path: '/wind-energy',
  },
];

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Pharma',
    path: '/pharma',
  },
  {
    label: 'Farms & Cottage',
    path: '/farms-cottage',
  },
  {
    label: 'Cumin Organics',
    path: '/cumin-organics',
  },
  {
    label: 'Wind Energy',
    path: '/wind-energy',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

/* =========================================================
   SOCIAL MEDIA
   Replace the # links with your actual official profiles
========================================================= */

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=61592055293483',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@SSHFarms',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/swasth_sampada_farms/',
  },
];

/* =========================================================
   FOOTER COMPONENT
========================================================= */

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">

      {/* ===================================================
          MAIN FOOTER
      =================================================== */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* =================================================
            BRAND
        ================================================= */}

        <div>
          <Link to="/" className="inline-block">
            <img
              src="/assets/Group.png"
              alt="Swasth Sampada Group"
              className="h-40 w-80 object-contain mb-5"
            />
          </Link>

          <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
            A diversified business group committed to excellence
            across Healthcare, Agriculture, Organic Manufacturing
            and Renewable Energy.
          </p>

          <p className="font-body text-xs text-gold-400 tracking-[0.15em] uppercase font-semibold">
            One Group. Four Divisions. One Shared Vision.
          </p>
        </div>

        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <div>
          <h4 className="font-heading text-lg font-semibold mb-2 text-white">
            Quick Links
          </h4>

          <div className="w-10 h-0.5 bg-gold-400 mb-6" />

          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="
                    font-body
                    text-sm
                    text-gray-400
                    hover:text-gold-300
                    transition-all
                    duration-200
                    hover:pl-2
                    inline-block
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =================================================
            DIVISIONS + SOCIAL
        ================================================= */}

        <div>
          <h4 className="font-heading text-lg font-semibold mb-2 text-white">
            Our Divisions
          </h4>

          <div className="w-10 h-0.5 bg-gold-400 mb-6" />

          <ul className="space-y-4">
            {divisions.map((division) => (
              <li key={division.path}>
                <Link
                  to={division.path}
                  className="
                    font-body
                    text-sm
                    text-gray-400
                    hover:text-gold-300
                    transition-colors
                    duration-200
                    flex
                    items-center
                    gap-2
                    group
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      bg-forest-600
                      rounded-full
                      group-hover:bg-gold-400
                      transition-colors
                    "
                  />

                  {division.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* =============================================
              SOCIAL MEDIA
          ============================================= */}

          <div className="mt-8">
            <h4 className="font-heading text-sm font-semibold mb-4 text-white">
              Follow Us
            </h4>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Swasth Sampada Group on ${social.name}`}
                    className="
                      w-10
                      h-10
                      border
                      border-gray-700
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:border-gold-400
                      hover:text-gold-400
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================
            CORPORATE OFFICE
        ================================================= */}

        <div>
          <h4 className="font-heading text-lg font-semibold mb-2 text-white">
            Corporate Office
          </h4>

          <div className="w-10 h-0.5 bg-gold-400 mb-6" />

          <ul className="space-y-5">

            {/* ADDRESS */}
            <li className="flex items-start gap-3">
              <MapPin
                size={17}
                className="text-gold-400 mt-0.5 flex-shrink-0"
              />

              <a
                href="https://www.google.com/maps/place/SIDDHI+VINAYAK+TOWER,+Kataria+Automobiles+Rd,+Makarba,+Ahmedabad,+Gujarat+380051"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-body
                  text-sm
                  text-gray-400
                  leading-relaxed
                  hover:text-gold-400
                  transition-colors
                  duration-300
                "
              >
                Siddhi Vinayak Tower, Makarba,
                <br />
                Ahmedabad, Gujarat – 380051
              </a>
            </li>

            {/* PHONE */}
            <li className="flex items-center gap-3">
              <Phone
                size={17}
                className="text-gold-400 flex-shrink-0"
              />

              <a
                href="https://wa.me/917317773607"
                target="_blank"
                rel="noopener noreferrer"
                className="
      font-body
      text-sm
      text-gray-400
      hover:text-gold-300
      transition-colors
    "
              >
                +91 7317773607
              </a>
            </li>
            {/* EMAIL */}
            <li className="flex items-center gap-3">
              <Mail
                size={17}
                className="text-gold-400 flex-shrink-0"
              />

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@swasthsampada.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray-400 hover:text-gold-300 transition-colors">
                admin@swasthsampada.com
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* ===================================================
          BOTTOM BAR
      =================================================== */}

      <div className="border-t border-gray-800 py-5 px-6">
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
            text-xs
            font-body
            text-gray-600
          "
        >

          <p>
            © 2026 Swasth Sampada Group. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-use"
              className="hover:text-gray-400 transition-colors"
            >
              Terms of Use
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}