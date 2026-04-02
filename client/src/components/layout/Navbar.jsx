import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const dropdownTimeoutRef = useRef(null);
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const location = useLocation();

  const isScrolled = scrollPosition > 20;
  const safeNavHeight = navHeight || (isScrolled ? 72 : 80);

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

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  const handleNavClick = (item) => {
    if (item.path) {
      const sectionId = extractSectionId(item.path);
      const basePath = extractBasePath(item.path);
      setIsOpen(false);
      setActiveDropdown(null);

      if (sectionId) {
        if (location.pathname === basePath) {
          setTimeout(() => scrollToElement(sectionId, safeNavHeight), 100);
        } else {
          navigate(item.path);
          setTimeout(() => scrollToElement(sectionId, safeNavHeight), 300);
        }
      } else {
        navigate(item.path);
        setTimeout(() => scrollToTop(), 100);
      }
    }
  };

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleDropdownEnter = (title) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(title);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "py-3 glass-navbar shadow-[0_1px_20px_rgba(0,0,0,0.04)] border-b border-secondary-100/50"
          : "py-5 bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group relative z-10"
            onClick={() => {
              setIsOpen(false);
              setActiveDropdown(null);
            }}
          >
            <motion.img
              src="/full-logo-Photoroom.png"
              alt="COXARA Analytics"
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? "h-9" : "h-10 sm:h-11"
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationData.map((navItem) => (
              <div
                key={navItem.title}
                className="relative"
                onMouseEnter={() =>
                  navItem.items && handleDropdownEnter(navItem.title)
                }
                onMouseLeave={() => navItem.items && handleDropdownLeave()}
              >
                {navItem.items ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (navItem.path) handleNavClick(navItem);
                      }}
                      className={`group relative px-4 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-full ${
                        activeDropdown === navItem.title
                          ? "text-brand-purple"
                          : "text-secondary-600 hover:text-secondary-900"
                      }`}
                    >
                      <span>{navItem.title}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === navItem.title ? "rotate-180" : ""
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
                      {/* Active indicator dot */}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-purple transition-all duration-300 ${
                          activeDropdown === navItem.title
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === navItem.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-full left-0 pt-3 z-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="min-w-[260px] bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(109,40,217,0.15)] border border-secondary-100/80 py-2 overflow-hidden">
                            {navItem.items.map((item, index) =>
                              item.isHeader ? (
                                <div
                                  key={item.label}
                                  className="px-5 pt-3 pb-1.5 text-[11px] font-bold text-secondary-400 uppercase tracking-wider first:pt-2"
                                >
                                  {item.label}
                                </div>
                              ) : (
                                <motion.button
                                  key={item.path}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: index * 0.03,
                                    duration: 0.2,
                                  }}
                                  onClick={() => handleNavClick(item)}
                                  className="group/item relative flex items-center w-full text-left px-5 py-2.5 text-sm text-secondary-700 hover:text-brand-purple font-medium transition-all duration-200"
                                >
                                  <div className="absolute inset-y-0 left-0 w-0 group-hover/item:w-0.5 bg-brand-purple transition-all duration-200 rounded-r-full" />
                                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                    {item.label}
                                  </span>
                                </motion.button>
                              ),
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={navItem.path}
                    className="relative px-4 py-2.5 text-sm font-medium text-secondary-600 hover:text-secondary-900 transition-all duration-300 rounded-full group"
                  >
                    <span>{navItem.title}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-0.5 bg-brand-purple rounded-full transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="ml-4">
              <Link
                to="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-purple text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(109,40,217,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-secondary-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-secondary-800 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-secondary-800 rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 bg-secondary-800 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-secondary-900/30 backdrop-blur-sm"
            style={{ top: safeNavHeight, zIndex: 900 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed left-0 right-0 bg-white overflow-y-auto shadow-2xl border-t border-secondary-100"
            style={{
              top: safeNavHeight,
              maxHeight: `calc(100vh - ${safeNavHeight}px)`,
              zIndex: 1000,
            }}
          >
            <div className="py-2 px-2">
              {navigationData.map((navItem, navIndex) => (
                <motion.div
                  key={navItem.title}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navIndex * 0.05 }}
                >
                  {navItem.items ? (
                    <div>
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            navItem.path && handleNavClick(navItem)
                          }
                          className="flex-1 px-4 py-3.5 text-left text-secondary-800 font-medium text-sm"
                          disabled={!navItem.path}
                        >
                          {navItem.title}
                        </button>
                        <button
                          onClick={() => toggleDropdown(navItem.title)}
                          className="px-4 py-3.5"
                          aria-expanded={activeDropdown === navItem.title}
                          aria-label={`Toggle ${navItem.title} menu`}
                        >
                          <svg
                            className={`w-4 h-4 text-secondary-400 transition-transform duration-300 ${
                              activeDropdown === navItem.title
                                ? "rotate-180"
                                : ""
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
                      </div>

                      <AnimatePresence>
                        {activeDropdown === navItem.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-0.5">
                              {navItem.items.map((item) =>
                                item.isHeader ? (
                                  <p
                                    key={item.label}
                                    className="px-4 pt-3 pb-1 text-[10px] font-bold text-secondary-400 uppercase tracking-wider"
                                  >
                                    {item.label}
                                  </p>
                                ) : (
                                  <button
                                    key={item.path}
                                    onClick={() => handleNavClick(item)}
                                    className="block w-full text-left px-4 py-2.5 text-sm text-secondary-600 hover:text-brand-purple rounded-lg hover:bg-brand-purple/5 transition-all duration-200"
                                  >
                                    {item.label}
                                  </button>
                                ),
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={navItem.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3.5 text-secondary-800 font-medium text-sm rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      {navItem.title}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-4 py-4 mt-2 border-t border-secondary-100"
              >
                <Link
                  to="/company/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-purple text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
