import React from "react";
import { motion } from "framer-motion";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { CTASection } from "./CTASection";
import { GoToTop } from "./GoToTop";

export const NewsPage = () => {
   const [activeTab, setActiveTab] = React.useState("News");

  const tabs = ["News", "ScaleIQ Insights", "Case Studies", "Events"];

  const newsData = {
    News: [
      {
        title: "ScaleIQ Recognized for Excellence in Energy Digital Engineering",
        date: "March 2026",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
        description:
          "ScaleIQ was recognized by an industry forum for its work in delivering digital and engineering solutions across complex, asset-intensive energy environments.",
      },
      {
        title:
          "ScaleIQ Partners with a Global Energy Major to Support Digital Programs",
        date: "January 2026",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        description:
          "ScaleIQ announced a new engagement with a global energy company to support long-term digital and engineering initiatives across multiple business units.",
      },
      {
        title:
          "ScaleIQ Wins Strategic Mandate for Energy GCC Enablement in India",
        date: "November 2025",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        description:
          "ScaleIQ was selected to support the setup and operationalization of an India-based Global Capability Center for a multinational energy organization.",
      },
      {
        title: "ScaleIQ Expands Partnerships with Leading Technology Providers",
        date: "September 2026",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        description:
          "ScaleIQ strengthened its partner ecosystem to support the delivery of integrated digital, data, and AI solutions for energy and infrastructure clients.",
      },
      {
        title:
          "ScaleIQ Recognized as a Trusted Partner for Domain-Led Digital Transformation",
        date: "June 2025",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        description:
          "ScaleIQ received recognition from clients for its domain-driven approach to digital engineering and its focus on delivering practical, production-ready outcomes.",
      },
    ],
    "ScaleIQ Insights": [],
    "Case Studies": [
      {
        title: "Greenfield Energy GCC Setup",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
        description:
          "A global energy company planned a GCC in India to support digital engineering programs. Without a clearly defined operating model there was a risk of slow ramp-up and limited ability to take on high-value work from the outset.",
      },
      {
        title: "Application Modernization for Live Operations",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        description:
          "Production and planning had evolved into tightly coupled legacy systems. Adoption was slow, changes carried operational risk, and the lack of structured lifecycle management constrained scalability and reliability across applications.",
      },
      {
        title: "Data Integration Across Asset Operations",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        description:
          "Operational and engineering data was spread across heterogenous enterprise systems, and bespoke applications. Limited integration and inconsistent data quality made cross-asset visibility difficult and slowed analytics and AI adoption.",
      },
      {
        title: "Staffing for High-Value Digital Programs",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        description:
          "Rapid team expansion led to uneven delivery quality and high dependency on onshore teams. Limited access to domain-aligned technologies constrained ownership of complex digital and engineering work.",
      },
      {
        title: "Domain-Driven AI in Operations",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        description:
          "AI initiatives struggled to move beyond pilots due to limited domain context and poor integration with operational workflows. Disconnected tools operated in isolation, reducing trust and limiting their impact on day-to-day decision-making.",
      },
    ],
    Events: [],
  };

  const currentData = newsData[activeTab];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F] text-white">
      <NewHeader />

      <div className="pt-32 pb-20">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-scaleiq-gold text-lg mb-8 font-light tracking-wide">
              Perspectives, updates, and thinking from ScaleIQ across energy,
              oil & gas, digital engineering, GCCs and AI.
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-0 bg-black border-b-2 border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-bold text-base transition-all relative ${
                  activeTab === tab
                    ? "bg-scaleiq-gold text-black"
                    : "bg-transparent text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          {currentData.length === 0 ? (
            <div className="text-center py-20">
              {/* <p className="text-gray-400 text-xl">
                Content coming soon for this section.
              </p> */}
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentData.map((itemData, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative h-full flex flex-col rounded-lg bg-white/5 border border-white/10 hover:border-scaleiq-gold/50 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={itemData.image}
                      alt={itemData.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-scaleiq-gold transition-colors leading-tight">
                      {itemData.title}
                    </h3>

                    {itemData.date && (
                      <p className="text-scaleiq-gold text-sm mb-4 italic">
                        {itemData.date}
                      </p>
                    )}

                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                      {itemData.description}
                    </p>

                    <button className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-scaleiq-gold transition-all mt-auto">
                      Read
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};