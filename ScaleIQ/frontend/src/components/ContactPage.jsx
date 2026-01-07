import React, { useState } from "react";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { GoToTop } from "./GoToTop";
import { Toaster } from "./ui/sonner";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    project_type: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const backendUrl =
        process.env.REACT_APP_BACKEND_URL ||
        import.meta.env.REACT_APP_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact`, formData);
      toast.success("Thank you for reaching out. We will be in touch soon.");
      setFormData({
        full_name: "",
        email: "",
        company: "",
        position: "",
        phone: "",
        project_type: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F] text-white">
      <NewHeader />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT COLUMN: Info & Context */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-scaleiq-gold/30 rounded-full bg-black/40 backdrop-blur-md text-scaleiq-gold text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-scaleiq-gold animate-pulse" />
                Contact Us
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-scaleiq-gold to-[#Ffd700]">
                  Conversation
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                For energy and infrastructure companies considering how to shape
                their digital transformation roadmap, we invite a thoughtful and
                confidential discussion.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center border border-scaleiq-gold/20">
                    <Mail className="w-6 h-6 text-scaleiq-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Email Us
                    </h4>
                    <p className="text-gray-400">contact@scaleiq.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center border border-scaleiq-gold/20">
                    <Phone className="w-6 h-6 text-scaleiq-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Call Us
                    </h4>
                    <p className="text-gray-400">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-scaleiq-gold/10 flex items-center justify-center border border-scaleiq-gold/20">
                    <MapPin className="w-6 h-6 text-scaleiq-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Global Headquarters
                    </h4>
                    <p className="text-gray-400">Houston, Texas / Dubai, UAE</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm">
                <p className="text-sm text-gray-300 italic">
                  "Our team typically responds within 24 hours for all qualified
                  inquiries."
                </p>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-scaleiq-gold/20 to-transparent rounded-3xl blur-xl opacity-50" />
              <div className="relative p-8 lg:p-10 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-2xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none placeholder:text-gray-600"
                        data-testid="contact-full-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none placeholder:text-gray-600"
                        data-testid="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="ScaleIQ Energy"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none placeholder:text-gray-600"
                        data-testid="contact-company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">
                        Position *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        placeholder="Chief Digital Officer"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none placeholder:text-gray-600"
                        data-testid="contact-position"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">
                        Project Type *
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none text-gray-300"
                        data-testid="contact-project-type"
                      >
                        <option value="" className="bg-gray-900">
                          Select...
                        </option>
                        <option
                          value="Digital Engineering"
                          className="bg-gray-900"
                        >
                          Digital Engineering
                        </option>
                        <option value="GCC Setup" className="bg-gray-900">
                          GCC Setup
                        </option>
                        <option value="Products" className="bg-gray-900">
                          Products
                        </option>
                        <option value="Consulting" className="bg-gray-900">
                          Consulting
                        </option>
                        <option value="Other" className="bg-gray-900">
                          Other
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">
                        Timeline *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none text-gray-300"
                        data-testid="contact-timeline"
                      >
                        <option value="" className="bg-gray-900">
                          Select...
                        </option>
                        <option value="Immediate" className="bg-gray-900">
                          Immediate
                        </option>
                        <option value="1-3 months" className="bg-gray-900">
                          1-3 months
                        </option>
                        <option value="3-6 months" className="bg-gray-900">
                          3-6 months
                        </option>
                        <option value="6+ months" className="bg-gray-900">
                          6+ months
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent transition-all outline-none placeholder:text-gray-600 resize-none"
                      data-testid="contact-message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-scaleiq-gold text-black hover:bg-white hover:text-black font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(149,105,31,0.3)] hover:shadow-[0_0_30px_rgba(149,105,31,0.5)]"
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <NewFooter />
      <GoToTop />
      <Toaster />
    </div>
  );
};
