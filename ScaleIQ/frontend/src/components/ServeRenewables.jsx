import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Sun, Wind, BatteryCharging } from "lucide-react";

export const ServeRenewables = () => {
  const highlights = [
    {
      title: "Solar & Wind Analytics",
      text: "Leveraging AI to predict weather patterns and optimize energy yield from solar and wind farms.",
      icon: <Sun className="w-8 h-8" />,
    },
    {
      title: "Grid Management",
      text: "Modernizing utility grids to integrate renewable energy sources efficiently and reliably.",
      icon: <Wind className="w-8 h-8" />,
    },
    {
      title: "Storage Solutions",
      text: "Optimizing battery storage and distribution for consistent energy availability.",
      icon: <BatteryCharging className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "Renewable energy asset monitoring",
    "AI-driven weather and production forecasting",
    "Smart grid technology implementation",
    "Energy storage optimization",
    "Grid stability and load balancing",
    "Sustainability reporting and ESG compliance",
  ];

  return (
    <ServePageTemplate
      subtitle="Who We Serve > Renewables & Utilities"
      title={
        <>
          Building the Infrastructure for{" "}
          <span className="text-scaleiq-gold">Sustainable Energy</span>
        </>
      }
      description="We provide the digital tools needed to scale renewable energy operations and modernize utility grids for a cleaner future."
      highlights={highlights}
      helpPoints={helpPoints}
    />
  );
};
