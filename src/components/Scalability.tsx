
import React from 'react';
import { Flag, BarChart4, Globe } from 'lucide-react';

const Scalability = () => {
  return (
    <section id="scalability" className="section bg-sosikaDark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Scalability Framework</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="phase-card">
            <Flag className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Phase 1: Campus Dominance</h3>
            <p className="text-gray-400 text-sm mb-4">Tanzania Pilot</p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Focus on schools where over 60% of student meals are sourced off-campus
              </li>
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Leverage WhatsApp-based referrals, which perform 22% better than paid ads
              </li>
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Achieve 70% campus market share in under 2 years with price-friendly, Swahili-localized menus
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Target Campuses:</p>
              <p className="text-white">IAA, UDSM, Ardhi University</p>
            </div>
          </div>
          
          <div className="phase-card">
            <BarChart4 className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Phase 2: Regional Clustering</h3>
            <p className="text-gray-400 text-sm mb-4">Northern & Central Tanzania</p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Expand to clusters like Arusha, Dodoma, Moshi, and Morogoro
              </li>
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Build shared cloud kitchens across campuses to reduce overhead
              </li>
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Introduce inter-campus delivery networks, gaining up to 35% delivery efficiency
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Key Strategy:</p>
              <p className="text-white">Geographical clustering for operational efficiency</p>
            </div>
          </div>
          
          <div className="phase-card">
            <Globe className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Phase 3: Pan-African Expansion</h3>
            <p className="text-gray-400 text-sm mb-4">East African Community</p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Target East African Community (EAC) campuses and tech hubs
              </li>
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Use a modular architecture to adapt to each country's needs
              </li>
              <li>
                <span className="text-sosikaBlue mr-2">•</span>
                Acquire regional startups at 3.5–5x revenue multiples
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Local Adaptations:</p>
              <p className="text-white">M-Pesa in Kenya/Tanzania, Halal options in Zanzibar/Uganda</p>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 mb-12">
          <h3 className="text-2xl text-sosikaBlue mb-4 text-center">Market Expansion Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sosikaBlue mb-2">Campus Selection Criteria</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Student population density
                </li>
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Limited on-campus dining options
                </li>
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Smartphone penetration
                </li>
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Proximity to food vendors
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sosikaBlue mb-2">Growth Acceleration Levers</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Campus ambassador programs
                </li>
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Strategic university partnerships
                </li>
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Student organization sponsorships
                </li>
                <li>
                  <span className="text-sosikaBlue mr-2">→</span>
                  Localized promotional events
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
          <h3 className="text-2xl text-sosikaBlue mb-6 text-center">Expansion Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-0.5 bg-sosikaBlue/30"></div>
            
            {/* Timeline Items */}
            <div className="ml-8 md:ml-0 relative">
              {/* Year 1 */}
              <div className="md:flex md:items-center mb-12">
                <div className="hidden md:block md:w-1/2 pr-8 text-right">
                  <h4 className="text-sosikaBlue text-lg mb-2">Year 1: Pilot Phase</h4>
                  <p className="text-gray-300">Launch at IAA with initial 3 campuses in Tanzania</p>
                </div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 transform -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-sosikaDark border-2 border-sosikaBlue z-10"></div>
                <div className="md:hidden">
                  <h4 className="text-sosikaBlue text-lg mb-2">Year 1: Pilot Phase</h4>
                  <p className="text-gray-300">Launch at IAA with initial 3 campuses in Tanzania</p>
                </div>
                <div className="hidden md:block md:w-1/2 pl-8"></div>
              </div>
              
              {/* Year 2 */}
              <div className="md:flex md:items-center mb-12">
                <div className="hidden md:block md:w-1/2 pr-8"></div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 transform -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-sosikaDark border-2 border-sosikaBlue z-10"></div>
                <div className="md:w-1/2 pl-0 md:pl-8">
                  <h4 className="text-sosikaBlue text-lg mb-2">Year 2: Regional Growth</h4>
                  <p className="text-gray-300">Expand to 8-12 campuses in Northern & Central Tanzania</p>
                </div>
              </div>
              
              {/* Year 3 */}
              <div className="md:flex md:items-center mb-12">
                <div className="hidden md:block md:w-1/2 pr-8 text-right">
                  <h4 className="text-sosikaBlue text-lg mb-2">Year 3: National Coverage</h4>
                  <p className="text-gray-300">Present in all major Tanzanian universities</p>
                </div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 transform -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-sosikaDark border-2 border-sosikaBlue z-10"></div>
                <div className="md:hidden">
                  <h4 className="text-sosikaBlue text-lg mb-2">Year 3: National Coverage</h4>
                  <p className="text-gray-300">Present in all major Tanzanian universities</p>
                </div>
                <div className="hidden md:block md:w-1/2 pl-8"></div>
              </div>
              
              {/* Year 4-5 */}
              <div className="md:flex md:items-center">
                <div className="hidden md:block md:w-1/2 pr-8"></div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 transform -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-sosikaDark border-2 border-sosikaBlue z-10"></div>
                <div className="md:w-1/2 pl-0 md:pl-8">
                  <h4 className="text-sosikaBlue text-lg mb-2">Year 4-5: East African Expansion</h4>
                  <p className="text-gray-300">Entry into Kenya, Uganda, and other EAC markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scalability;
