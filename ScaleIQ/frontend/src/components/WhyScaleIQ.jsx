import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Users, Zap, Globe2 } from 'lucide-react';

export const WhyScaleIQ = () => {
  const differentiators = [
    {
      icon: Building2,
      title: "Engineering Excellence",
      description: "Proven domain experts",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      title: "Digital Agility", 
      description: "AI, IoT, and modern platforms",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Network across leading energy markets",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      title: "Asset-Light GCC Expansion",
      description: "Scale risk-free",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">WHY SCALEIQ</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            We bring together global industry veterans and world-class engineers to help you establish, scale, and future-proof your <span className="text-[#00FFD1]">India GCC operations</span>
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${item.gradient} border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 transform hover:-translate-y-2 p-6 group text-center`}
              >
                <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#00FFD1]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FFD1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};