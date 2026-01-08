import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { GoToTop } from "./GoToTop";
import { CTASection } from "./CTASection";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Database,
  Cpu,
  Shield,
  Cloud,
  Zap,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Layers,
  Building2,
  CheckCircle2,
  Box,
  Factory,
  Drill,
  Radar,
  Workflow,
  ShieldCheck,
  Package2,
  Wrench,
  FileCheck2,
  MapPin,
  Car,
  Fuel,
  LineChart,
  AlertTriangle,
  MessageSquare,
  FolderOpen,
  Clock,
  BookOpen,
  GraduationCap,
  Medal,
  Truck,
  Calendar,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const OgesOne = () => {
  const [activeTab, setActiveTab] = React.useState("digital-oilfield");

  const platformFeatures = [
    {
      icon: Database,
      title: "Data Integration",
      description:
        "50+ connectors bridging data supply gaps with proprietary abstraction",
      gradient: "from-scaleiq-gold/20 to-transparent",
    },
    {
      icon: Cpu,
      title: "AI & ML Engine",
      description:
        "SAS-powered analytics engine for advanced processing and insights",
      gradient: "from-blue-500/10 to-transparent",
    },
    {
      icon: BarChart3,
      title: "Cross-Domain Analytics",
      description:
        "Unified analysis across geology, drilling, production, and maintenance",
      gradient: "from-purple-500/10 to-transparent",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "LDAP/AD integration with granular access control and residency compliance",
      gradient: "from-emerald-500/10 to-transparent",
    },
  ];

  const ogesoneApps = [
    {
      id: "digital-oilfield",
      domain: "Digital Oilfield",
      description: "Real-time field operations and asset management",
      color: "text-orange-500",
      apps: [
        {
          name: "ARM",
          description:
            "Asset Resource Management for optimized production planning",
          icon: Factory,
          color: "from-orange-500/20 to-transparent",
        },
        {
          name: "Quick Drill",
          description:
            "Real-time drilling operations monitoring and optimization",
          icon: Drill,
          color: "from-red-500/20 to-transparent",
        },
        {
          name: "Opportunity Register",
          description:
            "Track and manage exploration and development opportunities",
          icon: Radar,
          color: "from-purple-500/20 to-transparent",
        },
        {
          name: "DEWS",
          description:
            "Digital Engineering Workflow System for project execution",
          icon: Workflow,
          color: "from-indigo-500/20 to-transparent",
        },
        {
          name: "CBL Assist",
          description: "Cement Bond Log analysis and well integrity assessment",
          icon: ShieldCheck,
          color: "from-emerald-500/20 to-transparent",
        },
      ],
    },
    {
      id: "oilfield-services",
      domain: "Services",
      description: "Comprehensive service operations and logistics",
      color: "text-blue-500",
      apps: [
        {
          name: "Tally",
          description: "Equipment and materials tracking for field operations",
          icon: Package2,
          color: "from-cyan-500/20 to-transparent",
        },
        {
          name: "Well Services",
          description: "Complete well service operations management",
          icon: Wrench,
          color: "from-amber-500/20 to-transparent",
        },
        {
          name: "Well Program",
          description: "Well planning and program management",
          icon: FileCheck2,
          color: "from-green-500/20 to-transparent",
        },
        {
          name: "Travel Planner",
          description: "Workforce travel and accommodation management",
          icon: MapPin,
          color: "from-rose-500/20 to-transparent",
        },
      ],
    },
    {
      id: "business-intelligence",
      domain: "Intelligence",
      description: "Real-time analytics and strategic insights",
      color: "text-green-500",
      apps: [
        {
          name: "Production Insights",
          description: "Real-time production performance optimization",
          icon: BarChart3,
          color: "from-teal-500/20 to-transparent",
        },
        {
          name: "Vehicle Insights",
          description: "Fleet performance monitoring and utilization",
          icon: Car,
          color: "from-blue-500/20 to-transparent",
        },
        {
          name: "Fuel Insights",
          description: "Fuel consumption tracking and cost optimization",
          icon: Fuel,
          color: "from-yellow-500/20 to-transparent",
        },
        {
          name: "Market Dashboard",
          description: "Market trends and competitive intelligence",
          icon: LineChart,
          color: "from-violet-500/20 to-transparent",
        },
      ],
    },
    {
      id: "hse",
      domain: "HSE",
      description: "Proactive safety and risk mitigation",
      color: "text-red-500",
      apps: [
        {
          name: "Identify Risk",
          description: "Hazard identification and risk assessment",
          icon: AlertTriangle,
          color: "from-red-600/20 to-transparent",
        },
        {
          name: "Text2Safety",
          description: "SMS-based safety reporting and management",
          icon: MessageSquare,
          color: "from-orange-600/20 to-transparent",
        },
      ],
    },
  ];

  const activeTabData = ogesoneApps.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-scaleiq-gold/30">
      <NewHeader />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pt-32 pb-20"
      >
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-scaleiq-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

          <div className="relative z-10 text-center">
            <motion.div
              {...fadeIn}
              className="flex items-center justify-center gap-3 mb-6 text-scaleiq-gold font-medium tracking-widest uppercase text-sm"
            >
              <span className="w-12 h-px bg-scaleiq-gold/50" />
              Technical ERP for Energy
              <span className="w-12 h-px bg-scaleiq-gold/50" />
            </motion.div>

            <motion.h1
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl font-bold mb-8 tracking-tight"
            >
              The{" "}
              <span className="text-scaleiq-gold italic">OgesOne</span>
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              A comprehensive software platform hosting multiple
              applications, integrating data from across your energy value chain
              with AI and Machine Learning.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                { label: "Connectors", val: "50+" },
                { label: "Security", val: "Enterprise" },
                { label: "Hosting", val: "Hybrid" },
                { label: "UI/UX", val: "Modern" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:border-scaleiq-gold/30 transition-colors"
                >
                  <div className="text-3xl font-bold text-scaleiq-gold mb-1">
                    {stat.val}
                  </div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-20 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-96 h-96 bg-scaleiq-gold/5 rounded-full blur-[100px]" />

            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <motion.div {...fadeIn}>
                <Badge className="bg-scaleiq-gold/10 text-scaleiq-gold border-scaleiq-gold/20 px-4 py-1.5 uppercase tracking-widest mb-6">
                  Platform Core
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Unified{" "}
                  <span className="text-scaleiq-gold">Domain Architecture</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Break down application silos with our unified platform
                  approach. OgesOne integrates geology, drilling, production,
                  and maintenance data into a single, high-performance
                  ecosystem.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "OSDU Compliant Data Model",
                    "Proprietary Data Abstraction",
                    "Real-time Workflow Automation",
                    "Unified Project Management",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-scaleiq-gold" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {platformFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className={`bg-gradient-to-br ${feature.gradient} border border-white/10 p-6 rounded-3xl group hover:border-scaleiq-gold/40 transition-all`}
                  >
                    <feature.icon className="w-10 h-10 text-scaleiq-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic App Ecosystem */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Integrated{" "}
              <span className="text-scaleiq-gold">App Ecosystem</span>
            </h2>
            <div className="h-1 w-24 bg-scaleiq-gold mx-auto mb-12" />

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {ogesoneApps.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all border ${
                    activeTab === tab.id
                      ? "bg-scaleiq-gold text-black border-scaleiq-gold shadow-[0_0_30px_rgba(220,191,98,0.2)]"
                      : "bg-white/5 text-white border-white/10 hover:border-scaleiq-gold/30"
                  }`}
                >
                  {tab.domain}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeTabData?.apps.map((app, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={`bg-gradient-to-br ${app.color} border border-white/10 p-8 rounded-3xl group hover:border-white/20 transition-all backdrop-blur-sm relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <app.icon className="w-16 h-16" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-scaleiq-gold group-hover:text-black transition-all">
                    <app.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 text-scaleiq-gold hover:text-white hover:bg-transparent group/btn"
                  >
                    Read More{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">50+ Data Connectors</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Seamlessly integrate OgesOne with your existing enterprise systems,
            simulation software, and data sources.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "SAP ECC & HANA", desc: "ERP / Business Software", tag: "SAP" },
            { name: "DecisionSpace 365", desc: "Subsurface Software", tag: "DS" },
            { name: "Petrel", desc: "Subsurface Software", tag: "P" },
            { name: "IBM DB2", desc: "Database", tag: "IBM" },
            { name: "MySQL", desc: "Database", tag: "MySQL" },
            { name: "OFM", desc: "Production Software", tag: "OFM" },
            { name: "Proficy Historian", desc: "Real-time Data / SCADA", tag: "GE" },
            { name: "INTERSECT", desc: "Reservoir Simulation", tag: "IX" },
            { name: "tNavigator", desc: "Reservoir Simulation", tag: "tN" },
            { name: "Eclipse", desc: "Reservoir Simulation", tag: "ECL" },
            { name: "IMEX", desc: "Reservoir Simulation", tag: "IMEX" },
            { name: "Microsoft SQL Server", desc: "Database", tag: "SQL" },
            { name: "OSIsoft PI", desc: "Real-time Data / SCADA", tag: "OSI" },
            { name: "Compass", desc: "Directional Services", tag: "⛓" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white/5 backdrop-blur-md border border-white/10
                        rounded-[28px] p-8 text-center group
                        hover:border-scaleiq-gold/60 hover:-translate-y-1
                        transition-all duration-500"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-scaleiq-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Placeholder */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl
                              bg-white/10 flex items-center justify-center
                              text-lg font-bold text-white">
                {item.tag}
              </div>

              <h4 className="font-bold text-white mb-2">
                {item.name}
              </h4>
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold-dark rounded-[40px] p-16 lg:p-24 text-center text-black relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter">
              Ready to Centralize Your Operations?
            </h2>
            <p className="text-xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
              Transform your digital landscape with OgesOne's unified platform
              approach.
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:px-16 transition-all duration-300 flex items-center gap-4 mx-auto"
            >
              Get Started <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </section>
      </motion.div>

      <NewFooter />
      <GoToTop />
    </div>
  );
};
