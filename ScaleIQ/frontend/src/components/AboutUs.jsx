import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScaleIQHeader } from './ScaleIQHeader';
import { Footer } from './Footer';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Globe,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  Building2,
  Wrench
} from 'lucide-react';

export const AboutUs = () => {
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
      content: "Enable major energy operators and service provider companies energy companies to establish and scale world-class India GCC operations through our proven expertise, innovative solutions, and risk-free engagement model.",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Users,
      title: "Values",
      content: "Excellence in execution, innovation through AI and digital transformation, transparency in partnerships, and commitment to sustainable energy solutions.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const dualPositioning = [
    {
      icon: Wrench,
      title: "Engineering (Solved Problems)",
      description: "Proven frameworks, experienced leaders",
      features: [
        "20+ years of collective engineering excellence",
        "Repeatable methodologies and best practices", 
        "Deep domain expertise across energy value chain",
        "Regulatory compliance and safety standards"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Building2,
      title: "R&D (Unsolved Problems)", 
      description: "AI-driven innovation, experimentation, digital-first strategies",
      features: [
        "AI and machine learning innovation",
        "Digital transformation and automation",
        "Emerging technology experimentation", 
        "Next-generation energy solutions"
      ],
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  const collectiveStats = [
    { icon: Users, value: "250+", label: "Years Combined Energy Leadership", color: "text-blue-400" },
    { icon: Globe, value: "50+", label: "Global Projects Delivered", color: "text-green-400" },
    { icon: TrendingUp, value: "12", label: "Energy Markets Served", color: "text-purple-400" },
    { icon: Award, value: "major energy operators and service provider companies", label: "Client Pedigree", color: "text-orange-400" }
  ];

  const advisoryBoard = [
    {
      name: "Rajesh Kumar",
      role: "Former VP Engineering, Shell",
      expertise: "Upstream Operations & Digital Transformation",
      experience: "25 years"
    },
    {
      name: "Sarah Mitchell",
      role: "Former Director, Schlumberger",
      expertise: "Reservoir Engineering & AI Solutions", 
      experience: "22 years"
    },
    {
      name: "David Chen",
      role: "Former Principal, Accenture Energy",
      expertise: "Energy Consulting & GCC Setup",
      experience: "20 years"
    },
    {
      name: "Priya Sharma", 
      role: "Former Lead Architect, Microsoft",
      expertise: "Cloud Platforms & Enterprise Software",
      experience: "18 years"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <ScaleIQHeader />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">ABOUT SCALEIQ</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted Partner for Energy <span className="text-[#255073]">Innovation</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Where engineering excellence meets digital innovation to transform the future of energy operations
          </p>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Vision & <span className="text-[#255073]">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {visionValues.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className={`bg-gradient-to-br ${item.gradient} border-white/10 hover:border-[#255073]/30 transition-all duration-500 p-8`}>
                  <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-[#255073]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.content}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dual Positioning */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              What We <span className="text-[#255073]">Do</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We operate at the intersection of proven engineering excellence and cutting-edge innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dualPositioning.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <Card key={index} className={`bg-gradient-to-br ${position.gradient} border-white/10 hover:border-[#255073]/30 transition-all duration-500 p-8`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-[#255073]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{position.title}</h3>
                      <p className="text-white/70">{position.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {position.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#255073] flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collective Experience Portfolio */}
      <section className="py-24 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              Leadership Credentials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Collective Experience <span className="text-[#255073]">Portfolio</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Instead of company case studies, we showcase the cumulative impact of our leadership team's experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {collectiveStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-white/5 to-transparent border-white/10 hover:border-[#255073]/30 transition-all duration-500 p-6 text-center">
                  <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-[#255073] mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Advisory Board & <span className="text-[#255073]">Leadership</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Individual pedigrees that substitute for company history and establish immediate credibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryBoard.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black border-white/10 hover:border-[#255073]/30 transition-all duration-500 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD1]/20 to-[#00FFD1]/10 rounded-lg flex items-center justify-center">
                    <Users className="h-8 w-8 text-[#255073]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#255073] font-medium mb-2">{member.role}</p>
                    <p className="text-white/70 text-sm mb-3">{member.expertise}</p>
                    <Badge className="bg-white/10 text-white/80 border-white/20">
                      {member.experience} experience
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00FFD1]/10 via-[#00FFD1]/5 to-[#00FFD1]/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Energy Operations?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our energy experts to discuss your India GCC expansion plans
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};