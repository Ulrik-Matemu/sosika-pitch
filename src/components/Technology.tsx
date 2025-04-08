
import React from 'react';
import { Brain, FileCode, Smartphone } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-sosikaDark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technology Stack Advantages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <Brain className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">AI Demand Forecasting</h3>
            <p className="text-gray-300 mb-4">
              Smart algorithms predict campus food demand patterns based on class schedules, 
              events, and historical orders.
            </p>
            <div className="bg-sosikaBlue/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-bold">Impact:</span> Reduces food waste by up to 28%, 
                especially important in regions with food insecurity concerns.
              </p>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <FileCode className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Blockchain Delivery Tracking</h3>
            <p className="text-gray-300 mb-4">
              Transparent, tamper-proof delivery tracking system builds trust between 
              students, runners, and food vendors.
            </p>
            <div className="bg-sosikaBlue/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-bold">Result:</span> Improves order accuracy to 99.4% 
                and builds trust in a cash-preferred society.
              </p>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <Smartphone className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">AR Menus</h3>
            <p className="text-gray-300 mb-4">
              Optional augmented reality menus for higher-end vendors, allowing students 
              to see dishes before ordering.
            </p>
            <div className="bg-sosikaBlue/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-bold">Performance:</span> Increases upselling by 19%, 
                especially for fast foods, juices, and snacks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 mb-12">
          <h3 className="text-2xl text-sosikaBlue mb-4 text-center">Technical Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sosikaBlue mb-3">Frontend Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Progressive Web App for cross-platform compatibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Offline-first design for inconsistent campus Wi-Fi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Low-bandwidth optimized UI for affordable data plans
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  WhatsApp integration for order notifications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Real-time order tracking with minimal data usage
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sosikaBlue mb-3">Backend & Infrastructure</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Microservices architecture for modular expansion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Local cloud hosting with regional edge deployments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  API-first design for third-party integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  M-Pesa and mobile money payment gateways
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sosikaBlue mr-1">•</span>
                  Data anonymization for privacy compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
          <h3 className="text-2xl text-sosikaBlue mb-4 text-center">Technology Roadmap</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-3 border-r-0 md:border-r border-sosikaBlue/20">
                <div className="text-sosikaBlue font-bold mb-2">Q3-Q4 2024</div>
                <p className="text-gray-300 text-sm">MVP Launch & Initial Testing</p>
              </div>
              <div className="text-center p-3 border-r-0 md:border-r border-sosikaBlue/20">
                <div className="text-sosikaBlue font-bold mb-2">Q1-Q2 2025</div>
                <p className="text-gray-300 text-sm">Payment & Logistics Optimization</p>
              </div>
              <div className="text-center p-3 border-r-0 md:border-r border-sosikaBlue/20">
                <div className="text-sosikaBlue font-bold mb-2">Q3-Q4 2025</div>
                <p className="text-gray-300 text-sm">AI & Analytics Integration</p>
              </div>
              <div className="text-center p-3">
                <div className="text-sosikaBlue font-bold mb-2">2026</div>
                <p className="text-gray-300 text-sm">Regional Expansion Features</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-sosikaBlue/20">
              <h4 className="text-sosikaBlue mb-3 text-center">Future Technology Innovations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sosikaBlue/5 p-3 rounded-lg">
                  <p className="text-white">
                    <span className="font-bold text-sosikaBlue">Drone delivery pilots</span> for remote campus areas
                  </p>
                </div>
                <div className="bg-sosikaBlue/5 p-3 rounded-lg">
                  <p className="text-white">
                    <span className="font-bold text-sosikaBlue">Voice ordering</span> for language and accessibility inclusion
                  </p>
                </div>
                <div className="bg-sosikaBlue/5 p-3 rounded-lg">
                  <p className="text-white">
                    <span className="font-bold text-sosikaBlue">Smart vending machines</span> integration for 24/7 access
                  </p>
                </div>
                <div className="bg-sosikaBlue/5 p-3 rounded-lg">
                  <p className="text-white">
                    <span className="font-bold text-sosikaBlue">Nutritional AI</span> for personalized student meal suggestions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
