import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Building2, 
  Brain, 
  Users, 
  Target, 
  Lightbulb 
} from 'lucide-react';

export const CompetitiveEdgeSection = () => {
  const competitiveAdvantages = [
    {
      icon: Brain,
      title: "AI-first ER&D",
      description: "Unique integration of machine learning, digital platforms, and engineering expertise under one roof",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      title: "Talent Access",
      description: "Hybrid workforce model combining onshore client teams with global delivery centers",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Target,
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
    <section className="py-24 bg-gradient-to-b from-gray-100/30 to-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">OUR COMPETITIVE EDGE</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Unique Advantages for <span className="text-[#255073]">Market Leadership</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Unique advantages that position ScaleIQ for market leadership in energy sector innovation
          </p>
        </div>

        {/* Competitive Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competitiveAdvantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${advantage.gradient} border-black/10 hover:border-[#255073]/30 transition-all duration-500 p-8 h-full`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-[#255073]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};