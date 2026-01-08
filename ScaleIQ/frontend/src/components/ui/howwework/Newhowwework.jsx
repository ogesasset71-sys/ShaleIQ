import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, BarChart3, Lightbulb, CheckCircle2, Monitor } from 'lucide-react';

const Newhowwework = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Your specific Gold Color
  const goldBrand = "#95691F";

  const features = [
    {
      title: "AI-first ER&D",
      desc: "Unique integration of machine learning, digital platforms, and engineering expertise under one roof.",
      icon: <Cpu className="w-8 h-8" style={{ color: goldBrand }} />,
    },
    {
      title: "Talent Access",
      desc: "Hybrid workforce model combining onshore client teams with global delivery centers.",
      icon: <Users className="w-8 h-8" style={{ color: goldBrand }} />,
    },
    {
      title: "Industry Depth",
      desc: "Starting with energy sector expertise before strategic expansion to adjacent industrial markets.",
      icon: <BarChart3 className="w-8 h-8" style={{ color: goldBrand }} />,
    },
    {
      title: "IP Creation Focus",
      desc: "Product-centric approach that builds proprietary assets, not just services.",
      icon: <Lightbulb className="w-8 h-8" style={{ color: goldBrand }} />,
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 font-sans">
      {/* Header Section with your specific color transition */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-scaleiq-gold">
  How We Work
</h1>
        <div className="w-24 h-1 bg-[#95691F] mx-auto rounded-full shadow-[0_0_15px_#95691F]"></div>
      </motion.div>

      {/* Top 4 Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-black border border-gray-900 flex flex-col items-center text-center transition-all duration-500"
            /* Box Shadow using your 0-80-100 logic: Very dark core, gold only at the end */
            style={{ 
              boxShadow: `0 10px 40px -5px rgba(0,0,0,1), 0 0 20px -5px ${goldBrand}` 
            }}
          >
            <div className="mb-6 p-4 bg-black rounded-xl border border-[#95691F]/20">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-100">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Solution Challenges Section */}
      <div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold text-center text-scaleiq-gold mb-8 pb-1">
  Two Ways We Solve Your Challenges
</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Solution 1 */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-gray-900 bg-black hover:border-[#95691F]/40 transition-all duration-700"
            style={{ boxShadow: `0 0 50px -20px ${goldBrand}` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Monitor style={{ color: goldBrand }} />
              <span className="text-xs font-mono" style={{ color: goldBrand }}>Q1: Need to establish operations in India?</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">India GCC Setup</h3>
            <p className="text-sm mb-6 italic" style={{ color: goldBrand }}>Answer: Custom digital GCC establishment services</p>
            
            <ul className="space-y-4">
              {["OgesOne Platform implementation", "Office setup & automation solutions", "AI/ML analytics and insights", "Legacy system integration process establishment"].map((list, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: goldBrand }} />
                  {list}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution 2 */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-gray-900 bg-black hover:border-[#95691F]/40 transition-all duration-700"
            style={{ boxShadow: `0 0 50px -20px ${goldBrand}` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Monitor style={{ color: goldBrand }} />
              <span className="text-xs font-mono" style={{ color: goldBrand }}>Q2: Need to establish your R&D?</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Digital Solutions</h3>
            <p className="text-sm mb-6 italic" style={{ color: goldBrand }}>Answer: Custom digital innovation expertise</p>
            
            <ul className="space-y-4">
              {["R&D lab and innovation factory setup", "Research project execution and management", "Technology development and IP creation", "Proof of Concept and prototype development"].map((list, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: goldBrand }} />
                  {list}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Newhowwework;