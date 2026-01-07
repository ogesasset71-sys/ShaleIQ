import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ScaleIQHeader } from './ScaleIQHeader';
import { Footer } from './Footer';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Users, Award } from 'lucide-react';

export const CaseStudies = () => {
  // Priority case studies that should appear first
  const priorityCaseStudies = [
    {
      title: "AI Hackathon with Real Upstream Use Case Implementation",
      category: "AI Innovation",
      challenge: "Major energy operator needed to evaluate AI capabilities for upstream operations and identify practical use cases that could deliver immediate value.",
      solution: "Organized comprehensive AI hackathon bringing together 150+ engineers, data scientists, and domain experts to develop AI solutions for real upstream challenges including production optimization, predictive maintenance, and reservoir analysis.",
      results: [
        "15 AI prototypes developed in 48 hours",
        "3 solutions moved to production within 90 days",
        "$2M annual savings identified from predictive maintenance"
      ],
      icon: Zap,
      gradient: "from-purple-500/20 to-pink-500/20",
      badge: "AI & Innovation"
    },
    {
      title: "AI Based Reservoir Modelling Implementation",
      category: "Reservoir Engineering",
      challenge: "Traditional reservoir modeling taking 6-8 weeks per field with limited ability to incorporate real-time data and run multiple scenarios quickly.",
      solution: "Developed AI-powered reservoir modeling platform using machine learning to automate history matching, predict production profiles, and optimize development strategies with 90% faster turnaround.",
      results: [
        "Reduced modeling time from 6 weeks to 3 days",
        "95% accuracy in production forecasting",
        "Enabled real-time scenario analysis"
      ],
      icon: TrendingUp,
      gradient: "from-blue-500/20 to-cyan-500/20",
      badge: "AI & Reservoir"
    },
    {
      title: "Command and Control Centre for Upstream Top Management",
      category: "Digital Transformation",
      challenge: "Executive team lacked real-time visibility into operations across 50+ fields, leading to delayed decision-making and reactive management.",
      solution: "Built integrated command center dashboard providing real-time KPIs, production analytics, HSE metrics, and predictive alerts across all upstream operations with mobile access for executives.",
      results: [
        "Real-time visibility across 50+ fields",
        "40% faster decision-making cycle",
        "Reduced unplanned downtime by 25%"
      ],
      icon: Users,
      gradient: "from-green-500/20 to-teal-500/20",
      badge: "Digital Operations"
    },
    {
      title: "Drilling Optimization with Predictive Analytics",
      category: "Drilling Engineering",
      challenge: "High non-productive time (NPT) during drilling operations due to unexpected equipment failures and sub-optimal drilling parameters.",
      solution: "Implemented ML-based predictive analytics platform analyzing real-time drilling data to optimize drilling parameters, predict equipment failures, and recommend preventive actions.",
      results: [
        "35% reduction in non-productive time",
        "20% improvement in rate of penetration",
        "$5M savings in drilling costs annually"
      ],
      icon: Award,
      gradient: "from-orange-500/20 to-red-500/20",
      badge: "Drilling Optimization"
    },
    {
      title: "Operational Excellence in Upstream Logistics Management",
      category: "Logistics & Operations",
      challenge: "Complex logistics operations with 200+ vehicles, multiple vendors, and inefficient resource allocation leading to delays and cost overruns.",
      solution: "Developed comprehensive logistics management platform (HVMS, LVMS, BMS) with real-time tracking, automated booking, predictive maintenance, and route optimization.",
      results: [
        "30% reduction in logistics costs",
        "50% improvement in vehicle utilization",
        "Real-time tracking of 200+ vehicles"
      ],
      icon: CheckCircle,
      gradient: "from-indigo-500/20 to-purple-500/20",
      badge: "Logistics Excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScaleIQHeader />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">CASE STUDIES</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Proven Impact Across <span className="text-[#255073]">Energy Operations</span>
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Real-world implementations delivering measurable results for major energy operators and service provider companies
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {priorityCaseStudies.map((caseStudy, index) => {
              const IconComponent = caseStudy.icon;
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${caseStudy.gradient} border-black/10 hover:border-[#255073]/30 transition-all duration-500 transform hover:-translate-y-2 p-8 h-full`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-[#255073]" />
                    </div>
                    <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 text-xs">
                      {caseStudy.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                        {caseStudy.title}
                      </h3>
                    </div>

                    {/* Challenge */}
                    <div>
                      <h4 className="text-sm font-bold text-[#255073] mb-2 uppercase tracking-wide">
                        Challenge
                      </h4>
                      <p className="text-black/70 text-sm leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-bold text-[#255073] mb-2 uppercase tracking-wide">
                        Solution
                      </h4>
                      <p className="text-black/70 text-sm leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-sm font-bold text-[#255073] mb-3 uppercase tracking-wide">
                        Results
                      </h4>
                      <div className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-[#255073] flex-shrink-0 mt-0.5" />
                            <span className="text-black/80 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-black/10">
                    <div className="text-xs text-black/60">
                      {caseStudy.category}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#255073]/10 via-[#255073]/5 to-[#255073]/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven methodologies can transform your energy operations
          </p>
          <button
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};