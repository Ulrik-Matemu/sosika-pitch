
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black/50 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-3xl font-bold text-sosikaBlue mb-2">Sosika</div>
            <p className="text-gray-400">Redefining Campus Food Delivery</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sosikaBlue hover:text-white transition-colors duration-300"
          >
            Back to top <ChevronUp className="h-4 w-4" />
          </button>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-sosikaBlue font-medium mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">info@sosika.co.tz</p>
              <p className="text-gray-400 mb-2">+255 123 456 789</p>
              <p className="text-gray-400">Arusha, Tanzania</p>
            </div>
            
            <div>
              <h4 className="text-sosikaBlue font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sosikaBlue font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 Sosika. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-sosikaBlue transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
