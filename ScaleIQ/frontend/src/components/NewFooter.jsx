import React from "react";
import { Link } from "react-router-dom";

export const NewFooter = () => {
  const footerSections = [
    {
      title: "About",
      links: [
        { name: "Overview", path: "/about/overview" },
        { name: "The ScaleIQ Model", path: "/about/model" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "Investors", path: "/about/investors" },
        { name: "Partners & Growth", path: "/about/partners" },
      ],
    },
    {
      title: "What We Do",
      links: [
        { name: "Digital Engineering", path: "/digital/app-dev" },
        { name: "Products", path: "/products/ogesone" },
        { name: "GCC Solutions", path: "/gcc-solutions" },
      ],
    },
    {
      title: "Who We Serve",
      links: [
        { name: "Oil & Gas", path: "/serve/oil-gas" },
        { name: "Energy", path: "/serve/energy" },
        { name: "Renewables", path: "/serve/renewables" },
        { name: "Energy ISVs", path: "/serve/isvs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "News", path: "/news" },
        { name: "Join Us", path: "/join" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer
      className="bg-black text-white pt-24 pb-12 border-t border-white/10"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="text-3xl font-bold">
                Scale<span className="text-scaleiq-gold">IQ</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Pioneering digital energy transformation through precision
              engineering and advanced IP solutions.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold text-scaleiq-gold uppercase tracking-widest mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>© 2026 ScaleIQ Private Limited. All Rights Reserved.</p>
          </div>

          <div className="flex gap-8">
            <Link
              to="#"
              className="text-xs text-gray-500 hover:text-scaleiq-gold transition-colors font-medium uppercase tracking-widest"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-xs text-gray-500 hover:text-scaleiq-gold transition-colors font-medium uppercase tracking-widest"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-xs text-gray-500 hover:text-scaleiq-gold transition-colors font-medium uppercase tracking-widest"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
