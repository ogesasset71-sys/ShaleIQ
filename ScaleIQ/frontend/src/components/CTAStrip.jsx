import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const CTAStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#00FFD1]/10 via-[#00FFD1]/5 to-[#00FFD1]/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">👉</div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to expand your energy footprint in India?
              </h3>
              <p className="text-white/70">
                Start your risk-free GCC journey with ScaleIQ's proven engagement model
              </p>
            </div>
          </div>
          
          <Button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-none px-8 py-4 text-lg font-medium min-w-[250px] transition-all duration-300 transform hover:scale-105"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};