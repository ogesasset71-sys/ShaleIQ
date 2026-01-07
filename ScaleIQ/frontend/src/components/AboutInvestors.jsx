import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import {
  TrendingUp,
  PieChart,
  Landmark,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const AboutInvestors = () => {
  const metrics = [
    {
      label: "Market Opportunity",
      value: "$2.5T+",
      sub: "Digital Energy Transformation",
    },
    { label: "Platform Scale", value: "150+", sub: "Global Asset Deployments" },
    { label: "Growth Target", value: "3.5x", sub: "Next 24 Months YoY" },
    { label: "Capital Efficiency", value: "88%", sub: "EBITDA Margin Profile" },
  ];

  const thesisPoints = [
    {
      title: "Structural Market Shift",
      desc: "Energy transition and digital mandates are forcing a generational upgrade of legacy infrastructure.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Scalable IP Portfolio",
      desc: "Proprietary platform architecture allows for rapid horizontal expansion across different energy verticals.",
      icon: <PieChart className="w-6 h-6" />,
    },
    {
      title: "Operational Resilience",
      desc: "Strong recurring revenue models with deep integration into critical mission-critical workflows.",
      icon: <Landmark className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-scaleiq-gold/30">
      <NewHeader />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(149,105,31,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-scaleiq-gold font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-scaleiq-gold"></span>
              Investor Relations
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
              Scaling Value. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                Generating Impact.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              ScaleIQ represents a unique investment opportunity at the
              intersection of heavy industry, advanced AI, and the global energy
              transition.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-scaleiq-gold text-black font-bold rounded-full hover:bg-white transition-all flex items-center gap-2">
                Investor Deck <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Contact Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-scaleiq-gold mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white mb-1 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500">{metric.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Investment <span className="text-scaleiq-gold">Thesis</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                We bridge the gap between "Digital" and "Industrial". Unlike
                generic software firms, ScaleIQ focuses on high-precision domain
                applications where the barrier to entry is high and the value
                creation is immediate.
              </p>

              <div className="space-y-8">
                {thesisPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center text-scaleiq-gold">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-gray-500 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-scaleiq-gold/20 blur-[100px] rounded-full" />
              <div className="relative p-8 md:p-12 rounded-3xl bg-black border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-white/10">
                  Governance Excellence
                </h3>
                <div className="space-y-6">
                  {[
                    "Quarterly Independent Audits",
                    "Transparent Reporting Framework",
                    "ESMA Compliant Disclosures",
                    "Strict ESG Integration",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-scaleiq-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 rounded-2xl bg-scaleiq-gold/5 border border-scaleiq-gold/20">
                  <p className="text-sm text-gray-400 italic">
                    "Our commitment to transparency ensures that our investors
                    have a clear line of sight into the fundamental drivers of
                    our business value."
                  </p>
                  <div className="mt-4 text-sm font-bold text-white">
                    — Anita Kanodia, CLO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};
