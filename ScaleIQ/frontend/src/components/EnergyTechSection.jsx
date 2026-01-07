import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Activity,
  Globe,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export const EnergyTechSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const caseStudies = [
    {
      title: "Subsurface Prospecting",
      icon: <Globe className="w-8 h-8 text-scaleiq-gold" />,
      description:
        "Subsurface data is scattered across seismic, logs, drilling, cores, and simulations, making full-field interpretation slow and inconsistent. Complex geology and limited data integration lead to uncertainty in reservoir mapping and higher exploration risk.",
    },
    {
      title: "MOC Modernization",
      icon: <Activity className="w-8 h-8 text-scaleiq-gold" />,
      description:
        "MOC processes were handled through a mix of email, spreadsheets, and legacy applications, slowing approvals and increasing operational risk. Lack of workflow automation and system integration made it difficult to ensure traceability, accountability, and timely execution.",
    },
    {
      title: "Data Integration",
      icon: <Database className="w-8 h-8 text-scaleiq-gold" />,
      description:
        "Operational and engineering data was spread across historians, enterprise systems, and bespoke applications. Limited integration and inconsistent data quality made cross-asset visibility difficult and slowed analytics and AI adoption.",
    },
    {
      title: "Domain-Driven AI",
      icon: <Cpu className="w-8 h-8 text-scaleiq-gold" />,
      description:
        "AI initiatives struggled to move beyond pilots due to limited domain context and poor integration with operational workflows. Models operated in isolation, reducing trust and limiting their impact on day-to-day decision-making.",
    },
  ];

  return (
    <section
      className="py-32 bg-transparent relative overflow-hidden"
      data-testid="energy-tech-section"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-scaleiq-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-scaleiq-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-scaleiq-gold animate-pulse" />
            Core Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
              Energy Tech
            </span>{" "}
            That Works.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Moving beyond traditional service models to deliver measurable
            impact in complex, asset-heavy environments.
          </motion.p>
        </div>

        {/* Draggable Carousel */}
        <motion.div
          ref={carousel}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 py-4"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="min-w-[320px] md:min-w-[400px] group relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_0_40px_-10px_rgba(149,105,31,0.3)]">
                  {/* Holographic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon Box */}
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center border border-scaleiq-gold/20 group-hover:scale-110 transition-transform duration-300">
                      {study.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-scaleiq-gold transition-colors duration-300">
                    {study.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {study.description}
                  </p>

                  <div className="flex items-center text-sm font-bold text-white group-hover:text-scaleiq-gold transition-colors mt-auto">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => (window.location.href = "/case-studies")}
            className="px-10 py-4 bg-transparent border border-scaleiq-gold/50 text-scaleiq-gold hover:bg-scaleiq-gold hover:text-black font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(149,105,31,0.4)]"
          >
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};
