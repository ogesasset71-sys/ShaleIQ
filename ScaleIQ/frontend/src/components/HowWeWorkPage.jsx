import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">How We Work</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            How We Work
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Content coming soon.
          </p>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};