import React, { useState } from 'react';
import { Card } from './ui/card';
import { CheckCircle, Layers, Database, Zap, Settings, BarChart3, Wrench, Mountain } from 'lucide-react';

export const CoreUpstreamServices = () => {
  const [activeTab, setActiveTab] = useState('geoscience');

  // Sideways tab layout exactly like scaleiq.co.in
  const domains = {
    geoscience: {
      title: "Geoscience & Geophysics",
      description: "Comprehensive subsurface analysis and geological modeling for exploration and field development",
      services: [
        "2D/3D Seismic Interpretation and Processing",
        "Geological and Structural Modeling", 
        "Seismic Attributes Analysis and AVO Studies",
        "Prospect Generation and Play-based Exploration",
        "Fault and Horizon Mapping with Uncertainty Analysis",
        "Velocity Modeling and Depth Conversion"
      ]
    },
    reservoir: {
      title: "Reservoir Engineering", 
      description: "Advanced reservoir modeling and simulation services for optimized production strategies",
      services: [
        "Static and Dynamic Reservoir Modeling",
        "Reservoir Simulation and History Matching",
        "Production Forecasting and Decline Analysis",
        "Enhanced Oil Recovery (EOR) Design and Implementation",
        "Material Balance Studies and Drive Mechanism Analysis",
        "Field Development Planning and Economic Evaluation"
      ]
    },
    drilling: {
      title: "Drilling Engineering",
      description: "Drilling optimization and well design services for safe and efficient operations",
      services: [
        "Well Trajectory Design and Optimization",
        "Casing and Completion Design",
        "Drilling Fluids Engineering and Selection",
        "Real-time Drilling Operations Support",
        "Drilling Performance Analysis and NPT Reduction",
        "Wellbore Stability and Geomechanics Analysis"
      ]
    },
    production: {
      title: "Production Engineering",
      description: "Production optimization and artificial lift design for maximum hydrocarbon recovery",
      services: [
        "Production System Design and Nodal Analysis",
        "Artificial Lift System Design (ESP, Gas Lift, SRP)",
        "Well Performance Analysis and Optimization",
        "Flow Assurance and Pipeline Design",
        "Production Enhancement and Stimulation Design",
        "Well Testing and Pressure Transient Analysis"
      ]
    },
    facilities: {
      title: "Facilities Engineering",
      description: "Surface facilities design and process engineering for upstream operations",
      services: [
        "Process Design and Equipment Sizing",
        "Facilities Layout and Plot Plan Development",
        "Pipeline Design and Flow Assurance Analysis",
        "Control Systems and Automation Design",
        "Environmental and Safety Systems Integration",
        "Brownfield Modifications and Tie-in Studies"
      ]
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">SPECIALIZED UPSTREAM ENGINEERING EXPERTISE</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Comprehensive <span className="text-[#255073]">Upstream Expertise</span>
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Full-spectrum upstream engineering services covering the entire value chain from exploration to production
          </p>
        </div>

        {/* Sideways Tab Layout - Exact copy from scaleiq.co.in */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Navigation Tabs */}
          <div className="lg:w-1/3">
            <div className="space-y-2 sticky top-8">
              {Object.entries(domains).map(([key, domain]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-[#255073] text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-black hover:border-[#255073]/50 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold text-base mb-1">{domain.title}</div>
                  <div className={`text-sm ${activeTab === key ? 'text-white/80' : 'text-gray-600'}`}>
                    {domain.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Content Area */}
          <div className="lg:w-2/3">
            <Card className="bg-white border-gray-200 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {domains[activeTab].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {domains[activeTab].description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black mb-4">Key Services & Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {domains[activeTab].services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#255073] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};