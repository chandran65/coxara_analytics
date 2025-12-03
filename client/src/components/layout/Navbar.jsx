import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navigationData } from "../../constants/navigation";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import {
  scrollToElement,
  scrollToTop,
  extractSectionId,
  extractBasePath,
} from "../../utils/scrollUtils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();

  const isScrolled = scrollPosition > 20;
  const safeNavHeight = navHeight || (isScrolled ? 80 : 96);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Measure navbar height (changes on scroll due to padding adjustments)
  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, []);

  // Recalculate height when scroll position changes (padding shrinks/expands)
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, [scrollPosition]);

  // Update on viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.path) {
      const sectionId = extractSectionId(item.path);
      const basePath = extractBasePath(item.path);

      // Close mobile menu and dropdown
      setIsOpen(false);
      setActiveDropdown(null);

      if (sectionId) {
        // Path contains anchor (e.g., "/services#analytics")
        if (location.pathname === basePath) {
          // Already on the page, just scroll to section
          setTimeout(() => {
            scrollToElement(sectionId, safeNavHeight);
          }, 100);
        } else {
          // Navigate to page first, then scroll to section
          navigate(item.path);
          setTimeout(() => {
            scrollToElement(sectionId, safeNavHeight);
          }, 300);
        }
      } else {
        // Regular page navigation (no anchor)
        navigate(item.path);
        setTimeout(() => {
          scrollToTop();
        }, 100);
      }
    }
  };

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-md py-4 border-b border-secondary-100"
        : "bg-white/90 backdrop-blur-md py-6 border-b border-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center group relative z-10"
            onClick={() => {
              setIsOpen(false);
              setActiveDropdown(null);
            }}
          >
            <img
              src="/full-logo-Photoroom.png"
              alt="COXARA Analytics"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.map((navItem) => (
              <div key={navItem.title} className="relative group/nav">
                {navItem.items ? (
                  <>
                    <button
                      onMouseEnter={() => setActiveDropdown(navItem.title)}
                      onClick={() => navItem.path && handleNavClick(navItem)}
                      className={`group/btn relative px-4 py-2.5 text-secondary-800 font-semibold transition-all duration-200 flex items-center gap-1.5 rounded-xl overflow-hidden ${activeDropdown === navItem.title
                        ? "text-brand-purple bg-white/60"
                        : "hover:text-brand-purple hover:bg-white/50"
                        } ${navItem.path ? "cursor-pointer" : ""}`}
                      id={`menu-button-${navItem.title.replaceAll(" ", "-")}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/0 to-brand-accent/0 group-hover/btn:from-brand-purple/8 group-hover/btn:to-brand-accent/8 transition-all duration-300" />
                      <span className="relative">{navItem.title}</span>
                      <svg
                        className={`relative w-4 h-4 transition-all duration-300 ${activeDropdown === navItem.title
                          ? "rotate-180 text-brand-purple"
                          : "rotate-0 group-hover/btn:translate-y-0.5"
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === navItem.title && (
                      <div
                        onMouseEnter={() => setActiveDropdown(navItem.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        onFocus={() => setActiveDropdown(navItem.title)}
                        onBlur={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        role="menu"
                        aria-labelledby={`menu-button-${navItem.title.replaceAll(
                          " ",
                          "-"
                        )}`}
                        tabIndex={-1}
                      >
                        <div
                          className="min-w-[240px] w-max max-w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 py-3 overflow-hidden"
                          style={{
                            backdropFilter: "blur(20px) saturate(160%)",
                            WebkitBackdropFilter: "blur(20px) saturate(160%)",
                            boxShadow:
                              "0 20px 60px -12px rgba(91, 48, 140, 0.25), 0 8px 16px -8px rgba(91, 48, 140, 0.15), inset 0 1px 2px 0 rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          {navItem.items.map((item, index) =>
                            item.isHeader ? (
                              <div
                                key={item.label}
                                className="px-5 py-2 text-xs font-bold text-secondary-500 uppercase tracking-wider mt-2 first:mt-0"
                              >
                                {item.label}
                              </div>
                            ) : (
                              <button
                                key={item.path}
                                onClick={() => handleNavClick(item)}
                                className="group/item relative block w-full text-left px-5 py-3 text-secondary-900 hover:text-brand-purple font-medium transition-all duration-200 overflow-hidden"
                                style={{
                                  animationDelay: `${index * 30}ms`,
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/0 to-brand-accent/0 group-hover/item:from-brand-purple/8 group-hover/item:to-brand-accent/8 transition-all duration-300" />
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover/item:w-1 group-hover/item:h-full bg-gradient-to-b from-brand-purple to-brand-accent transition-all duration-300" />
                                <span className="relative flex items-center gap-2">
                                  <svg
                                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                    {item.label}
                                  </span>
                                </span>
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={navItem.path}
                    className="group/link relative px-4 py-2.5 text-secondary-800 hover:text-brand-purple font-semibold transition-all duration-200 rounded-xl hover:bg-white/50 overflow-hidden flex items-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/0 to-brand-accent/0 group-hover/link:from-brand-purple/8 group-hover/link:to-brand-accent/8 transition-all duration-300" />
                    <span className="relative">{navItem.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>



          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-700 hover:text-brand-purple transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 bg-secondary-900/50 backdrop-blur-md transition-opacity duration-300"
          style={{
            top: safeNavHeight,
            zIndex: 900,
            opacity: isOpen ? 1 : 0,
            backdropFilter: "blur(12px) saturate(120%)",
            WebkitBackdropFilter: "blur(12px) saturate(120%)",
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sliding panel */}
      <div
        className={`lg:hidden fixed left-0 right-0 bg-white backdrop-blur-sm overflow-y-auto shadow-[0_8px_32px_0_rgba(91,48,140,0.2)] border-t border-secondary-200 will-change-transform transition-all duration-300 ease-in-out ${isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        style={{
          top: safeNavHeight,
          height: `calc(100vh - ${safeNavHeight}px)`,
          zIndex: 1000,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        aria-hidden={!isOpen}
      >
        <div className="py-3">
          {navigationData.map((navItem, navIndex) => (
            <div
              key={navItem.title}
              className="border-b border-white/10 last:border-b-0"
              style={{
                animationDelay: `${navIndex * 50}ms`,
              }}
            >
              {navItem.items ? (
                <div>
                  <div className="flex items-stretch">
                    <button
                      onClick={() => navItem.path && handleNavClick(navItem)}
                      className="group/mobile flex-1 px-6 py-4 text-left text-secondary-900 font-semibold hover:bg-gradient-to-r hover:from-brand-purple/12 hover:to-brand-accent/12 active:scale-[0.99] transition-all duration-200 backdrop-blur-sm flex items-center gap-3"
                      disabled={!navItem.path}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-brand-purple transition-all duration-300 ${activeDropdown === navItem.title
                          ? "scale-150 bg-brand-accent"
                          : "scale-100"
                          }`}
                      />
                      {navItem.title}
                    </button>
                    <button
                      onClick={() => toggleDropdown(navItem.title)}
                      className="px-4 py-4 hover:bg-gradient-to-r hover:from-brand-purple/12 hover:to-brand-accent/12 transition-all duration-200"
                      aria-expanded={activeDropdown === navItem.title}
                      aria-label={`Toggle ${navItem.title} menu`}
                    >
                      <div
                        className={`p-1.5 rounded-lg transition-all duration-300 ${activeDropdown === navItem.title
                          ? "bg-brand-purple/20 rotate-180"
                          : "bg-white/50"
                          }`}
                      >
                        <svg
                          className="w-4 h-4 text-brand-purple transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === navItem.title
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-br from-white/75 to-white/60 backdrop-blur-lg py-2 mx-3 mb-2 rounded-xl border border-white/40"
                      style={{
                        backdropFilter: "blur(16px) saturate(150%)",
                        WebkitBackdropFilter: "blur(16px) saturate(150%)",
                      }}
                    >
                      {navItem.items.map((item, itemIndex) => (
                        <button
                          key={item.path}
                          onClick={() => handleNavClick(item)}
                          className="group/subitem relative w-full px-6 py-3 text-left text-secondary-800 hover:text-brand-purple font-medium transition-all duration-200 overflow-hidden"
                          style={{
                            animationDelay: `${itemIndex * 40}ms`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/0 to-brand-accent/0 group-hover/subitem:from-brand-purple/12 group-hover/subitem:to-brand-accent/12 transition-all duration-300" />
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover/subitem:w-1 group-hover/subitem:h-full bg-gradient-to-b from-brand-purple to-brand-accent transition-all duration-300 rounded-r" />
                          <span className="relative flex items-center gap-3 group-hover/subitem:translate-x-1 transition-transform duration-200">
                            <svg
                              className="w-3.5 h-3.5 opacity-60 group-hover/subitem:opacity-100 transition-opacity"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(navItem)}
                  className="group/single w-full px-6 py-4 text-left text-secondary-900 font-semibold hover:bg-gradient-to-r hover:from-brand-purple/12 hover:to-brand-accent/12 active:scale-[0.99] transition-all duration-200 flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover/single:scale-150 group-hover/single:bg-brand-accent transition-all duration-300" />
                  {navItem.title}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
