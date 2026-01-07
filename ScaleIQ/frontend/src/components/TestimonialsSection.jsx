import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">CLIENT SUCCESS</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-[#255073]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See what energy executives say about our transformative solutions and the measurable 
            impact on their upstream operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mockData.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gradient-to-br from-white/5 to-transparent border-white/10 hover:border-[#255073]/30 transition-all duration-500 transform hover:-translate-y-2 p-8 group"
            >
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#255073]/20 rounded-full flex items-center justify-center group-hover:bg-[#255073]/30 transition-colors">
                  <Quote className="h-6 w-6 text-[#255073]" />
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6 justify-end">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-[#255073] fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#255073]/20 to-transparent rounded-full flex items-center justify-center">
                    <span className="text-[#255073] font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-[#255073] text-sm">{testimonial.position}</div>
                    <div className="text-white/60 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Case Studies Preview */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Case Studies</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Real-world transformations that demonstrate the tangible value of our upstream-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockData.caseStudies.map((study) => (
            <Card
              key={study.id}
              className="bg-gradient-to-br from-gray-900/50 to-black border-white/10 hover:border-[#255073]/30 transition-all duration-500 p-8 group"
            >
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <Badge variant="outline" className="border-[#255073]/50 text-[#255073] bg-[#255073]/10 mb-4">
                    {study.industry}
                  </Badge>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#255073] transition-colors">
                    {study.title}
                  </h4>
                </div>

                {/* Challenge */}
                <div>
                  <h5 className="text-sm font-semibold text-white/80 mb-2">Challenge:</h5>
                  <p className="text-white/70 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h5 className="text-sm font-semibold text-white/80 mb-2">Solution:</h5>
                  <p className="text-white/70 text-sm leading-relaxed">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h5 className="text-sm font-semibold text-white/80 mb-3">Results:</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {study.id === 1 && (
                      <>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 text-sm">ROI Achievement:</span>
                          <span className="text-[#255073] font-semibold">{study.results.costReduction}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 text-sm">Capabilities Built:</span>
                          <span className="text-[#255073] font-semibold">{study.results.performanceGain}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 text-sm">Timeline:</span>
                          <span className="text-[#255073] font-semibold">{study.results.roiTimeline}</span>
                        </div>
                      </>
                    )}
                    {study.id === 2 && (
                      <>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 text-sm">Extra Reserves:</span>
                          <span className="text-[#255073] font-semibold">{study.results.reservesIdentified}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 text-sm">Production Increase:</span>
                          <span className="text-[#255073] font-semibold">{study.results.productionIncrease}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 text-sm">Implementation Timeline:</span>
                          <span className="text-[#255073] font-semibold">{study.results.roiTimeline}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-semibold text-white/80 mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-white/20 text-white/70 text-xs bg-white/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};