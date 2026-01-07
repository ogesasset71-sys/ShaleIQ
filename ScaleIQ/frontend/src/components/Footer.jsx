import React from 'react';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    // Check if we're on homepage
    const isHomePage = window.location.pathname === '/';
    
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img 
                src="/scaleiq-logo.png" 
                alt="ScaleIQ" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-black/70 mb-6 leading-relaxed">
                Accelerating cloud and AI transformation for upstream oil & gas enterprises with proven expertise and innovative solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#255073]" />
                  <span className="text-black/70 text-sm">contact@scaleiqglobal.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#255073]" />
                  <span className="text-black/70 text-sm">+91(124) 420-0563</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-[#255073]" />
                  <span className="text-black/70 text-sm">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-black font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/gcc-setup"
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer"
                  >
                    India GCC Setup
                  </a>
                </li>
                <li>
                  <a 
                    href="/engineering"
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer"
                  >
                    Engineering Services
                  </a>
                </li>
                <li>
                  <a 
                    href="/digital"
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer"
                  >
                    Digital Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="/rnd"
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer"
                  >
                    R&D Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-black font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('team')}
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer text-left"
                  >
                    Leadership Team
                  </button>
                </li>
                <li>
                  <a 
                    href="/case-studies"
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('engagement')}
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer text-left"
                  >
                    Engagement Model
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-black font-semibold mb-6">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-black/70 hover:text-[#255073] transition-colors text-sm cursor-pointer text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <span className="text-black/70 text-sm">Blog (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-black/70 text-sm">Resources (Coming Soon)</span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-black font-medium mb-3 text-sm">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-[#255073]/20 rounded-lg flex items-center justify-center hover:bg-[#255073]/30 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-[#255073]" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-[#255073]/20 rounded-lg flex items-center justify-center hover:bg-[#255073]/30 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-[#255073]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-black/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-black/60 text-sm mb-4 md:mb-0">
            © 2024 ScaleIQ. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-black/60 hover:text-[#255073] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-black/60 hover:text-[#255073] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-black/60 hover:text-[#255073] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};