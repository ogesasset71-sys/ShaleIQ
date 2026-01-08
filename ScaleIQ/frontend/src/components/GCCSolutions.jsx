import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { GoToTop } from "./GoToTop";
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SavingsPieChart = () => {
  const data = [
    { region: "US", save: 61, color: "#DCBF62" },
    { region: "SA", save: 59, color: "#DCBF62" },
    { region: "AE", save: 54, color: "#DCBF62" },
    { region: "NO", save: 51, color: "#DCBF62" },
  ];

  return (
    <div className="relative w-72 h-72 flex items-center justify-center group flex-shrink-0">
      <div className="absolute inset-0 border border-scaleiq-gold/10 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-4 border border-scaleiq-gold/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {data.map((item, i) => {
          const angle = 90;
          const startAngle = i * angle;
          const radius = (item.save / 100) * 48;

          const x1 = 50 + radius * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + radius * Math.sin((startAngle * Math.PI) / 180);
          const x2 =
            50 + radius * Math.cos(((startAngle + angle) * Math.PI) / 180);
          const y2 =
            50 + radius * Math.sin(((startAngle + angle) * Math.PI) / 180);

          const pathData = `M 50 50 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;

          return (
            <motion.path
              key={i}
              d={pathData}
              fill={item.color}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.2 + i * 0.1, scale: 1 }}
              whileHover={{ opacity: 0.9, scale: 1.05 }}
              transition={{ delay: i * 0.2, duration: 1, type: "spring" }}
              className="cursor-pointer transition-all duration-300"
            />
          );
        })}
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          stroke="white"
          strokeWidth="0.1"
          opacity="0.2"
        />
        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke="white"
          strokeWidth="0.1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export const GCCSolutions = () => {
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
    const radius = 540;

    let rotation = 0;
    let connectionProgress = 0;

    const cities = [
      {
        name: "United States",
        angle: Math.PI * 0.8,
        distance: 450,
        visible: true,
        savings: 61,
        priority: "high",
        color: "#EF4444", // Red
      },
      {
        name: "Saudi Arabia",
        angle: Math.PI * 1.8,
        distance: 420,
        visible: true,
        savings: 59,
        priority: "high",
        color: "#F97316", // Orange
      },
      {
        name: "UAE (Dubai)",
        angle: Math.PI * 1.7,
        distance: 428,
        visible: true,
        savings: 54,
        priority: "high",
        color: "#EAB308", // Yellow
      },
      {
        name: "Norway",
        angle: Math.PI * 1.9,
        distance: 413,
        visible: true,
        savings: 51,
        priority: "medium",
        color: "#22C55E", // Green
      },
      {
        name: "Canada",
        angle: Math.PI * 1.5,
        distance: 428,
        visible: true,
        savings: 49,
        priority: "medium",
        color: "#3B82F6", // Blue
      },
      {
        name: "Australia",
        angle: Math.PI * 0.5,
        distance: 465,
        visible: true,
        savings: 49,
        priority: "medium",
        color: "#A855F7", // Purple
      },
    ];

    const indiaPosition = { x: 0, y: 0 };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "rgba(220, 191, 98, 0.15)");
      gradient.addColorStop(0.7, "rgba(10, 10, 10, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.9)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(220, 191, 98, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const indiaX = centerX + indiaPosition.x;
      const indiaY = centerY + indiaPosition.y;

      const pulseRadius = 6 + Math.sin(connectionProgress * 0.1) * 2;
      ctx.beginPath();
      ctx.arc(indiaX, indiaY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#DCBF62";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(indiaX, indiaY, pulseRadius + 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(220, 191, 98, 0.3)";
      ctx.fill();

      const currentTime = connectionProgress / 60;

      cities.forEach((city, index) => {
        const rotatedAngle = city.angle + rotation * 0.3;
        const cityX = centerX + Math.cos(rotatedAngle) * city.distance;
        const cityY = centerY + Math.sin(rotatedAngle) * city.distance;
        const appearTime = index * 0.5;
        const isVisible = currentTime > appearTime;

        if (isVisible || city.visible) {
          const connectionAlpha = Math.min(
            1,
            Math.max(0, currentTime - appearTime) / 2
          );
          ctx.globalAlpha = connectionAlpha;
          ctx.beginPath();
          ctx.moveTo(indiaX, indiaY);
          ctx.lineTo(cityX, cityY);
          // Line thickness based on savings percentage
          const lineWidth = Math.max(1, city.savings / 20);
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = city.color || "rgba(220, 191, 98, 0.4)";
          ctx.stroke();
          ctx.globalAlpha = 1;

          const markerRadius = city.priority === "high" ? 5 : 3;
          ctx.beginPath();
          ctx.arc(cityX, cityY, markerRadius, 0, Math.PI * 2);
          ctx.fillStyle = city.color || "#DCBF62";
          ctx.fill();

          if (city.priority === "high" && connectionAlpha > 0.7) {
            ctx.fillStyle = "white";
            ctx.font = "bold 12px Inter";
            ctx.textAlign = "center";
            ctx.fillText(`${city.savings}%`, cityX, cityY - markerRadius - 10);
          }
        }
      });

      rotation += 0.002;
      connectionProgress += 1;
      if (connectionProgress > 600) connectionProgress = 0;
      gccAnimationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(gccAnimationRef.current);
  }, []);

  const gccServices = [
    {
      icon: Users,
      title: "Workforce Leasing",
      description: "100:0 → 70:30 over 3 years",
      features: [
        "Energy domain experts",
        "Flexible scaling",
        "Gradual ownership",
        "Zero hiring risk",
      ],
      gradient: "from-scaleiq-gold/20 to-transparent",
    },
    {
      icon: Building2,
      title: "Office & Infra",
      description: "Complete setup & management",
      features: [
        "Turnkey office space",
        "IT & Security setup",
        "Communication systems",
        "Facility management",
      ],
      gradient: "from-blue-500/10 to-transparent",
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Full regulatory management",
      features: [
        "Entity establishment",
        "Tax & Accounting",
        "HR Policies",
        "Audit support",
      ],
      gradient: "from-purple-500/10 to-transparent",
    },
    {
      icon: TrendingUp,
      title: "Operations",
      description: "Governance & Optimization",
      features: [
        "Process optimization",
        "Performance metrics",
        "Quality systems",
        "Seamless extension",
      ],
      gradient: "from-emerald-500/10 to-transparent",
    },
  ];

  const transitionModels = {
    leasing: {
      title: "Leasing Model",
      subtitle: "Risk-free talent acquisition",
      description:
        "Start with 100% ScaleIQ workforce and transition to client payroll over 3 years.",
      phases: [
        {
          period: "Months 1-12",
          split: "100:0",
          desc: "Stabilization on ScaleIQ payroll",
        },
        {
          period: "Months 13-24",
          split: "70:30",
          desc: "Gradual transition begins",
        },
        {
          period: "Months 25-36",
          split: "30:70",
          desc: "Majority client ownership",
        },
      ],
      benefits: ["Zero upfront cost", "Vetted experts", "Risk mitigation"],
    },
    consulting: {
      title: "Consulting Model",
      subtitle: "Strategic guidance & advisory",
      description:
        "Comprehensive services for GCC strategy, setup, and operations optimization.",
      phases: [
        { period: "Months 1-3", split: "Strategy", desc: "Roadmap & Analysis" },
        { period: "Months 4-12", split: "Setup", desc: "Implementation" },
        {
          period: "Months 13-18",
          split: "Optimization",
          desc: "Handover & Scale",
        },
      ],
      benefits: ["Expert guidance", "Proven methodology", "Accelerated value"],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-scaleiq-gold/30">
      <NewHeader />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pt-32 pb-20"
      >
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-scaleiq-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

          <div className="relative z-10 text-center">
            <motion.div
              {...fadeIn}
              className="flex items-center justify-center gap-3 mb-6 text-scaleiq-gold font-medium tracking-widest uppercase text-sm"
            >
              <span className="w-12 h-px bg-scaleiq-gold/50" />
              India GCC Solutions
              <span className="w-12 h-px bg-scaleiq-gold/50" />
            </motion.div>
<motion.h1
  {...fadeIn}
  transition={{ delay: 0.1 }}
  className="text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
>
  Enabling Global{" "}
  <span className="text-scaleiq-gold italic">
    Energy Capability
  </span>
  <br />
  Centers in India
</motion.h1>


            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Accelerate your India GCC journey with our zero-risk workforce
              models and deep energy domain expertise.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                { label: "Setup Time", val: "4-6 Months" },
                { label: "Cost Savings", val: "60-70%" },
                { label: "Retention", val: "90%+" },
                { label: "Productivity", val: "40% Gain" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:border-scaleiq-gold/30 transition-colors"
                >
                  <div className="text-3xl font-bold text-scaleiq-gold mb-1">
                    {stat.val}
                  </div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Globe Visualization */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="space-y-8">
              <div className="flex flex-col items-start gap-8">
                <h2 className="text-4xl font-bold tracking-tight">
                  A Unified Extension of Your{" "}
                  <span className="text-scaleiq-gold">Global Map</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  Connect your global hubs seamlessly with India-based
                  capability centers that function as native components of your
                  organization.
                </p>

                {/* Regional Savings List */}
                <div className="w-full max-w-md space-y-4">
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
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-white/20 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-3 h-3 ${item.color} rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                        />
                        <span className="text-lg font-medium text-white/90">
                          {item.region}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-scaleiq-gold">
                        {item.savings}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Visualization Guide */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl w-full max-w-md">
                  <h4 className="text-sm font-bold text-scaleiq-gold mb-4 uppercase tracking-widest">
                    Visualization Guide
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-4 h-[2px] bg-white/40" />
                      <span>Line thickness = Cost savings %</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span>Dot size = Strategic Priority</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Globe className="w-4 h-4 text-white/40" />
                      <span>Connected to India GCC operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-scaleiq-gold/5 rounded-full blur-[100px]" />

              {/* Dual Timezone Hub */}
              <div className="absolute top-0 right-0 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex flex-col gap-4 group hover:border-scaleiq-gold/30 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-scaleiq-gold/10 border border-scaleiq-gold/30 flex items-center justify-center relative flex-shrink-0">
                    <Clock className="w-5 h-5 text-scaleiq-gold animate-pulse" />
                    <div className="absolute inset-0 rounded-full border border-scaleiq-gold/20 border-t-scaleiq-gold animate-spin" />
                  </div>
                  <div>
                    <div className="text-[10px] text-scaleiq-gold font-bold uppercase tracking-[0.2em]">
                      24/7 Global Hub
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      Seamless Operations
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center gap-10">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                      India (IST)
                    </span>
                    <span className="text-lg font-mono font-bold tracking-tight tabular-nums text-white">
                      {new Date().toLocaleTimeString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-10">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                      Houston (CST)
                    </span>
                    <span className="text-lg font-mono font-bold tracking-tight tabular-nums text-gray-300">
                      {new Date().toLocaleTimeString("en-US", {
                        timeZone: "America/Chicago",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <canvas
                ref={gccGlobeRef}
                width="1200"
                height="1200"
                className="w-full max-w-[600px] aspect-square"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Bento */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Core Implementation{" "}
              <span className="text-scaleiq-gold">Levers</span>
            </h2>
            <div className="h-1 w-20 bg-scaleiq-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gccServices.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className={`bg-gradient-to-br ${service.gradient} border border-white/10 p-10 rounded-3xl group hover:border-scaleiq-gold/40 transition-all cursor-default backdrop-blur-sm`}
              >
                <service.icon className="w-12 h-12 text-scaleiq-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-scaleiq-gold/60 font-medium mb-6 uppercase text-sm tracking-widest">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {service.features.map((feat, fi) => (
                    <div
                      key={fi}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-scaleiq-gold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
{/* Why Energy Companies Choose ScaleIQ */}
<section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
  <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 lg:p-20 backdrop-blur-md relative overflow-hidden">
    
    {/* Gold Accent Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-scaleiq-gold to-transparent" />

    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
      
      {/* LEFT CONTENT */}
      <div className="space-y-8">
        <Badge className="bg-scaleiq-gold/10 text-scaleiq-gold border-scaleiq-gold/20 px-4 py-1.5 uppercase tracking-widest">
          Why ScaleIQ
        </Badge>

        <h2 className="text-5xl font-bold leading-tight">
          Why Energy Companies{" "}
          <span className="text-scaleiq-gold">Choose ScaleIQ</span>
        </h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-white mb-2">
              Trusted GCC Partnerships
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Working alongside leading GCC consultants and global delivery
              partners to help energy companies establish and scale India GCCs
              that are integrated, accountable, and aligned to global operating
              models.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">
              Deep Energy Domain Expertise
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Proven leadership experience across upstream, midstream, and
              downstream operations — enabling faster decision-making and
              operational relevance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">
              Strong Technology & Engineering Talent Pool
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Access to a diverse pool of technologists across data platforms,
              analytics, AI/ML, and subsurface engineering — ready to scale with
              your needs.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">
              Focused Shift Augmentation
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Enable rapid team onboarding, operational continuity, and cost
              efficiency without compromising quality, governance, or ownership.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="public/image2.png"
            alt="Why Energy Companies Choose ScaleIQ"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle Glow */}
        <div className="absolute inset-0 rounded-3xl bg-scaleiq-gold/10 blur-3xl opacity-20 -z-10" />
      </div>

    </div>
  </div>
</section>


        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-scaleiq-gold to-scaleiq-gold-dark rounded-[40px] p-16 lg:p-24 text-center text-black relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter">
              Ready to Scale Your Domain?
            </h2>
            <p className="text-xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
              Start building your India capability center with the industry's
              most trusted energy tech partner.
            </p>
            <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:px-16 transition-all duration-300 flex items-center gap-4 mx-auto"
            >
              Consult Our Experts <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </section>
      </motion.div>

      <NewFooter />
      <GoToTop />
    </div>
  );
};
