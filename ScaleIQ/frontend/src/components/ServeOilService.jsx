import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Activity, Settings, Network } from "lucide-react";

export const ServeOilService = () => {
  const highlights = [
    {
      title: "Field Service Automation",
      text: "Digitalizing field operations to improve safety, efficiency, and resource allocation.",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "Asset Maintenance",
      text: "Implementing AI-driven maintenance strategies to extend equipment life and reduce downtime.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Supply Chain Sync",
      text: "Connecting field operations with supply chain logistics for seamless execution.",
      icon: <Network className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "Mobile field service application development",
    "Equipment telemetry and remote diagnostics",
    "Inventory and supply chain optimization",
    "Safety and compliance monitoring tools",
    "Resource scheduling and workforce management",
    "B2B customer portal development",
  ];

  return (
    <ServePageTemplate
      subtitle="Who We Serve > Oil Service Companies"
      title={
        <>
          Modernizing <span className="text-scaleiq-gold">Oil Service</span>{" "}
          Operations
        </>
      }
      description="We empower oil service providers with digital tools to enhance field efficiency, asset reliability, and customer transparency."
      highlights={highlights}
      helpPoints={helpPoints}
    />
  );
};
