
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      window.scrollTo({
        top: overviewSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sosikaDark/90 via-sosikaDark to-sosikaDark/90 z-0"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl sosika-logo mb-6 animate-fade-in">
          <span className="text-white">Sosika</span>
          <span className="text-sosikaBlue">.</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-white mb-8 max-w-3xl mx-auto animate-slide-up">
          Redefining Campus Food Delivery in Tanzania
        </p>
        
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-3xl mx-auto border border-sosikaBlue/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-300 mb-4">
            Connecting hungry students with local food vendors through a 
            campus-specific food delivery platform built for Tanzania's digital-native youth.
          </p>
          <p className="text-sosikaBlue font-medium">
            Starting at IAA and expanding across East Africa
          </p>
        </div>
        
        {/* Scroll Down Indicator */}
        <button 
          onClick={scrollToOverview}
          className="mt-12 text-sosikaBlue hover:text-white transition-colors duration-300 animate-slide-up flex flex-col items-center"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="mb-2">Learn More</span>
          <ArrowDownCircle className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
