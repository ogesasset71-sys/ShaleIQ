import React from 'react';

export const CorePrinciplesSection = () => {
  const principles = [
    {
      title: 'Domain Before Technology',
      description: 'In the energy sector, technology decisions are rarely isolated – they directly impact safety, uptime, and asset performance over decades. Making the right choices requires a combination of factors, not just technical capability.'
    },
    {
      title: 'Pragmatic Leverage of AI',
      description: 'Applying AI thoughtfully in energy operations, accounting for domain expertise, operational constraints, and human-in-the-loop processes that drive real outcomes.'
    },
    {
      title: 'Solutions Focused Approach',
      description: 'We design and deliver end-to-end solutions that address complex workflows, not just isolated tools – ensuring technology integrates seamlessly into live operations.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" data-testid="core-principles-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="relative p-10 bg-scaleiq-white border-l-4 border-scaleiq-gold rounded-lg shadow-sm hover:shadow-xl transition-all group"
              data-testid={`principle-card-${index}`}
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-scaleiq-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-scaleiq-gold">{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-scaleiq-black mb-4 pr-14">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};