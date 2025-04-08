
import React from 'react';
import { DollarSign, Percent, BarChart } from 'lucide-react';

const BusinessModel = () => {
  return (
    <section id="business" className="section bg-sosikaDark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Profit Engine Architecture</h2>
        
        <div className="overflow-x-auto mb-12">
          <table className="w-full min-w-[600px] bg-black/30 rounded-xl border border-sosikaBlue/20">
            <thead>
              <tr className="border-b border-sosikaBlue/20">
                <th className="text-sosikaBlue p-4 text-left">Revenue Stream</th>
                <th className="text-sosikaBlue p-4 text-left">Margin Profile</th>
                <th className="text-sosikaBlue p-4 text-left">Campus Potential in Tanzania</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-4 text-white">Transaction commissions</td>
                <td className="p-4 text-white">15-25% per order</td>
                <td className="p-4 text-white">High (Most vendors prefer cashless systems)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-4 text-white">Premium subscriptions</td>
                <td className="p-4 text-white">TSh 10,000–30,000/month</td>
                <td className="p-4 text-white">Medium (urban student convenience seekers)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-4 text-white">Campus SaaS licensing</td>
                <td className="p-4 text-white">TSh 50M–100M/year</td>
                <td className="p-4 text-white">High (government and private colleges digitizing services)</td>
              </tr>
              <tr>
                <td className="p-4 text-white">Data monetization</td>
                <td className="p-4 text-white">TSh 5,000–12,000 CPM</td>
                <td className="p-4 text-white">Emerging (for F&B insights, events)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl text-sosikaBlue text-center mb-8">Key Enablers for Unit Economics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <DollarSign className="h-10 w-10 text-sosikaBlue mb-4" />
            <h4 className="text-xl text-sosikaBlue font-medium mb-3">Dynamic Pricing</h4>
            <p className="text-gray-300">
              Higher fees during peak hours (e.g., lunch breaks) to maximize revenue 
              when demand is highest and students are less price-sensitive.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <Percent className="h-10 w-10 text-sosikaBlue mb-4" />
            <h4 className="text-xl text-sosikaBlue font-medium mb-3">Vendor White-Labeling</h4>
            <p className="text-gray-300">
              Branded menus for canteens & hostel cooks reduces customer acquisition 
              costs by up to 40% through integrated marketing.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20 hover:border-sosikaBlue transition-all duration-300">
            <BarChart className="h-10 w-10 text-sosikaBlue mb-4" />
            <h4 className="text-xl text-sosikaBlue font-medium mb-3">Local Ghost Kitchen Partnerships</h4>
            <p className="text-gray-300">
              Cuts food preparation costs by up to 22%, especially in urban centers 
              like Arusha, Dodoma, and Dar es Salaam.
            </p>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-6 border border-sosikaBlue/20">
          <h3 className="text-2xl text-sosikaBlue mb-6 text-center">Financial Projections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sosikaBlue mb-4">Revenue Growth Path</h4>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm text-white font-semibold">Year 1</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-white font-semibold">$0.5M</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <div style={{ width: "12%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sosikaBlue"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm text-white font-semibold">Year 2</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-white font-semibold">$1.2M</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <div style={{ width: "28%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sosikaBlue"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm text-white font-semibold">Year 3</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-white font-semibold">$2.8M</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <div style={{ width: "66%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sosikaBlue"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm text-white font-semibold">Year 4-5</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-white font-semibold">$4.2M+</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sosikaBlue"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sosikaBlue mb-4">Key Financial Metrics</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">
                  <span className="text-sosikaBlue font-medium">Breakeven Point:</span> 8-12 campuses
                </li>
                <li className="text-gray-300">
                  <span className="text-sosikaBlue font-medium">Target Annual Recurring Revenue:</span> $4.2M within 5 years
                </li>
                <li className="text-gray-300">
                  <span className="text-sosikaBlue font-medium">Projected Valuation:</span> Up to $180M within 5 years
                </li>
                <li className="text-gray-300">
                  <span className="text-sosikaBlue font-medium">Customer Acquisition Cost:</span> Reduced by 40% through campus-focused strategy
                </li>
                <li className="text-gray-300">
                  <span className="text-sosikaBlue font-medium">Average Order Value:</span> Projected to increase 22% YoY as we expand menu options
                </li>
                <li className="text-gray-300">
                  <span className="text-sosikaBlue font-medium">Retention Rate:</span> Target of 70%+ for monthly active users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
