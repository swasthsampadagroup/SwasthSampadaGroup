import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },

  {
    label: 'Pharma',
    path: '/pharma',
    children: [
      { label: 'Pharma', path: '/pharma' },
      {
        label: 'Swasth Sampada Healthcare',
        path: '/pharma/swasthsampadahealthcare',
      },
      {
        label: 'Simpson Healthcare',
        path: '/pharma/simpsonhealthcare',
      },
      {
        label: 'Common Brands',
        path: '/pharma/commonbrands',
      },
      {
        label: 'Our Own Manufacturing Brands',
        path: '/pharma/manufacturingbrands',
      },
    ],
  },

  { label: 'Farms & Cottage', path: '/farms-cottage' },
  { label: 'Cumin Organics', path: '/cumin-organics' },
  { label: 'Wind Energy', path: '/wind-energy' },
  { label: 'Career', path: '/career' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/assets/Group.png"
            alt="Swasth Sampada Group Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-1">

          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative group"
              onMouseEnter={() => {
                if (link.children) {
                  setOpenDropdown(link.label);
                }
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
              }}
            >

              {/* ========== DROPDOWN LINK ========== */}
              {link.children ? (
                <>
                  <button
                    type="button"
                    className={`nav-link flex items-center gap-1 px-3 py-2 text-sm ${
                      scrolled
                        ? isActive(link.path)
                          ? 'text-forest-800'
                          : 'text-gray-700 hover:text-forest-800'
                        : isActive(link.path)
                          ? 'text-gold-300'
                          : 'text-white hover:text-gold-300'
                    } ${
                      isActive(link.path) ? 'active' : ''
                    }`}
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* ========== DESKTOP DROPDOWN ========== */}
                  {openDropdown === link.label && (
                    <div
                      className="
                        absolute
                        top-full
                        left-0
                        w-72
                        bg-white
                        shadow-2xl
                        border-t-2
                        border-forest-700
                        py-2
                        z-50
                      "
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`
                            block
                            px-5
                            py-3
                            text-xs
                            font-body
                            font-medium
                            transition-all
                            duration-200
                            tracking-wide
                            ${
                              isActive(child.path)
                                ? 'bg-forest-50 text-forest-800'
                                : 'text-gray-700 hover:bg-forest-50 hover:text-forest-800 hover:pl-7'
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (

                /* ========== NORMAL LINK ========== */
                <Link
                  to={link.path}
                  className={`nav-link px-3 py-2 text-sm ${
                    scrolled
                      ? isActive(link.path)
                        ? 'text-forest-800'
                        : 'text-gray-700 hover:text-forest-800'
                      : isActive(link.path)
                        ? 'text-gold-300'
                        : 'text-white hover:text-gold-300'
                  } ${
                    isActive(link.path) ? 'active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )}

            </div>
          ))}

        </nav>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded transition-colors ${
            scrolled
              ? 'text-gray-700'
              : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          bg-white
          shadow-xl
          ${
            menuOpen
              ? 'max-h-[90vh] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <nav className="px-6 py-4 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">

          {navLinks.map((link) => (
            <div key={link.path}>

              {/* ========== MOBILE DROPDOWN ========== */}
              {link.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === link.label
                          ? null
                          : link.label
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      py-3
                      text-sm
                      font-medium
                      text-gray-700
                      border-b
                      border-gray-100
                    "
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className={`
                        transition-transform
                        duration-200
                        ${
                          mobileExpanded === link.label
                            ? 'rotate-180'
                            : ''
                        }
                      `}
                    />
                  </button>

                  {/* ========== MOBILE SUBMENU ========== */}
                  {mobileExpanded === link.label && (
                    <div className="pl-4 py-1 bg-gray-50">

                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`
                            block
                            py-3
                            text-xs
                            font-body
                            border-b
                            border-gray-100
                            transition-colors
                            ${
                              isActive(child.path)
                                ? 'text-forest-800 font-semibold'
                                : 'text-gray-600 hover:text-forest-700'
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}

                    </div>
                  )}
                </>
              ) : (

                /* ========== MOBILE NORMAL LINK ========== */
                <Link
                  to={link.path}
                  className={`
                    block
                    py-3
                    text-sm
                    font-medium
                    border-b
                    border-gray-100
                    ${
                      isActive(link.path)
                        ? 'text-forest-700'
                        : 'text-gray-700'
                    }
                  `}
                >
                  {link.label}
                </Link>
              )}

            </div>
          ))}

        </nav>
      </div>
    </header>
  );
}
