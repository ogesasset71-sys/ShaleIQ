import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const ScaleIQHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if we're on homepage by looking at pathname
    setIsHomePage(window.location.pathname === '/');
  }, []);

  const scrollToSection = (sectionId) => {
    // If not on homepage, navigate to homepage with hash
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on homepage, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-400 ${
      isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md border-b border-black/10 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <img 
                src="/scaleiq-logo.png" 
                alt="ScaleIQ" 
                className="h-8 sm:h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="/"
              className={`transition-colors text-base font-medium cursor-pointer ${
                isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
              }`}
            >
              Home
            </a>
            <a 
              href="/gcc-setup"
              className={`transition-colors text-base font-medium cursor-pointer ${
                isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
              }`}
            >
              Setup GCC in India
            </a>
            <a 
              href="/engineering"
              className={`transition-colors text-base font-medium cursor-pointer ${
                isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
              }`}
            >
              Engineering
            </a>
            <a 
              href="/digital"
              className={`transition-colors text-base font-medium cursor-pointer ${
                isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
              }`}
            >
              Digital
            </a>
            <a 
              href="/rnd"
              className={`transition-colors text-base font-medium cursor-pointer ${
                isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
              }`}
            >
              R&D
            </a>
            <a 
              href="/case-studies"
              className={`transition-colors text-base font-medium cursor-pointer ${
                isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
              }`}
            >
              Case Studies
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#255073] hover:bg-[#255073]/90 text-white rounded-none px-6 py-2.5 text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`lg:hidden mt-4 py-4 rounded-lg ${
            isScrolled || !isHomePage 
              ? 'border-t border-black/10 bg-white/95 backdrop-blur-md' 
              : 'border-t border-white/20 bg-black/50 backdrop-blur-md'
          }`}>
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="/"
                className={`transition-colors text-base font-medium py-2 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/gcc-setup"
                className={`transition-colors text-base font-medium py-2 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Setup GCC in India
              </a>
              <a 
                href="/engineering"
                className={`transition-colors text-base font-medium py-2 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Engineering
              </a>
              <a 
                href="/digital"
                className={`transition-colors text-base font-medium py-2 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Digital
              </a>
              <a 
                href="/rnd"
                className={`transition-colors text-base font-medium py-2 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                R&D
              </a>
              <a 
                href="/case-studies"
                className={`transition-colors text-base font-medium py-2 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-[#255073]' : 'text-white hover:text-[#255073] drop-shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </a>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#255073] hover:bg-[#255073]/90 text-white rounded-none px-6 py-2.5 text-sm font-medium mt-2 w-full"
              >
                Contact Us
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};