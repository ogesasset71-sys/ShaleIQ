import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Cloud, Brain, Database, Wrench, GitBranch, Users, ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "GCC Infrastructure Setup",
      description: "Complete infrastructure establishment for Global Capability Centers including cloud, on-premise, or hybrid setups tailored to energy operations.",
      icon: Cloud,
      features: ["Multi-platform architecture", "Infrastructure migration", "Cost optimization", "Security & compliance"],
      roi: "35% cost reduction",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Talent Acquisition & Management",
      description: "End-to-end talent sourcing, onboarding, and management services for building high-performing GCC teams in energy domain.",
      icon: Users,
      features: ["Specialized recruitment", "Skills assessment", "Team integration", "Performance management"],
      roi: "50% faster hiring",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Custom Application Development",
      description: "End-to-end development of robust energy software and platform solutions tailored to specific GCC requirements.",
      icon: Wrench,
      features: ["Custom energy platforms", "Production optimization tools", "Reservoir management systems", "Field data integration"],
      roi: "60% faster deployment",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      title: "AI/ML Implementation Services",
      description: "Integration of AI and machine learning capabilities into GCC operations for predictive analytics and intelligent automation.",
      icon: Brain,
      features: ["Predictive maintenance", "Production forecasting", "Drilling optimization", "Autonomous operations"],
      roi: "25% efficiency gain",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      title: "Process Optimization & Governance",
      description: "Establish best practices, governance frameworks, and standardized processes for efficient GCC operations.",
      icon: GitBranch,
      features: ["Process standardization", "Quality frameworks", "Compliance setup", "Operational excellence"],
      roi: "40% process improvement",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: 6,
      title: "Data Engineering & Analytics",
      description: "Build robust data pipelines and analytics capabilities for seismic, well log, and production data within GCC framework.",
      icon: Database,
      features: ["Data lake architecture", "Real-time processing", "BI dashboards", "Data governance"],
      roi: "50% faster insights",
      color: "from-green-400/20 to-blue-400/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">GCC SERVICES</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-[#00FFD1]">GCC Setup</span> Solutions  
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Complete Global Capability Center establishment services including infrastructure setup, talent acquisition, process optimization, and ongoing operations management for energy companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className={`bg-gradient-to-br ${service.color} border-white/10 hover:border-[#00FFD1]/50 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#00FFD1]/20 rounded-lg group-hover:bg-[#00FFD1]/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-[#00FFD1]" />
                    </div>
                    <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10">
                      {service.roi}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00FFD1] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-sm font-medium text-white/80 mb-2">Key Features:</div>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full" />
                        <span className="text-sm text-white/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-6 flex items-center text-[#00FFD1] transition-all duration-300 ${
                    hoveredService === service.id ? 'translate-x-2' : ''
                  }`}>
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};