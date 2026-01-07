import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import { Calendar, ArrowRight, Share2 } from "lucide-react";

export const NewsPage = () => {
  const news = [
    {
      title: "ScaleIQ Recognized for Excellence in Energy Digital Engineering",
      date: "March 2026",
      category: "Recognition",
      description:
        "ScaleIQ was recognized by an industry forum for its work in delivering digital and engineering solutions across complex, asset-intensive energy environments.",
    },
    {
      title:
        "ScaleIQ Partners with a Global Energy Major to Support Digital Programs",
      date: "January 2026",
      category: "Partnership",
      description:
        "ScaleIQ announced a new engagement with a global energy company to support long-term digital and engineering initiatives across multiple business units.",
    },
    {
      title:
        "ScaleIQ Wins Strategic Mandate for Energy GCC Enablement in India",
      date: "November 2025",
      category: "Global Expansion",
      description:
        "ScaleIQ was selected to support the setup and operationalization of an India-based Global Capability Center for a multinational energy organization.",
    },
    {
      title: "ScaleIQ Expands Partnerships with Leading Technology Providers",
      date: "September 2026",
      category: "Ecosystem",
      description:
        "ScaleIQ strengthened its partner ecosystem to support the delivery of integrated digital, data, and AI solutions for energy and infrastructure clients.",
    },
    {
      title:
        "ScaleIQ Recognized as a Trusted Partner for Domain-Led Digital Transformation",
      date: "June 2025",
      category: "Client Success",
      description:
        "ScaleIQ received recognition from clients for its domain-driven approach to digital engineering and its focus on delivering practical, production-ready outcomes.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F] text-white">
      <NewHeader />

      <div className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-scaleiq-gold animate-pulse" />
              News & Insights
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight font-outfit">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl lg:mx-0 mx-auto">
              Perspectives, updates, and thinking from ScaleIQ across energy,
              oil & gas, digital engineering, GCCs and AI.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {news.map((itemData, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative h-full flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-300 backdrop-blur-sm cursor-pointer overflow-hidden shadow-2xl"
              >
                {/* Decorative background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-scaleiq-gold/5 rounded-full blur-[80px] group-hover:bg-scaleiq-gold/10 transition-all" />

                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 rounded-full bg-scaleiq-gold/10 border border-scaleiq-gold/20 text-xs font-bold text-scaleiq-gold tracking-widest uppercase">
                    {itemData.category}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {itemData.date}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-scaleiq-gold transition-colors leading-tight">
                  {itemData.title}
                </h3>

                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                  {itemData.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-scaleiq-gold transition-all">
                    Read Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-scaleiq-gold hover:bg-white/10 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};
