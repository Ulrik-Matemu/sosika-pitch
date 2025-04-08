
import React from 'react';
import { Rocket, DollarSign, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Vision = () => {
  return (
    <section id="vision" className="section bg-sosikaDark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">The Sosika Vision</h2>
        
        <div className="bg-black/30 rounded-xl p-8 border border-sosikaBlue/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Rocket className="h-12 w-12 text-sosikaBlue mx-auto mb-4" />
              <div className="text-3xl font-bold text-sosikaBlue mb-2">8-12</div>
              <p className="text-gray-300">Campuses to reach breakeven</p>
            </div>
            
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-sosikaBlue mx-auto mb-4" />
              <div className="text-3xl font-bold text-sosikaBlue mb-2">$4.2M</div>
              <p className="text-gray-300">Projected Annual Recurring Revenue</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-sosikaBlue mx-auto mb-4" />
              <div className="text-3xl font-bold text-sosikaBlue mb-2">$180M</div>
              <p className="text-gray-300">Potential valuation within 5 years</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-center text-lg mb-6">
            By embracing Tanzanian realities—youth demographics, digital payments, and peer logistics—Sosika 
            isn't just building a food app, it's pioneering a new wave of campus commerce in East Africa.
          </p>
          
          <p className="text-sosikaBlue text-center font-medium text-xl">
            Join us in redefining campus food delivery in Tanzania and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Beyond Food Delivery</h3>
            <p className="text-gray-300 mb-4">
              Our long-term vision extends beyond just food delivery to create a comprehensive 
              campus services platform that connects all aspects of student life:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Campus merchandise delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Student-to-student marketplaces
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Course materials and supplies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Event ticketing and management
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Student freelancing opportunities
              </li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
            <h3 className="text-xl text-sosikaBlue font-medium mb-3">Social Impact Goals</h3>
            <p className="text-gray-300 mb-4">
              Sosika is committed to creating positive impacts in Tanzanian university communities:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Creating part-time income opportunities for student runners
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Supporting local food entrepreneurs and campus vendors
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Reducing food waste through predictive ordering
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Improving access to healthy food options on campus
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sosikaBlue mr-1">•</span>
                Building digital skills in the Tanzanian youth workforce
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl text-sosikaBlue mb-6">Ready to Explore Collaboration?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We're seeking strategic partners, investors, and campus collaborators who share our vision 
            for transforming food delivery in African universities.
          </p>
          <Button className="bg-sosikaBlue hover:bg-sosikaBlue/80 text-white px-8 py-6 text-lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
