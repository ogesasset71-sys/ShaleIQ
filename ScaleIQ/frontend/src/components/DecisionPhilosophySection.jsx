import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Target, ShieldCheck } from "lucide-react";

export const DecisionPhilosophySection = () => {
  const principles = [
    {
      title: "Domain First",
      subtitle: "Context is King",
      icon: <BrainCircuit className="w-8 h-8" />,
      description:
        "Technology without domain context is noise. We start with the operational reality of the asset.",
    },
    {
      title: "Pragmatic AI",
      subtitle: "Beyond the Hype",
      icon: <Cpu className="w-8 h-8" />,
      description:
        "We deploy AI where it moves the needle—automating routine drudgery or revealing hidden patterns.",
    },
    {
      title: "Solution Focus",
      subtitle: "Outcomes over Features",
      icon: <Target className="w-8 h-8" />,
      description:
        "We don't just build software; we solve specific engineering and operational headaches.",
    },
    {
      title: "Data Integrity",
      subtitle: "The Foundation",
      icon: <ShieldCheck className="w-8 h-8" />,
      description:
        "Bad data breaks trust. We ensure traceability and quality are baked into every pipeline.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <section
      id="how-we-work"
      className="py-32 bg-transparent relative"
      data-testid="decision-philosophy-section"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-scaleiq-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-scaleiq-gold/50 rounded-full text-scaleiq-gold text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-scaleiq-gold animate-pulse" />
              Our DNA
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-none">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-yellow-200">
                ScaleIQ
              </span>{" "}
              Approach.
            </h2>

            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                In the high-stakes world of energy, "digital transformation" is
                often code for expensive shelfware.
              </p>

              <div className="pl-6 border-l-2 border-scaleiq-gold/30">
                <p className="text-lg text-gray-400 italic">
                  "We believe that successful technology adoption requires a
                  bridge between the messy reality of the field and the promise
                  of the cloud."
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-scaleiq-gold/50 to-transparent my-auto" />
                <span className="text-sm text-scaleiq-gold uppercase tracking-wider font-semibold">
                  Core Principles
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Strategist Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="group relative p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-scaleiq-gold/50 transition-all duration-300 overflow-hidden"
                data-testid={`principle-tile-${index}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-scaleiq-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-scaleiq-gold mb-6 group-hover:scale-110 group-hover:bg-scaleiq-gold group-hover:text-black transition-all duration-300">
                    {principle.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-scaleiq-gold transition-colors">
                    {principle.title}
                  </h3>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-mono">
                    {principle.subtitle}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
