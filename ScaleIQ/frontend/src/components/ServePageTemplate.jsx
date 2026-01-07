import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const ServePageTemplate = ({
  subtitle,
  title,
  description,
  highlights = [],
  helpPoints = [],
  caseStudy,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F] text-white">
      <NewHeader />

      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-scaleiq-gold animate-pulse" />
              {subtitle}
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight max-w-4xl font-outfit">
              {title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>
        </section>

        {/* Highlights Grid */}
        {highlights.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center border border-scaleiq-gold/20 mb-6 group-hover:scale-110 transition-transform text-scaleiq-gold">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-scaleiq-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Where We Help - Bento Style */}
        <section className="py-24 bg-black/40 backdrop-blur-xl border-y border-white/10 mb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Where We <span className="text-scaleiq-gold">Help</span>
              </h2>
              <div className="h-1 w-20 bg-scaleiq-gold rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-scaleiq-gold flex-shrink-0" />
                  <span className="text-lg text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudy && (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-scaleiq-gold/30 p-10 lg:p-16 bg-gradient-to-br from-scaleiq-gold/10 to-transparent"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-scaleiq-gold/10 blur-[100px] -z-10" />
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="text-scaleiq-gold text-sm font-bold uppercase tracking-widest mb-4">
                    Featured Case Study
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    {caseStudy.title}
                  </h3>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {caseStudy.text}
                  </p>
                  <button className="flex items-center gap-2 px-8 py-4 bg-scaleiq-gold text-black font-bold rounded-xl hover:bg-white transition-all group">
                    View Full Solution
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )}
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};
