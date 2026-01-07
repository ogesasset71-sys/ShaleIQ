import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Greenfield Energy GCC Setup',
      description: 'A global energy company planned a GCC in India to support digital engineering programs. Without a clearly defined operating model there was a risk of slow ramp-up and limited ability to take on high-value work from the outset.'
    },
    {
      title: 'Application Modernization for Live Operations',
      description: 'Production and planning had evolved into tightly coupled legacy systems. Adoption was slow, changes carried operational risk, and the lack of structured lifecycle management constrained scalability and reliability across applications.'
    },
    {
      title: 'Data Integration Across Asset Operations',
      description: 'Operational and engineering data was spread across historians, enterprise systems, and bespoke applications. Limited integration and inconsistent data quality made cross-asset visibility difficult and slowed analytics and AI adoption.'
    },
    {
      title: 'Staffing for High-Value Digital Programs',
      description: 'Rapid team expansion led to uneven delivery quality and high dependency on onshore teams. Limited access to domain-aligned technologists constrained ownership of complex digital and engineering work.'
    },
    {
      title: 'Domain-Driven AI in Operations',
      description: 'AI initiatives struggled to move beyond pilots due to limited domain context and poor integration with operational workflows. Models operated in isolation, reducing trust and limiting their impact on day-to-day decision-making.'
    }
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">News & Insights &gt; Case Studies</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Case Studies
          </h1>
          <p className="text-xl text-gray-700">
            Real-world examples of how ScaleIQ delivers digital transformation in complex energy environments.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-scaleiq-gold transition-all cursor-pointer group">
                <h3 className="text-2xl font-bold text-scaleiq-black mb-4 group-hover:text-scaleiq-gold transition-colors">{study.title}</h3>
                <p className="text-gray-700 mb-4">{study.description}</p>
                <button className="text-scaleiq-black group-hover:text-scaleiq-gold font-medium transition-colors">Read</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};