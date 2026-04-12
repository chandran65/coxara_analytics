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

const iconMap = {
  strategy: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  agent: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  lab: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  ),
  chart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    />
  ),
  realtime: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  ),
  model: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
    />
  ),
  report: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  ),
  paper: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  ),
  thought: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  ),
  database: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  ),
  beaker: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  ),
  trendup: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    />
  ),
  cog: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
  cube: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  ),
  bot: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
};

const NavItemIcon = ({ iconType }) => {
  const iconPath = iconMap[iconType];
  if (!iconPath) return null;
  return (
    <svg
      className="w-4.5 h-4.5 text-secondary-400 group-hover/item:text-brand-purple transition-colors duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {iconPath}
    </svg>
  );
};

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
          // Same page – smooth scroll immediately
          scrollToElement(sectionId, safeNavHeight);
        } else {
          // Cross-page – navigate; Layout handles instant scroll to section
          navigate(item.path);
          // Fine-tune with smooth scroll after content mounts
          setTimeout(() => scrollToElement(sectionId, safeNavHeight), 450);
        }
      } else {
        navigate(item.path);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out ${isScrolled
        ? "py-3 glass-navbar shadow-[0_1px_20px_rgba(0,0,0,0.04)] border-b border-secondary-100/50"
        : "py-5 bg-white/60 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex-shrink-0 flex items-center group relative z-10 overflow-hidden rounded-md ${isScrolled ? "h-8 w-36" : "h-10 w-48"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveDropdown(null);
            }}
          >
            <motion.img
              src="/geometric_c_nodes.png"
              alt="COXARA Analytics Logo"
              className="absolute left-[-2%] top-1/2 -translate-y-1/2 w-[160%] max-w-none h-auto mix-blend-multiply pointer-events-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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
                      className={`group relative px-4 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-full ${activeDropdown === navItem.title
                        ? "text-brand-purple"
                        : "text-secondary-600 hover:text-secondary-900"
                        }`}
                    >
                        <span>{navItem.title}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === navItem.title ? "rotate-180" : ""
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
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-purple transition-all duration-300 ${activeDropdown === navItem.title
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                            }`}
                        />
                      </button>

                      {/* Dropdown - Mega Menu */}
                      <AnimatePresence>
                        {activeDropdown === navItem.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="absolute top-full right-0 pt-4 z-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(109,40,217,0.18)] border border-secondary-100/80 overflow-hidden">
                              {/* Top accent gradient */}
                              <div className="h-[2px] bg-gradient-to-r from-brand-purple via-brand-accent to-brand-purple" />

                              <div className="p-2">
                                {/* Group items by headers */}
                                {(() => {
                                  const groups = [];
                                  let currentGroup = null;
                                  navItem.items.forEach((item) => {
                                    if (item.isHeader) {
                                      currentGroup = {
                                        header: item.label,
                                        items: [],
                                      };
                                      groups.push(currentGroup);
                                    } else if (currentGroup) {
                                      currentGroup.items.push(item);
                                    } else {
                                      if (!groups.length)
                                        groups.push({ header: null, items: [] });
                                      groups[0].items.push(item);
                                    }
                                  });

                                  return (
                                    <div
                                      className={`${groups.length > 1 ? "grid grid-cols-2 gap-0 min-w-[520px]" : "min-w-[280px]"}`}
                                    >
                                      {groups.map((group, gi) => (
                                        <div
                                          key={group.header || gi}
                                          className={`${groups.length > 1 && gi > 0
                                            ? "border-l border-secondary-100/60"
                                            : ""
                                            } p-3`}
                                        >
                                          {group.header && (
                                            <div className="flex items-center gap-2 px-3 pt-1 pb-3 mb-1">
                                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-accent" />
                                              <span className="text-[11px] font-bold text-secondary-400 uppercase tracking-wider">
                                                {group.header}
                                              </span>
                                            </div>
                                          )}
                                          <div className="space-y-0.5">
                                            {group.items.map((item, index) => (
                                              <motion.button
                                                key={item.path + index}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                  delay: index * 0.04,
                                                  duration: 0.2,
                                                }}
                                                onClick={() =>
                                                  handleNavClick(item)
                                                }
                                                className="group/item relative flex items-start gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-purple/[0.04] transition-all duration-200"
                                              >
                                                {/* Icon */}
                                                <div className="w-9 h-9 rounded-lg bg-secondary-50 group-hover/item:bg-brand-purple/10 flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5">
                                                  <NavItemIcon
                                                    iconType={item.icon}
                                                  />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                  <div className="text-sm font-semibold text-secondary-800 group-hover/item:text-brand-purple transition-colors duration-200">
                                                    {item.label}
                                                  </div>
                                                  {item.description && (
                                                    <div className="text-xs text-secondary-400 group-hover/item:text-secondary-500 mt-0.5 transition-colors duration-200 leading-relaxed">
                                                      {item.description}
                                                    </div>
                                                  )}
                                                </div>
                                                {/* Arrow */}
                                                <svg
                                                  className="w-3.5 h-3.5 text-secondary-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 mt-1 flex-shrink-0"
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
                                              </motion.button>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  );
                                })()}
                              </div>

                              {/* Footer CTA for services */}
                              {navItem.path && (
                                <div className="border-t border-secondary-100/60 px-5 py-3 bg-secondary-50/50">
                                  <button
                                    onClick={() => handleNavClick(navItem)}
                                    className="group/cta flex items-center gap-2 text-xs font-semibold text-secondary-500 hover:text-brand-purple transition-colors duration-200"
                                  >
                                    <span>
                                      View all {navItem.title.toLowerCase()}
                                    </span>
                                    <svg
                                      className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform duration-200"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      strokeWidth={2.5}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                      />
                                    </svg>
                                  </button>
                                </div>
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
                  className={`block h-0.5 bg-secondary-800 rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 bg-secondary-800 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`block h-0.5 bg-secondary-800 rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(navItem.title);
                        }}
                        className="flex items-center w-full px-4 py-3.5 text-left text-secondary-800 font-medium text-sm"
                        aria-expanded={activeDropdown === navItem.title}
                        aria-label={`Toggle ${navItem.title} menu`}
                      >
                        <span className="flex-1">{navItem.title}</span>
                        <svg
                          className={`w-4 h-4 text-secondary-400 transition-transform duration-300 ${activeDropdown === navItem.title ? "rotate-180" : ""
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
                              {navItem.path && (
                                <button
                                  key="view-all"
                                  onClick={() => handleNavClick(navItem)}
                                  className="block w-full text-left px-4 py-2.5 text-sm font-semibold text-brand-purple rounded-lg hover:bg-brand-purple/5 transition-all duration-200"
                                >
                                  View All {navItem.title}
                                </button>
                              )}
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
                                    key={item.label}
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
