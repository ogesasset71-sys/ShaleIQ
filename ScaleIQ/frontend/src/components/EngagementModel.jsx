import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Rocket, TrendingUp, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const EngagementModel = () => {
  const [activePhase, setActivePhase] = useState('foundation');

  const phases = {
    foundation: {
      title: "Phase 1: Foundation (Months 1-6)",
      subtitle: "Rapid Team Assembly & Infrastructure Setup",
      icon: Rocket,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      gradient: "from-blue-500/20 to-cyan-500/20",
      timeline: "6 Months",
      objectives: [
        "Hire 50-100 engineers in 90 days",
        "Set up office infrastructure and IT systems",
        "Onboard teams with process training",
        "Establish governance and compliance frameworks"
      ],
      deliverables: [
        "Fully operational GCC facility",
        "Trained engineering teams",
        "IT infrastructure and security protocols",
        "Quality assurance processes established"
      ],
      workforce: "100% ScaleIQ payroll (zero client risk)",
      investment: "Minimal upfront investment - pay-as-you-grow model"
    },
    stabilization: {
      title: "Phase 2: Stabilization (Months 7-18)",
      subtitle: "Process Optimization & Quality Enhancement",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      gradient: "from-green-500/20 to-teal-500/20",
      timeline: "12 Months",
      objectives: [
        "Optimize workflows and delivery processes",
        "Scale team to 150-200 engineers",
        "Build specialized competency centers",
        "Implement continuous improvement programs"
      ],
      deliverables: [
        "Mature delivery processes",
        "Domain-specific teams (Reservoir, Drilling, Production)",
        "Quality metrics and KPI dashboards",
        "Client-specific customizations"
      ],
      workforce: "Transition option to client payroll available",
      investment: "Continued pay-as-you-grow with performance incentives"
    },
    acceleration: {
      title: "Phase 3: Acceleration (Months 19+)",
      subtitle: "Innovation & Advanced Capabilities",
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      gradient: "from-purple-500/20 to-pink-500/20",
      timeline: "Ongoing",
      objectives: [
        "Drive innovation and R&D initiatives",
        "Expand into advanced technologies (AI/ML, IoT)",
        "Develop proprietary solutions and IP",
        "Become strategic technology partner"
      ],
      deliverables: [
        "Innovation labs and R&D centers",
        "AI/ML solutions for operational optimization",
        "Digital transformation initiatives",
        "Strategic partnership framework"
      ],
      workforce: "Full client payroll transition or hybrid model",
      investment: "Investment in R&D with shared IP benefits"
    }
  };

  return (
    <section id="engagement" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">ENGAGEMENT MODEL</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Three-Phase <span className="text-[#255073]">Transformation</span> Journey
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Our proven methodology takes you from zero to a fully operational India GCC in 18 months, 
            with continued acceleration into advanced capabilities
          </p>
        </div>

        {/* Interactive Tabs */}
        <Tabs value={activePhase} onValueChange={setActivePhase} className="w-full">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-2 rounded-lg min-h-[120px]">
            {Object.entries(phases).map(([key, phase]) => {
              const IconComponent = phase.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex flex-col items-center p-4 rounded-md transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#255073] data-[state=active]:shadow-sm text-black/70 min-h-[100px] justify-center"
                >
                  <IconComponent className="h-7 w-7 mb-2" />
                  <span className="font-semibold text-sm text-center leading-tight">{phase.title.split(':')[0]}</span>
                  <span className="text-xs opacity-75 mt-1">{phase.timeline}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab Content */}
          {Object.entries(phases).map(([key, phase]) => {
            const IconComponent = phase.icon;
            return (
              <TabsContent key={key} value={key} className="mt-0">
                <Card className={`bg-gradient-to-br ${phase.gradient} border-black/10 p-8 mb-8`}>
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 ${phase.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`h-10 w-10 ${phase.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-black mb-2">{phase.title}</h3>
                      <p className="text-[#255073] text-lg font-medium mb-4">{phase.subtitle}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-black mb-4">Key Objectives</h4>
                          <ul className="space-y-3">
                            {phase.objectives.map((objective, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-[#255073] flex-shrink-0 mt-0.5" />
                                <span className="text-black/80">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-4">Deliverables</h4>
                          <ul className="space-y-3">
                            {phase.deliverables.map((deliverable, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-[#255073] flex-shrink-0 mt-0.5" />
                                <span className="text-black/80">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Phase Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white border-black/10 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Users className="h-6 w-6 text-[#255073]" />
                      <h4 className="text-lg font-bold text-black">Workforce Model</h4>
                    </div>
                    <p className="text-black/70">{phase.workforce}</p>
                  </Card>

                  <Card className="bg-white border-black/10 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingUp className="h-6 w-6 text-[#255073]" />
                      <h4 className="text-lg font-bold text-black">Investment Structure</h4>
                    </div>
                    <p className="text-black/70">{phase.investment}</p>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Risk Mitigation */}
        <Card className="mt-16 bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-8">
          <div className="text-center mb-8">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              Risk Mitigation
            </Badge>
            <h3 className="text-2xl font-bold text-black mb-4">
              Zero-Risk <span className="text-[#255073]">Approach</span>
            </h3>
            <p className="text-black/70 max-w-2xl mx-auto">
              Our engagement model is designed to minimize client risk at every phase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-[#255073]" />
              </div>
              <h4 className="text-lg font-bold text-black mb-2">No Upfront Investment</h4>
              <p className="text-black/70 text-sm">Pay only for delivered services with transparent pricing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#255073]" />
              </div>
              <h4 className="text-lg font-bold text-black mb-2">ScaleIQ Payroll</h4>
              <p className="text-black/70 text-sm">We handle all employment risks and compliance requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#255073]" />
              </div>
              <h4 className="text-lg font-bold text-black mb-2">Proven Methodology</h4>
              <p className="text-black/70 text-sm">Battle-tested approach with 100% success rate across implementations</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#255073] hover:bg-[#255073]/90 text-white rounded-none px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};