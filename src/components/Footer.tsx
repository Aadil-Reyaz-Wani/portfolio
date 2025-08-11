import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-background to-surface text-text py-24 relative overflow-hidden shadow-2xl shadow-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Branding Section */}
          <div className="mb-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aadil Reyaz Wani
            </h3>
            <p className="text-xl md:text-2xl text-textSecondary font-medium max-w-3xl mx-auto leading-relaxed">
              Android Developer passionate about crafting innovative and user-centric mobile experiences.
            </p>
          </div>

          {/* Divider and Bottom Content */}
          <div className="border-t border-border/30 pt-10 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-textSecondary text-sm md:text-base mb-6 md:mb-0">
                © {new Date().getFullYear()} Aadil Reyaz Wani. All rights reserved.
              </p>
              
              {/* Scroll to Top Button */}
              <div className="flex items-center">
                <button
                  onClick={scrollToTop}
                  className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
