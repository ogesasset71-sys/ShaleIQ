import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Database,
  Activity,
  Globe,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ChevronRight,
  Droplets,
  Truck,
  Factory,
  ShoppingBag,
} from "lucide-react";

const domains = [
  {
    id: "upstream",
    title: "Upstream",
    subtitle: "Exploration, Drilling & Production",
    icon: <Droplets className="w-6 h-6" />,
    image: "/images/oilgas/upstream.png",
    description:
      "Upstream operations combine subsurface uncertainty, complex engineering workflows, and safety-critical execution. Digital and AI initiatives must operate alongside domain expertise, live field operations, and evolving asset conditions.",
    helpItems: [
      "Subsurface data integration and interpretation workflows",
      "Drilling and production optimization",
      "AI-enabled decision support with human-in-the-loop controls",
      "Integration across subsurface, operations, and engineering systems",
    ],
  },
  {
    id: "midstream",
    title: "Midstream",
    subtitle: "Transportation, Storage & Gathering",
    icon: <Truck className="w-6 h-6" />,
    image: "/images/oilgas/midstream.png",
    description:
      "Midstream operations manage the movement of energy across vast networks. Efficiency depends on real-time monitoring, predictive maintenance, and optimized logistics across pipelines, terminals, and storage facilities.",
    helpItems: [
      "Pipeline integrity and leak detection monitoring",
      "Logistics and supply chain optimization",
      "Terminal and storage asset management",
      "Real-time visibility across transportation networks",
    ],
  },
  {
    id: "downstream",
    title: "Downstream",
    subtitle: "Refining & Petrochemicals",
    icon: <Factory className="w-6 h-6" />,
    image: "/images/oilgas/hero.png",
    description:
      "Downstream complexity lies in maximizing yield and minimizing downtime in highly integrated facilities. AI and digital engineering transform process control, energy efficiency, and predictive maintenance.",
    helpItems: [
      "Refinery output and yield optimization",
      "Predictive maintenance for critical process equipment",
      "Energy consumption and emissions monitoring",
      "Supply and demand forecasting for refined products",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    subtitle: "Marketing & Distribution",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: "/images/oilgas/upstream.png",
    description:
      "Retail operations connect energy products to the end-consumer. Success requires data-driven pricing, customer experience excellence, and seamless inventory management across global networks.",
    helpItems: [
      "Dynamic pricing and demand responsiveness",
      "Customer loyalty and personalized engagement",
      "Inventory management and supply chain transparency",
      "Digital transformation of the customer forecourt experience",
    ],
  },
];

const capabilities = [
  {
    title: "System-Level Digital Engineering",
    description:
      "Designing digital and AI capabilities that operate as part of the core operational ecosystem, not as standalone solutions.",
    icon: <Layers className="w-6 h-6 text-scaleiq-gold" />,
  },
  {
    title: "Data Integration & Governance",
    description:
      "Connecting siloed legacy and modern systems, improving data quality, and aligning governance with industry standards such as OSDU.",
    icon: <Database className="w-6 h-6 text-scaleiq-gold" />,
  },
  {
    title: "Domain-Driven AI Workflows",
    description:
      "Embedding AI into complex workflows across exploration, production, transportation, refining, supply, and retail.",
    icon: <Cpu className="w-6 h-6 text-scaleiq-gold" />,
  },
  {
    title: "Pragmatic Execution",
    description:
      "Implementing solutions in phases that respect operational continuity, regulatory oversight, and long asset lifecycles.",
    icon: <ShieldCheck className="w-6 h-6 text-scaleiq-gold" />,
  },
];

const caseStudies = [
  {
    title: "Reservoir Optimization",
    category: "Upstream",
    description:
      "Leveraging AI to identify bypassed pay zones in mature assets, increasing recovery by 14%.",
    image: "/images/oilgas/upstream.png",
  },
  {
    title: "Pipeline Network Twin",
    category: "Midstream",
    description:
      "Digital twin implementation for a 2,000-mile pipeline network, reducing field visits by 30%.",
    image: "/images/oilgas/midstream.png",
  },
  {
    title: "Predictive Refining",
    category: "Downstream",
    description:
      "Reducing unplanned downtime for critical compressors through real-time anomaly detection.",
    image: "/images/oilgas/hero.png",
  },
];

function OilgasSection() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="bg-scaleiq-black min-h-screen text-white font-sans selection:bg-scaleiq-gold/30">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/oilgas/hero.png"
            alt="Offshore Rig"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-scaleiq-black via-transparent to-scaleiq-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-scaleiq-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-scaleiq-gold animate-pulse" />
              Specialized Solutions
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">
              The Full{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                Value Chain
              </span>
              , Optimized.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              From subsurface exploration to customer retail, ScaleIQ partners
              with oil & gas leaders to overcome digital fragmentation and
              deliver AI that scales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Expertise Where it Matters Most.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                ScaleIQ partners with oil & gas companies operating across
                upstream, midstream, downstream, and retail environments. Our
                work spans the entire value chain, where fragmented approaches
                typically fail.
              </p>
              <div className="space-y-4">
                {[
                  "Deep domain complexity understanding",
                  "Full-lifecycle accountability",
                  "Integrated cross-asset solutions",
                  "Measurable, sustained impact",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-scaleiq-gold/20 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-scaleiq-gold" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                <img
                  src="/images/oilgas/upstream.png"
                  alt="Digital Oilfield"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-scaleiq-gold/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-scaleiq-gold/20 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Selector Section */}
      <section className="py-32 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 ${
                  activeDomain.id === domain.id
                    ? "bg-scaleiq-gold border-scaleiq-gold text-black shadow-[0_0_30px_rgba(220,191,98,0.3)]"
                    : "bg-black/40 border-white/10 text-gray-400 hover:border-scaleiq-gold/50"
                }`}
              >
                {domain.icon}
                <span className="font-semibold">{domain.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-scaleiq-gold text-sm font-bold uppercase tracking-widest mb-4">
                  {activeDomain.subtitle}
                </h3>
                <h2 className="text-5xl font-bold mb-8">
                  {activeDomain.title} Solutions
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  {activeDomain.description}
                </p>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-scaleiq-gold" />
                    How We Help
                  </h4>
                  <ul className="grid gap-4">
                    {activeDomain.helpItems.map((item, i) => (
                      <li key={i} className="flex gap-4 text-gray-300">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-scaleiq-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={activeDomain.image}
                    alt={activeDomain.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-6">
              How We Support Oil & Gas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our approach is built for operational reality, ensuring digital
              initiatives translate into boardroom results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-scaleiq-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{cap.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Carousel */}
      <section className="pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4">Market Impact</h2>
            <p className="text-gray-400">
              Proven results across the global energy landscape.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="text-scaleiq-gold text-sm font-medium animate-pulse flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Scroll to explore
            </div>
          </div>
        </div>

        <motion.div
          ref={carousel}
          className="cursor-grab active:cursor-grabbing px-6 lg:px-8"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                className="min-w-[320px] md:min-w-[450px] relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-scaleiq-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 p-8 flex flex-col justify-end">
                  <img
                    src={study.image}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-scaleiq-gold text-black text-[10px] font-bold uppercase tracking-widest mb-4">
                      {study.category}
                    </span>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-scaleiq-gold transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-gray-400 mb-8 max-w-xs">
                      {study.description}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-bold group/btn">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Repeat for visual fill */}
            {caseStudies.map((study, i) => (
              <motion.div
                key={i + 10}
                className="min-w-[320px] md:min-w-[450px] relative group"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 p-8 flex flex-col justify-end">
                  <img
                    src={study.image}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-scaleiq-gold text-black text-[10px] font-bold uppercase tracking-widest mb-4">
                      {study.category}
                    </span>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-scaleiq-gold transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-gray-400 mb-8 max-w-xs">
                      {study.description}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-bold group/btn">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-white/10 to-transparent p-20 rounded-[4rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-scaleiq-gold/20 blur-[120px] pointer-events-none" />
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              Ready to <span className="text-scaleiq-gold italic">Scale</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the leading energy companies leveraging ScaleIQ's platform to
              drive operational excellence.
            </p>
            <button className="px-12 py-5 bg-scaleiq-gold text-black font-bold rounded-full hover:shadow-[0_0_50px_rgba(220,191,98,0.5)] transition-all transform hover:-translate-y-1">
              Start Your Transformation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OilgasSection;
