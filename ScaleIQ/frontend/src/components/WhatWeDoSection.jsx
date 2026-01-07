import React from "react";
import { ArrowRight, Code, Database, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BentoCard = ({ service, className, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-500 cursor-pointer ${className}`}
      onClick={() => navigate(service.path)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Gold Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(149,105,31,0.15),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div className="mb-auto">
          <div className="w-12 h-12 rounded-full bg-scaleiq-gold/10 border border-scaleiq-gold/30 flex items-center justify-center mb-6 text-scaleiq-gold group-hover:scale-110 group-hover:bg-scaleiq-gold group-hover:text-black transition-all duration-300">
            {service.icon}
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-scaleiq-gold transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-auto">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors">
          DISCOVER
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-scaleiq-gold" />
        </div>
      </div>
    </motion.div>
  );
};

export const WhatWeDoSection = () => {
  const services = [
    {
      title: "Digital Engineering",
      description:
        "Delivering digital transformation that works in complex, asset-heavy energy environments - designed for reliability, scale, and real-world operations.",
      path: "/digital/app-dev",
      image: "/images/digital-engineering.png",
      icon: <Code className="w-6 h-6" />,
      className: "md:col-span-2 md:row-span-2 min-h-[500px]",
    },
    {
      title: "Products & Platforms",
      description:
        "Suite of industry-leading products that support critical oil & gas sector workflows, analytics, and operational decision-making.",
      path: "/products/ogesone",
      image: "/images/products-platform.png",
      icon: <Database className="w-6 h-6" />,
      className: "md:col-span-1 md:row-span-1 min-h-[240px]",
    },
    {
      title: "GCC Setup",
      description:
        "Designing and fulfilling GCC centers in India for oil & gas companies to strengthen technology staffing and delivery.",
      path: "/gcc-solutions",
      image: "/images/gcc-setup.png",
      icon: <Globe className="w-6 h-6" />,
      className: "md:col-span-1 md:row-span-1 min-h-[240px]",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="py-24 bg-transparent overflow-hidden"
      data-testid="what-we-do-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-yellow-200">
              Expertise
            </span>
          </h2>
          <div className="h-1 w-24 bg-scaleiq-gold/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          {services.map((service, index) => (
            <BentoCard
              key={index}
              index={index}
              service={service}
              className={service.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
