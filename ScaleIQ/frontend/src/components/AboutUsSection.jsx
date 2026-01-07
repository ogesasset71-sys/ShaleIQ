import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  Building2,
  Wrench,
  Monitor
} from 'lucide-react';

export const AboutUsSection = () => {
  const visionValues = [
    {
      icon: Target,
      title: "Vision",
      content: "To be the premier next-generation leader in engineering, research and development services, seamlessly integrating advanced engineering, AI, and software for the energy industry.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Lightbulb,
      title: "Mission", 
      content: "Enable major energy operators and service provider companies to establish and scale world-class India GCC operations through our proven expertise, innovative solutions, and risk-free engagement model.",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Users,
      title: "Values",
      content: "Excellence in execution, innovation through AI and digital transformation, transparency in partnerships, and commitment to sustainable energy solutions.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const serviceQuadrants = [
    {
      icon: Building2,
      question: "Need to establish operations in India?",
      title: "India GCC Setup",
      answer: "Complete end-to-end GCC establishment services",
      features: [
        "Legal entity formation and regulatory compliance",
        "Office setup and infrastructure development",
        "Talent acquisition and team building",
        "Operations setup and process establishment"
      ]
    },
    {
      icon: Wrench,
      question: "Require specialized engineering expertise?",
      title: "Engineering Services", 
      answer: "Expert engineering teams for your complex projects",
      features: [
        "Upstream, midstream, downstream engineering",
        "Project-based staffing and consulting",
        "Geoscience, reservoir, drilling expertise",
        "Regulatory compliance and safety standards"
      ]
    },
    {
      icon: Monitor,
      question: "Looking to digitize operations?",
      title: "Digital Solutions",
      answer: "Custom digital transformation and automation",
      features: [
        "OgesOne platform implementation",
        "Workflow automation solutions", 
        "AI/ML analytics and insights",
        "Legacy system integration and migration"
      ]
    },
    {
      icon: Lightbulb,
      question: "Want to innovate with R&D?",
      title: "R&D Services",
      answer: "Innovation labs and cutting-edge research",
      features: [
        "R&D lab and innovation factory setup",
        "Research project execution and management",
        "Technology development and IP creation",
        "Proof of concept and prototype development"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-100/30 to-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">ABOUT SCALEIQ</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Trusted Partner for Energy <span className="text-[#255073]">Innovation</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Where engineering excellence meets digital innovation to transform the future of energy operations
          </p>
        </div>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {visionValues.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${item.gradient} border-black/10 hover:border-[#255073]/30 transition-all duration-500 p-8`}>
                <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-[#255073]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-black/80 leading-relaxed">{item.content}</p>
              </Card>
            );
          })}
        </div>

        {/* Dual Positioning - Engineering Excellence & R&D */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
              <div className="w-12 h-0.5 bg-[#255073]" />
              <span className="text-lg font-medium tracking-wide">WHAT WE DO</span>
              <div className="w-12 h-0.5 bg-[#255073]" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Four Ways We <span className="text-[#255073]">Solve Your Challenges</span>
            </h3>
          </div>

          {/* Four Quadrants Grid with Lines */}
          <div className="relative">
            {/* Quadrant Lines - Only visible on large screens */}
            <div className="hidden lg:block">
              {/* Vertical Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#255073]/30 transform -translate-x-1/2 z-10"></div>
              {/* Horizontal Line */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[#255073]/30 transform -translate-y-1/2 z-10"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceQuadrants.map((quadrant, index) => {
                const IconComponent = quadrant.icon;
                return (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-black/10 hover:border-[#255073]/30 transition-all duration-500 p-8 h-full">
                  {/* Question-Answer Header */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#255073]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-[#255073]" />
                      </div>
                      <div className="text-sm text-black/60 font-medium">
                        Q{index + 1}: {quadrant.question}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-black mb-2">{quadrant.title}</h4>
                    <p className="text-[#255073] font-medium text-base mb-4">
                      <span className="font-semibold">Answer:</span> {quadrant.answer}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {quadrant.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#255073] flex-shrink-0 mt-0.5" />
                        <span className="text-black/80 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          </div>
        </div>

        {/* Removed Leadership Credentials section as requested */}
      </div>
    </section>
  );
};