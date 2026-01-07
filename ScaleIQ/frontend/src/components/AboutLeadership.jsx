import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import { Users, Shield, Briefcase, Award } from "lucide-react";

export const AboutLeadership = () => {
  const leadership = [
    {
      name: "Rajeev Sonthalia",
      title: "Founder and CEO",
      image: "/api/placeholder/400/400",
    },
    {
      name: "Saurabh Srivastav",
      title: "Founder and COO",
      image: "/api/placeholder/400/400",
    },
    {
      name: "Prashant Mathur",
      title: "Chief Client Officer",
      image: "/api/placeholder/400/400",
    },
    {
      name: "Anita Kanodia",
      title: "Chief Legal Officer",
      image: "/api/placeholder/400/400",
    },
  ];

  const advisoryBoard = [
    {
      name: "Ananya Iyer",
      title: "Former EVP Subsurface & Production Excellence",
      company: "Upstream Energy",
    },
    {
      name: "Rajiv Malhotra",
      title: "Former Director Integrated Operations & Digital Transformation",
      company: "Indian Oil",
    },
    {
      name: "Suresh Nandakumar",
      title: "Former COO Refining, Supply Chain & Retail Operations",
      company: "Cairn Energy Group",
    },
    {
      name: "Michael Harrington",
      title: "Former SVP Enterprise Data & Digital Platforms",
      company: "British Petroleum",
    },
    {
      name: "Thomas Reilly",
      title:
        "Former CIO & Transformation Lead Downstream and Retail Operations",
      company: "Global Oil Company",
    },
    {
      name: "Khalid Al-Rashid",
      title: "Former CEO Midstream Infrastructure & Pipelines",
      company: "National Energy Company",
    },
  ];

  const boardOfDirectors = [
    { name: "Rajeev Sonthalia", title: "Founder and CEO, Managing Director" },
    {
      name: "Rajiv Malhotra",
      title: "Former Director Integrated Operations & Digital Transformation",
      company: "Indian Oil",
    },
    {
      name: "Suresh Nandakumar",
      title: "Former COO Refining, Supply Chain & Retail Operations",
      company: "Cairn Energy Group",
    },
    {
      name: "Michael Harrington",
      title: "Former SVP Enterprise Data & Digital Platforms",
      company: "British Petroleum",
    },
    {
      name: "Thomas Reilly",
      title:
        "Former CIO & Transformation Lead Downstream and Retail Operations",
      company: "Global Oil Company",
    },
    {
      name: "Khalid Al-Rashid",
      title: "Former CEO Midstream Infrastructure & Pipelines",
      company: "National Energy Company",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-scaleiq-gold/30">
      <NewHeader />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(149,105,31,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-scaleiq-gold/5 text-scaleiq-gold text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              Experience & Governance
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                Leadership
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Guided by industry veterans and digital pioneers, ScaleIQ is
              committed to building the future of energy through innovation,
              transparency, and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-gray-400">
                The visionaries driving our mission forward.
              </p>
            </div>
            <Users className="w-12 h-12 text-scaleiq-gold/50 hidden md:block" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-scaleiq-gold/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full py-2 bg-scaleiq-gold text-black font-bold rounded-lg text-sm hover:bg-white transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-scaleiq-gold transition-colors">
                  {leader.name}
                </h3>
                <p className="text-gray-500 text-sm">{leader.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-white/5 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-scaleiq-gold/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold">Advisory Board</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-scaleiq-gold/50 to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advisoryBoard.map((advisor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-scaleiq-gold/30 transition-all group"
              >
                <div className="mb-4 text-scaleiq-gold/40 group-hover:text-scaleiq-gold transition-colors">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {advisor.title}
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-scaleiq-gold/60">
                  {advisor.company}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 text-scaleiq-gold text-sm font-bold uppercase tracking-widest mb-6">
                  <Shield className="w-4 h-4" />
                  Governance
                </div>
                <h2 className="text-4xl font-bold mb-8">
                  Board of <span className="text-scaleiq-gold">Directors</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Ensuring sustainable growth and strict adherence to global
                  governance standards, our board members bring decades of
                  experience from the world's leading energy and technology
                  firms.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-2">Governance Charter</h4>
                  <p className="text-sm text-gray-500">
                    Download our latest governance and ethics report (PDF,
                    2.4MB)
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {boardOfDirectors.map((director, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group"
                  >
                    <h3 className="font-bold text-lg mb-1 group-hover:text-scaleiq-gold transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {director.title}
                    </p>
                    {director.company && (
                      <p className="text-xs font-medium text-scaleiq-gold/40">
                        {director.company}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
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
