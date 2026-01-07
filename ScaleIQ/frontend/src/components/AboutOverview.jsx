import React, { useEffect, useRef } from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { GoToTop } from './GoToTop';
import { useNavigate } from 'react-router-dom';

export const AboutOverview = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-scaleiq-black">
      <NewHeader />
      
      <style>{`
        .section-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card-premium {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-premium:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(220, 191, 98, 0.3);
        }
        
        .gold-underline {
          position: relative;
        }
        
        .gold-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #DCBF62, #B89A3C);
          transition: width 0.5s ease-out;
        }
        
        .gold-underline:hover::after {
          width: 100%;
        }
        
        .image-parallax {
          overflow: hidden;
        }
        
        .image-parallax > * {
          transition: transform 0.6s ease-out;
        }
        
        .image-parallax:hover > * {
          transform: scale(1.08);
        }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
      `}</style>
      
      <div className="pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
          <div className="text-sm text-scaleiq-gold">About &gt; Overview</div>
        </div>

        {/* Hero Section - BLACK with GOLD */}
        <section 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="section-animate max-w-6xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="card-premium bg-scaleiq-black border-2 border-scaleiq-gold/20 rounded-2xl p-12 shadow-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-scaleiq-white mb-8">
              Transformation Oriented, <span className="text-scaleiq-gold gold-underline inline-block">Grounded in Expertise</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold-dark mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We work across the entire digital spectrum – from legacy systems and brownfield infrastructure to modern data platforms and AI-driven applications – ensuring technology integrates seamlessly into live, regulated, and safety-critical operations
              </p>
              
              <p>
                Our approach is informed by deep domain knowledge across upstream, midstream, and downstream environments, enabling solutions that account for operational continuity, regulatory compliance, asset lifecycles, and scale.
              </p>
              
              <p className="text-scaleiq-gold font-medium text-xl">
                The result is digital engineering that delivers resilient, system-level outcomes that perform in real-world oil and gas conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Premium Cards */}
        <section 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="section-animate max-w-6xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium stagger-1 bg-gradient-to-br from-scaleiq-black via-gray-900 to-scaleiq-black border-2 border-scaleiq-gold/30 rounded-xl p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-scaleiq-gold/10 border-2 border-scaleiq-gold rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-scaleiq-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-scaleiq-gold">Our Vision</h2>
              </div>
              <div className="h-px bg-gradient-to-r from-scaleiq-gold to-transparent mb-6"></div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become the trusted digital engineering partner to the world's leading energy companies in their transformation journey.
              </p>
            </div>
            
            <div className="card-premium stagger-2 bg-gradient-to-br from-scaleiq-black via-gray-900 to-scaleiq-black border-2 border-scaleiq-gold/30 rounded-xl p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-scaleiq-gold/10 border-2 border-scaleiq-gold rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-scaleiq-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-scaleiq-gold">Our Mission</h2>
              </div>
              <div className="h-px bg-gradient-to-r from-scaleiq-gold to-transparent mb-6"></div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To solve the real barriers to technology adoption and transformation in the energy sector – through an end-to-end approach to solving complex workflow challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section - Interactive */}
        <section 
          ref={(el) => (sectionsRef.current[2] = el)}
          className="section-animate max-w-6xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="card-premium image-parallax bg-scaleiq-black rounded-2xl overflow-hidden border-4 border-scaleiq-gold/40 shadow-2xl">
            <div className="aspect-video flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-scaleiq-black via-gray-900 to-scaleiq-black"></div>
              <div className="absolute inset-0 bg-scaleiq-gold/0 group-hover:bg-scaleiq-gold/10 transition-all duration-700"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-scaleiq-gold/20 border-4 border-scaleiq-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-scaleiq-gold/30 transition-all duration-500">
                  <svg className="w-12 h-12 text-scaleiq-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="text-scaleiq-gold text-lg font-medium mb-4">
                  Digital Supply Networks Transforming Operations for Oil and Gas
                </div>
                <div className="text-scaleiq-white text-6xl font-bold">1:59</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section - BLACK Premium Card */}
        <section 
          ref={(el) => (sectionsRef.current[3] = el)}
          className="section-animate max-w-6xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="card-premium bg-gradient-to-br from-scaleiq-black to-gray-900 border-2 border-scaleiq-gold/20 rounded-2xl p-12 shadow-2xl">
            <div className="border-l-4 border-scaleiq-gold pl-8 mb-8">
              <h2 className="text-4xl font-bold text-scaleiq-white mb-4">
                Solutions Designed Precisely for the <span className="text-scaleiq-gold">Oil & Gas Industry</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold-dark"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Oil and gas operations span a uniquely broad and interconnected landscape. Each segment operates under distinct technical, operational, and regulatory constraints, yet remains tightly coupled through shared assets, data flows, and commercial dependencies. Digital and AI solutions must therefore function across heterogeneous environments that include field operations, control systems, engineering workflows, enterprise platforms, and customer-facing systems.
              </p>
              
              <div className="p-6 bg-scaleiq-gold/5 border-l-4 border-scaleiq-gold rounded-lg">
                <p className="font-semibold text-scaleiq-gold text-xl">
                  ScaleIQ solves the industry's biggest bottleneck by bridging fragmented tools, fragmented data and highly complex use cases.
                </p>
              </div>
              
              <p>
                Traditional IT service providers and product companies tend to fragment responsibility across tools, vendors, and handoffs – leaving gaps between domain intent, system behavior, and operational outcomes. ScaleIQ is focused on addressing this gap through an end-to-end, consultative approach grounded in deep oil and gas domain expertise. We work across problem definition, digital architecture, AI workflow design, and system integration – ensuring solutions are shaped by how users align and adopt.
              </p>
              
              <div className="p-6 bg-scaleiq-gold/5 border-l-4 border-scaleiq-gold rounded-lg">
                <p className="font-semibold text-scaleiq-gold text-xl">
                  Our strength lies in treating digital and AI as integral components of the operational ecosystem of oil and gas companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Workflows - Premium BLACK Card */}
        <section 
          ref={(el) => (sectionsRef.current[4] = el)}
          className="section-animate max-w-6xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="card-premium bg-gradient-to-br from-gray-900 to-scaleiq-black border-2 border-scaleiq-gold/20 rounded-2xl p-12 shadow-2xl">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Core workflows such as subsurface interpretation, drilling and production optimization, pipeline integrity management and refinery operations strongly depend on domain judgment, safety constraints, regulatory compliance and complex datasets. Digital and AI solutions need to account for operational context, edge cases, and the human-in-the-loop processes that govern real outcomes.
              </p>
              
              <p>
                By treating digital and AI as integral components of interconnected operating systems – across upstream, midstream, distribution and retail – ScaleIQ helps organizations move beyond fragmented initiatives toward intelligent operations that are resilient, trusted and capable of delivering sustained value at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Data Integration Section - BLACK Card */}
        <section 
          ref={(el) => (sectionsRef.current[5] = el)}
          className="section-animate max-w-6xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="card-premium bg-gradient-to-br from-scaleiq-black to-gray-900 border-2 border-scaleiq-gold/20 rounded-2xl p-12 shadow-2xl">
            <div className="border-l-4 border-scaleiq-gold pl-8 mb-8">
              <h2 className="text-3xl font-bold text-scaleiq-white mb-4">
                Our data integration capabilities and platform offerings address the <span className="text-scaleiq-gold">fragmented and self-managed data landscapes</span> common in oil and gas.
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold-dark"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Despite years of digital investment, data integration remains largely self-managed by operators, creating hidden complexity, operational risk, and inconsistent data availability across the value chain.
              </p>
              
              <p>
                Our approach combines deep domain understanding with system-level architecture, enabling scalable integration, improved data quality, and governance aligned with industry standards such as OSDU. The result is a trusted, interoperable data environment that reduces integration burden, improves data usability, and enables reliable decision-making across the oil and gas value chain.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section - Premium BLACK */}
        <section 
          ref={(el) => (sectionsRef.current[6] = el)}
          className="section-animate max-w-5xl mx-auto px-6 lg:px-8 mb-20"
        >
          <div className="card-premium bg-gradient-to-br from-gray-900 via-scaleiq-black to-gray-900 border-2 border-scaleiq-gold/40 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-scaleiq-gold to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-scaleiq-gold to-transparent"></div>
            
            <div className="mb-8">
              <svg className="w-16 h-16 text-scaleiq-gold mx-auto opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <p className="text-2xl text-scaleiq-white leading-relaxed mb-8 italic">
              ScaleIQ brought a level of domain understanding we don't usually see in digital partners. They didn't start with tools or platforms - they started with how our operations actually work and designed from there.
            </p>
            
            <div className="inline-block px-6 py-2 bg-scaleiq-gold/10 border-2 border-scaleiq-gold/40 rounded-full">
              <div className="text-scaleiq-gold font-medium">
                VP, Digital Transformation, Integrated Energy Company
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Premium Interactive */}
        <section 
          ref={(el) => (sectionsRef.current[7] = el)}
          className="section-animate max-w-4xl mx-auto px-6 lg:px-8"
        >
          <div className="card-premium bg-gradient-to-br from-gray-900 to-scaleiq-black border-2 border-scaleiq-gold/40 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-scaleiq-white mb-6">
              Rethink Your <span className="text-scaleiq-gold">Digital Roadmap</span>
            </h2>
            
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-scaleiq-gold to-transparent mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              For energy and infrastructure companies considering how to shape their digital transformation roadmap, we invite a thoughtful and confidential discussion.
            </p>
            
            <button 
              onClick={() => navigate('/contact')}
              className="group relative px-12 py-5 bg-transparent border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-scaleiq-gold/50"
            >
              <span className="relative z-10">Start a Conversation</span>
            </button>
          </div>
        </section>
      </div>

      <NewFooter />
      <GoToTop />
    </div>
  );
};
