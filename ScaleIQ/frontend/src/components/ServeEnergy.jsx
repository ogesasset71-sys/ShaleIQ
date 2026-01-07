import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Zap, TrendingUp, ShieldCheck } from "lucide-react";

export const ServeEnergy = () => {
  const highlights = [
    {
      title: "Digital Transformation",
      text: "Accelerating the shift to digital-first operations for traditional energy providers.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Operational Efficiency",
      text: "Optimizing asset performance and reducing downtime through data-driven insights.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Sustainability & Compliance",
      text: "Ensuring operations meet modern environmental standards and regulatory requirements.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "Enterprise-wide data strategy and implementation",
    "Industrial IoT and real-time monitoring",
    "Predictive maintenance for energy infrastructure",
    "Carbon footprint tracking and reporting",
    "Legacy system modernization",
    "Workforce digital enablement",
  ];

  return (
    <ServePageTemplate
      subtitle="Who We Serve > Energy Companies"
      title={
        <>
          Empowering <span className="text-scaleiq-gold">Energy Companies</span>{" "}
          for a Digital Future
        </>
      }
      description="We help energy providers navigate the complexities of digital transformation, ensuring resilience and efficiency in a rapidly evolving global market."
      highlights={highlights}
      helpPoints={helpPoints}
    />
  );
};
