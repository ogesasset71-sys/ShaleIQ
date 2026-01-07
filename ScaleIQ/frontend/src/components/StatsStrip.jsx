import React from 'react';
import { Users, Clock, Rocket, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    value: '700+',
    label: 'Global Energy Experts',
    icon: Users,
  },
  {
    id: 2,
    value: '250+',
    label: 'Years of Experience',
    subLabel: 'Cumulative Energy Tech & Leadership',
    icon: Clock,
  },
  {
    id: 3,
    value: '50+',
    label: 'Projects Delivered',
    subLabel: 'in the Energy Space',
    icon: Rocket,
  },
  {
    id: 4,
    value: '20+',
    label: 'Fortune 500 Customers',
    subLabel: 'Energy Companies',
    icon: Building2,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const StatsStrip = () => {
  return (
    <section className="bg-black py-12 border-b border-white/10" data-testid="stats-strip">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-between"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              variants={item}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-scaleiq-gold/50 transition-colors">
                <stat.icon className="w-8 h-8 text-scaleiq-gold" />
              </div>
              <div className="text-4xl font-bold text-scaleiq-gold mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium text-lg leading-tight">
                {stat.label}
              </div>
              {stat.subLabel && (
                <div className="text-gray-400 text-sm mt-1">
                  {stat.subLabel}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
