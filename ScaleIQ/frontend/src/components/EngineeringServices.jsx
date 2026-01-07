import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScaleIQHeader } from './ScaleIQHeader';
import { Footer } from './Footer';
import { CoreUpstreamServices } from './CoreUpstreamServices';
import { 
  Wrench, 
  Zap, 
  BarChart3, 
  Shield, 
  Layers,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Settings,
  Award,
  Globe
} from 'lucide-react';

export const EngineeringServices = () => {
  const [activeService, setActiveService] = useState('upstream');

  const engineeringServices = {
    upstream: {
      title: "Upstream (Core Expertise)",
      subtitle: "Deep expertise across the entire upstream value chain",
      description: "Our core strength lies in upstream oil & gas engineering with 20+ years of collective experience across drilling, reservoir, production, and compliance.",
      services: [
        {
          icon: Wrench,
          title: "Drilling Engineering",
          description: "Advanced drilling optimization and well design",
          features: [
            "Drilling program design and optimization",
            "Real-time drilling parameter monitoring", 
            "Wellbore stability analysis",
            "Drilling risk assessment and mitigation"
          ]
        },
        {
          icon: BarChart3,
          title: "Reservoir Engineering",
          description: "Reservoir modeling and production optimization",
          features: [
            "Reservoir simulation and modeling",
            "Enhanced oil recovery (EOR) strategies", 
            "Production forecasting and optimization",
            "Field development planning",
            "Reservoir management and surveillance"
          ]
        },
        {
          icon: Layers,
          title: "Production Engineering",
          description: "Optimize production systems and enhance recovery",
          features: [
            "Production system design and optimization",
            "Artificial lift system selection and design",
            "Well performance analysis and monitoring",
            "Production troubleshooting and enhancement"
          ]
        },
        {
          icon: Shield,
          title: "HSE & Regulatory Compliance",
          description: "Comprehensive safety and regulatory expertise",
          features: [
            "HSE management systems development",
            "Regulatory compliance and reporting",
            "Environmental impact assessment",
            "Safety system design and implementation"
          ]
        }
      ]
    },
    midstream: {
      title: "Midstream (Expanding Capabilities)",
      subtitle: "Growing expertise in transportation and processing",
      description: "Building on our upstream expertise, we're expanding our capabilities to serve the entire energy value chain.",
      services: [
        {
          icon: Settings,
          title: "Pipeline Engineering",
          description: "Pipeline design, integrity, and optimization",
          features: [
            "Pipeline design and routing optimization",
            "Integrity management and assessment", 
            "Flow assurance and hydraulic analysis",
            "Pipeline risk assessment and mitigation"
          ]
        },
        {
          icon: Zap,
          title: "Processing Facilities",
          description: "Processing plant design and optimization",
          features: [
            "Process design and optimization",
            "Equipment selection and sizing",
            "Plant automation and control systems",
            "Performance monitoring and optimization"
          ]
        }
      ]
    },
    downstream: {
      title: "Downstream (Future Expansion)",
      subtitle: "Refining and petrochemicals capabilities",
      description: "Strategic expansion into downstream operations to provide end-to-end energy sector coverage.",
      services: [
        {
          icon: Award,
          title: "Refinery Operations",
          description: "Refinery process optimization and management",
          features: [
            "Refinery process optimization",
            "Catalyst management and selection", 
            "Energy efficiency improvements",
            "Product quality enhancement"
          ]
        }
      ]
    },
    renewables: {
      title: "Renewables (Strategic Growth)",
      subtitle: "Clean energy transition expertise",
      description: "Supporting the energy transition with renewable energy engineering and carbon management solutions.",
      services: [
        {
          icon: Globe,
          title: "Carbon Management",
          description: "CCUS and carbon footprint reduction",
          features: [
            "Carbon capture and storage (CCS) design",
            "Carbon footprint assessment and reduction", 
            "Sustainability reporting and compliance",
            "Green technology integration"
          ]
        }
      ]
    }
  };

  const serviceTypes = [
    { key: 'upstream', label: 'Upstream', status: 'Core Expertise' },
    { key: 'midstream', label: 'Midstream', status: 'Expanding' },
    { key: 'downstream', label: 'Downstream', status: 'Future' },
    { key: 'renewables', label: 'Renewables', status: 'Strategic' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Core Expertise': return 'bg-[#255073]/10 text-[#255073] border-[#255073]/30';
      case 'Expanding': return 'bg-green-500/10 text-green-600 border-green-500/30';
      case 'Future': return 'bg-orange-500/10 text-orange-600 border-orange-500/30';
      case 'Strategic': return 'bg-purple-500/10 text-purple-600 border-purple-500/30';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScaleIQHeader />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">ENGINEERING SERVICES</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            End-to-End <span className="text-[#255073]">Engineering Excellence</span>
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto mb-8">
            Our engineering services address the full energy value chain, starting with deep expertise in Upstream Oil & Gas, and expanding into Midstream, Downstream, and Renewables.
          </p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceTypes.map((service) => (
              <button
                key={service.key}
                onClick={() => setActiveService(service.key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeService === service.key
                    ? 'bg-[#255073] text-white shadow-lg'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                <div className="text-sm font-semibold">{service.label}</div>
                <Badge className={`${getStatusColor(service.status)} text-xs mt-1`}>
                  {service.status}
                </Badge>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {engineeringServices[activeService].title}
                </h2>
                <p className="text-[#255073] text-xl font-medium mb-4">
                  {engineeringServices[activeService].subtitle}
                </p>
                <p className="text-black/70 max-w-2xl mx-auto">
                  {engineeringServices[activeService].description}
                </p>
              </div>
            </Card>

            {/* Service Details Grid - Only show for non-upstream services */}
            {activeService !== 'upstream' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {engineeringServices[activeService].services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="bg-white border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-8 w-8 text-[#255073]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                          <p className="text-black/70 mb-4">{service.description}</p>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-[#255073] flex-shrink-0 mt-0.5" />
                                <span className="text-black/80 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Comprehensive Upstream Expertise - Only shown for upstream */}
            {activeService === 'upstream' && <CoreUpstreamServices />}
          </div>
        </div>
      </section>

      {/* Core Upstream Services integrated into upstream tab */}

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              Why Choose ScaleIQ Engineering
            </Badge>
            <h3 className="text-3xl font-bold text-black mb-6">
              Proven Expertise, <span className="text-[#255073]">Measurable Results</span>
            </h3>
            <p className="text-black/70 max-w-2xl mx-auto">
              Our engineering teams deliver measurable impact through proven methodologies and deep domain expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-black/10 p-6 text-center">
              <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#255073]" />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">700+ Energy Domain Experts</h4>
              <p className="text-black/70">Average individual experience of 25+ years across major energy operators and service providers</p>
            </Card>

            <Card className="bg-white border-black/10 p-6 text-center">
              <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#255073]" />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">$10B+ Project Value</h4>
              <p className="text-black/70">Successfully delivered engineering services for projects worth over $10 billion</p>
            </Card>

            <Card className="bg-white border-black/10 p-6 text-center">
              <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#255073]" />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">Global Standards</h4>
              <p className="text-black/70">Engineering practices compliant with international standards and best practices</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#255073]/10 via-[#255073]/5 to-[#255073]/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            Ready to Scale Your Engineering Capabilities?
          </h3>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            Connect with our engineering experts to discuss your project requirements and discover how we can accelerate your operations
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};