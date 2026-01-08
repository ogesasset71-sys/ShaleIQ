import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";
import { Sparkles, Target, Users, Zap, ArrowRight, Mail } from "lucide-react";

export const JoinUsPage = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Drive Impact",
      text: "Work on mission-critical projects that define the future of energy and infrastructure.",
      icon: <Target className="w-8 h-8 text-scaleiq-gold" />,
    },
    {
      title: "Domain Innovation",
      text: "Bridge the gap between advanced technology and complex field operations.",
      icon: <Zap className="w-8 h-8 text-scaleiq-gold" />,
    },
    {
      title: "Global Culture",
      text: "Collaborate with a diverse team of experts across Houston, Dubai, and India.",
      icon: <Users className="w-8 h-8 text-scaleiq-gold" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F] text-white">
      <NewHeader />

      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Careers at ScaleIQ
            </div>

            <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-tight font-outfit">
              Build the <br />
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold">
  Future of Energy
</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              We're looking for architects, engineers, and dreamers ready to
              solve the hardest problems in digital transformation for the
              physical world.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-5 bg-scaleiq-gold text-black font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(149,105,31,0.4)]"
              >
                Send Your CV
              </button>
              <button className="px-10 py-5 border border-white/20 rounded-xl hover:bg-white/10 transition-all">
                Learn About Our Model
              </button>
            </div>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="w-16 h-16 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center border border-scaleiq-gold/20 mb-6 group-hover:scale-110 group-hover:bg-scaleiq-gold group-hover:text-black transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to action card */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 lg:p-20 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center lg:text-left"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-scaleiq-gold/5 blur-[120px] -z-10" />
            <div className="lg:flex items-center justify-between gap-12">
              <div className="flex-1 mb-10 lg:mb-0">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic">
                  Not seeing the perfect role? <br />
                  <span className="text-scaleiq-gold">
                    We still want to talk.
                  </span>
                </h2>
                <p className="text-xl text-gray-400">
                  If you have a domain-led engineering mindset and a passion for
                  energy tech, reach out. We're always looking for exceptional
                  talent.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-scaleiq-gold transition-all group"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};
