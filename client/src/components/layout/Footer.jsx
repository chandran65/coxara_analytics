import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { footerData, socialMediaLinks } from "../../constants/footer";
import {
  scrollToElement,
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
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[icon]}
    </svg>
  );
};

const FooterLinkColumn = ({ title, links, handleLinkClick }) => (
  <div>
    <h3 className="text-secondary-800 font-display font-semibold text-sm uppercase tracking-wider mb-6 relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-purple to-brand-accent rounded-full" />
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.path}
            onClick={(e) => handleLinkClick(e, link.path)}
            className="group/link text-secondary-500 hover:text-brand-purple transition-all duration-300 text-sm flex items-center gap-2"
          >
            <span className="w-0 group-hover/link:w-2 h-px bg-brand-accent transition-all duration-300" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const sectionId = extractSectionId(path);
    const basePath = extractBasePath(path);

    if (sectionId) {
      if (location.pathname === basePath) {
        // Same page – smooth scroll immediately
        scrollToElement(sectionId, 80);
      } else {
        // Cross-page – navigate first, Layout handles instant scroll,
        // then fine-tune with smooth scroll after content mounts
        navigate(path);
        setTimeout(() => scrollToElement(sectionId, 80), 450);
      }
    } else {
      // Non-hash link – just navigate; Layout's useLayoutEffect
      // handles instant scroll-to-top on pathname change
      navigate(path);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#F5F0FF] via-[#F8F5FF] to-[#F0EAFF] text-secondary-700 overflow-hidden">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      {/* Background decorative orbs — soft violet */}
      <div className="absolute top-20 -left-32 w-80 h-80 bg-brand-purple/[0.06] rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-72 h-72 bg-brand-accent/[0.05] rounded-full blur-[50px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(109,40,217,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8"
          >
            {/* Brand Column */}
            <motion.div
              className="lg:col-span-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <Link to="/" className="inline-block group mb-8">
                <img
                  src="/geometric_c_nodes.png"
                  alt="COXARA Analytics"
                  className="h-20 sm:h-24 w-auto object-contain mix-blend-multiply opacity-95 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </Link>
              <p className="text-secondary-500 text-sm leading-relaxed mb-8 max-w-xs">
                Transforming data into actionable insights with cutting-edge
                analytics and machine learning solutions.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mb-8">
                {socialMediaLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/15 hover:bg-brand-purple hover:border-brand-purple flex items-center justify-center text-secondary-500 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>

              {/* Address */}
              <div className="text-secondary-500 text-sm leading-relaxed space-y-1">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-brand-purple mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p>N0.58,Marudhar Town, Phase-II</p>
                    <p>Perumalpattu</p>
                    <p>Tiruvallur - 602024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Link Columns */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <FooterLinkColumn
                title={footerData.company.title}
                links={footerData.company.links}
                handleLinkClick={handleLinkClick}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <FooterLinkColumn
                title={footerData.industries.title}
                links={footerData.industries.links}
                handleLinkClick={handleLinkClick}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <FooterLinkColumn
                title={footerData.services.title}
                links={footerData.services.links}
                handleLinkClick={handleLinkClick}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <FooterLinkColumn
                title={footerData.solutions.title}
                links={footerData.solutions.links}
                handleLinkClick={handleLinkClick}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-brand-purple/10 py-8"
        >
          <div className="flex items-center justify-center">
            <p className="text-secondary-500 text-sm text-center">
              © {currentYear} COXARA Analytics. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
