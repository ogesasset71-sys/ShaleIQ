import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LeadershipQuoteSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-scaleiq-white" data-testid="leadership-quote-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-scaleiq-gold/10 text-scaleiq-gold text-sm font-medium rounded-full mb-6">
            Leadership
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-scaleiq-black mb-8">
            Driven By Global Leaders in Energy and Infra Tech
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            The hardest problems in energy are not building technology, but integrating it into live, regulated, and interdependent systems. It demands leadership capable of balancing innovation with operational risk, regulatory constraint, and system continuity at scale.
          </p>
          
          <div className="h-px bg-scaleiq-gold/30 my-8"></div>
          
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Founded and led by industry veterans in the energy technology space, the ScaleIQ team brings a long-term view on meaningfully transforming mission-critical environments - where decisions made today must deliver value and resilience for decades to come.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/about/leadership')}
            className="px-8 py-4 border-2 border-scaleiq-black text-scaleiq-black hover:bg-scaleiq-black hover:text-scaleiq-white font-medium rounded-lg transition-all"
            data-testid="more-about-us-btn"
          >
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};