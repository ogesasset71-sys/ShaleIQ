import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight, Clock } from 'lucide-react';

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    {
      id: 1,
      title: "Assess",
      description: "Comprehensive evaluation of current upstream systems, data infrastructure, and operational workflows",
      details: ["Legacy system audit", "Data assessment", "Security review", "Performance analysis"],
      duration: "2-4 weeks",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Plan",
      description: "Strategic roadmap development with phased migration approach and clear ROI projections",
      details: ["Migration strategy", "Architecture design", "Risk assessment", "Timeline planning"],
      duration: "3-6 weeks",
      icon: "📋"
    },
    {
      id: 3,
      title: "Migrate",
      description: "Systematic migration of upstream applications and data with minimal operational disruption",
      details: ["Phased migration", "Data transfer", "System integration", "Testing & validation"],
      duration: "3-12 months",
      icon: "🚀"
    },
    {
      id: 4,
      title: "Optimize",
      description: "Performance tuning, cost optimization, and advanced analytics implementation",
      details: ["Performance optimization", "Cost management", "Analytics setup", "Monitoring"],
      duration: "Ongoing",
      icon: "⚡"
    },
    {
      id: 5,
      title: "Innovate",
      description: "Advanced AI/ML implementation for predictive analytics and operational intelligence",
      details: ["AI model development", "Advanced analytics", "Automation", "Continuous improvement"],
      duration: "Ongoing",
      icon: "🧠"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">OUR PROCESS</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven <span className="text-[#00FFD1]">5-Step Methodology</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our systematic approach ensures successful digital transformation with measurable results 
            and minimal business disruption.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#00FFD1]/30 via-[#00FFD1]/60 to-[#00FFD1]/30 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative z-10 cursor-pointer"
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Step Circle */}
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                    activeStep >= step.id 
                      ? 'bg-[#00FFD1] text-black scale-110' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}>
                    {activeStep > step.id ? <CheckCircle className="h-8 w-8" /> : step.id}
                  </div>

                  {/* Step Title */}
                  <div className="text-center mt-4">
                    <h3 className={`text-lg font-bold transition-colors ${
                      activeStep === step.id ? 'text-[#00FFD1]' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <Badge variant="outline" className={`mt-2 transition-colors ${
                      activeStep === step.id 
                        ? 'border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/10' 
                        : 'border-white/30 text-white/70'
                    }`}>
                      <Clock className="h-3 w-3 mr-1" />
                      {step.duration}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-[#00FFD1]/10 to-transparent border-[#00FFD1]/30 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{processSteps[activeStep - 1]?.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Step {activeStep}: {processSteps[activeStep - 1]?.title}
                      </h3>
                      <Badge variant="outline" className="border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/10">
                        {processSteps[activeStep - 1]?.duration}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {processSteps[activeStep - 1]?.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Activities:</h4>
                  <div className="space-y-3">
                    {processSteps[activeStep - 1]?.details.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#00FFD1] rounded-full" />
                        <span className="text-white/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => (
            <Card
              key={step.id}
              className={`p-6 transition-all duration-300 cursor-pointer ${
                activeStep === step.id
                  ? 'bg-gradient-to-br from-[#00FFD1]/10 to-transparent border-[#00FFD1]/50'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                  activeStep >= step.id 
                    ? 'bg-[#00FFD1] text-black' 
                    : 'bg-white/10 text-white/70'
                }`}>
                  {activeStep > step.id ? <CheckCircle className="h-6 w-6" /> : step.id}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-lg font-bold ${
                      activeStep === step.id ? 'text-[#00FFD1]' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <Badge variant="outline" className={`${
                      activeStep === step.id 
                        ? 'border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/10' 
                        : 'border-white/30 text-white/70'
                    }`}>
                      {step.duration}
                    </Badge>
                  </div>

                  <p className="text-white/70 mb-4">{step.description}</p>

                  {activeStep === step.id && (
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#00FFD1] rounded-full" />
                          <span className="text-sm text-white/60">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-white/30" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};