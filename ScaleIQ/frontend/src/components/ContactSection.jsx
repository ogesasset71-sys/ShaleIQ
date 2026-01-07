import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Zap
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    project_type: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Real API call to backend
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          company: formData.company,
          position: formData.position,
          phone: formData.phone,
          project_type: formData.project_type,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            position: '',
            phone: '',
            project_type: '',
            budget: '',
            timeline: '',
            message: ''
          });
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You could add error handling UI here
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Mumbai, India", "Global Delivery Centers"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91(124) 420-0563", "24/7 Support Available"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@scaleiqglobal.com", "partnerships@scaleiq.co.in"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM IST", "Weekend Support Available"]
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 rounded-lg p-12">
            <CheckCircle className="h-16 w-16 text-[#255073] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-black mb-4">Thank You!</h3>
            <p className="text-black/70 mb-6">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <p className="text-sm text-black/60">
              Our team will review your requirements and schedule a consultation call at your convenience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
            <div className="w-12 h-0.5 bg-[#255073]" />
            <span className="text-lg font-medium tracking-wide">GET IN TOUCH</span>
            <div className="w-12 h-0.5 bg-[#255073]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Scale Your <span className="text-[#255073]">Energy Operations</span>?
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Connect with our experts to discuss your GCC setup, engineering needs, or digital transformation requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-black/10 p-8">
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
                <div className="w-12 h-0.5 bg-[#255073]" />
                <span className="text-lg font-medium tracking-wide">START YOUR JOURNEY</span>
                <div className="w-12 h-0.5 bg-[#255073]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Let's Discuss Your Project
              </h3>
              <p className="text-black/70">
                Tell us about your requirements and we'll provide a customized solution approach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                    placeholder="Your job title/position"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                    placeholder="+1 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                  >
                    <option value="">Select project type</option>
                    <option value="India GCC Setup">India GCC Setup</option>
                    <option value="Engineering Services">Engineering Services</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="R&D Services">R&D Services</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                    <option value="Short-term (1-3 months)">Short-term (1-3 months)</option>
                    <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
                    <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black"
                  >
                    <option value="">Select budget range</option>
                    <option value="< $50K">&lt; $50K</option>
                    <option value="$50K - $100K">$50K - $100K</option>
                    <option value="$100K - $500K">$100K - $500K</option>
                    <option value="$500K - $1M">$500K - $1M</option>
                    <option value="$1M+">$1M+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-black/20 rounded-none focus:border-[#255073] focus:ring-1 focus:ring-[#255073] bg-white text-black resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#255073] hover:bg-[#255073]/90 text-white rounded-none py-4 text-lg font-medium transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-center space-x-3 text-[#255073] mb-6">
                <div className="w-12 h-0.5 bg-[#255073]" />
                <span className="text-lg font-medium tracking-wide">CONTACT INFORMATION</span>
                <div className="w-12 h-0.5 bg-[#255073]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Multiple Ways to <span className="text-[#255073]">Connect</span>
              </h3>
              <p className="text-black/70 mb-8">
                Choose the most convenient way to reach out to our team. We're here to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-white border-black/10 hover:border-[#255073]/30 transition-all duration-300 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#255073]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-[#255073]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-black mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className={`${detailIndex === 0 ? 'text-black font-medium' : 'text-black/60 text-sm'} ${detailIndex > 0 ? 'mt-1' : ''}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-to-br from-[#255073]/10 to-transparent border-[#255073]/20 p-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-[#255073] flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-black mb-2">Quick Response Guarantee</h4>
                  <p className="text-black/70 text-sm mb-3">
                    We understand the urgency of energy projects. Our commitment:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#255073]" />
                      <span className="text-black/70">Initial response within 4 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#255073]" />
                      <span className="text-black/70">Detailed proposal within 48 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#255073]" />
                      <span className="text-black/70">24/7 support for urgent requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};