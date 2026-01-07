import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Zap, Shield, Globe, Lightbulb, Building2 } from 'lucide-react';

export const ValueProposition = () => {
  const valueProps = [
    {
      icon: Building2,
      title: "Captive Stake of Portfolio Companies",
      description: "Instant credibility, proprietary IP portfolio, and immediate revenue streams from day one",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      title: "AI-first ER&D",
      description: "Unique integration of machine learning, digital platforms, and engineering expertise under one roof",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Globe,
      title: "Talent Access",
      description: "Hybrid workforce model combining onshore client teams with global delivery centers",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: "Industry Depth",
      description: "Starting with energy sector expertise before strategic expansion to adjacent industrial markets",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Lightbulb,
      title: "IP Creation Focus",
      description: "Product-centric approach that builds proprietary assets, not just services",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">OUR COMPETITIVE EDGE</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why <span className="text-[#00FFD1]">ScaleIQ</span> Leads the Market
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We stand at the powerful intersection of engineering excellence, AI innovation, 
            and deep energy industry expertise, uniquely positioned to transform upstream operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${prop.gradient} border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 transform hover:-translate-y-2 p-6 group text-center`}
              >
                <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#00FFD1]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FFD1] transition-colors">
                  {prop.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#00FFD1]/10 via-transparent to-[#00FFD1]/10 border-[#00FFD1]/20 p-8 lg:p-12">
            <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 mb-6">
              Our Vision
            </Badge>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Turning Bold Ideas into Reality Through Engineering, Technology, and Digital Innovation
            </h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
              ScaleIQ establishes comprehensive Global Capability Centers for energy companies, delivering transformative solutions through three specialized arms: Core Engineering Services, OgesOne Platform, and GCC Services.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};