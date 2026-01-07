import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScaleIQHeader } from './ScaleIQHeader';
import { Footer } from './Footer';
import { 
  Brain, 
  Lightbulb, 
  Zap, 
  Database,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Target,
  Cpu,
  BarChart3,
  Layers,
  Settings,
  Globe
} from 'lucide-react';

export const RAndD = () => {
  const [activeArea, setActiveArea] = useState('ai-ml');

  const researchAreas = {
    'ai-ml': {
      title: "AI & Machine Learning",
      subtitle: "Intelligent systems for autonomous operations",
      description: "Developing AI-powered solutions to automate complex decision-making processes and optimize energy operations through machine learning, deep learning, and cognitive computing.",
      icon: Brain,
      gradient: "from-blue-500/20 to-cyan-500/20",
      projects: [
        {
          name: "Predictive Maintenance AI",
          description: "ML models for equipment failure prediction and maintenance optimization",
          status: "Production",
          impact: "$2M+ annual savings"
        },
        {
          name: "Reservoir Performance ML",
          description: "Deep learning models for reservoir behavior prediction and optimization",
          status: "Pilot",
          impact: "95% accuracy in forecasting"
        },
        {
          name: "Drilling Optimization AI",
          description: "Real-time AI for drilling parameter optimization and NPT reduction",
          status: "Development",
          impact: "35% NPT reduction target"
        }
      ]
    },
    'digital-twin': {
      title: "Digital Twin Technology",
      subtitle: "Virtual replicas of physical assets and processes",
      description: "Creating comprehensive digital twins of energy assets, from individual wells to entire fields, enabling real-time monitoring, simulation, and optimization.",
      icon: Layers,
      gradient: "from-green-500/20 to-teal-500/20",
      projects: [
        {
          name: "Well Digital Twin Platform",
          description: "Comprehensive digital twin for well performance monitoring and optimization",
          status: "Beta",
          impact: "40% improved prediction accuracy"
        },
        {
          name: "Field Operations Twin",
          description: "Integrated digital twin for entire field operations and production systems",
          status: "Development",
          impact: "Real-time optimization capability"
        }
      ]
    },
    'automation': {
      title: "Intelligent Automation",
      subtitle: "Autonomous systems and process automation",
      description: "Developing intelligent automation solutions that combine RPA, AI, and IoT to create fully autonomous operational processes in energy environments.",
      icon: Zap,
      gradient: "from-purple-500/20 to-pink-500/20",
      projects: [
        {
          name: "Autonomous Well Control",
          description: "Fully automated well control systems with real-time optimization",
          status: "Research",
          impact: "Unmanned operations target"
        },
        {
          name: "Smart Field Automation",
          description: "End-to-end automation of field operations using IoT and AI",
          status: "Concept",
          impact: "50% operational cost reduction"
        }
      ]
    },
    'sustainability': {
      title: "Sustainability Innovation",
      subtitle: "Clean energy transition and carbon management",
      description: "Pioneering research in carbon capture, clean energy integration, and sustainable operational practices for the energy transition.",
      icon: Globe,
      gradient: "from-orange-500/20 to-red-500/20",
      projects: [
        {
          name: "Carbon Footprint Analytics",
          description: "AI-powered carbon footprint tracking and optimization for operations",
          status: "Pilot",
          impact: "25% emission reduction"
        },
        {
          name: "Clean Energy Integration",
          description: "Hybrid renewable energy solutions for upstream operations",
          status: "Research",
          impact: "Carbon neutral operations"
        }
      ]
    }
  };

  const capabilities = [
    {
      icon: Target,
      name: "Expert Analysis Teams",
      description: "Specialized R&D teams with deep domain expertise",
      features: [
        "Multi-disciplinary research teams",
        "PhD-level researchers and engineers",
        "Industry-academia partnerships",
        "Continuous learning and development"
      ]
    },
    {
      icon: Settings,
      name: "Advanced Lab Facilities",
      description: "State-of-the-art R&D laboratories and testing facilities",
      features: [
        "High-performance computing clusters",
        "Advanced simulation environments",
        "IoT and sensor testing labs",
        "Collaborative research spaces"
      ]
    },
    {
      icon: Award,
      name: "Innovation Framework",
      description: "Structured approach to innovation and technology development",
      features: [
        "Stage-gate innovation process",
        "Rapid prototyping capabilities",
        "IP development and management",
        "Technology transfer programs"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'bg-[#255073]/10 text-[#255073] border-[#255073]/30';
      case 'Pilot': return 'bg-green-500/10 text-green-600 border-green-500/30';
      case 'Beta': return 'bg-blue-500/10 text-blue-600 border-blue-500/30';
      case 'Development': return 'bg-orange-500/10 text-orange-600 border-orange-500/30';
      case 'Research': return 'bg-purple-500/10 text-purple-600 border-purple-500/30';
      case 'Concept': return 'bg-gray-500/10 text-gray-600 border-gray-500/30';
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
            <span className="text-lg font-medium tracking-wide">RESEARCH & DEVELOPMENT</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Pioneering the Future of <span className="text-[#255073]">Energy Technology</span>
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto mb-8">
            Our R&D division focuses on breakthrough technologies that will shape the next generation of energy operations through AI, automation, and sustainable innovation.
          </p>
        </div>
      </section>

      {/* Research Areas Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(researchAreas).map(([key, area]) => {
              const IconComponent = area.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveArea(key)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeArea === key
                      ? 'bg-[#255073] text-white shadow-lg'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-semibold">{area.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Research Area Content */}
          <div className="mb-16">
            <Card className={`bg-gradient-to-br ${researchAreas[activeArea].gradient} border-[#255073]/20 p-8 mb-12`}>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#255073]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {React.createElement(researchAreas[activeArea].icon, { className: "h-10 w-10 text-[#255073]" })}
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">
                  {researchAreas[activeArea].title}
                </h2>
                <p className="text-[#255073] text-xl font-medium mb-4">
                  {researchAreas[activeArea].subtitle}
                </p>
                <p className="text-black/70 max-w-2xl mx-auto">
                  {researchAreas[activeArea].description}
                </p>
              </div>
            </Card>

            {/* Research Projects */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Current Research Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchAreas[activeArea].projects.map((project, index) => (
                  <Card key={index} className="bg-white border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-black">{project.name}</h4>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-black/70 text-sm mb-3">{project.description}</p>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-[#255073]" />
                        <span className="text-[#255073] text-sm font-medium">{project.impact}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              R&D Capabilities
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              World-Class <span className="text-[#255073]">Research Infrastructure</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Our R&D capabilities combine cutting-edge technology, expert talent, and structured innovation processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="bg-white border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[#255073]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{capability.name}</h3>
                    <p className="text-black/70">{capability.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#255073] flex-shrink-0 mt-0.5" />
                        <span className="text-black/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">
              Innovation <span className="text-[#255073]">Pipeline</span>
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Our structured innovation process takes ideas from concept to commercialization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stage: "Research", description: "Fundamental research and concept development", icon: Lightbulb },
              { stage: "Development", description: "Prototype development and testing", icon: Settings },
              { stage: "Pilot", description: "Field testing and validation", icon: Target },
              { stage: "Production", description: "Commercial deployment and scaling", icon: Award }
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card key={index} className="bg-white border-black/10 p-6 text-center">
                  <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-[#255073]" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{phase.stage}</h3>
                  <p className="text-black/70 text-sm">{phase.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-[#255073]" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership & Collaboration */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
            Partnerships & Collaboration
          </Badge>
          <h2 className="text-3xl font-bold text-black mb-6">
            Collaborative <span className="text-[#255073]">Innovation Network</span>
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto mb-12">
            We collaborate with leading universities, research institutions, and industry partners to accelerate innovation and bring breakthrough technologies to market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-black/10 p-6">
              <Users className="h-12 w-12 text-[#255073] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Academic Partnerships</h3>
              <p className="text-black/70 text-sm">Collaborative research with top engineering and technology universities</p>
            </Card>

            <Card className="bg-white border-black/10 p-6">
              <Globe className="h-12 w-12 text-[#255073] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Industry Consortiums</h3>
              <p className="text-black/70 text-sm">Active participation in energy industry research consortiums and standards bodies</p>
            </Card>

            <Card className="bg-white border-black/10 p-6">
              <Award className="h-12 w-12 text-[#255073] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Technology Partnerships</h3>
              <p className="text-black/70 text-sm">Strategic partnerships with technology leaders and startup ecosystems</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#255073]/10 via-[#255073]/5 to-[#255073]/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            Ready to Innovate Together?
          </h3>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            From concept to deployment, our R&D team is ready to solve your most complex energy challenges
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Explore R&D Partnerships
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};