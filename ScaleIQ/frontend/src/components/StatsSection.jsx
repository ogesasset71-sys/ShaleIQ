import React from 'react';

export const StatsSection = () => {
  const stats = [
    { number: '700+', label: 'Global Energy Experts' },
    { number: '250+', label: 'Years of cumulative energy tech and leadership experience' },
    { number: '20+', label: 'Customers in the Fortune 500 energy companies' },
    { number: '50+', label: 'Projects delivered in the energy space' },
  ];

  return (
    <section className="py-20 bg-scaleiq-black" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-5xl font-bold text-scaleiq-gold mb-4">{stat.number}</div>
              <div className="text-scaleiq-white text-sm leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};