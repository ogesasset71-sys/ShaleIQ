import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import {
  Share2,
  Globe2,
  Zap,
  BarChart3,
  ChevronRight,
  Layers,
} from "lucide-react";

export const AboutPartners = () => {
  const partnerTypes = [
    {
      title: "Technology ISVs",
      desc: "Collaborating with specialized software vendors to integrate niche capabilities into the OgesOne platform.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Global System Integrators",
      desc: "Partnering with global firms to scale our delivery and implementation capabilities across continents.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Industry Consortia",
      desc: "Active participation in global energy standards bodies to drive interoperability and data integrity.",
      icon: <Globe2 className="w-6 h-6" />,
    },
  ];

  const initiatives = [
    {
      title: "Global Expansion",
      status: "Scaling",
      impact: "North America, Middle East, SE Asia",
    },
    {
      title: "Next-Gen R&D",
      status: "Active",
      impact: "Domain-specific Generative AI",
    },
    {
      title: "ESG Framework",
      status: "Integrated",
      impact: "Decarbonization Tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-scaleiq-gold/30">
      <NewHeader />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(149,105,31,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-md bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Share2 className="w-3 h-3 text-scaleiq-gold" />
              Ecosystem & Expansion
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                Network
              </span>{" "}
              Effect
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              ScaleIQ doesn't operate in isolation. We build strategic alliances
              that amplify our impact and accelerate digital maturity across the
              entire energy value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partners Grid */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4">Strategic Partners</h2>
            <p className="text-gray-400">
              Driving innovation through collaborative excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-scaleiq-gold/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-scaleiq-gold/10 flex items-center justify-center text-scaleiq-gold mb-8 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {type.desc}
                </p>
                <div className="flex items-center gap-2 text-scaleiq-gold font-bold group-hover:gap-4 transition-all cursor-pointer">
                  Explore Partnership <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Strategy Visualization */}
      <section className="py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-scaleiq-gold/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-scaleiq-gold font-bold uppercase tracking-widest text-sm mb-6">
                Growth Velocity
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-none">
                Expanding the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                  ScaleIQ Footprint.
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Our growth strategy is built on three pillars: Geographic
                expansion into high-growth energy hubs, continuous R&D in domain
                AI, and the integration of ESG governance into every customer
                engagement.
              </p>

              <div className="space-y-4">
                {initiatives.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-xl">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.impact}</div>
                    </div>
                    <div className="px-4 py-1 rounded-full bg-scaleiq-gold/10 text-scaleiq-gold text-xs font-black uppercase tracking-widest">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-scaleiq-gold/10 rounded-full animate-pulse" />
              <div className="absolute inset-12 bg-black rounded-full shadow-2xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <BarChart3 className="w-20 h-20 text-scaleiq-gold mx-auto mb-4" />
                  <div className="text-5xl font-black">2026</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                    Target Maturity
                  </div>
                </div>
              </div>

              {/* Orbits */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-24 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Orbiting nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-scaleiq-gold rounded-full" />
              <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-white rounded-full" />
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
