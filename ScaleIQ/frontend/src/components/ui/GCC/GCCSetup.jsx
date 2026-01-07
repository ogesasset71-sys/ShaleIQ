import React, { useState, useEffect, useRef } from "react";
import { Card } from "../card";
import { Badge } from "../badge";
import { Button } from "../button";
import { ScaleIQHeader } from "../../ScaleIQHeader";
import { Footer } from "../../Footer";
import {
  Building2,
  Users,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Award,
  Briefcase,
  FileText,
} from "lucide-react";

export const GCCSetup = () => {
  const [activeModel, setActiveModel] = useState("leasing");
  const gccGlobeRef = useRef(null);
  const gccAnimationRef = useRef(null);

  // Original Complex Globe Animation from Homepage
  useEffect(() => {
    const canvas = gccGlobeRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 540; // Original size from homepage

    let rotation = 0;
    let connectionProgress = 0;

    // Global energy cities with cost savings data - original from homepage
    const cities = [
      // Countries from cost savings table - Primary markets
      {
        name: "United States",
        angle: Math.PI * 0.8,
        distance: 450,
        visible: true,
        savings: 61,
        priority: "high",
      },
      {
        name: "Saudi Arabia",
        angle: Math.PI * 1.8,
        distance: 420,
        visible: true,
        savings: 59,
        priority: "high",
      },
      {
        name: "UAE (Dubai)",
        angle: Math.PI * 1.7,
        distance: 428,
        visible: true,
        savings: 54,
        priority: "high",
      },
      {
        name: "Norway",
        angle: Math.PI * 1.9,
        distance: 413,
        visible: true,
        savings: 51,
        priority: "medium",
      },
      {
        name: "Canada",
        angle: Math.PI * 1.5,
        distance: 428,
        visible: true,
        savings: 49,
        priority: "medium",
      },
      {
        name: "Australia",
        angle: Math.PI * 0.5,
        distance: 465,
        visible: true,
        savings: 49,
        priority: "medium",
      },

      // Secondary markets that appear over time
      {
        name: "Germany",
        angle: Math.PI * 0.1,
        distance: 420,
        visible: false,
        savings: 45,
        priority: "medium",
      },
      {
        name: "China",
        angle: Math.PI * 0.35,
        distance: 435,
        visible: false,
        savings: 30,
        priority: "low",
      },
      {
        name: "Brazil",
        angle: Math.PI * 1.3,
        distance: 458,
        visible: false,
        savings: 23,
        priority: "low",
      },

      // Additional strategic markets
      {
        name: "UK (London)",
        angle: Math.PI * 0.05,
        distance: 415,
        visible: false,
        savings: 52,
        priority: "medium",
      },
      {
        name: "Malaysia",
        angle: Math.PI * 0.4,
        distance: 440,
        visible: false,
        savings: 47,
        priority: "medium",
      },
      {
        name: "Singapore",
        angle: Math.PI * 0.42,
        distance: 438,
        visible: false,
        savings: 46,
        priority: "medium",
      },
      {
        name: "Kuwait",
        angle: Math.PI * 1.75,
        distance: 425,
        visible: false,
        savings: 53,
        priority: "medium",
      },
      {
        name: "Qatar",
        angle: Math.PI * 1.72,
        distance: 422,
        visible: false,
        savings: 52,
        priority: "medium",
      },
      {
        name: "Mexico",
        angle: Math.PI * 1.25,
        distance: 435,
        visible: false,
        savings: 41,
        priority: "low",
      },
      {
        name: "Nigeria",
        angle: Math.PI * 0.2,
        distance: 430,
        visible: false,
        savings: 38,
        priority: "low",
      },
    ];

    const indiaPosition = { x: 0, y: 0 }; // Center India for better distribution

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe background with gradient
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "rgba(37, 80, 115, 0.9)");
      gradient.addColorStop(0.7, "rgba(25, 60, 95, 0.7)");
      gradient.addColorStop(1, "rgba(15, 40, 75, 0.4)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw globe outline with better visibility
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#255073";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw India (destination)
      const indiaX = centerX + indiaPosition.x;
      const indiaY = centerY + indiaPosition.y;

      // Pulsing effect for India
      const pulseRadius = 6 + Math.sin(connectionProgress * 0.1) * 2;
      ctx.beginPath();
      ctx.arc(indiaX, indiaY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#FF6B6B";
      ctx.fill();

      // India glow
      ctx.beginPath();
      ctx.arc(indiaX, indiaY, pulseRadius + 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 107, 107, 0.3)";
      ctx.fill();

      // Draw cities and connections with progressive animation
      const currentTime = connectionProgress / 60;

      cities.forEach((city, index) => {
        // Position city on globe circumference with rotation
        const rotatedAngle = city.angle + rotation * 0.3;
        const cityX = centerX + Math.cos(rotatedAngle) * city.distance;
        const cityY = centerY + Math.sin(rotatedAngle) * city.distance;

        // Staggered appearance times
        const appearTime =
          city.priority === "high"
            ? index * 0.8
            : city.priority === "medium"
            ? 4 + index * 0.5
            : 6.5 + index * 0.4;

        const isVisible = currentTime > appearTime;

        if (isVisible || city.visible) {
          // Draw connection line
          const connectionAlpha = Math.min(
            1,
            Math.max(0, currentTime - appearTime) / 2
          );

          ctx.globalAlpha = connectionAlpha;
          ctx.beginPath();
          ctx.moveTo(indiaX, indiaY);
          ctx.lineTo(cityX, cityY);

          // Line thickness based on savings percentage
          const lineWidth = Math.max(2, city.savings / 15);
          ctx.lineWidth = lineWidth;

          // Color based on savings level
          const savings = city.savings;
          if (savings > 55) {
            ctx.strokeStyle = "#FF6B6B"; // High savings - red
          } else if (savings > 50) {
            ctx.strokeStyle = "#FFB366"; // Medium-high - orange
          } else if (savings > 45) {
            ctx.strokeStyle = "#FFF066"; // Medium - yellow
          } else {
            ctx.strokeStyle = "#66FF8A"; // Lower - green
          }

          ctx.stroke();
          ctx.globalAlpha = 1;

          // Draw city marker
          const markerRadius = Math.max(3, savings / 12);
          ctx.beginPath();
          ctx.arc(cityX, cityY, markerRadius, 0, Math.PI * 2);
          ctx.fillStyle = ctx.strokeStyle;
          ctx.fill();

          // City label for high priority cities
          if (city.priority === "high" && connectionAlpha > 0.7) {
            ctx.fillStyle = "#255073";
            ctx.font = "bold 11px system-ui";
            ctx.textAlign = "center";
            ctx.fillText(`${city.savings}%`, cityX, cityY - markerRadius - 8);
          }
        }
      });

      // Update animation parameters
      rotation += 0.005; // Slower rotation
      connectionProgress += 0.8; // Connection animation speed
      if (connectionProgress > 600) connectionProgress = 0; // Reset cycle

      gccAnimationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      if (gccAnimationRef.current) {
        cancelAnimationFrame(gccAnimationRef.current);
      }
    };
  }, []);

  const gccServices = [
    {
      icon: Users,
      title: "Workforce Leasing Model",
      description: "100:0 → 70:30 over 3 years transition",
      features: [
        "Pre-vetted energy domain experts",
        "Flexible workforce scaling",
        "Gradual ownership transition",
        "Risk-free talent acquisition",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Building2,
      title: "Office & Infra Setup",
      description: "Complete infrastructure establishment",
      features: [
        "Office space setup and management",
        "IT infrastructure and security",
        "Communication systems",
        "Facility management services",
      ],
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Full regulatory compliance management",
      features: [
        "Legal entity establishment",
        "Regulatory compliance setup",
        "Tax and accounting services",
        "HR policy and procedures",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: TrendingUp,
      title: "Operations Management",
      description: "Day-to-day operations and governance",
      features: [
        "Process setup and optimization",
        "Quality management systems",
        "Performance monitoring",
        "Continuous improvement",
      ],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  const transitionModels = {
    leasing: {
      title: "Workforce Leasing Model",
      subtitle: "Risk-free talent acquisition with gradual transition",
      description:
        "Start with 100% ScaleIQ workforce and gradually transition to client payroll over 3 years. This model eliminates hiring risks while building your team capability.",
      timeline: "36 months",
      phases: [
        {
          period: "Months 1-12",
          split: "100:0 (ScaleIQ : Client)",
          description:
            "Complete workforce on ScaleIQ payroll during setup and stabilization",
        },
        {
          period: "Months 13-24",
          split: "70:30 (ScaleIQ : Client)",
          description:
            "Gradual transition begins with proven performers moving to client payroll",
        },
        {
          period: "Months 25-36",
          split: "30:70 (ScaleIQ : Client)",
          description:
            "Majority workforce on client payroll with ScaleIQ providing ongoing support",
        },
      ],
      benefits: [
        "Zero upfront hiring costs",
        "Pre-vetted domain experts",
        "Flexible scaling options",
        "Risk mitigation during ramp-up",
      ],
    },
    consulting: {
      title: "Consulting & Advisory Model",
      subtitle: "Strategic guidance and implementation support",
      description:
        "Comprehensive consulting services for GCC strategy, setup, and operations optimization with flexible engagement models.",
      timeline: "12-18 months",
      phases: [
        {
          period: "Months 1-3",
          split: "Strategy & Planning",
          description:
            "GCC strategy development, location analysis, and implementation roadmap",
        },
        {
          period: "Months 4-12",
          split: "Setup & Implementation",
          description:
            "End-to-end GCC establishment including infrastructure, team building, and processes",
        },
        {
          period: "Months 13-18",
          split: "Optimization & Handover",
          description:
            "Operations optimization, performance improvement, and knowledge transfer",
        },
      ],
      benefits: [
        "Expert strategic guidance",
        "Proven implementation methodology",
        "Accelerated time-to-value",
        "Risk-reduced execution",
      ],
    },
  };

  const whyIndia = [
    {
      icon: DollarSign,
      title: "60-70% Cost Savings",
      description:
        "Significant operational cost reduction compared to onshore operations",
      stats: "Average savings of $50K-80K per FTE annually",
    },
    {
      icon: Users,
      title: "World-Class Talent Pool",
      description:
        "Access to highly skilled engineers with energy domain expertise",
      stats: "200,000+ engineering graduates annually from top institutions",
    },
    {
      icon: Clock,
      title: "24/7 Operations Capability",
      description: "Time zone advantage enabling round-the-clock operations",
      stats:
        "12.5 hour time difference with Houston enables continuous operations",
    },
    {
      icon: Globe,
      title: "English Proficiency",
      description: "Strong English communication skills and cultural alignment",
      stats: "2nd largest English-speaking population globally",
    },
  ];

  const successMetrics = [
    {
      metric: "Setup Time",
      value: "4-6 Months",
      description: "From decision to operational GCC",
    },
    {
      metric: "Cost Reduction",
      value: "60-70%",
      description: "Compared to onshore operations",
    },
    {
      metric: "Talent Retention",
      value: "90%+",
      description: "Industry-leading retention rates",
    },
    {
      metric: "Productivity Gain",
      value: "25-40%",
      description: "Within first 12 months",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScaleIQHeader />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">
              INDIA GCC SETUP
            </span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Accelerate Your{" "}
            <span className="text-[#255073]">India GCC Journey</span>
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto mb-8">
            From strategy to operations, we provide end-to-end India GCC setup
            services with zero-risk workforce models and proven implementation
            expertise.
          </p>

          <div className="mt-12">
            <Card className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {successMetrics.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#255073] mb-2">
                      {item.value}
                    </div>
                    <div className="text-black font-medium mb-1">
                      {item.metric}
                    </div>
                    <div className="text-black/60 text-sm">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Original Hero Globe from Homepage */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-[#255073] mb-6">
                  <div className="w-12 h-0.5 bg-[#255073]" />
                  <span className="text-lg font-medium tracking-wide">
                    GLOBAL OPERATIONS
                  </span>
                  <div className="w-12 h-0.5 bg-[#255073]" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 text-center lg:text-left">
                  Savings from <span className="text-[#255073]">India GCC</span>
                </h2>
                <p className="text-xl text-black/70 text-center lg:text-left">
                  Real-world cost savings achieved by global energy companies
                  through India GCC operations
                </p>
              </div>

              {/* Cost Savings Stats */}
              <div className="space-y-4">
                {[
                  {
                    region: "United States",
                    savings: "61%",
                    color: "bg-red-500",
                  },
                  {
                    region: "Saudi Arabia",
                    savings: "59%",
                    color: "bg-orange-500",
                  },
                  {
                    region: "UAE (Dubai)",
                    savings: "54%",
                    color: "bg-yellow-500",
                  },
                  { region: "Norway", savings: "51%", color: "bg-green-500" },
                  { region: "Canada", savings: "49%", color: "bg-blue-500" },
                  {
                    region: "Australia",
                    savings: "49%",
                    color: "bg-purple-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/80 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 ${item.color} rounded-full`}
                      ></div>
                      <span className="font-medium text-black">
                        {item.region}
                      </span>
                    </div>
                    <span className="text-[#255073] font-bold">
                      {item.savings}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="bg-white/90 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-black mb-4">
                  Visualization Guide
                </h4>
                <div className="space-y-2 text-sm text-black/70">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-1 bg-[#255073]"></div>
                    <span>Line thickness = Cost savings %</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#FF6B6B] rounded-full animate-pulse"></div>
                    <span>Dot size = Company interest</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-3 h-3 text-[#255073]" />
                    <span>Connected to India GCC operations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Globe (Original from Homepage) */}
            <div className="relative h-[500px] lg:h-[700px] xl:h-[800px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-[#255073]/25 via-transparent to-transparent rounded-full blur-3xl" />
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Canvas for 3D Globe */}
                <canvas
                  ref={gccGlobeRef}
                  width="1200"
                  height="1200"
                  className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]"
                  style={{ imageRendering: "auto" }}
                />

                {/* Globe Title */}
                <div className="text-center mt-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                    Global Operations Connected to India GCC
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GCC Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              Comprehensive GCC Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              End-to-End{" "}
              <span className="text-[#255073]">GCC Establishment</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Complete support from initial planning to fully operational GCC
              with ongoing optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gccServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${service.gradient} border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-8`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#255073]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-[#255073]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#255073] font-medium mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-[#255073] flex-shrink-0 mt-0.5" />
                            <span className="text-black/80 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              Engagement Models
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Flexible{" "}
              <span className="text-[#255073]">Partnership Models</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Choose the engagement model that best fits your risk tolerance and
              business objectives
            </p>
          </div>

          {/* Model Selection */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(transitionModels).map(([key, model]) => (
              <button
                key={key}
                onClick={() => setActiveModel(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeModel === key
                    ? "bg-[#255073] text-white shadow-lg"
                    : "bg-white border border-black/20 text-black hover:border-[#255073]/50"
                }`}
              >
                <span className="font-semibold">{model.title}</span>
              </button>
            ))}
          </div>

          {/* Active Model Content */}
          <Card className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">
                {transitionModels[activeModel].title}
              </h3>
              <p className="text-[#255073] text-lg font-medium mb-4">
                {transitionModels[activeModel].subtitle}
              </p>
              <p className="text-black/70 max-w-2xl mx-auto">
                {transitionModels[activeModel].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Timeline */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">
                  Implementation Timeline
                </h4>
                <div className="space-y-4">
                  {transitionModels[activeModel].phases.map((phase, index) => (
                    <Card key={index} className="bg-white border-black/10 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-black">
                          {phase.period}
                        </span>
                        <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 text-xs">
                          {phase.split}
                        </Badge>
                      </div>
                      <p className="text-black/70 text-sm">
                        {phase.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">
                  Key Benefits
                </h4>
                <div className="space-y-3">
                  {transitionModels[activeModel].benefits.map(
                    (benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#255073] flex-shrink-0 mt-0.5" />
                        <span className="text-black/80">{benefit}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why India Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4">
              Why India GCC
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Strategic Advantages of{" "}
              <span className="text-[#255073]">India Operations</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              India offers unmatched advantages for energy sector GCC operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyIndia.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#255073]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-[#255073]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-black/70 mb-3">
                        {advantage.description}
                      </p>
                      <p className="text-[#255073] text-sm font-medium">
                        {advantage.stats}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">
              Typical GCC{" "}
              <span className="text-[#255073]">Implementation Timeline</span>
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Structured approach ensuring rapid deployment with minimal risk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                duration: "Month 1",
                title: "Strategy & Planning",
                activities: [
                  "GCC Strategy",
                  "Location Analysis",
                  "Legal Setup",
                  "Compliance Framework",
                ],
              },
              {
                phase: "Phase 2",
                duration: "Months 2-3",
                title: "Infrastructure Setup",
                activities: [
                  "Office Setup",
                  "IT Infrastructure",
                  "Security Systems",
                  "Communication Tools",
                ],
              },
              {
                phase: "Phase 3",
                duration: "Months 4-5",
                title: "Team Building",
                activities: [
                  "Talent Acquisition",
                  "Onboarding Programs",
                  "Process Training",
                  "Quality Systems",
                ],
              },
              {
                phase: "Phase 4",
                duration: "Month 6+",
                title: "Operations & Scale",
                activities: [
                  "Live Operations",
                  "Performance Monitoring",
                  "Continuous Improvement",
                  "Scaling Plans",
                ],
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="bg-white border-black/10 p-6 text-center relative"
              >
                <div className="w-12 h-12 bg-[#255073]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#255073] font-bold">{index + 1}</span>
                </div>
                <div className="mb-2">
                  <span className="text-[#255073] text-sm font-medium">
                    {phase.phase}
                  </span>
                  <span className="text-black/60 text-sm">
                    {" "}
                    • {phase.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {phase.title}
                </h3>
                <ul className="text-black/70 text-sm space-y-1">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex}>• {activity}</li>
                  ))}
                </ul>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-[#255073]" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#255073]/10 via-[#255073]/5 to-[#255073]/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            Ready to Establish Your India GCC?
          </h3>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            Start your India GCC journey with zero risk and proven expertise.
            Let's discuss your specific requirements.
          </p>
          <Button
            onClick={() => (window.location.href = "/#contact")}
            className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Start Your GCC Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
