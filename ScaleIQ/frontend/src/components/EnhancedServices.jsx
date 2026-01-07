import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Cpu, Wrench, Zap, Wifi, Shield, ArrowRight } from 'lucide-react';

export const EnhancedServices = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      number: "01",
      title: "GCC Infrastructure & Setup",
      subtitle: "Complete Center Establishment",
      description: "End-to-end GCC establishment in India with dedicated infrastructure, compliance setup, and operational framework for upstream operators.",
      icon: Wrench,
      details: [
        "Legal entity setup & compliance",
        "Infrastructure & IT setup", 
        "Regulatory compliance management",
        "Operational framework design"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      number: "02", 
      title: "Dedicated Staffing Solutions",
      subtitle: "Expert Team Deployment",
      description: "Comprehensive staffing solutions with skilled upstream professionals, from technical specialists to project managers, fully integrated into your GCC operations.",
      icon: Cpu,
      details: [
        "Technical specialists recruitment",
        "Project managers & leads",
        "Domain experts in upstream",
        "Scalable team augmentation"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      number: "03",
      title: "Engineering R&D Services", 
      subtitle: "Core Technical Delivery",
      description: "Full spectrum of engineering R&D services delivered through your India GCC, covering all upstream engineering disciplines and digital solutions.",
      icon: Zap,
      details: [
        "Product engineering & development",
        "AI-driven engineering solutions",
        "Digital transformation services",
        "Embedded systems & IoT"
      ],
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 4,
      number: "04",
      title: "Operational Excellence Program",
      subtitle: "Continuous Improvement", 
      description: "Implementing best practices, quality management systems, and continuous improvement processes within your GCC for optimal performance delivery.",
      icon: Wifi,
      details: [
        "Quality management systems",
        "Process optimization frameworks",
        "Performance monitoring & KPIs",
        "Continuous improvement initiatives"
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      number: "05",
      title: "Compliance & Risk Management",
      subtitle: "Governance Excellence",
      description: "Comprehensive governance framework ensuring regulatory compliance, risk management, and alignment with global operational standards for your GCC.",
      icon: Shield,
      details: [
        "Regulatory compliance framework",
        "Risk assessment & mitigation",
        "Data security & governance",
        "Audit & reporting systems"
      ],
      gradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">GCC COMPREHENSIVE SERVICES</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            India <span className="text-[#00FFD1]">GCC Setup</span> with Full-Stack Services
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            ScaleIQ provides comprehensive Global Capability Center (GCC) setup in India, delivering 
            end-to-end Engineering R&D solutions with dedicated staffing and infrastructure support 
            for upstream oil & gas operators.
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
              {services.map((service, index) => {
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
                {services.map((service) => {
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
                {services.map((service) => {
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
                              <div className="w-2 h-2 bg-[#00FFD1] rounded-full" />
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

        {/* GCC Benefits Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose India GCC with <span className="text-[#00FFD1]">ScaleIQ</span>
            </h3>
            <p className="text-white/70 max-w-3xl mx-auto">
              Leverage India's exceptional talent pool and cost advantages while maintaining the highest standards of delivery and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">60%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Cost Savings</h4>
              <p className="text-white/70 text-sm">
                Significant cost reduction compared to onshore operations while maintaining quality
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">24/7</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Time Zone Advantage</h4>
              <p className="text-white/70 text-sm">
                Round-the-clock operations enabling faster project delivery and continuous support
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">500K+</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Talent Pool</h4>
              <p className="text-white/70 text-sm">
                Access to India's vast pool of skilled engineers and technical professionals
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-center group hover:border-[#00FFD1]/30 transition-all">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <span className="text-[#00FFD1] font-bold text-lg">ISO</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Quality Standards</h4>
              <p className="text-white/70 text-sm">
                International quality standards and compliance frameworks ensuring excellence
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};