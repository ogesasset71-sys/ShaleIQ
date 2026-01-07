import React from 'react';

export const NumericImpactSection = () => {
  const stats = [
    { 
      number: '700+', 
      label: 'Global Energy Experts',
      color: 'gold'
    },
    { 
      number: '250+', 
      label: 'Years of cumulative energy tech and leadership experience',
      color: 'white'
    },
    { 
      number: '20+', 
      label: 'Customers in the Fortune 500 energy companies',
      color: 'gold'
    },
    { 
      number: '50+', 
      label: 'Projects delivered in the energy space',
      color: 'white'
    },
  ];

  return (
    <section className="py-24 bg-scaleiq-black" data-testid="numeric-impact-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 border-2 border-scaleiq-gold/20 rounded-xl hover:border-scaleiq-gold hover:bg-scaleiq-gold/5 transition-all group"
              data-testid={`stat-card-${index}`}
            >
              <div className={`text-6xl font-bold mb-4 ${
                stat.color === 'gold' ? 'text-scaleiq-gold' : 'text-scaleiq-white'
              } group-hover:scale-110 transition-transform`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};