import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Cpu, Wrench, Zap, Wifi, Shield, ArrowRight, CheckCircle } from 'lucide-react';

export const IsolatedDigitalSolutions = () => {
  const [activeService, setActiveService] = useState(1);

  const digitalServices = [
    {
      id: 1,
      number: "01",
      title: "Product Engineering",
      subtitle: "End-to-End Development",
      description: "End-to-end development of robust energy software and platform solutions tailored to upstream industry needs.",
      icon: Wrench,
      details: [
        "Custom upstream software platforms",
        "Production optimization systems", 
        "Reservoir management tools",
        "Field data integration solutions"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      number: "02", 
      title: "AI-Driven Engineering",
      subtitle: "Intelligent Operations",
      description: "Leveraging AI for predictive maintenance, production optimization, and enabling autonomous upstream operations.",
      icon: Cpu,
      details: [
        "Predictive maintenance algorithms",
        "Production forecasting models",
        "Drilling optimization AI",
        "Autonomous field operations"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      number: "03",
      title: "Digital Transformation", 
      subtitle: "Legacy Modernization",
      description: "Modernizing legacy upstream systems and optimizing workflows for enhanced efficiency and future readiness.",
      icon: Zap,
      details: [
        "Legacy system migration",
        "Workflow optimization",
        "Digital twin implementation",
        "Process automation"
      ],
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 4,
      number: "04",
      title: "Embedded Systems",
      subtitle: "IoT & Real-Time Control", 
      description: "Designing and deploying IoT-enabled solutions for real-time monitoring and control in upstream energy assets.",
      icon: Wifi,
      details: [
        "Sensor network deployment",
        "Real-time monitoring systems",
        "Edge computing solutions",
        "Industrial IoT platforms"
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      number: "05",
      title: "Compliance Engineering",
      subtitle: "Regulatory Excellence",
      description: "Ensuring regulatory adherence with solutions for safety, environmental, and operational requirements in upstream operations.",
      icon: Shield,
      details: [
        "Safety compliance systems",
        "Environmental monitoring",
        "Regulatory reporting automation",
        "Audit trail management"
      ],
      gradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">DIGITAL SOLUTIONS</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Implement <span className="text-[#00FFD1]">Custom Standalone</span> Applications
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            Custom standalone application development for oil & gas operators seeking specific software 
            solutions without full GCC setup. Project-based delivery with tailored applications.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-white/5 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              Service Overview
            </TabsTrigger>
            <TabsTrigger value="detailed" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              Detailed View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className={`bg-gradient-to-br ${service.gradient} border-white/10 hover:border-[#00FFD1]/50 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group p-6`}
                    onClick={() => setActiveService(service.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 text-sm">
                        {service.number}
                      </Badge>
                      <div className="w-12 h-12 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00FFD1]/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-[#00FFD1]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FFD1] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#00FFD1] text-sm font-medium mb-3">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center text-[#00FFD1] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Navigation */}
              <div className="space-y-4">
                {digitalServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card
                      key={service.id}
                      className={`p-4 cursor-pointer transition-all duration-300 ${
                        activeService === service.id
                          ? 'bg-gradient-to-r from-[#00FFD1]/10 to-transparent border-[#00FFD1]/50'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          activeService === service.id ? 'bg-[#00FFD1]/30' : 'bg-white/10'
                        }`}>
                          <IconComponent className="h-5 w-5 text-[#00FFD1]" />
                        </div>
                        <div>
                          <h4 className={`font-semibold transition-colors ${
                            activeService === service.id ? 'text-[#00FFD1]' : 'text-white'
                          }`}>
                            {service.title}
                          </h4>
                          <p className="text-white/60 text-sm">{service.subtitle}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Active Service Details */}
              <div className="lg:col-span-2">
                {digitalServices.map((service) => {
                  if (service.id !== activeService) return null;
                  
                  const IconComponent = service.icon;
                  return (
                    <Card
                      key={service.id}
                      className={`bg-gradient-to-br ${service.gradient} border-[#00FFD1]/30 p-8`}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-[#00FFD1]" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 mb-2">
                            {service.number}
                          </Badge>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <p className="text-[#00FFD1] font-medium">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Key Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.details.map((detail, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-[#00FFD1]" />
                              <span className="text-white/80">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Implementation Approach */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Project-Based <span className="text-[#00FFD1]">Implementation Approach</span>
            </h3>
            <p className="text-white/70 max-w-3xl mx-auto">
              Flexible engagement models designed for operators seeking targeted digital solutions 
              without long-term commitments or infrastructure setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">3-6</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Months Delivery</h4>
              <p className="text-white/70 text-sm">
                Fast-track implementation with focused project timelines and clear deliverables
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">ROI</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Immediate ROI</h4>
              <p className="text-white/70 text-sm">
                Quick return on investment with measurable outcomes and performance improvements
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">24/7</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Support Model</h4>
              <p className="text-white/70 text-sm">
                Comprehensive support and maintenance packages with flexible service levels
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};