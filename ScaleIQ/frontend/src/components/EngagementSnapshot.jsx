import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Building2, Wrench, Zap } from 'lucide-react';

export const EngagementSnapshot = () => {
  const phases = [
    {
      icon: Building2,
      title: "GCC Setup",
      description: "Legal, HR, infra, workforce leasing",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Wrench, 
      title: "Engineering Services",
      description: "Value engineering contracts & delivery",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Zap,
      title: "Digital Solutions", 
      description: "AI-driven innovation & transformation",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ];

  return (
    <section id="engagement" className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">ENGAGEMENT MODEL</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Journey with <span className="text-[#00FFD1]">ScaleIQ</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A phased approach designed for major energy operators and service provider companies energy companies to establish and scale India GCC operations with minimal risk
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#00FFD1]/20 hover:border-[#00FFD1]/50 transition-all duration-500 p-8 text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${phase.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border-2 border-[#00FFD1]/30`}>
                    <IconComponent className={`h-10 w-10 ${phase.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00FFD1] text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00FFD1] transition-colors">
                  {phase.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Flow Arrows */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          {[0, 1].map((index) => (
            <ArrowRight key={index} className="h-6 w-6 text-[#00FFD1] animate-pulse" />
          ))}
        </div>

        {/* Process Flow Description */}
        <Card className="bg-gradient-to-r from-[#00FFD1]/20 to-gray-800/50 border-[#00FFD1]/30 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Flexible Workforce Transition</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00FFD1] rounded-full"></div>
                  <span className="text-base"><strong className="text-[#00FFD1]">Year 1:</strong> 100% ScaleIQ payroll (risk-free trial)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00FFD1] rounded-full"></div>
                  <span className="text-base"><strong className="text-[#00FFD1]">Year 2:</strong> 70% ScaleIQ, 30% client transition</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00FFD1] rounded-full"></div>
                  <span className="text-base"><strong className="text-[#00FFD1]">Year 3+:</strong> Full client ownership option</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why This Works</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00FFD1] rounded-full"></div>
                  <span className="text-base">Minimize upfront investment and risk</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00FFD1] rounded-full"></div>
                  <span className="text-base">Test India operations before full commitment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00FFD1] rounded-full"></div>
                  <span className="text-base">Gradual knowledge transfer and ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.location.href = '/engagement-model'}
            className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-none px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};