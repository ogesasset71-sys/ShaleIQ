import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Database, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Layers,
  Building2
} from 'lucide-react';

export const OgesOnePlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const platformFeatures = [
    {
      icon: Database,
      title: "Data Integration",
      description: "50+ connectors bridging data supply gaps with proprietary abstraction",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Cpu,
      title: "AI & ML Engine",
      description: "SAS-powered analytics engine for advanced processing and insights",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: BarChart3,
      title: "Cross-Domain Analytics",
      description: "Unified analysis across geology, drilling, production, and maintenance",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "LDAP/AD integration with granular access control and data residency compliance",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const applications = [
    {
      name: "ARM",
      category: "Reservoir & Production",
      description: "Asset Resource Management for optimized production planning"
    },
    {
      name: "Production Insights",
      category: "Reservoir & Production", 
      description: "Real-time production analytics and optimization recommendations"
    },
    {
      name: "ESPMS",
      category: "Well Services",
      description: "Electric Submersible Pump Management System"
    },
    {
      name: "PCPMS", 
      category: "Well Services",
      description: "Progressive Cavity Pump Management System"
    },
    {
      name: "Opportunity Register",
      category: "Subsurface & Other",
      description: "Track and manage exploration and development opportunities"
    }
  ];

  const hostingOptions = [
    {
      icon: Building2,
      title: "On-Premise",
      description: "Dedicated deployment with full customization"
    },
    {
      icon: Cloud,
      title: "Public Cloud", 
      description: "AWS/Azure hosting for scalability and cost-efficiency"
    },
    {
      icon: Lock,
      title: "Private Cloud",
      description: "Hybrid security with cloud scalability"
    }
  ];

  return (
    <section id="ogesone" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#00FFD1] mb-6">
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
            <span className="text-lg font-medium tracking-wide">OGESONE PLATFORM</span>
            <div className="w-12 h-0.5 bg-[#00FFD1]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-[#00FFD1]">ERP</span> for Energy Sector
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            A comprehensive Software Platform that hosts multiple applications, integrating data from various sources with AI and Machine Learning for intelligent workflow automation and decision-making.
          </p>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} border-white/10 hover:border-[#00FFD1]/30 transition-all duration-500 p-6 group text-center`}
              >
                <div className="w-12 h-12 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FFD1]/30 transition-colors">
                  <IconComponent className="h-6 w-6 text-[#00FFD1]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Detailed Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12 bg-black/50 border border-[#00FFD1]/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="applications" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              Applications
            </TabsTrigger>
            <TabsTrigger value="architecture" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              Architecture
            </TabsTrigger>
            <TabsTrigger value="hosting" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              Hosting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card className="bg-black/50 border-[#00FFD1]/20 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Game-Changing Solution</h3>
                  <div className="space-y-4 text-white/80">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#00FFD1] mt-1 flex-shrink-0" />
                      <p>Comprehensive Technical ERP for upstream E&P operations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#00FFD1] mt-1 flex-shrink-0" />
                      <p>Breaks down application silos with unified platform approach</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#00FFD1] mt-1 flex-shrink-0" />
                      <p>Eliminates need for multiple subscription models and complex integrations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#00FFD1] mt-1 flex-shrink-0" />
                      <p>Personalized desktop experience with seamless navigation</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Key Capabilities</h3>
                  <div className="space-y-3">
                    <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30">
                      Project Management
                    </Badge>
                    <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30 ml-2">
                      Data Analytics
                    </Badge>
                    <br />
                    <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30">
                      Asset Optimization
                    </Badge>
                    <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30 ml-2">
                      Compliance Tracking
                    </Badge>
                    <br />
                    <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30">
                      Workflow Automation
                    </Badge>
                    <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30 ml-2">
                      Real-time Monitoring
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="bg-black/50 border-[#00FFD1]/20 p-6 hover:border-[#00FFD1]/40 transition-colors">
                  <Badge className="bg-[#00FFD1]/10 text-[#00FFD1] border-[#00FFD1]/30 mb-3">
                    {app.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-white mb-2">{app.name}</h3>
                  <p className="text-white/70 text-sm">{app.description}</p>
                  <Button variant="ghost" className="w-full mt-4 text-[#00FFD1] hover:bg-[#00FFD1]/10">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black/50 border-[#00FFD1]/20 p-6">
                <Database className="h-8 w-8 text-[#00FFD1] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Data Adapters</h3>
                <p className="text-white/70 text-sm">Seamlessly integrate data from multiple applications, both Oges-developed and third-party</p>
              </Card>
              <Card className="bg-black/50 border-[#00FFD1]/20 p-6">
                <BarChart3 className="h-8 w-8 text-[#00FFD1] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Data Catalog</h3>
                <p className="text-white/70 text-sm">Automated metadata collection and search tools for data fitness evaluation</p>
              </Card>
              <Card className="bg-black/50 border-[#00FFD1]/20 p-6">
                <Settings className="h-8 w-8 text-[#00FFD1] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Orchestration</h3>
                <p className="text-white/70 text-sm">Server performance monitoring, job scheduling, and centralized database updates</p>
              </Card>
              <Card className="bg-black/50 border-[#00FFD1]/20 p-6">
                <Layers className="h-8 w-8 text-[#00FFD1] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Model Ops</h3>
                <p className="text-white/70 text-sm">Transform data into model ops layer with pipeline modification capabilities</p>
              </Card>
              <Card className="bg-black/50 border-[#00FFD1]/20 p-6">
                <Cpu className="h-8 w-8 text-[#00FFD1] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">SAS Analytics</h3>
                <p className="text-white/70 text-sm">Industry-leading backend analytics engine for strategic insights</p>
              </Card>
              <Card className="bg-black/50 border-[#00FFD1]/20 p-6">
                <BarChart3 className="h-8 w-8 text-[#00FFD1] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Dashboards</h3>
                <p className="text-white/70 text-sm">Custom dashboard design tools with real-time monitoring and permission control</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hosting" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hostingOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="bg-black/50 border-[#00FFD1]/20 p-6 text-center hover:border-[#00FFD1]/40 transition-colors">
                    <div className="w-16 h-16 bg-[#00FFD1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[#00FFD1]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-white/70 text-sm">{option.description}</p>
                  </Card>
                );
              })}
            </div>
            
            <Card className="bg-gradient-to-r from-[#00FFD1]/10 to-transparent border-[#00FFD1]/20 p-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-[#00FFD1] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Security & Compliance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80">
                    <div>
                      <p className="mb-2"><strong>Authentication:</strong> LDAP/AD integration with Single Sign-On (SSO)</p>
                      <p className="mb-2"><strong>Data Residency:</strong> Compliance with local data governance policies</p>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Access Control:</strong> Granular permission management at all levels</p>
                      <p className="mb-2"><strong>Data Archiving:</strong> Automated backups and disaster recovery</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Connectors Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">50+ Data Connectors</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Bridge data supply gaps with proprietary data abstraction for quick customization across Cloud Stores, Databases, ERP Systems, and more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['CMG Builder', 'Eclipse', 'EDM Suite', 'AWS S3', 'Azure', 'MongoDB', 'Oracle', 'SAP'].map((connector, index) => (
              <Card key={index} className="bg-black/30 border-[#00FFD1]/10 p-3 hover:border-[#00FFD1]/30 transition-colors">
                <p className="text-white/80 text-sm font-medium">{connector}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};