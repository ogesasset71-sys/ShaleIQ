import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroRightSection } from "./ui/HeroRightSection/HeroRightSection";
import HeroRightSection2 from "./ui/HeroRightSection2/HeroRightSection2";

export const NewHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-b 
            from-black from-0% 
            via-black via-80% 
            to-[#95691F] to-100% pt-20 overflow-hidden"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              data-testid="hero-title"
            >
              <span className="text-scaleiq-gold">Digital Engineering</span>
              <br />
              Partner for Energy
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Co-innovating with our customers to solve the real barriers – to
              technology adoption and transformation in the energy sector.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/about/overview")}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-medium rounded-lg transition-all"
                data-testid="hero-explore-button"
              >
                Explore
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all"
                data-testid="hero-contact-button"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* RIGHT: 3D Tunnel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              {/* <HeroRightSection /> */}
              <HeroRightSection2/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
