import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const PartnershipVisualization = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Energy companies with their ScaleIQ partnership percentages
  const energyCompanies = [
    {
      name: "ExxonMobil",
      partnershipLevel: 85,
      color: "#FF6B6B",
      sector: "Integrated Oil & Gas",
      projects: ["GCC Setup", "Digital Transformation", "R&D"],
      savings: "$120M annually"
    },
    {
      name: "Shell Global",
      partnershipLevel: 72,
      color: "#4ECDC4", 
      sector: "Integrated Oil & Gas",
      projects: ["Engineering Services", "Digital Solutions"],
      savings: "$95M annually"
    },
    {
      name: "Saudi Aramco",
      partnershipLevel: 68,
      color: "#45B7D1",
      sector: "National Oil Company",
      projects: ["GCC Operations", "Upstream Engineering"],
      savings: "$180M annually"
    },
    {
      name: "Chevron Corp",
      partnershipLevel: 61,
      color: "#96CEB4",
      sector: "Integrated Oil & Gas", 
      projects: ["Offshore Engineering", "AI Solutions"],
      savings: "$85M annually"
    },
    {
      name: "BP Energy",
      partnershipLevel: 54,
      color: "#FFEAA7",
      sector: "Integrated Oil & Gas",
      projects: ["Renewable Integration", "Digital Analytics"],
      savings: "$70M annually"
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;
    
    let rotation = 0;
    let pulseAnimation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate total for pie chart
      const total = energyCompanies.reduce((sum, company) => sum + company.partnershipLevel, 0);
      
      let startAngle = -Math.PI / 2; // Start from top
      
      // Draw 3D effect base (shadow)
      energyCompanies.forEach((company, index) => {
        const sliceAngle = (company.partnershipLevel / total) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;
        
        // 3D shadow effect
        ctx.beginPath();
        ctx.moveTo(centerX + 3, centerY + 8);
        ctx.arc(centerX + 3, centerY + 8, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();
        
        startAngle = endAngle;
      });

      // Reset for main pie chart
      startAngle = -Math.PI / 2 + rotation;
      
      // Draw main pie slices with animation
      energyCompanies.forEach((company, index) => {
        const sliceAngle = (company.partnershipLevel / total) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;
        const midAngle = (startAngle + endAngle) / 2;
        
        // Enhanced radius for selected company
        const currentRadius = selectedCompany === index ? 
          radius + 10 + Math.sin(pulseAnimation) * 5 : radius;
        
        // Draw slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, currentRadius, startAngle, endAngle);
        ctx.closePath();
        
        // Gradient fill for 3D effect
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, currentRadius);
        gradient.addColorStop(0, company.color);
        gradient.addColorStop(0.7, company.color);
        gradient.addColorStop(1, darkenColor(company.color, 0.3));
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Slice outline
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw percentage labels
        const labelRadius = currentRadius * 0.7;
        const labelX = centerX + Math.cos(midAngle) * labelRadius;
        const labelY = centerY + Math.sin(midAngle) * labelRadius;
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${company.partnershipLevel}%`, labelX, labelY);
        
        // Company name on outer edge
        const nameRadius = currentRadius + 25;
        const nameX = centerX + Math.cos(midAngle) * nameRadius;
        const nameY = centerY + Math.sin(midAngle) * nameRadius;
        
        ctx.fillStyle = '#333333';
        ctx.font = 'bold 12px system-ui';
        ctx.fillText(company.name, nameX, nameY);
        
        startAngle = endAngle;
      });
      
      // Central hub - ScaleIQ
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#255073';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // ScaleIQ logo/text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ScaleIQ', centerX, centerY);
      
      // Update animation values
      rotation += 0.005; // Slow rotation
      pulseAnimation += 0.1;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [selectedCompany]);

  // Utility function to darken colors for 3D effect
  const darkenColor = (color, amount) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, parseInt(hex.substr(0, 2), 16) * (1 - amount));
    const g = Math.max(0, parseInt(hex.substr(2, 2), 16) * (1 - amount));
    const b = Math.max(0, parseInt(hex.substr(4, 2), 16) * (1 - amount));
    return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">PARTNERSHIP ECOSYSTEM</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            ScaleIQ <span className="text-[#255073]">Partnership Portfolio</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Interactive visualization of our strategic partnerships with leading global energy companies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Partnership Pie Chart */}
          <div className="flex justify-center">
            <div className="relative">
              <canvas 
                ref={canvasRef}
                width="400"
                height="400"
                className="cursor-pointer"
                onMouseMove={(e) => {
                  const rect = e.target.getBoundingClientRect();
                  const x = e.clientX - rect.left - 200; // Center coordinates
                  const y = e.clientY - rect.top - 200;
                  const distance = Math.sqrt(x * x + y * y);
                  const angle = Math.atan2(y, x) + Math.PI / 2; // Adjust for top start
                  
                  if (distance < 120 && distance > 40) {
                    let normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;
                    const total = energyCompanies.reduce((sum, company) => sum + company.partnershipLevel, 0);
                    let currentAngle = 0;
                    
                    for (let i = 0; i < energyCompanies.length; i++) {
                      const sliceAngle = (energyCompanies[i].partnershipLevel / total) * 2 * Math.PI;
                      if (normalizedAngle >= currentAngle && normalizedAngle <= currentAngle + sliceAngle) {
                        setSelectedCompany(i);
                        break;
                      }
                      currentAngle += sliceAngle;
                    }
                  } else {
                    setSelectedCompany(null);
                  }
                }}
                onMouseLeave={() => setSelectedCompany(null)}
              />
            </div>
          </div>

          {/* Partnership Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              {energyCompanies.map((company, index) => (
                <Card 
                  key={index}
                  className={`p-4 transition-all duration-300 cursor-pointer ${
                    selectedCompany === index ? 
                    'border-[#255073] bg-[#255073]/5 transform scale-105' : 
                    'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedCompany(selectedCompany === index ? null : index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: company.color }}
                      />
                      <div>
                        <h4 className="font-bold text-black">{company.name}</h4>
                        <p className="text-sm text-black/60">{company.sector}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#255073]">{company.partnershipLevel}%</div>
                      <div className="text-sm text-black/60">Partnership Level</div>
                    </div>
                  </div>
                  
                  {selectedCompany === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-black">Active Projects: </span>
                          <span className="text-black/70">{company.projects.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium text-black">Cost Savings: </span>
                          <span className="text-[#255073] font-semibold">{company.savings}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="bg-[#255073]/10 p-6 rounded-lg">
              <h4 className="font-bold text-black mb-3">Partnership Metrics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-[#255073]">5</div>
                  <div className="text-black/70">Fortune 500 Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#255073]">$550M+</div>
                  <div className="text-black/70">Annual Savings Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#255073]">68%</div>
                  <div className="text-black/70">Average Partnership Level</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#255073]">15+</div>
                  <div className="text-black/70">Active Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};