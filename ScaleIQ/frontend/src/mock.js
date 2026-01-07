// Mock data for ScaleIQ Landing Page

export const mockData = {
  // Company Information
  company: {
    name: "ScaleIQ",
    tagline: "Upstream Oil & Gas",
    mission: "Accelerating Cloud & AI Transformation for Energy Leaders",
    description: "We help upstream oil & gas enterprises modernize, innovate, and scale with the power of cloud computing, advanced data analytics, and AI/ML solutions."
  },

  // Management Team - Upstream Oil & Gas Industry Leaders
  managementTeam: [
    {
      id: 1,
      name: "Rajeev Sonthalia",
      position: "CEO & Founder",
      company: "SLB (Schlumberger) & Aditya Birla Group",
      background: "Seasoned energy industry executive with leadership experience at SLB (Schlumberger Limited) and Aditya Birla Group. Proven track record in digital transformation, reducing operational risk, enhancing productivity, and shortening cycle times in energy operations.",
      expertise: ["Digital Energy Transformation", "Strategic Leadership", "Oil & Gas Operations", "Technology Innovation"],
      image: "https://customer-assets.emergentagent.com/job_energy-consult/artifacts/kl4u3lki_Rajeev%20Sir.webp",
      linkedin: "https://in.linkedin.com/in/rajeev-sonthalia-aa030a"
    },
    {
      id: 2,
      name: "Chief Operating Officer",
      position: "COO", 
      company: "Oil & Gas Service Provider & Software Company",
      background: "20+ years industry veteran with 10 years delivering oil & gas projects for renowned service provider, followed by 10 years leading a specialized upstream software company",
      expertise: ["Operations Management", "Project Delivery", "Software Solutions"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Head of Deliveries",
      position: "Head of Deliveries",
      company: "Multiple Upstream Software Platforms",
      background: "Extensive experience in multiple software platform deliveries in upstream operations with expertise in SAS and open-source based ML architecture implementations",
      expertise: ["Software Delivery", "ML Architecture", "SAS Platforms"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
      linkedin: "#"
    }
  ],

  // Advisory Board & Investors
  advisoryBoard: [
    {
      id: 1,
      name: "Strategic Technology Advisor",
      position: "Former CTO",
      company: "Major Energy Corporation",
      background: "Former CTO with 25+ years in upstream technology leadership",
      expertise: ["Strategic Planning", "Technology Roadmaps"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      name: "Investment Partner",
      position: "Managing Partner",
      company: "Energy Technology Ventures",
      background: "Managing Partner at leading energy technology venture fund, focused on upstream innovation investments",
      expertise: ["Investment Strategy", "Market Analysis"],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face&auto=format"
    }
  ],

  // Process Steps
  processSteps: [
    {
      id: 1,
      title: "Assess",
      description: "Comprehensive evaluation of current upstream systems, data infrastructure, and operational workflows",
      details: ["Legacy system audit", "Data assessment", "Security review", "Performance analysis"],
      duration: "2-4 weeks"
    },
    {
      id: 2,
      title: "Plan",
      description: "Strategic roadmap development with phased migration approach and clear ROI projections",
      details: ["Migration strategy", "Architecture design", "Risk assessment", "Timeline planning"],
      duration: "3-6 weeks"
    },
    {
      id: 3,
      title: "Migrate",
      description: "Systematic migration of upstream applications and data with minimal operational disruption",
      details: ["Phased migration", "Data transfer", "System integration", "Testing & validation"],
      duration: "3-12 months"
    },
    {
      id: 4,
      title: "Optimize",
      description: "Performance tuning, cost optimization, and advanced analytics implementation",
      details: ["Performance optimization", "Cost management", "Analytics setup", "Monitoring"],
      duration: "Ongoing"
    },
    {
      id: 5,
      title: "Innovate",
      description: "Advanced AI/ML implementation for predictive analytics and operational intelligence",
      details: ["AI model development", "Advanced analytics", "Automation", "Continuous improvement"],
      duration: "Ongoing"
    }
  ],

  // Case Studies (Generic Oil & Gas)
  caseStudies: [
    {
      id: 1,
      title: "AI Hackathon with Real Upstream Use Case Implementation",
      industry: "Southeast Asia NOC",
      challenge: "Major NOC operator in Southeast Asia needed rapid AI solution development for complex upstream challenges while building internal capabilities",
      solution: "Organized intensive AI hackathon with real-world upstream use cases, delivering production-ready AI solutions and knowledge transfer",
      results: {
        costReduction: "100x ROI in 1st year",
        performanceGain: "Advanced AI capabilities built",
        roiTimeline: "12 months"
      },
      technologies: ["Machine Learning", "Real-time Analytics", "Knowledge Transfer"]
    },
    {
      id: 2,
      title: "AI Based Reservoir Modelling Implementation",
      industry: "Upstream Field Operations",
      challenge: "Existing field with declining production and limited understanding of remaining reserves potential requiring advanced reservoir characterization",
      solution: "Implemented comprehensive AI-based reservoir modeling with advanced machine learning algorithms for enhanced recovery optimization",
      results: {
        reservesIdentified: "200x worth of extra oil reserves",
        productionIncrease: "45% increase in field production",
        roiTimeline: "6 months"
      },
      technologies: ["AI Reservoir Modeling", "Machine Learning", "Production Optimization"]
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Chief Technology Officer",
      position: "CTO",
      company: "Regional Energy Corporation",
      quote: "ScaleIQ transformed our entire upstream data infrastructure. Their expertise in both oil & gas operations and cloud technology is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "VP Digital Innovation",
      position: "VP Digital Innovation",
      company: "Global Energy Solutions Inc.",
      quote: "The AI-driven insights we now have for reservoir management have improved our production forecasting accuracy by 40%.",
      rating: 5
    }
  ],

  // ROI Calculator Data
  roiCalculator: {
    scenarios: [
      {
        name: "Small Producer",
        currentCosts: 500000,
        projectedSavings: 0.25,
        implementationCost: 150000,
        timeline: 12
      },
      {
        name: "Mid-size Company",
        currentCosts: 2000000,
        projectedSavings: 0.35,
        implementationCost: 400000,
        timeline: 18
      },
      {
        name: "Major Producer",
        currentCosts: 10000000,
        projectedSavings: 0.45,
        implementationCost: 1500000,
        timeline: 24
      }
    ]
  },

  // Insights/Resources
  insights: [
    {
      id: 1,
      title: "The Future of Cloud in Upstream Oil & Gas",
      description: "How cloud technology is revolutionizing upstream operations from exploration to production",
      type: "Whitepaper",
      readTime: "15 min",
      category: "Cloud Strategy"
    },
    {
      id: 2,
      title: "AI-Driven Reservoir Optimization: Case Study",
      description: "Real-world implementation of machine learning for enhanced oil recovery",
      type: "Case Study",
      readTime: "10 min",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Digital Transformation ROI in Energy",
      description: "Measuring and maximizing returns on upstream digital investments",
      type: "Research Report",
      readTime: "20 min",
      category: "Digital Strategy"
    }
  ],

  // Contact Form Fields
  contactForm: {
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "position", label: "Job Title", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { name: "projectType", label: "Project Type", type: "select", required: true, 
        options: ["Complete GCC Setup", "Staffing Services", "Core Engineering Services", "Standalone Digital Solutions Implementation", "Others"] },
      { name: "budget", label: "Project Budget", type: "select", required: false,
        options: ["Under $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M+"] },
      { name: "timeline", label: "Project Timeline", type: "select", required: true,
        options: ["ASAP", "1-3 months", "3-6 months", "6-12 months", "12+ months"] },
      { name: "message", label: "Project Details", type: "textarea", required: true }
    ]
  }
};