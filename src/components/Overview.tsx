
import React from 'react';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="section bg-sosikaDark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Market Opportunity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="stat-card">
            <TrendingUp className="mx-auto h-12 w-12 text-sosikaBlue mb-4" />
            <div className="text-4xl font-bold text-sosikaBlue mb-2">$1.57T</div>
            <p className="text-sm text-gray-300">Global online food delivery by 2030</p>
            <p className="text-xs text-gray-400 mt-2">15.01% CAGR from 2025</p>
          </div>
          
          <div className="stat-card">
            <Users className="mx-auto h-12 w-12 text-sosikaBlue mb-4" />
            <div className="text-4xl font-bold text-sosikaBlue mb-2">32M+</div>
            <p className="text-sm text-gray-300">Internet users in Tanzania (2024)</p>
            <p className="text-xs text-gray-400 mt-2">Growing rapidly</p>
          </div>
          
          <div className="stat-card">
            <CheckCircle className="mx-auto h-12 w-12 text-sosikaBlue mb-4" />
            <div className="text-4xl font-bold text-sosikaBlue mb-2">60%+</div>
            <p className="text-sm text-gray-300">Youth population in Tanzania</p>
            <p className="text-xs text-gray-400 mt-2">Digital-native demographic</p>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 mb-12">
          <h3 className="text-2xl text-sosikaBlue mb-4">Strategic Positioning</h3>
          <p className="text-gray-300 mb-4">
            Sosika is strategically positioned to tap into Tanzania's digital-native youth demographic, 
            starting from IAA (Institute of Accountancy Arusha) and expanding regionally.
          </p>
          <p className="text-gray-300">
            With mobile internet penetration continuing to rise and the youth making up over 60% of the 
            population, we're targeting the untapped campus food delivery market in East Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
            <h3 className="text-xl text-sosikaBlue mb-4">Unique Market Opportunity</h3>
            <ul className="space-y-3">
              <li className="bullet-point">
                <CheckCircle className="bullet-icon h-5 w-5" />
                <span className="text-gray-300">Campus-focused strategy in an underserved market</span>
              </li>
              <li className="bullet-point">
                <CheckCircle className="bullet-icon h-5 w-5" />
                <span className="text-gray-300">Rising smartphone adoption among university students</span>
              </li>
              <li className="bullet-point">
                <CheckCircle className="bullet-icon h-5 w-5" />
                <span className="text-gray-300">Limited competition in the campus-specific delivery space</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
            <h3 className="text-xl text-sosikaBlue mb-4">Initial Target Market</h3>
            <ul className="space-y-3">
              <li className="bullet-point">
                <CheckCircle className="bullet-icon h-5 w-5" />
                <span className="text-gray-300">IAA (Institute of Accountancy Arusha) - First campus</span>
              </li>
              <li className="bullet-point">
                <CheckCircle className="bullet-icon h-5 w-5" />
                <span className="text-gray-300">UDSM (University of Dar es Salaam) - Expansion</span>
              </li>
              <li className="bullet-point">
                <CheckCircle className="bullet-icon h-5 w-5" />
                <span className="text-gray-300">Ardhi University - Growth phase</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
