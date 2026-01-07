import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react';

export const InteractiveElements = () => {
  const [selectedScenario, setSelectedScenario] = useState('mid-size');

  const roiScenarios = {
    'small': {
      name: "Small Field Operators",
      currentCosts: 500000,
      projectedSavings: 0.25,
      implementationCost: 150000,
      timeline: 12
    },
    'mid-size': {
      name: "Mid-size Operators",
      currentCosts: 2000000,
      projectedSavings: 0.35,
      implementationCost: 400000,
      timeline: 18
    },
    'major': {
      name: "Large Operators",
      currentCosts: 10000000,
      projectedSavings: 0.45,
      implementationCost: 1500000,
      timeline: 24
    }
  };

  const currentScenario = roiScenarios[selectedScenario];
  const annualSavings = currentScenario.currentCosts * currentScenario.projectedSavings;
  const breakEvenMonths = Math.ceil(currentScenario.implementationCost / (annualSavings / 12));
  const threeYearROI = ((annualSavings * 3 - currentScenario.implementationCost) / currentScenario.implementationCost * 100);

  // ROI calculation logic

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">ROI CALCULATOR</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Calculate Your <span className="text-[#00FFD1]">Investment Returns</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the potential impact of our GCC setup services with our interactive ROI calculator tailored for energy companies.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-[#00FFD1]/10 to-transparent border-[#00FFD1]/20 p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Calculator className="h-8 w-8 text-[#00FFD1]" />
            <h3 className="text-2xl font-bold text-white">ROI Calculator for Infrastructure Modernization</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Select Company Size:
                </label>
                <Select value={selectedScenario} onValueChange={setSelectedScenario}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="small" className="text-white hover:bg-white/10">
                      Small Field Operators (&lt; $1M IT budget)
                    </SelectItem>
                    <SelectItem value="mid-size" className="text-white hover:bg-white/10">
                      Mid-size Operators ($1-5M IT budget)
                    </SelectItem>
                    <SelectItem value="major" className="text-white hover:bg-white/10">
                      Large Operators (&gt; $5M IT budget)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-white/70">Current Annual IT Costs:</span>
                  <span className="text-white font-semibold">
                    ${currentScenario.currentCosts.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-white/70">Expected Savings:</span>
                  <span className="text-[#00FFD1] font-semibold">
                    {(currentScenario.projectedSavings * 100)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-white/70">Implementation Investment:</span>
                  <span className="text-white font-semibold">
                    ${currentScenario.implementationCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#00FFD1]/20 to-transparent rounded-xl border border-[#00FFD1]/30">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <TrendingUp className="h-6 w-6 text-[#00FFD1]" />
                  <span className="text-lg font-medium text-white">Annual Savings</span>
                </div>
                <div className="text-3xl font-bold text-[#00FFD1] mb-2">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-sm text-white/70">per year</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-xl font-bold text-white mb-1">{breakEvenMonths} months</div>
                  <div className="text-sm text-white/70">Break-even Point</div>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-xl font-bold text-[#00FFD1] mb-1">{threeYearROI.toFixed(0)}%</div>
                  <div className="text-sm text-white/70">3-Year ROI</div>
                </div>
              </div>

              <Button 
                className="w-full bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-none min-h-[56px] text-lg font-medium"
                onClick={() => window.location.href = '/#contact'}
              >
                Get Detailed ROI Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};