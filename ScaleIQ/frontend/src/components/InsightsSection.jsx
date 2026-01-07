import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FileText, Clock, ArrowRight, Info, Brain, Truck } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const InsightsSection = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      const response = await axios.post(`${API}/newsletter`, {
        email: newsletterEmail
      });
      
      if (response.status === 200 || response.status === 201) {
        toast.success("Successfully subscribed to our newsletter!");
        setNewsletterEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error("There was an error subscribing. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <section id="insights" className="py-24 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">INSIGHTS & RESOURCES</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Industry <span className="text-[#00FFD1]">Intelligence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Access cutting-edge research, case studies, and thought leadership content 
            on upstream digital transformation and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Digital Strategy */}
          <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 text-xs">
                  Digital Strategy
                </Badge>
                <div className="flex items-center space-x-1 text-white/50 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>12 min</span>
                </div>
              </div>

              <div className="w-12 h-12 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <Info className="h-6 w-6 text-[#00FFD1]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-[#00FFD1] transition-colors">
                Command and Control Centre for Upstream Top Management
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Comprehensive executive dashboard providing real-time insights into upstream operations, enabling data-driven decision making at the C-level.
              </p>

              <Badge variant="outline" className="border-white/20 text-white/60 text-xs mb-6">
                Executive Brief
              </Badge>

              <Button
                variant="ghost"
                className="w-full justify-between text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] transition-all group/btn p-0 h-auto"
                onClick={() => window.location.href = '/#contact'}
              >
                <div className="flex items-center space-x-2 py-3">
                  <Info className="h-4 w-4" />
                  <span className="font-medium">Know More</span>
                </div>
                <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Card 2: Drilling Optimization */}
          <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 text-xs">
                  Drilling Intelligence
                </Badge>
                <div className="flex items-center space-x-1 text-white/50 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>20 min</span>
                </div>
              </div>

              <div className="w-12 h-12 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <Brain className="h-6 w-6 text-[#00FFD1]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-[#00FFD1] transition-colors">
                Drilling Optimization with Predictive Analytics
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Advanced ROP optimization, stuck pipe prevention, and kick prediction event models using real-time drilling data and machine learning algorithms for enhanced drilling performance.
              </p>

              <Badge variant="outline" className="border-white/20 text-white/60 text-xs mb-6">
                Drilling Intelligence
              </Badge>

              <Button
                variant="ghost"
                className="w-full justify-between text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] transition-all group/btn p-0 h-auto"
                onClick={() => window.location.href = '/#contact'}
              >
                <div className="flex items-center space-x-2 py-3">
                  <Brain className="h-4 w-4" />
                  <span className="font-medium">Know More</span>
                </div>
                <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Card 3: Operational Excellence */}
          <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10 text-xs">
                  Operational Excellence
                </Badge>
                <div className="flex items-center space-x-1 text-white/50 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>25 min</span>
                </div>
              </div>

              <div className="w-12 h-12 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                <Truck className="h-6 w-6 text-[#00FFD1]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-[#00FFD1] transition-colors">
                Operational Excellence in Upstream Logistics Management
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                End-to-end implementation producing 33% cost savings in first year of operations through optimized logistics, supply chain automation, and predictive maintenance strategies.
              </p>

              <Badge variant="outline" className="border-white/20 text-white/60 text-xs mb-6">
                Implementation Guide
              </Badge>

              <Button
                variant="ghost"
                className="w-full justify-between text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] transition-all group/btn p-0 h-auto"
                onClick={() => window.location.href = '/#contact'}
              >
                <div className="flex items-center space-x-2 py-3">
                  <Truck className="h-4 w-4" />
                  <span className="font-medium">Know More</span>
                </div>
                <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-[#00FFD1]/10 via-transparent to-[#00FFD1]/10 border-[#00FFD1]/20 p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our monthly insights newsletter for the latest trends in upstream 
              digital transformation, AI/ML applications, and cloud adoption strategies.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isSubscribing && newsletterEmail.trim()) {
                    handleNewsletterSubmit(e);
                  }
                }}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-[#00FFD1] transition-colors"
                required
              />
              <Button 
                type="submit"
                disabled={isSubscribing}
                className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-none px-8 py-3 font-medium"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            <p className="text-white/50 text-sm mt-4">
              Join 5,000+ energy executives receiving our insights. Unsubscribe anytime.
            </p>
          </div>
        </Card>

        {/* Enterprise-Grade Connectors */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Enterprise-Grade Connectors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-[#00FFD1] font-bold text-sm">SAP</span>
              </div>
              <div className="text-white/70 text-sm">HANA / BW</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-[#00FFD1] font-bold text-sm">WITSML</span>
              </div>
              <div className="text-white/70 text-sm">Data Exchange</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-[#00FFD1] font-bold text-sm">SCADA</span>
              </div>
              <div className="text-white/70 text-sm">Historian</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-[#00FFD1] font-bold text-sm">SIM</span>
              </div>
              <div className="text-white/70 text-sm">Reservoir I/O</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};