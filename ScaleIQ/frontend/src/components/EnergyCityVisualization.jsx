import React, { useEffect, useRef, useState } from 'react';

export const EnergyCityVisualization = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredTower, setHoveredTower] = useState(null);
  const [selectedTower, setSelectedTower] = useState(null);

  // All buildings at same radius (262) - evenly distributed
  const energyCompanies = [
    {
      id: 1,
      name: "GlobalTech Energy",
      partnership: 85,
      height: 112,
      x: 262,
      z: 0,
      color: "#FF6B6B",
      buildingType: "headquarters",
      services: ["GCC Setup", "Engineering", "Digital", "R&D"],
      employees: "35,000+",
      revenue: "$18.5B"
    },
    {
      id: 2,
      name: "PetroTech Solutions",
      partnership: 78,
      height: 100,
      x: 201,
      z: 168,
      color: "#4ECDC4",
      buildingType: "corporate",
      services: ["Engineering", "Digital Solutions", "Upstream"],
      employees: "28,500+",
      revenue: "$14.2B"
    },
    {
      id: 3,
      name: "Offshore Dynamics",
      partnership: 72,
      height: 92,
      x: 46,
      z: 258,
      color: "#45B7D1",
      buildingType: "operations",
      services: ["GCC Operations", "Offshore Engineering"],
      employees: "22,000+",
      revenue: "$11.8B"
    },
    {
      id: 4,
      name: "Energy Innovations",
      partnership: 68,
      height: 84,
      x: -131,
      z: 227,
      color: "#96CEB4",
      buildingType: "research",
      services: ["R&D", "AI Solutions", "Innovation Hub"],
      employees: "18,200+",
      revenue: "$8.5B"
    },
    {
      id: 5,
      name: "Renewable Horizon",
      partnership: 65,
      height: 84,
      x: -246,
      z: 90,
      color: "#FFEAA7",
      buildingType: "sustainable",
      services: ["Renewable Energy", "Sustainability"],
      employees: "15,800+",
      revenue: "$7.2B"
    },
    {
      id: 6,
      name: "DeepSea Petroleum",
      partnership: 61,
      height: 76,
      x: -246,
      z: -90,
      color: "#9B59B6",
      buildingType: "industrial",
      services: ["Deep Water", "Drilling Technology"],
      employees: "12,500+",
      revenue: "$6.8B"
    },
    {
      id: 7,
      name: "Arctic Oil Corp",
      partnership: 58,
      height: 68,
      x: -131,
      z: -227,
      color: "#E67E22",
      buildingType: "exploration",
      services: ["Arctic Operations", "Exploration"],
      employees: "9,800+",
      revenue: "$5.4B"
    },
    {
      id: 8,
      name: "Smart Grid Systems",
      partnership: 55,
      height: 60,
      x: 46,
      z: -258,
      color: "#1ABC9C",
      buildingType: "technology",
      services: ["Smart Grid", "Digital Infrastructure"],
      employees: "8,200+",
      revenue: "$4.1B"
    },
    {
      id: 9,
      name: "Pipeline Networks",
      partnership: 52,
      height: 56,
      x: 201,
      z: -168,
      color: "#F39C12",
      buildingType: "logistics",
      services: ["Pipeline", "Transportation"],
      employees: "7,500+",
      revenue: "$3.8B"
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;
    let animationPhase = 0;

    // Utility functions
    const lightenColor = (color, amount) => {
      const hex = color.replace('#', '');
      const r = Math.min(255, parseInt(hex.substr(0, 2), 16) + amount * 255);
      const g = Math.min(255, parseInt(hex.substr(2, 2), 16) + amount * 255);
      const b = Math.min(255, parseInt(hex.substr(4, 2), 16) + amount * 255);
      return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
    };

    const darkenColor = (color, amount) => {
      const hex = color.replace('#', '');
      const r = Math.max(0, parseInt(hex.substr(0, 2), 16) * (1 - amount));
      const g = Math.max(0, parseInt(hex.substr(2, 2), 16) * (1 - amount));
      const b = Math.max(0, parseInt(hex.substr(4, 2), 16) * (1 - amount));
      return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
    };

    // Zoomed out 3D projection (0.5x)
    const project3D = (x, y, z) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const rotatedX = x * Math.cos(rotation) - z * Math.sin(rotation);
      const rotatedZ = x * Math.sin(rotation) + z * Math.cos(rotation);
      
      // Zoomed out scale - 0.5x
      const scale = (600 / (350 + rotatedZ)) * 0.5;
      return {
        x: centerX + rotatedX * scale * 0.8,
        y: centerY + (y - 10) * scale * 0.8 + 120,
        scale: scale
      };
    };

    // Draw enhanced realistic building
    const drawBuilding = (company) => {
      const isHovered = hoveredTower === company.id;
      const basePos = project3D(company.x, 0, company.z);
      const topPos = project3D(company.x, -company.height, company.z);
      
      if (basePos.scale <= 0) return;

      // Enhanced building dimensions based on type
      const baseWidth = company.buildingType === 'headquarters' ? 45 : 
                       company.buildingType === 'corporate' ? 40 : 35;
      const width = baseWidth * basePos.scale * (isHovered ? 1.08 : 1);
      const depth = width * 0.7; // 3D depth
      const buildingHeight = basePos.y - topPos.y;

      // Enhanced shadow with blur effect
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(basePos.x - width/2 + 8, basePos.y + 2, width + 5, 12);
      ctx.shadowBlur = 0;

      // Draw 3D building structure
      draw3DBuildingFaces(company, basePos, topPos, width, depth, buildingHeight, isHovered);
    };

    // Enhanced 3D building faces with realistic architecture
    const draw3DBuildingFaces = (company, basePos, topPos, width, depth, buildingHeight, isHovered) => {
      // Front face with enhanced gradient
      const frontGradient = ctx.createLinearGradient(
        basePos.x - width/2, topPos.y,
        basePos.x + width/2, basePos.y
      );
      
      if (company.buildingType === 'headquarters') {
        // Premium glass building effect
        frontGradient.addColorStop(0, lightenColor(company.color, 0.4));
        frontGradient.addColorStop(0.3, lightenColor(company.color, 0.2));
        frontGradient.addColorStop(0.7, company.color);
        frontGradient.addColorStop(1, darkenColor(company.color, 0.3));
      } else {
        frontGradient.addColorStop(0, lightenColor(company.color, 0.3));
        frontGradient.addColorStop(0.5, company.color);
        frontGradient.addColorStop(1, darkenColor(company.color, 0.2));
      }

      ctx.fillStyle = frontGradient;
      ctx.fillRect(basePos.x - width/2, topPos.y, width, buildingHeight);

      // Right side face (3D depth)
      const sideGradient = ctx.createLinearGradient(
        basePos.x + width/2, topPos.y,
        basePos.x + width/2 + depth/2, topPos.y
      );
      sideGradient.addColorStop(0, darkenColor(company.color, 0.2));
      sideGradient.addColorStop(1, darkenColor(company.color, 0.5));

      ctx.fillStyle = sideGradient;
      ctx.beginPath();
      ctx.moveTo(basePos.x + width/2, topPos.y);
      ctx.lineTo(basePos.x + width/2 + depth/2, topPos.y - depth/3);
      ctx.lineTo(basePos.x + width/2 + depth/2, basePos.y - depth/3);
      ctx.lineTo(basePos.x + width/2, basePos.y);
      ctx.closePath();
      ctx.fill();

      // Top face
      const topGradient = ctx.createRadialGradient(
        basePos.x, topPos.y - depth/6, 0,
        basePos.x, topPos.y - depth/6, width/2
      );
      topGradient.addColorStop(0, lightenColor(company.color, 0.5));
      topGradient.addColorStop(1, lightenColor(company.color, 0.2));

      ctx.fillStyle = topGradient;
      ctx.beginPath();
      ctx.moveTo(basePos.x - width/2, topPos.y);
      ctx.lineTo(basePos.x - width/2 + depth/2, topPos.y - depth/3);
      ctx.lineTo(basePos.x + width/2 + depth/2, topPos.y - depth/3);
      ctx.lineTo(basePos.x + width/2, topPos.y);
      ctx.closePath();
      ctx.fill();

      // Enhanced building details
      drawBuildingDetails(company, basePos, topPos, width, buildingHeight, isHovered);
    };

    // Enhanced building details with realistic features
    const drawBuildingDetails = (company, basePos, topPos, width, buildingHeight, isHovered) => {
      // Enhanced service sections with better visual separation
      const sectionHeight = buildingHeight / 4;
      const serviceColors = [
        { 
          color: lightenColor(company.color, 0.45), 
          name: 'R&D Services',
          pattern: 'glass' 
        },
        { 
          color: lightenColor(company.color, 0.25), 
          name: 'Digital Solutions',
          pattern: 'tech' 
        },
        { 
          color: company.color, 
          name: 'Engineering',
          pattern: 'standard' 
        },
        { 
          color: darkenColor(company.color, 0.25), 
          name: 'GCC Setup',
          pattern: 'industrial' 
        }
      ];

      // Draw enhanced service sections
      serviceColors.forEach((section, index) => {
        const sectionY = basePos.y - (index + 1) * sectionHeight;
        
        // Section background with texture
        const sectionGradient = ctx.createLinearGradient(
          basePos.x - width/2, sectionY,
          basePos.x + width/2, sectionY + sectionHeight
        );
        sectionGradient.addColorStop(0, lightenColor(section.color, 0.1));
        sectionGradient.addColorStop(0.5, section.color);
        sectionGradient.addColorStop(1, darkenColor(section.color, 0.1));
        
        ctx.fillStyle = sectionGradient;
        ctx.fillRect(basePos.x - width/2, sectionY, width, sectionHeight);

        // Enhanced section divider with glow
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
        ctx.shadowBlur = 2;
        ctx.beginPath();
        ctx.moveTo(basePos.x - width/2 + 2, sectionY);
        ctx.lineTo(basePos.x + width/2 - 2, sectionY);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Enhanced window patterns based on section type
        drawEnhancedWindows(section, basePos, sectionY, sectionHeight, width, isHovered, index);
      });

      // Building outline with enhanced effects
      if (isHovered) {
        ctx.shadowColor = company.color;
        ctx.shadowBlur = 20;
        ctx.strokeStyle = lightenColor(company.color, 0.6);
        ctx.lineWidth = 3;
      } else {
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.5;
      }

      ctx.strokeRect(basePos.x - width/2, topPos.y, width, buildingHeight);
      ctx.shadowBlur = 0;

      // Enhanced building top features
      drawBuildingTop(company, basePos, topPos, width);
      
      // Enhanced labels
      drawBuildingLabels(company, basePos, topPos, width);
    };

    // Enhanced building top with architectural details
    const drawBuildingTop = (company, basePos, topPos, width) => {
      const scale = basePos.scale;
      
      // Different top styles based on building type
      if (company.buildingType === 'headquarters') {
        // Prestigious spire
        const spireHeight = 25 * scale;
        ctx.strokeStyle = lightenColor(company.color, 0.7);
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(basePos.x, topPos.y);
        ctx.lineTo(basePos.x, topPos.y - spireHeight);
        ctx.stroke();
        
        // Decorative top structure
        ctx.fillStyle = lightenColor(company.color, 0.4);
        ctx.fillRect(basePos.x - 6 * scale, topPos.y - 8 * scale, 12 * scale, 8 * scale);
      } else {
        // Standard antenna
        const antennaHeight = 18 * scale;
        ctx.strokeStyle = lightenColor(company.color, 0.6);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(basePos.x, topPos.y);
        ctx.lineTo(basePos.x, topPos.y - antennaHeight);
        ctx.stroke();
      }

      // Enhanced blinking aviation lights
      const blinkPhase = Math.sin(animationPhase * 4) > 0.5;
      if (blinkPhase) {
        ctx.shadowColor = '#FF0000';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(basePos.x, topPos.y - 20 * scale, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Helipad for headquarters buildings
      if (company.buildingType === 'headquarters' && width > 30) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(basePos.x + width/3, topPos.y, width/6, 0, Math.PI * 2);
        ctx.stroke();
        
        // H marking
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = `${Math.max(6, 8 * scale)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillText('H', basePos.x + width/3, topPos.y + 2);
      }
    };

    // Enhanced building labels with better visibility
    const drawBuildingLabels = (company, basePos, topPos, width) => {
      const scale = basePos.scale;
      
      // Company name with enhanced visibility - 0.3x smaller
      const nameParts = company.name.split(' ');
      const fontSize = Math.max(1, 1.2 * scale);
      
      // Name background - increased height to fix compression
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      const nameWidth = Math.max(width, 100 * basePos.scale);
      ctx.fillRect(
        basePos.x - nameWidth/2, 
        basePos.y + 15 * basePos.scale, 
        nameWidth, 
        nameParts.length * 20 * basePos.scale
      );
      
      // Company name text - 0.3x size
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${fontSize}px system-ui`;
      ctx.textAlign = 'center';
      
      nameParts.forEach((part, index) => {
        ctx.fillText(part, basePos.x, basePos.y + (7 + index * 4) * scale);
      });

      // Enhanced partnership percentage with glow - 0.3x size
      const percentText = `${company.partnership}%`;
      const percentFontSize = Math.max(1, 1.2 * scale);
      const percentWidth = ctx.measureText(percentText).width;
      
      // Percentage background with company color
      ctx.fillStyle = company.color;
      ctx.fillRect(
        basePos.x - percentWidth/2 - 6 * scale, 
        topPos.y - 35 * scale - 4, 
        percentWidth + 12 * scale, 
        18 * scale
      );
      
      // Percentage text with glow effect - much smaller
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 2;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${percentFontSize}px system-ui`;
      ctx.fillText(percentText, basePos.x, topPos.y - 10 * scale);
      ctx.shadowBlur = 0;
    };

    // Enhanced window patterns
    const drawEnhancedWindows = (section, basePos, sectionY, sectionHeight, width, isHovered, sectionIndex) => {
      const windowRows = Math.max(2, Math.floor(sectionHeight / 15));
      const windowsPerRow = Math.max(3, Math.floor(width / 10));
      
      for (let row = 0; row < windowRows; row++) {
        const windowY = sectionY + (row + 0.7) * (sectionHeight / windowRows);
        
        for (let w = 0; w < windowsPerRow; w++) {
          const windowX = basePos.x - width/2 + (w + 1) * (width / (windowsPerRow + 1));
          
          // Enhanced lighting based on section activity and time
          const activityLevel = (sectionIndex + 1) * 0.2;
          const timeVariation = Math.sin(animationPhase * 0.3 + row * w * 0.2);
          const isLit = timeVariation > (0.1 - activityLevel);
          
          // Window background
          ctx.fillStyle = isLit ? 
            'rgba(255, 248, 200, 0.95)' : // Warm office light
            'rgba(100, 120, 160, 0.3)';   // Dimmed
          
          const windowWidth = Math.max(3, width / windowsPerRow * 0.4);
          const windowHeight = Math.max(4, sectionHeight / windowRows * 0.5);
          
          ctx.fillRect(
            windowX - windowWidth/2, 
            windowY - windowHeight/2, 
            windowWidth, 
            windowHeight
          );
          
          // Window frame with reflective effect
          ctx.strokeStyle = isLit ? 
            'rgba(255, 255, 255, 0.8)' : 
            'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 0.5;
          ctx.strokeRect(
            windowX - windowWidth/2, 
            windowY - windowHeight/2, 
            windowWidth, 
            windowHeight
          );
          
          // Reflective glass effect for lit windows
          if (isLit && section.pattern === 'glass') {
            ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
            ctx.fillRect(
              windowX - windowWidth/2 + 0.5, 
              windowY - windowHeight/2 + 0.5, 
              windowWidth * 0.3, 
              windowHeight * 0.7
            );
          }
        }
      }
    };

    // Complete enhanced 3D building function
    const drawEnhanced3DBuilding = (company) => {
      const isHovered = hoveredTower === company.id;
      const basePos = project3D(company.x, 0, company.z);
      const topPos = project3D(company.x, -company.height, company.z);
      
      if (basePos.scale <= 0) return;

      // Expanded building dimensions - 30% wider
      const baseWidth = company.buildingType === 'headquarters' ? 78 : 
                       company.buildingType === 'corporate' ? 65 : 59;
      const width = baseWidth * basePos.scale * (isHovered ? 1.05 : 1);
      const depth = width * 1.0;
      const buildingHeight = basePos.y - topPos.y;

      // Building shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 6;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(basePos.x - width/2 + 8, basePos.y + 2, width + 5, 10);
      ctx.shadowBlur = 0;

      // 3D Building faces
      // Front face
      const frontGradient = ctx.createLinearGradient(
        basePos.x - width/2, topPos.y,
        basePos.x + width/2, basePos.y
      );
      frontGradient.addColorStop(0, lightenColor(company.color, 0.4));
      frontGradient.addColorStop(0.5, company.color);
      frontGradient.addColorStop(1, darkenColor(company.color, 0.3));
      
      ctx.fillStyle = frontGradient;
      ctx.fillRect(basePos.x - width/2, topPos.y, width, buildingHeight);

      // Side face for 3D effect
      const sideGradient = ctx.createLinearGradient(
        basePos.x + width/2, topPos.y,
        basePos.x + width/2 + depth/2, topPos.y
      );
      sideGradient.addColorStop(0, darkenColor(company.color, 0.3));
      sideGradient.addColorStop(1, darkenColor(company.color, 0.6));
      
      ctx.fillStyle = sideGradient;
      ctx.beginPath();
      ctx.moveTo(basePos.x + width/2, topPos.y);
      ctx.lineTo(basePos.x + width/2 + depth/2, topPos.y - depth/3);
      ctx.lineTo(basePos.x + width/2 + depth/2, basePos.y - depth/3);
      ctx.lineTo(basePos.x + width/2, basePos.y);
      ctx.closePath();
      ctx.fill();

      // Service sections
      const sectionHeight = buildingHeight / 4;
      const serviceColors = [
        { color: lightenColor(company.color, 0.4), name: 'R&D Services' },
        { color: lightenColor(company.color, 0.2), name: 'Digital Solutions' },
        { color: company.color, name: 'Engineering' },
        { color: darkenColor(company.color, 0.2), name: 'GCC Setup' }
      ];

      serviceColors.forEach((section, index) => {
        const sectionY = basePos.y - (index + 1) * sectionHeight;
        
        // Section background
        ctx.fillStyle = section.color;
        ctx.fillRect(basePos.x - width/2, sectionY, width, sectionHeight);

        // Section divider
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(basePos.x - width/2, sectionY);
        ctx.lineTo(basePos.x + width/2, sectionY);
        ctx.stroke();

        // Windows
        const windowRows = Math.max(1, Math.floor(sectionHeight / 20));
        for (let row = 0; row < windowRows; row++) {
          const windowY = sectionY + (row + 0.5) * (sectionHeight / windowRows);
          const windowsPerRow = Math.max(2, Math.floor(width / 12));
          
          for (let w = 0; w < windowsPerRow; w++) {
            const windowX = basePos.x - width/2 + (w + 1) * (width / (windowsPerRow + 1));
            const isLit = Math.sin(animationPhase * 0.4 + row * w * 0.2) > 0.1;
            
            ctx.fillStyle = isLit ? 'rgba(255, 248, 180, 0.9)' : 'rgba(120, 140, 180, 0.4)';
            ctx.fillRect(windowX - 3, windowY - 4, 6, 8);
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 0.5;
            ctx.strokeRect(windowX - 3, windowY - 4, 6, 8);
          }
        }
      });

      // Building outline
      if (isHovered) {
        ctx.shadowColor = company.color;
        ctx.shadowBlur = 15;
        ctx.strokeStyle = lightenColor(company.color, 0.5);
        ctx.lineWidth = 3;
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.5;
      }
      ctx.strokeRect(basePos.x - width/2, topPos.y, width, buildingHeight);
      ctx.shadowBlur = 0;

      // Building top antenna
      ctx.strokeStyle = lightenColor(company.color, 0.6);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(basePos.x, topPos.y);
      ctx.lineTo(basePos.x, topPos.y - 20 * basePos.scale);
      ctx.stroke();

      // Blinking light
      if (Math.sin(animationPhase * 3) > 0) {
        ctx.shadowColor = '#FF0000';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(basePos.x, topPos.y - 20 * basePos.scale, 3 * basePos.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Company labels
      const nameParts = company.name.split(' ');
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      const nameWidth = Math.max(width, 100 * basePos.scale);
      ctx.fillRect(
        basePos.x - nameWidth/2, 
        basePos.y + 15 * basePos.scale, 
        nameWidth, 
        nameParts.length * 18 * basePos.scale
      );
      
      ctx.fillStyle = '#2C3E50';
      ctx.font = `bold ${Math.max(6, 9 * basePos.scale)}px system-ui`;
      ctx.textAlign = 'center';
      
      nameParts.forEach((part, index) => {
        ctx.fillText(part, basePos.x, basePos.y + (25 + index * 18) * basePos.scale);
      });

      // Partnership percentage - reduced to 30% of previous size
      const percentText = `${company.partnership}%`;
      ctx.fillStyle = company.color;
      ctx.fillRect(
        basePos.x - 13 * basePos.scale, 
        topPos.y - 25 * basePos.scale, 
        26 * basePos.scale, 
        8 * basePos.scale
      );
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.max(6, 11 * basePos.scale)}px system-ui`;
      ctx.fillText(percentText, basePos.x, topPos.y - 20 * basePos.scale);

      // Connection to hub
      drawConnection(basePos, company.color, isHovered);
    };

    // Draw connection line
    const drawConnection = (buildingPos, color, isActive) => {
      const hubPos = project3D(0, -40, 0);
      
      ctx.beginPath();
      ctx.moveTo(buildingPos.x, buildingPos.y - 20);
      ctx.lineTo(hubPos.x, hubPos.y);
      
      ctx.strokeStyle = isActive ? color : `${color}80`;
      ctx.lineWidth = isActive ? 3 : 2;
      ctx.stroke();

      // Data particles when hovered
      if (isActive) {
        const particleProgress = (animationPhase * 2) % 1;
        const particleX = buildingPos.x + (hubPos.x - buildingPos.x) * particleProgress;
        const particleY = (buildingPos.y - 20) + (hubPos.y - (buildingPos.y - 20)) * particleProgress;
        
        ctx.beginPath();
        ctx.arc(particleX, particleY, 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    };

    // Draw very small ScaleIQ hub
    const drawHub = () => {
      const hubPos = project3D(0, -40, 0);
      const radius = 15 * hubPos.scale;
      
      // Hub shadow
      ctx.beginPath();
      ctx.arc(hubPos.x + 3, hubPos.y + 3, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fill();

      // Main hub
      const hubGradient = ctx.createRadialGradient(
        hubPos.x, hubPos.y, 0,
        hubPos.x, hubPos.y, radius
      );
      hubGradient.addColorStop(0, '#255073');
      hubGradient.addColorStop(1, '#1a3a52');
      
      ctx.beginPath();
      ctx.arc(hubPos.x, hubPos.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = hubGradient;
      ctx.fill();

      // Hub outline
      ctx.shadowColor = '#255073';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ScaleIQ text - very small
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${Math.max(3, 6 * hubPos.scale)}px system-ui`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ScaleIQ', hubPos.x, hubPos.y);
    };

    // Draw ground grid - horizontal perspective
    const drawGround = () => {
      ctx.strokeStyle = 'rgba(180, 180, 180, 0.2)';
      ctx.lineWidth = 0.8;

      // Horizontal lines for depth perception
      for (let z = 100; z <= 300; z += 40) {
        const start = project3D(-600, 0, z);
        const end = project3D(600, 0, z);
        
        if (start.scale > 0 && end.scale > 0) {
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      }

      // Vertical lines for width perspective
      for (let x = -500; x <= 500; x += 100) {
        const start = project3D(x, 0, 100);
        const end = project3D(x, 0, 300);
        
        if (start.scale > 0 && end.scale > 0) {
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      }
    };

    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      let hoveredId = null;
      for (const company of energyCompanies) {
        const pos = project3D(company.x, -company.height/2, company.z);
        const distance = Math.sqrt(Math.pow(mouseX - pos.x, 2) + Math.pow(mouseY - pos.y, 2));
        if (distance < 40) {
          hoveredId = company.id;
          break;
        }
      }
      setHoveredTower(hoveredId);
    };

    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      
      let clickedId = null;
      for (const company of energyCompanies) {
        const pos = project3D(company.x, -company.height/2, company.z);
        const distance = Math.sqrt(Math.pow(clickX - pos.x, 2) + Math.pow(clickY - pos.y, 2));
        if (distance < 40) {
          clickedId = company.id;
          break;
        }
      }
      setSelectedTower(clickedId);
    };

    // Animation loop
    const animate = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Clean transparent background - no gray background needed
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw ground
        drawGround();

        // Sort buildings by depth
        const sortedCompanies = [...energyCompanies].sort((a, b) => {
          const distanceA = a.x * Math.sin(rotation) + a.z * Math.cos(rotation);
          const distanceB = b.x * Math.sin(rotation) + b.z * Math.cos(rotation);
          return distanceB - distanceA;
        });

        // Draw buildings - using enhanced 3D building function
        sortedCompanies.forEach(company => {
          drawEnhanced3DBuilding(company);
        });

        // Draw very small hub
        drawHub();

        // Faster rotation to reduce lag
        rotation += 0.008;
        animationPhase += 0.025;

        animationRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation error:', error);
      }
    };

    // Start animation
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [hoveredTower, selectedTower]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <canvas
        ref={canvasRef}
        width="1000"
        height="550"
        className="w-full h-full cursor-pointer"
        style={{ imageRendering: 'auto', maxWidth: '100%', maxHeight: '100%' }}
      />
      
      {/* Company Information Panel */}
      {selectedTower && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
          {(() => {
            const company = energyCompanies.find(c => c.id === selectedTower);
            return (
              <>
                <button 
                  onClick={() => setSelectedTower(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h4 className="font-bold text-lg text-[#255073] mb-2">{company.name}</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Partnership Level:</strong> {company.partnership}%</div>
                  <div><strong>Employees:</strong> {company.employees}</div>
                  <div><strong>Revenue:</strong> {company.revenue}</div>
                  <div><strong>Services:</strong> {company.services.join(', ')}</div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};