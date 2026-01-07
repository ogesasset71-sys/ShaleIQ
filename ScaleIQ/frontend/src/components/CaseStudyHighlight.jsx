import React from 'react';

export const CaseStudyHighlight = () => {
  return (
    <section className="py-24 bg-gray-50" data-testid="case-study-highlight">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-scaleiq-gold/10 text-scaleiq-gold text-sm font-medium rounded-full mb-6">
              Case Study
            </div>
            
            <h3 className="text-4xl font-bold text-scaleiq-black mb-6">
              Subsurface Prospecting
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Subsurface data is scattered across seismic, logs, drilling, cores, and simulations, making full-field interpretation slow and inconsistent. Complex geology and limited data integration lead to uncertainty in reservoir mapping and higher exploration risk.
            </p>
            
            <button className="px-6 py-3 bg-scaleiq-black text-scaleiq-white hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all" data-testid="case-study-btn">
              Read Case Study
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-video bg-gradient-to-br from-scaleiq-black to-gray-800 rounded-2xl flex items-center justify-center border-4 border-scaleiq-gold/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-scaleiq-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-scaleiq-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Data Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};