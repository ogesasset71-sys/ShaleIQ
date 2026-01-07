import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Code2, ShieldCheck, Activity, Laptop } from "lucide-react";

export const DigitalAppDev = () => {
  const highlights = [
    {
      title: "Domain-Aware Design",
      text: "We design applications with a deep understanding of energy workflows, ensuring usability reflects real operational needs.",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      title: "Lifecycle Ownership",
      text: "From development to maintenance, we retain accountability across the lifecycle, reducing fragmentation between teams.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Operational Stability",
      text: "We manage applications in live environments, enabling upgrades and fixes without impacting critical operations.",
      icon: <Activity className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "Automating manual operational and reporting workflows",
    "Enhancing existing applications without architectural disruption",
    "UI/UX improvements for operators and analysts",
    "Digitizing and automating approval-heavy workflows",
    "Eliminating manual reconciliation in planning and scheduling",
    "Automating compliance and audit tracking",
  ];

  const caseStudy = {
    title: "MOC Modernization",
    text: "By automating the Management of Change (MOC) process, we replaced fragmented email/spreadsheet workflows with a unified digital system, improving traceability and reducing approval cycles by 60%.",
  };

  return (
    <ServePageTemplate
      subtitle="What We Do > Digital Engineering"
      title={
        <>
          When Digital Needs to Perform in{" "}
          <span className="text-scaleiq-gold">Real-World Conditions</span>
        </>
      }
      description="We focus on developing, modernizing, and managing applications that must integrate with legacy systems and support domain-specific workflows without compromising stability."
      highlights={highlights}
      helpPoints={helpPoints}
      caseStudy={caseStudy}
    />
  );
};
