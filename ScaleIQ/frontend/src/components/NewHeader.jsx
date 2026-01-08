import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NewHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const navigate = useNavigate();

  const navigation = [
    {
      name: "About",
      items: [
        { name: "Overview", path: "/about/overview" },
        { name: "The ScaleIQ Model", path: "/about/model" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "Investors", path: "/about/investors" },
        { name: "Partners & Growth", path: "/about/partners" },
      ],
    },
    { name: "How We Work", path: "/how-we-work" },
    {
      name: "What We Do",
      items: [
        { name: "Digital Engineering", path: "/digital/app-dev" },
        { name: "Products", path: "/products/ogesone" },
        { name: "GCC Solutions", path: "/gcc-solutions" },
      ],
    },
    {
      name: "Who We Serve",
      items: [
        { name: "Oil & Gas Companies", path: "/serve/oil-gas" },
        { name: "Energy Companies", path: "/serve/energy" },
        { name: "Renewables & Utilities", path: "/serve/renewables" },
        { name: "Energy ISVs", path: "/serve/isvs" },
        { name: "Oil Service Companies", path: "/serve/oil-service" },
      ],
    },
    { name: "News & Insights", path: "/news" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setOpenDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileGroup = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
      data-testid="main-header"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 z-50"
            data-testid="logo-link"
          >
            <div className="text-2xl font-bold text-scaleiq-gold">
              Scale<span className="text-scaleiq-gold">IQ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-white hover:text-scaleiq-gold transition-colors flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-0 w-64 bg-black/95 backdrop-blur-md shadow-lg border border-white/10 rounded-md py-2">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem)}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-scaleiq-gold transition-colors"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-2 text-sm font-medium text-white hover:text-scaleiq-gold transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-[110]">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[100] flex flex-col pt-24 px-8 overflow-y-auto min-h-screen"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <div className="flex flex-col space-y-6 pb-20">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-white/5 pb-4">
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => toggleMobileGroup(item.name)}
                        className="flex items-center justify-between w-full text-2xl font-bold text-white py-2 group"
                      >
                        <span
                          className={
                            mobileExpanded[item.name]
                              ? "text-scaleiq-gold"
                              : "text-white group-hover:text-scaleiq-gold transition-colors"
                          }
                        >
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-scaleiq-gold transition-transform duration-300 ${
                            mobileExpanded[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded[item.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden mt-4 flex flex-col space-y-4 border-l border-scaleiq-gold/30"
                          >
                            {item.items.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavClick(subItem)}
                                className="text-left text-lg text-gray-400 hover:text-white transition-colors py-1"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left text-2xl font-bold text-white py-2 hover:text-scaleiq-gold transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
