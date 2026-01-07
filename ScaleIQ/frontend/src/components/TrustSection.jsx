import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Award, Globe, Zap, Wrench, Building2, Briefcase, Monitor } from 'lucide-react';

export const TrustSection = () => {
  const industryExpertise = [
    { name: "Oil & Gas", icon: Building2 },
    { name: "Engineering", icon: Wrench },
    { name: "Energy Tech", icon: Zap },
    { name: "Consulting", icon: Briefcase },
    { name: "Digital", icon: Monitor }
  ];

  const stats = [
    { icon: Users, value: "250+", label: "Years Combined Experience" },
    { icon: Globe, value: "50+", label: "Projects Delivered in Energy Space" },
    { icon: Award, value: "20+", label: "Clientele in Fortune 500 Energy Companies" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100/30 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">TEAM CREDIBILITY</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Our leadership team has delivered <span className="text-[#255073]">250+ years of impact</span> across major energy operators and service provider companies
          </h2>
          <p className="text-black/70 text-lg max-w-3xl mx-auto">
            Advisory Board & former roles at leading energy and technology companies
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-12">
          <p className="text-center text-black/60 text-sm mb-6">Domain expertise across key energy sectors:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {industryExpertise.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <Card key={index} className="bg-black/5 border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-6 min-w-[140px] group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#255073]/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-[#255073]" />
                    </div>
                    <div className="text-black/80 text-sm font-medium">{domain.name}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-6 text-center">
                <div className="w-12 h-12 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-[#255073]" />
                </div>
                <div className="text-3xl font-bold text-[#255073] mb-2">{stat.value}</div>
                <div className="text-black/70 text-sm">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};