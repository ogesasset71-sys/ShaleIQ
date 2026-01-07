import React, { useState } from 'react';
import { Card } from './ui/card';
import { 
  Factory, 
  Drill, 
  Radar, 
  Workflow, 
  ShieldCheck, 
  Package2, 
  Wrench, 
  FileCheck2, 
  MapPin, 
  BarChart3, 
  Car, 
  Fuel, 
  LineChart, 
  AlertTriangle, 
  MessageSquare, 
  FolderOpen, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  Medal, 
  Truck, 
  Calendar 
} from 'lucide-react';

export const OgesOneApplications = () => {
  const [activeTab, setActiveTab] = useState('digital-oilfield');

  const ogesoneApps = [
    {
      id: 'digital-oilfield',
      domain: "Digital Oilfield",
      description: "Real-time field operations and asset management",
      color: "orange",
      apps: [
        { name: "ARM", description: "Asset Resource Management for optimized production planning and resource allocation", icon: Factory, color: "bg-orange-500" },
        { name: "Quick Drill", description: "Real-time drilling operations monitoring and optimization", icon: Drill, color: "bg-red-500" },
        { name: "Opportunity Register", description: "Track and manage exploration and development opportunities", icon: Radar, color: "bg-purple-500" },
        { name: "DEWS", description: "Digital Engineering Workflow System for streamlined project execution", icon: Workflow, color: "bg-indigo-500" },
        { name: "CBL Assist", description: "Cement Bond Log analysis and well integrity assessment", icon: ShieldCheck, color: "bg-emerald-500" }
      ]
    },
    {
      id: 'oilfield-services',
      domain: "Oilfield Services",
      description: "Comprehensive service operations and logistics management",
      color: "blue",
      apps: [
        { name: "Tally", description: "Equipment and materials tracking for field operations", icon: Package2, color: "bg-cyan-500" },
        { name: "Well Services", description: "Complete well service operations management and scheduling", icon: Wrench, color: "bg-amber-500" },
        { name: "Well Program", description: "Well planning and program management from design to execution", icon: FileCheck2, color: "bg-green-500" },
        { name: "Travel Planner", description: "Workforce travel and accommodation management", icon: MapPin, color: "bg-rose-500" }
      ]
    },
    {
      id: 'business-intelligence',
      domain: "Business Intelligence",
      description: "Real-time analytics and insights for informed decision-making",
      color: "green",
      apps: [
        { name: "Production Insights", description: "Real-time production analytics and performance optimization", icon: BarChart3, color: "bg-teal-500" },
        { name: "Vehicle Insights", description: "Fleet performance monitoring and utilization analytics", icon: Car, color: "bg-blue-500" },
        { name: "Fuel Insights", description: "Fuel consumption tracking and cost optimization", icon: Fuel, color: "bg-yellow-500" },
        { name: "Market Dashboard", description: "Market trends, pricing analytics, and competitive intelligence", icon: LineChart, color: "bg-violet-500" }
      ]
    },
    {
      id: 'hse',
      domain: "HSE (Health, Safety & Environment)",
      description: "Proactive safety management and risk mitigation",
      color: "red",
      apps: [
        { name: "Identify Risk", description: "Hazard identification and risk assessment workflows", icon: AlertTriangle, color: "bg-red-600" },
        { name: "Text2Safety", description: "SMS-based safety reporting and incident management", icon: MessageSquare, color: "bg-orange-600" }
      ]
    },
    {
      id: 'automation',
      domain: "Automation",
      description: "Workflow automation and document management",
      color: "purple",
      apps: [
        { name: "DMS", description: "Document Management System for centralized file storage and version control", icon: FolderOpen, color: "bg-slate-500" },
        { name: "Reminder Automation", description: "Automated reminders and notifications for critical tasks and deadlines", icon: Clock, color: "bg-pink-500" }
      ]
    },
    {
      id: 'learning',
      domain: "Learning & Development",
      description: "Knowledge management and continuous learning",
      color: "teal",
      apps: [
        { name: "KMS", description: "Knowledge Management System for best practices and lessons learned", icon: BookOpen, color: "bg-lime-500" },
        { name: "LMS", description: "Learning Management System for training programs and certifications", icon: GraduationCap, color: "bg-sky-500" },
        { name: "CBMS", description: "Competency-Based Management System for skills tracking and development", icon: Medal, color: "bg-fuchsia-500" }
      ]
    },
    {
      id: 'logistics',
      domain: "Logistics",
      description: "Comprehensive logistics and booking management",
      color: "gray",
      apps: [
        { name: "HVMS", description: "Heavy Vehicle Management System for fleet tracking and maintenance", icon: Truck, color: "bg-gray-600" },
        { name: "LVMS", description: "Light Vehicle Management System for car fleet operations", icon: Car, color: "bg-zinc-500" },
        { name: "BMS", description: "Booking Management System for accommodation, flights, equipment, and services", icon: Calendar, color: "bg-neutral-500" }
      ]
    }
  ];

  const activeTabData = ogesoneApps.find(tab => tab.id === activeTab);

  return (
    <div className="bg-white">
      {/* Domain Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-2 mb-8">
        {ogesoneApps.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 text-sm font-medium rounded-lg transition-all duration-300 text-left ${
              activeTab === tab.id
                ? 'bg-[#255073] text-white shadow-lg'
                : 'bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md'
            }`}
          >
            <div className="font-semibold mb-1">{tab.domain}</div>
            <div className={`text-xs ${activeTab === tab.id ? 'text-white/80' : 'text-gray-600'}`}>
              {tab.description}
            </div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      {activeTabData && (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-black mb-2">{activeTabData.domain}</h3>
            <p className="text-gray-700">{activeTabData.description}</p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTabData.apps.map((app, appIndex) => (
              <Card key={appIndex} className="bg-gradient-to-br from-gray-50 to-white border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-5 hover:shadow-lg">
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center shadow-md`}>
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#255073] font-bold text-lg mb-2">{app.name}</h4>
                    <p className="text-black/70 text-sm leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};