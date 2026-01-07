import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Building2, Wrench, Cpu, Calendar } from 'lucide-react';

export const QuickLinks = () => {
  const quickLinks = [
    {
      icon: Building2,
      title: "GCC Setup",
      description: "Asset-light expansion model with workforce leasing",
      href: "/gcc-setup",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Wrench,
      title: "Engineering",
      description: "Upstream, midstream, and renewable energy expertise",
      href: "/engineering-services", 
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Cpu,
      title: "Digital",
      description: "OGESOne platform, AI solutions, and digital transformation",
      href: "/digital-services",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Calendar,
      title: "Book Consultation", 
      description: "Schedule a meeting with our energy experts",
      href: "#contact",
      gradient: "from-orange-500/20 to-red-500/20",
      isHighlight: true
    }
  ];

  const handleClick = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            How Can We <span className="text-[#00FFD1]">Help You</span> Today?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our comprehensive services or book a consultation to discuss your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card
                key={index}
                className={`${link.gradient} border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 transform hover:-translate-y-2 p-6 group cursor-pointer ${
                  link.isHighlight ? 'ring-2 ring-[#00FFD1]/30' : ''
                }`}
                onClick={() => handleClick(link.href)}
              >
                <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#00FFD1]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FFD1] transition-colors text-center">
                  {link.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed text-center mb-4">
                  {link.description}
                </p>
                <div className="flex justify-center">
                  <ArrowRight className="h-5 w-5 text-[#00FFD1] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};