import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Database, Layout, ShieldCheck } from "lucide-react";

export const ServeISVs = () => {
  const highlights = [
    {
      title: "Cloud-Native SaaS",
      text: "Helping ISVs build and scale energy-specific SaaS platforms with modern cloud architectures.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Product Engineering",
      text: "Specialized design and engineering services to accelerate time-to-market for energy tech products.",
      icon: <Layout className="w-8 h-8" />,
    },
    {
      title: "Data Security",
      text: "Ensuring your energy platform meets the highest standards of data security and regulatory compliance.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "Energy-specific SaaS architecture design",
    "API-first development and integration",
    "UI/UX design for complex data visualizations",
    "Cloud infrastructure migration and optimization",
    "OSDU compliance and data standards",
    "Agile product development and delivery",
  ];

  return (
    <ServePageTemplate
      subtitle="Who We Serve > Energy ISVs"
      title={
        <>
          Accelerating Growth for{" "}
          <span className="text-scaleiq-gold">Energy ISVs</span>
        </>
      }
      description="We partner with independent software vendors to build, scale, and secure the next generation of energy technology products."
      highlights={highlights}
      helpPoints={helpPoints}
    />
  );
};
