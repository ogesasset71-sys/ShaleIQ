import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
// New Components
import { NewHeader } from "./components/NewHeader";
import { NewHeroSection } from "./components/NewHeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { EnergyTechSection } from "./components/EnergyTechSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { DecisionPhilosophySection } from "./components/DecisionPhilosophySection";
import { MergedCredibilitySection } from "./components/MergedCredibilitySection";
import { CTASection } from "./components/CTASection";
import { NewFooter } from "./components/NewFooter";
import { GoToTop } from "./components/GoToTop";

// About Pages
import { AboutOverview } from "./components/AboutOverview";
import { AboutModel } from "./components/AboutModel";
import { AboutLeadership } from "./components/AboutLeadership";
import { AboutInvestors } from "./components/AboutInvestors";
import { AboutPartners } from "./components/AboutPartners";

// Whom We Serve
import { ServeOilGas } from "./components/ServeOilGas";
import { ServeEnergy } from "./components/ServeEnergy";
import { ServeRenewables } from "./components/ServeRenewables";
import { ServeISVs } from "./components/ServeISVs";
import { ServeOilService } from "./components/ServeOilService";

// Digital Engineering
import { DigitalAppDev } from "./components/DigitalAppDev";

// GCC Solutions
import { GCCSolutions } from "./components/GCCSolutions";

// Products
import { ProductsPage } from "./components/ProductsPage";
import { OgesOne } from "./components/OgesOne";

// News & Insights
import { NewsPage } from "./components/NewsPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";

// Other Pages
import { ContactPage } from "./components/ContactPage";
import { JoinUsPage } from "./components/JoinUsPage";

// Admin (keep existing)
import { AdminDashboard } from "./components/AdminDashboard";

const Home = () => {
  React.useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
    handleHashNavigation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#95691F]">
      <NewHeader />
      <NewHeroSection />
      <StatsStrip />
      <EnergyTechSection />
      <WhatWeDoSection />
      <DecisionPhilosophySection />
      <MergedCredibilitySection />
      <CTASection />
      <NewFooter />
      <GoToTop />
      <Toaster />
    </div>
  );
};

// Placeholder component for missing pages
const PlaceholderPage = ({ title, subtitle }) => (
  <div className="min-h-screen bg-scaleiq-white">
    <NewHeader />
    <div className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">{subtitle}</div>
        <h1 className="text-5xl font-bold text-scaleiq-black mb-8">{title}</h1>
        <p className="text-xl text-gray-700">Content coming soon.</p>
      </div>
    </div>
    <CTASection />
    <NewFooter />
    {/* hey i m herre  */}
    <GoToTop />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About Pages */}
          <Route path="/about/overview" element={<AboutOverview />} />
          <Route path="/about/model" element={<AboutModel />} />
          <Route path="/about/leadership" element={<AboutLeadership />} />
          <Route path="/about/investors" element={<AboutInvestors />} />
          <Route path="/about/partners" element={<AboutPartners />} />

          {/* Whom We Serve */}
          <Route path="/serve/oil-gas" element={<ServeOilGas />} />
          <Route path="/serve/energy" element={<ServeEnergy />} />
          <Route path="/serve/renewables" element={<ServeRenewables />} />
          <Route path="/serve/isvs" element={<ServeISVs />} />
          <Route path="/serve/oil-service" element={<ServeOilService />} />

          {/* Digital Engineering */}
          <Route path="/digital/app-dev" element={<DigitalAppDev />} />
          <Route
            path="/digital/ai"
            element={
              <PlaceholderPage
                title="AI Enablement"
                subtitle="Digital Engineering > AI Enablement"
              />
            }
          />
          <Route
            path="/digital/product"
            element={
              <PlaceholderPage
                title="Product Engineering"
                subtitle="Digital Engineering > Product Engineering"
              />
            }
          />
          <Route
            path="/digital/professional"
            element={
              <PlaceholderPage
                title="Professional Services"
                subtitle="Digital Engineering > Professional Services"
              />
            }
          />
          <Route
            path="/digital/consulting"
            element={
              <PlaceholderPage
                title="Technical Consulting"
                subtitle="Digital Engineering > Technical Consulting"
              />
            }
          />
          <Route
            path="/digital/staff"
            element={
              <PlaceholderPage
                title="Staff Augmentation"
                subtitle="Digital Engineering > Staff Augmentation"
              />
            }
          />

          {/* Products */}
          <Route path="/products/ogesone" element={<OgesOne />} />
          <Route path="/products/product2" element={<ProductsPage />} />
          <Route path="/products/product3" element={<ProductsPage />} />

          {/* GCC Solutions */}
          <Route path="/gcc-solutions" element={<GCCSolutions />} />

          {/* News & Insights */}
          <Route path="/news" element={<NewsPage />} />
          <Route
            path="/insights"
            element={
              <PlaceholderPage
                title="ScaleIQ Insight"
                subtitle="News & Insights > ScaleIQ Insight"
              />
            }
          />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route
            path="/events"
            element={
              <PlaceholderPage
                title="Events"
                subtitle="News & Insights > Events"
              />
            }
          />

          {/* Other Pages */}
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Legacy routes for backward compatibility */}
          <Route path="/engineering" element={<DigitalAppDev />} />
          <Route path="/gcc-setup" element={<GCCSolutions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
