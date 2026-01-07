import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Target, Globe2, DollarSign } from 'lucide-react';

export const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">MARKET OPPORTUNITY</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Capturing the <span className="text-[#00FFD1]">$40B+ ER&D Market</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            ScaleIQ is poised to capture a significant share of the expanding Engineering R&D, 
            Digital Transformation, and AI market in the global energy sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Market Size Cards */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-[#00FFD1]/10 to-transparent border-[#00FFD1]/20 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center">
                  <Globe2 className="h-8 w-8 text-[#00FFD1]" />
                </div>
                <div>
                  <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 mb-2">
                    Global TAM
                  </Badge>
                  <h3 className="text-3xl font-bold text-[#00FFD1]">$35-40B+</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">Total Addressable Market</strong> in ER&D, Digital Transformation, 
                and AI across the global energy industry, representing massive growth potential.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#00FFD1]" />
                </div>
                <div>
                  <Badge variant="outline" className="border-white/30 text-white/70 mb-2">
                    Regional SAM
                  </Badge>
                  <h3 className="text-3xl font-bold text-[#00FFD1]">$8-10B</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">Serviceable Available Market</strong> in India, Middle East, 
                and U.S. markets where we have strategic presence and competitive advantages.
              </p>
            </Card>
          </div>

          {/* Growth Strategy */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Strategic Growth Plan</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-[#00FFD1] font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Market Penetration</h4>
                  <p className="text-white/70 leading-relaxed">
                    Establish strong foothold in high-growth upstream markets through strategic partnerships 
                    and proven delivery excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-[#00FFD1] font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technology Leadership</h4>
                  <p className="text-white/70 leading-relaxed">
                    Lead with AI-first ER&D capabilities and proprietary IP development to differentiate 
                    from traditional service providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-[#00FFD1] font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Revenue Target</h4>
                  <p className="text-white/70 leading-relaxed">
                    Ambitious 5-year revenue target of <strong className="text-[#00FFD1]">$100M</strong> through 
                    strategic focus on key geographies and cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Growth Drivers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-[#00FFD1]" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Energy Transition</h4>
            <p className="text-white/70 text-sm">Accelerating demand for digital solutions in renewable integration</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[#00FFD1] font-bold text-lg">AI</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AI Adoption</h4>
            <p className="text-white/70 text-sm">Growing investment in predictive analytics and automation</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe2 className="h-8 w-8 text-[#00FFD1]" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Global Expansion</h4>
            <p className="text-white/70 text-sm">Increasing international upstream operations and partnerships</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-[#00FFD1]" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Cost Optimization</h4>
            <p className="text-white/70 text-sm">Focus on operational efficiency and reduced capital expenditure</p>
          </div>
        </div>
      </div>
    </section>
  );
};