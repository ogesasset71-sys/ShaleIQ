import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import { Box, Layers, Database, ArrowRight, CheckCircle2 } from "lucide-react";

export const ProductsPage = () => {
  const products = [
    {
      name: "OgesOne",
      category: "Core Suite",
      description:
        "A comprehensive suite of industry-leading products supporting critical oil & gas workflows and operational decision-making.",
      features: [
        "Real-time analytics",
        "Predictive modeling",
        "Asset tracking",
      ],
      icon: <Box className="w-12 h-12" />,
      color: "from-scaleiq-gold/20 to-transparent",
    },
    {
      name: "OgesFlow",
      category: "Analytics",
      description:
        "Advanced platform for data integration and AI-driven insights, designed for complex fluid dynamics and flow assurance.",
      features: ["AI-driven insights", "Cloud-native", "Scalable architecture"],
      icon: <Layers className="w-12 h-12" />,
      color: "from-blue-500/10 to-transparent",
    },
    {
      name: "OgesData",
      category: "Infrastructure",
      description:
        "Next-generation data infrastructure for the energy sector, ensuring security, compliance, and interoperability.",
      features: ["OSDU compliant", "High security", "Low latency"],
      icon: <Database className="w-12 h-12" />,
      color: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F] text-white">
      <NewHeader />

      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-scaleiq-gold animate-pulse" />
              Products & Platforms
            </div>

            <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-tight font-outfit">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                Digital Core
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              ScaleIQ's product suite provides the mission-critical
              infrastructure needed to transform energy operations from legacy
              constraints to digital excellence.
            </p>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-500 backdrop-blur-xl shadow-2xl overflow-hidden`}
              >
                {/* Visual Accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-scaleiq-gold group-hover:text-black transition-all duration-500 text-scaleiq-gold">
                    {product.icon}
                  </div>

                  <div className="mb-6">
                    <span className="text-scaleiq-gold text-xs font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-2 group-hover:text-scaleiq-gold transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-sm text-gray-500"
                      >
                        <CheckCircle2 className="w-4 h-4 text-scaleiq-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-3 w-full py-4 rounded-xl border border-white/10 group-hover:border-scaleiq-gold group-hover:bg-scaleiq-gold group-hover:text-black font-bold transition-all duration-300">
                    <span className="flex-grow text-center">
                      Product Details
                    </span>
                    <ArrowRight className="w-5 h-5 mr-4" />
                  </button>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-scaleiq-gold/5 rounded-full blur-[60px] group-hover:bg-scaleiq-gold/10 transition-all" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology Foundation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 lg:p-20 rounded-[3rem] bg-black/40 border border-white/10 backdrop-blur-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-scaleiq-gold/5 blur-[120px] -z-10" />
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">
                Built on a{" "}
                <span className="text-scaleiq-gold italic">Domain-First</span>{" "}
                Architecture
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Our products aren't just software—they're engineering solutions
                coded into platforms. We bridge the gap between heavy industrial
                data and cloud-native scalability.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "OSDU Compliant",
                  "Cloud Native",
                  "SOC2 Certified",
                  "ISO 27001",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-gray-500 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};
