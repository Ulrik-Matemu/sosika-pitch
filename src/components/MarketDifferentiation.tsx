
import React from 'react';
import { Users, MapPin, CreditCard } from 'lucide-react';

const MarketDifferentiation = () => {
  return (
    <section id="solution" className="section bg-sosikaDark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Market Differentiation</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Our campus-specific model provides unique advantages in the Tanzanian market
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <Users className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Localized Peer-to-Peer Logistics</h3>
            <p className="text-gray-300 mb-4">
              Reduce delivery costs by leveraging students' natural movements across campus, 
              similar to JoyRun's model in the U.S.
            </p>
            <div className="bg-sosikaBlue/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-bold">Key Insight:</span> In the U.S., 80% of campus 
                deliveries came from peer runners - a model well-suited to Tanzania's highly 
                social campus culture.
              </p>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <MapPin className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Hybrid Last-Mile Models</h3>
            <p className="text-gray-300 mb-4">
              Pilot pickup hubs near hostels and lecture halls, and explore future integrations 
              like e-bike or boda delivery.
            </p>
            <div className="bg-sosikaBlue/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-bold">Cost Impact:</span> Our approach reduces last-mile 
                delivery costs by 30-40% — a significant advantage in cost-sensitive 
                Tanzanian markets.
              </p>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <CreditCard className="h-12 w-12 text-sosikaBlue mb-4" />
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Flexible Meal Plans & Digital Dining Credit</h3>
            <p className="text-gray-300 mb-4">
              Our digital wallet supports parent-funded accounts, vouchers, and loyalty points, 
              making it both convenient and culturally relevant.
            </p>
            <div className="bg-sosikaBlue/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-bold">Student Preference:</span> Surveys show that over 68% of 
                Tanzanian students would prefer flexible daily or weekly meal budgets over rigid plans.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
          <h3 className="text-2xl text-sosikaBlue mb-4 text-center">Competitive Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sosikaBlue mb-2">Campus-Specific Understanding</h4>
              <p className="text-gray-300 mb-4">
                Tailored to the unique flows and needs of Tanzanian campus life, 
                unlike generic food delivery apps.
              </p>
            </div>
            <div>
              <h4 className="text-sosikaBlue mb-2">Local Vendor Integration</h4>
              <p className="text-gray-300 mb-4">
                Partnerships with campus canteens, nearby restaurants, and even student chefs 
                create a hyperlocal food ecosystem.
              </p>
            </div>
            <div>
              <h4 className="text-sosikaBlue mb-2">Student-First Design</h4>
              <p className="text-gray-300 mb-4">
                Built for student budgets with group ordering, split payments, and student discounts.
              </p>
            </div>
            <div>
              <h4 className="text-sosikaBlue mb-2">Cultural Relevance</h4>
              <p className="text-gray-300 mb-4">
                Swahili language support, local payment methods, and Tanzania-specific food categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDifferentiation;
