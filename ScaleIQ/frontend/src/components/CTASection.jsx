import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-24 bg-scaleiq-black border-t-4 border-scaleiq-gold"
      data-testid="cta-section"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 lg:px-8 text-center"
      >
        <div className="inline-block px-6 py-2 bg-scaleiq-gold/10 border-2 border-scaleiq-gold text-scaleiq-gold text-sm font-medium rounded-full mb-8">
          Let's Talk
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-scaleiq-white mb-6">
          Rethink Your{" "}
          <span className="text-scaleiq-gold">Digital Roadmap</span>
        </h2>

        <div className="h-1 w-32 bg-scaleiq-gold mx-auto mb-8"></div>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          For energy and infrastructure companies considering how to shape their
          digital transformation roadmap, we invite a thoughtful and
          confidential discussion.
        </p>

        {/* SINGLE CTA ONLY */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="px-12 py-5 bg-transparent border-3 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium text-lg rounded-lg transition-all shadow-lg shadow-scaleiq-gold/20 hover:shadow-scaleiq-gold/40"
          data-testid="cta-start-conversation-button"
        >
          Start a Conversation
        </motion.button>
      </motion.div>
    </section>
  );
};
