import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Zap, Settings, Battery, Briefcase, Monitor } from "lucide-react";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

export const MergedCredibilitySection = () => {
  const domains = [
    { name: "Oil & Gas", icon: <Zap className="w-4 h-4" /> },
    { name: "Engineering", icon: <Settings className="w-4 h-4" /> },
    { name: "Energy Tech", icon: <Battery className="w-4 h-4" /> },
    { name: "Consulting", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Digital", icon: <Monitor className="w-4 h-4" /> },
  ];

  const metrics = [
    { value: 700, suffix: "+", label: "Global Energy Experts" },
    { value: 250, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Fortune 500 Clients" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
  ];

  return (
    <section
      className="py-32 bg-scaleiq-black relative border-t border-white/10"
      data-testid="merged-credibility-section"
    >
      {/* Background World Map / Network Effect Hint */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-scaleiq-gold/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Global Scale.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-yellow-200">
                Local Impact.
              </span>
            </h2>
            <div className="h-1 w-24 bg-scaleiq-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Founded by industry veterans, we bring deep domain expertise and a
              proven track record of transforming mission-critical environments.
            </p>
          </motion.div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 font-mono tracking-tighter">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-scaleiq-gold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* DOMAINS GRID */}
        <div className="text-center">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            Our Domain Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(149, 105, 31, 0.2)",
                  borderColor: "rgba(149, 105, 31, 0.6)",
                }}
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-default"
              >
                <div className="text-scaleiq-gold">{domain.icon}</div>
                <span className="text-lg font-medium text-white">
                  {domain.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
