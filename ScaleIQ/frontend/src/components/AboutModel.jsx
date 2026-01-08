import React, { useState } from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { GoToTop } from './GoToTop';

export const AboutModel = () => {
  const [activeNode, setActiveNode] = useState(null);

  const modelNodes = [
    { id: 'expertise', label: 'Expertise Driven', angle: 90 },
    { id: 'ai', label: 'Pragmatic AI', angle: 162 },
    { id: 'fragmentation', label: 'Eliminate Data Fragmentation', angle: 234 },
    { id: 'solutions', label: 'Solutions Oriented', angle: 306 },
    { id: 'cohesive', label: 'One Cohesive System', angle: 18 }
  ];

  const handleNodeClick = (nodeId) => {
    setActiveNode(nodeId);
    const element = document.getElementById(`section-${nodeId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-scaleiq-black">
      <NewHeader />
      
      <style>{`
        /* FLOATING object - NO rotation */
        @keyframes float-gentle {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        
        /* Shimmer effect moving across surface */
        @keyframes shimmer-sweep {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        /* Gold rim lighting pulse */
        @keyframes rim-glow {
          0%, 100% { filter: drop-shadow(0 0 15px #DCBF62); }
          50% { filter: drop-shadow(0 0 30px #DCBF62); }
        }
        
        .floating-model {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        .shimmer-surface {
          background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 40%,
            rgba(220, 191, 98, 0.3) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 200%;
          animation: shimmer-sweep 4s linear infinite;
        }
        
        .rim-lighting {
          animation: rim-glow 4s ease-in-out infinite;
        }
        
        .node-interactive {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .node-interactive:hover {
          transform: scale(1.15) translateY(-5px);
          filter: drop-shadow(0 10px 25px rgba(220, 191, 98, 0.6));
        }
        
        .node-interactive.active {
          transform: scale(1.2);
        }
        
        .section-content {
          transition: all 0.5s ease-out;
          opacity: 0.6;
        }
        
        .section-content.active {
          opacity: 1;
          background: linear-gradient(135deg, rgba(220, 191, 98, 0.08) 0%, transparent 100%);
          border-left-color: #DCBF62;
          border-left-width: 4px;
        }
      `}</style>
      
      <div className="pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
          <div className="text-sm text-scaleiq-gold">About &gt; The ScaleIQ Model</div>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-scaleiq-white mb-8">
            The <span className="text-scaleiq-gold">ScaleIQ Model</span>
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold-dark mb-8"></div>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Technology investments often exist, talent is in place, and data is available - yet operational impact remains uneven because change is introduced in pieces rather than as a coherent system. The ScaleIQ Model addresses this by providing a unifying structure that connects digital initiatives to how transformation happens on the ground.
          </p>
        </section>

        {/* Interactive FLOATING Model - NO Rotation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="relative w-full" style={{ minHeight: '700px' }}>
            <div className="absolute left-1/2 top-1/2">
              {/* Central FLOATING Circle - 3D feel WITHOUT rotation */}
              <div 
                className="floating-model rim-lighting"
                style={{
                  width: '400px',
                  height: '400px',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Depth shadow */}
                <div className="absolute inset-0 bg-scaleiq-gold/5 rounded-full blur-3xl transform translate-y-4"></div>
                
                {/* Main golden object with shimmer */}
                <div className="absolute inset-0 shimmer-surface rounded-full border-4 border-scaleiq-gold/60" style={{
                  background: ''
                }}>
                  {/* Inner glow */}
                  {/* <div className="absolute inset-8 bg-gradient-to-br from-scaleiq-gold/20 to-transparent rounded-full"></div> */}
                  
                  {/* Concentric rings for depth */}
                  <svg width="400" height="400" className="absolute inset-0">
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      fill="none"
                      stroke="#c9c4b0ff"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="160"
                      fill="none"
                      stroke="#d4d0c3ff"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                  </svg>
              {/* Center Text */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="text-center">
              {/* Image */}
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-scaleiq-gold shadow-[0_0_15px_rgba(220,191,98,0.6)]">
                <img
                  src="/images/oilgas/hero.png"
                  alt="ScaleIQ"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-gray-400 text-sm mt-2">Model</div>
            </div>



                          </div>



                </div>
              </div>

              {/* Node Labels - GOLD on hover */}
              {modelNodes.map((node) => {
                const radius = 280;
                const x = Math.cos((node.angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((node.angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={node.id}
                    className={`node-interactive ${activeNode === node.id ? 'active' : ''}`}
                    onClick={() => handleNodeClick(node.id)}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Node Circle - GOLD active, NO blue */}
                      <div 
                        className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 transition-all ${
                          activeNode === node.id 
                            ? 'bg-scaleiq-gold shadow-lg shadow-scaleiq-gold/60' 
                            : 'bg-gray-900 border-2 border-scaleiq-gold/50'
                        }`}
                      >
                        <div className={`text-2xl font-bold ${
                          activeNode === node.id ? 'text-scaleiq-black' : 'text-scaleiq-gold'
                        }`}>
                          {node.id === 'expertise' && '1'}
                          {node.id === 'ai' && '2'}
                          {node.id === 'fragmentation' && '3'}
                          {node.id === 'solutions' && '4'}
                          {node.id === 'cohesive' && '5'}
                        </div>
                      </div>
                      
                      {/* Label */}
                      <div 
                        className={`text-center max-w-[160px] text-sm font-medium ${
                          activeNode === node.id ? 'text-scaleiq-gold' : 'text-gray-400'
                        }`}
                      >
                        {node.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Sections - GOLD borders, NO blue */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Expertise Driven */}
          <div 
            id="section-expertise"
            className={`section-content border-l-2 border-gray-700 pl-8 py-6 rounded-r-lg ${
              activeNode === 'expertise' ? 'active' : ''
            }`}
          >
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Expertise Driven</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              ScaleIQ engages deeply with oil and gas domain realities before proposing solutions. We work consultatively with engineering, operations, and business teams to understand constraints, decision logic, and risk-ensuring digital and AI initiatives are shaped true operational and human realities, not by abstract best practices.
            </p>
          </div>

          {/* Pragmatic AI */}
          <div 
            id="section-ai"
            className={`section-content border-l-2 border-gray-700 pl-8 py-6 rounded-r-lg ${
              activeNode === 'ai' ? 'active' : ''
            }`}
          >
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Unlock Measurable ROI from AI</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              In oil and gas, this means prioritizing AI use cases that are tightly linked to operational and commercial workflows. By aligning AI investments to specific performance levers, we help organizations move beyond experimentation toward improvements that can be measured, tracked, and sustained over time.
            </p>
          </div>

          {/* One Cohesive System */}
          <div 
            id="section-cohesive"
            className={`section-content border-l-2 border-gray-700 pl-8 py-6 rounded-r-lg ${
              activeNode === 'cohesive' ? 'active' : ''
            }`}
          >
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">One Cohesive System</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We bring an extensive set of technology capabilities and domain expertise together under a unified offering, ensuring data flows consistently, intelligence is applied in context and architecture can be defined organization-wide, not just at project level. This cohesion reduces complexity, improves reliability, and enables organizations to scale digital capabilities with confidence.
            </p>
          </div>

          {/* Eliminate Data Fragmentation */}
          <div 
            id="section-fragmentation"
            className={`section-content border-l-2 border-gray-700 pl-8 py-6 rounded-r-lg ${
              activeNode === 'fragmentation' ? 'active' : ''
            }`}
          >
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Eliminate Data Fragmentation</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We address data fragmentation by connecting siloed systems across upstream, midstream, and downstream environments. Our approach establishes coherent data flows, governance, and integration patterns that enable consistent access to trusted data across teams, systems, and use cases.
            </p>
          </div>

          {/* Solutions Oriented */}
          <div 
            id="section-solutions"
            className={`section-content border-l-2 border-gray-700 pl-8 py-6 rounded-r-lg ${
              activeNode === 'solutions' ? 'active' : ''
            }`}
          >
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Solutions Oriented</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              ScaleIQ is driven by outcomes, not offerings. We design and deliver solutions that cut across tools, platforms, and vendors—focusing on what needs to work end to end rather than optimizing individual components in isolation.
            </p>
          </div>
        </section>
      </div>

      <NewFooter />
      <GoToTop />
    </div>
  );
};
