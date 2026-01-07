import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Cloud, Zap, TrendingUp } from 'lucide-react';
import { EnergyCityVisualization } from './EnergyCityVisualization';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Carousel: Upstream, Refinery, then all Others
  const energyImages = [
    {
      url: "https://images.unsplash.com/photo-1633829131104-e2134f75c6e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjV8MHwxfHNlYXJjaHwxfHx1cHN0cmVhbSUyMG9pbCUyMHJpZ3xlbnwwfHx8fDE3NTk4MTk3MzN8MA&ixlib=rb-4.1.0&q=85",
      alt: "Upstream Oil Rig Infrastructure",
      type: "upstream"
    },
    {
      url: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjV8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTk4MTk3Mjh8MA&ixlib=rb-4.1.0&q=85",
      alt: "Oil Refinery Infrastructure",
      type: "refinery"
    },
    {
      url: "https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzU5ODI1MTIyfDA&ixlib=rb-4.1.0&q=85",
      alt: "Hydrogen Power Plant Infrastructure",
      type: "others"
    },
    {
      url: "https://images.unsplash.com/photo-1548337138-e87d889cc369?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MHx8fGJsdWV8MTc1OTgxNTQyNHww&ixlib=rb-4.1.0&q=85",
      alt: "Offshore Wind Energy Infrastructure", 
      type: "others"
    },
    {
      url: "https://images.unsplash.com/photo-1661936955098-b991c99fd023?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxkcm9uZSUyMHdvcmtzaG9wfGVufDB8fHx8MTc1OTgyNTkxM3ww&ixlib=rb-4.1.0&q=85",
      alt: "Drone Creation Laboratory with Multiple Drones",
      type: "others"
    },
    {
      url: "https://images.unsplash.com/photo-1705147219565-fe9f6f369d03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzU5ODI1MTIyfDA&ixlib=rb-4.1.0&q=85",
      alt: "Industrial Piping Infrastructure",
      type: "others"
    },
    {
      url: "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwYXJtfGVufDB8fHx8MTc1OTgyNTgwOHww&ixlib=rb-4.1.0&q=85",
      alt: "Clean Robotics Technology",
      type: "others"
    },
    {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBpbmZyYXN0cnVjdHVyZXxlbnwwfHx8fDE3NTk4MTgzODV8MA&ixlib=rb-4.1.0&q=85",
      alt: "Power Grid Infrastructure",
      type: "others"
    }
  ];

  // Auto-change carousel every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % energyImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [energyImages.length]);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Energy Infrastructure Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {energyImages.map((image, index) => (
          <img 
            key={index}
            src={image.url}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              filter: 'contrast(1.1) brightness(0.8) saturate(1.2)',
              imageRendering: 'auto'
            }}
          />
        ))}
      </div>
      
      {/* Background Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32">
        <div className={`space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Engineering and R&D <span className="text-[#255073]">services</span> for the energy industry
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              Turning Bold Energy Ideas into Reality
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-12 py-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>700+</div>
              <div className="text-white/90 text-sm lg:text-base font-semibold mt-2 px-2 py-1 bg-black/20 backdrop-blur-sm rounded-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Global Energy Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>40%</div>
              <div className="text-white/90 text-sm lg:text-base font-semibold mt-2 px-2 py-1 bg-black/20 backdrop-blur-sm rounded-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Value Addition to PnL</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>24/7</div>
              <div className="text-white/90 text-sm lg:text-base font-semibold mt-2 px-2 py-1 bg-black/20 backdrop-blur-sm rounded-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Expert Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-12 py-6 text-xl font-medium shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 min-w-[220px]"
              onClick={() => scrollToSection('contact')}
            >
              Book a Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 hover:border-white rounded-none px-12 py-6 text-xl font-medium shadow-2xl transition-all duration-300 hover:scale-105 min-w-[220px]"
              onClick={() => scrollToSection('engagement')}
            >
              See How It Works
            </Button>
          </div>

          {/* KPIs */}
          <div className="pt-4 flex justify-center items-center space-x-8 lg:space-x-12">
            <div className="flex items-center space-x-2">
              <Cloud className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              <span className="text-white/90 text-sm lg:text-base font-medium" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Infrastructure Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              <span className="text-white/90 text-sm lg:text-base font-medium" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>AI Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              <span className="text-white/90 text-sm lg:text-base font-medium" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Proven ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};