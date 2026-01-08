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

  const features = [
    {
      title: "AI-first ER&D",
      desc: "Unique integration of machine learning, digital platforms, and engineering expertise under one roof.",
      icon: <Cpu className="w-8 h-8 text-yellow-500" />,
      shadowColor: "rgba(234, 179, 8, 0.3)"
    },
    {
      title: "Talent Access",
      desc: "Hybrid workforce model combining onshore client teams with global delivery centers.",
      icon: <Users className="w-8 h-8 text-teal-400" />,
      shadowColor: "rgba(45, 212, 191, 0.3)"
    },
    {
      title: "Industry Depth",
      desc: "Starting with energy sector expertise before strategic expansion to adjacent industrial markets.",
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      shadowColor: "rgba(251, 146, 60, 0.3)"
    },
    {
      title: "IP Creation Focus",
      desc: "Product-centric approach that builds proprietary assets, not just services.",
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      shadowColor: "rgba(192, 132, 252, 0.3)"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 font-sans">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4 tracking-tight">
          How We Work
        </h1>
        <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
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
            whileHover={{ scale: 1.05, translateY: -10 }}
            className="p-8 rounded-2xl bg-[#111] border border-gray-800 flex flex-col items-center text-center transition-all duration-300"
            style={{ boxShadow: `0 10px 30px -10px ${item.shadowColor}` }}
          >
            <div className="mb-6 p-4 bg-black rounded-xl border border-gray-700">
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
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
          Two Ways We Solve Your Challenges
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Solution 1 */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-yellow-900/50 bg-[#0A0A0A] hover:border-yellow-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <Monitor className="text-yellow-500" />
              <span className="text-xs text-yellow-600 font-mono">Q1: Need to establish operations in India?</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">India GCC Setup</h3>
            <p className="text-yellow-500 text-sm mb-6 italic">Answer: Custom digital GCC establishment services</p>
            
            <ul className="space-y-4">
              {["OgesOne Platform implementation", "Office setup & automation solutions", "AI/ML analytics and insights", "Legacy system integration process establishment"].map((list, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
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
            className="p-8 rounded-3xl border border-yellow-900/50 bg-[#0A0A0A] hover:border-yellow-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <Monitor className="text-yellow-500" />
              <span className="text-xs text-yellow-600 font-mono">Q2: Need to establish your R&D?</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Digital Solutions</h3>
            <p className="text-yellow-500 text-sm mb-6 italic">Answer: Custom digital innovation expertise</p>
            
            <ul className="space-y-4">
              {["R&D lab and innovation factory setup", "Research project execution and management", "Technology development and IP creation", "Proof of Concept and prototype development"].map((list, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
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