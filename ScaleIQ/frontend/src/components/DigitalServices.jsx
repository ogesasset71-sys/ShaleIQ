import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScaleIQHeader } from './ScaleIQHeader';
import { Footer } from './Footer';
import { OgesOneApplications } from './OgesOneApplications';
import { 
  Cpu, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  Settings,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Layers,
  Wifi,
  Lock,
  Code,
  Boxes,
  Truck,
  Car,
  Calendar,
  BookOpen,
  FileText,
  FileSpreadsheet,
  Target,
  Activity,
  Bell,
  GraduationCap,
  Wrench,
  Search,
  Package,
  Clipboard,
  Plane,
  TrendingUp,
  Droplets,
  AlertTriangle,
  Smartphone,
  Award
} from 'lucide-react';

export const DigitalServices = () => {
  const ogesonePlatform = {
    title: "OgesOne Platform",
    description: "Comprehensive Technical ERP built specifically for upstream E&P operations. A unified platform connecting field operations, business intelligence, safety management, automation, and learning - all integrated seamlessly with your existing enterprise systems.",
    keyFeatures: [
      "End-to-end upstream operations management from wellhead to boardroom",
      "50+ pre-built connectors for seamless integration into existing IT infrastructure",
      "Real-time data synchronization across geology, drilling, production, and maintenance",
      "Cross-domain analytics and reporting for data-driven decision making",
      "Accelerates GCC operations through plug-and-play modules",
      "Cloud-native architecture with enterprise-grade security and scalability"
    ]
  };

  // Data connectors with software-specific visual representations
  const connectors = [
    { name: "SAP ECC & HANA", icon: "SAP", category: "ERP/Business Software", description: "Enterprise Resource Planning system for business and financial management", color: "#0073e6" },
    { name: "DecisionSpace 365", icon: "DS", category: "Subsurface Software", description: "Subsurface modelling software for geological analysis", color: "#2e5c85" },
    { name: "Petrel", icon: "P", category: "Subsurface Software", description: "Advanced subsurface modelling and reservoir characterization", color: "#1f5582" },
    { name: "IBM DB2", icon: "IBM", category: "Database", description: "Relational database management system", color: "#1261FE" },
    { name: "MySQL", icon: "🐬", category: "Database", description: "Relational database management system", color: "#4479A1" },
    { name: "OFM", icon: "OFM", category: "Production Software", description: "Operational data management for production monitoring", color: "#0066cc" },
    { name: "Proficy Historian", icon: "GE", category: "Real-time Data/SCADA", description: "Industrial data historian for time-series data storage and analysis", color: "#005A8B" },
    { name: "INTERSECT", icon: "IX", category: "Reservoir Simulation", description: "High-resolution reservoir simulator", color: "#ff6600" },
    { name: "tNavigator", icon: "tN", category: "Reservoir Simulation", description: "Advanced reservoir simulation software", color: "#0066cc" },
    { name: "Eclipse", icon: "ECL", category: "Reservoir Simulation", description: "Eclipse reservoir simulation software", color: "#ff8c00" },
    { name: "IMEX", icon: "IMEX", category: "Reservoir Simulation", description: "IMEX simulation software", color: "#cc0000" },
    { name: "Microsoft SQL Server", icon: "SQL", category: "Database", description: "Microsoft enterprise database system", color: "#CC2927" },
    { name: "OSIsoft", icon: "OSI", category: "Real-time Data/SCADA", description: "Real-time data infrastructure platform", color: "#FF6600" },
    { name: "COMPASS", icon: "⚓", category: "Directional Services", description: "Directional drilling services platform", color: "#4CAF50" }
  ];

  // Complete OgesOne Applications organized by domain
  const applications = [
    {
      domain: "Digital Oilfield",
      icon: Layers,
      description: "Advanced field operations and asset management",
      apps: [
        { name: "ARM", description: "Asset Resource Management for optimized production planning and resource allocation", icon: "📊" },
        { name: "Quick Drill", description: "Real-time drilling operations monitoring and optimization", icon: "⚡" },
        { name: "Opportunity Register", description: "Track and manage exploration and development opportunities", icon: "🎯" },
        { name: "DEWS", description: "Digital Engineering Workflow System for streamlined project execution", icon: "🔧" },
        { name: "CBL Assist", description: "Cement Bond Log analysis and well integrity assessment", icon: "🔍" }
      ]
    },
    {
      domain: "Oilfield Services",
      icon: Wrench,
      description: "Comprehensive service operations and logistics management",
      apps: [
        { name: "Tally", description: "Equipment and materials tracking for field operations", icon: Package },
        { name: "Well Services", description: "Complete well service operations management and scheduling", icon: "🛠️" },
        { name: "Well Program", description: "Well planning and program management from design to execution", icon: Clipboard },
        { name: "Travel Planner", description: "Workforce travel and accommodation management", icon: Plane }
      ]
    },
    {
      domain: "Business Intelligence",
      icon: BarChart3,
      description: "Real-time analytics and insights for informed decision-making",
      apps: [
        { name: "Production Insights", description: "Real-time production analytics and performance optimization", icon: TrendingUp },
        { name: "Vehicle Insights", description: "Fleet performance monitoring and utilization analytics", icon: Car },
        { name: "Fuel Insights", description: "Fuel consumption tracking and cost optimization", icon: Droplets },
        { name: "Market Dashboard", description: "Market trends, pricing analytics, and competitive intelligence", icon: Activity }
      ]
    },
    {
      domain: "HSE (Health, Safety & Environment)",
      icon: Shield,
      description: "Proactive safety management and risk mitigation",
      apps: [
        { name: "Identify Risk", description: "Hazard identification and risk assessment workflows", icon: AlertTriangle },
        { name: "Text2Safety", description: "SMS-based safety reporting and incident management", icon: Smartphone }
      ]
    },
    {
      domain: "Automation",
      icon: Zap,
      description: "Workflow automation and document management",
      apps: [
        { name: "DMS", description: "Document Management System for centralized file storage and version control", icon: FileText },
        { name: "Reminder Automation", description: "Automated reminders and notifications for critical tasks and deadlines", icon: Bell }
      ]
    },
    {
      domain: "Learning & Development",
      icon: GraduationCap,
      description: "Knowledge management and continuous learning",
      apps: [
        { name: "KMS", description: "Knowledge Management System for best practices and lessons learned", icon: BookOpen },
        { name: "LMS", description: "Learning Management System for training programs and certifications", icon: GraduationCap },
        { name: "CBMS", description: "Competency-Based Management System for skills tracking and development", icon: Award }
      ]
    },
    {
      domain: "Logistics",
      icon: Truck,
      description: "Comprehensive logistics and booking management",
      apps: [
        { name: "HVMS", description: "Heavy Vehicle Management System for fleet tracking and maintenance", icon: Truck },
        { name: "LVMS", description: "Light Vehicle Management System for car fleet operations", icon: Car },
        { name: "BMS", description: "Booking Management System for accommodation, flights, equipment, and services", icon: Calendar }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScaleIQHeader />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">DIGITAL</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Engineering Meets <span className="text-[#255073]">Digital Innovation</span>
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Digital is at the heart of next-generation energy operations. ScaleIQ offers the OgesOne platform - a comprehensive Technical ERP for upstream operations.
          </p>
        </div>
      </section>

      {/* OgesOne Platform Overview */}
      <section 
        className="py-24 bg-gradient-to-b from-white to-gray-50 relative"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_d6272460-f55e-475e-b13e-7a3e28ddb088/artifacts/oeds96om_image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-[#255073]/10 text-[#255073] border-[#255073]/30 mb-4 text-lg px-6 py-2">
              Platform Solution
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              OgesOne <span className="text-[#255073]">Platform</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              {ogesonePlatform.description}
            </p>
          </div>

          <Card className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Platform Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ogesonePlatform.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#255073] flex-shrink-0 mt-1" />
                  <span className="text-black/90 text-base">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Data Connectors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">50+ Data Connectors</h3>
            <p className="text-black/70 text-center mb-8 max-w-2xl mx-auto">
              Seamlessly integrate OgesOne with your existing enterprise systems, simulation software, and data sources
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {connectors.map((connector, index) => (
                <Card 
                  key={index} 
                  className="bg-black/5 border-black/10 hover:border-[#255073]/30 transition-all duration-300 group cursor-pointer"
                  title={connector.description}
                >
                  <div className="text-center p-4">
                    <div 
                      className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform flex items-center justify-center rounded-lg text-white font-bold text-sm"
                      style={{ backgroundColor: connector.color }}
                    >
                      {typeof connector.icon === 'string' ? (
                        connector.icon.length <= 4 ? (
                          <span className="text-white font-bold">{connector.icon}</span>
                        ) : (
                          <span className="text-lg">{connector.icon}</span>
                        )
                      ) : (
                        <connector.icon className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <p className="text-black/80 text-xs font-medium mb-1">{connector.name}</p>
                    <p className="text-black/50 text-xs">{connector.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OgesOne Applications by Domain - Side Tab Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
              <div className="w-12 h-0.5 bg-[#255073]" />
              <span className="text-lg font-medium tracking-wide">OGESONE APPLICATIONS</span>
              <div className="w-12 h-0.5 bg-[#255073]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              OgesOne <span className="text-[#255073]">Applications</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              25+ purpose-built applications covering multiple domains of upstream operations
            </p>
          </div>

          <OgesOneApplications />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#255073]/10 via-[#255073]/5 to-[#255073]/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            Ready to Transform Your Energy Operations?
          </h3>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            Explore OgesOne platform and see how it can accelerate your GCC setup and operations
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-[#255073] text-white hover:bg-[#255073]/90 rounded-none px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};