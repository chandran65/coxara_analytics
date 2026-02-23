import { Link, useNavigate, useLocation } from "react-router-dom";
import { footerData, socialMediaLinks } from "../../constants/footer";
import {
  scrollToElement,
  scrollToTop,
  extractSectionId,
  extractBasePath,
} from "../../utils/scrollUtils";

const SocialIcon = ({ icon }) => {
  const iconPaths = {
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  };

  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[icon]}
    </svg>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const sectionId = extractSectionId(path);
    const basePath = extractBasePath(path);

    if (sectionId) {
      // Path contains anchor (e.g., "/services#analytics")
      if (location.pathname === basePath) {
        // Already on the page, just scroll to section
        scrollToElement(sectionId, 80);
      } else {
        // Navigate to page first, then scroll to section
        navigate(path);
        setTimeout(() => {
          scrollToElement(sectionId, 80);
        }, 300);
      }
    } else {
      // Regular page navigation (no anchor)
      navigate(path);
      scrollToTop();
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-secondary-900 to-secondary-950 text-secondary-100">
      {/* Top Light-Purple Wave touching white background (curved boundary) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[1px] z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[120px] sm:h-[140px] md:h-[160px]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft purple gradient that fades to transparent at the very top to blend into white */}
            <linearGradient
              id="footerTopPurple"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 0 }}
              />
              <stop
                offset="22%"
                style={{ stopColor: "#e4d4f3", stopOpacity: 0.35 }}
              />
              <stop
                offset="45%"
                style={{ stopColor: "#c9a6e6", stopOpacity: 0.7 }}
              />
              <stop
                offset="75%"
                style={{ stopColor: "#9a72c8", stopOpacity: 0.9 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#74469e", stopOpacity: 1 }}
              />
            </linearGradient>
            {/* White feather overlay to create natural misty blend into the page background */}
            <linearGradient
              id="footerFadeToWhite"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.9 }}
              />
              <stop
                offset="60%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.35 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>
          {/* Layered waves that curve into the white area above */}
          <path
            d="M0,12 L1440,12 L1440,52 C 1220,36 1060,30 880,38 C 680,47 480,64 280,54 C 180,49 90,45 0,52 Z"
            fill="url(#footerTopPurple)"
            opacity="0.55"
          />
          <path
            d="M0,12 L1440,12 L1440,64 C 1180,50 980,42 780,48 C 560,55 360,74 160,62 C 100,58 50,56 0,62 Z"
            fill="url(#footerTopPurple)"
            opacity="0.75"
          />
          <path
            d="M0,12 L1440,12 L1440,56 C 1260,44 1040,36 860,44 C 650,54 420,78 200,66 C 120,61 60,60 0,66 Z"
            fill="url(#footerTopPurple)"
          />
          {/* Gentle white overlay to feather the top edge into white background */}
          <rect
            x="0"
            y="0"
            width="1440"
            height="40"
            fill="url(#footerFadeToWhite)"
          />
        </svg>
      </div>

      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[1px]">
        <svg
          className="relative block w-full h-[180px] sm:h-[220px] md:h-[260px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Vertical gradients for a soft light-to-deep blend */}
            <linearGradient
              id="footerWaveTop"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#e796f3", stopOpacity: 0.6 }}
              />
              <stop
                offset="60%"
                style={{ stopColor: "#cf78e3", stopOpacity: 0.55 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8561a1", stopOpacity: 0.5 }}
              />
            </linearGradient>
            <linearGradient
              id="footerWaveMid"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#cf78e3", stopOpacity: 0.6 }}
              />
              <stop
                offset="60%"
                style={{ stopColor: "#8561a1", stopOpacity: 0.65 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#74469e", stopOpacity: 0.65 }}
              />
            </linearGradient>
            <linearGradient
              id="footerWaveBase"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#74469e", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#5b308c", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0f172a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* Top wave - thin, light, pronounced curve like reference */}
          <path
            d="M0,80 C 100,20 260,30 360,60 C 520,110 720,140 900,120 C 1120,95 1300,40 1440,85 L1440,0 L0,0 Z"
            fill="url(#footerWaveTop)"
          />

          {/* Mid wave - thicker, slightly offset underlap */}
          <path
            d="M0,120 C 160,160 340,190 500,170 C 680,145 860,105 1040,110 C 1240,118 1360,150 1440,130 L1440,0 L0,0 Z"
            fill="url(#footerWaveMid)"
          />

          {/* Base wave - deepest, forms the footer top silhouette */}
          <path
            d="M0,170 C 220,230 460,260 720,240 C 980,220 1200,180 1440,210 L1440,0 L0,0 Z"
            fill="url(#footerWaveBase)"
          />
        </svg>
      </div>

      <div className="container-custom pt-40 sm:pt-48 md:pt-56">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center group mb-4">
                <img
                  src="/full-logo-Photoroom.png"
                  alt="COXARA Analytics"
                  className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-secondary-300 text-sm leading-relaxed mb-6 max-w-xs">
                Transforming data into actionable insights with cutting-edge
                analytics and machine learning solutions.
              </p>
              <div className="flex items-center gap-3 mb-8">
                {socialMediaLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-brand-purple flex items-center justify-center text-secondary-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>

              <div className="text-secondary-400 text-sm leading-relaxed space-y-1">
                <p>No.2, Bharathiyar Street</p>
                <p>M.G.R. Nagar</p>
                <p>West Tambaram</p>
                <p>Chennai - 600045</p>
                <p>India</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.company.title}
              </h3>
              <ul className="space-y-3">
                {footerData.company.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.industries.title}
              </h3>
              <ul className="space-y-3">
                {footerData.industries.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.services.title}
              </h3>
              <ul className="space-y-3">
                {footerData.services.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.solutions.title}
              </h3>
              <ul className="space-y-3">
                {footerData.solutions.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} COXARA Analytics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-secondary-400 hover:text-brand-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-secondary-400 hover:text-brand-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
