
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Market', href: '#market' },
    { name: 'Solution', href: '#solution' },
    { name: 'Business', href: '#business' },
    { name: 'Scalability', href: '#scalability' },
    { name: 'Technology', href: '#technology' },
    { name: 'Vision', href: '#vision' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 10 ? 'bg-sosikaDark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sosikaBlue text-2xl font-bold mr-2">Sosika</span>
          <span className="text-white text-sm hidden sm:inline-block">Campus Food Delivery</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-white hover:text-sosikaBlue transition-colors duration-300 px-2 py-1"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* PDF Download Button */}
        <Button 
          variant="outline" 
          className="hidden md:flex items-center text-sosikaBlue border-sosikaBlue hover:bg-sosikaBlue hover:text-white"
          onClick={() => window.print()}
        >
          Download PDF <ChevronDown className="ml-1 h-4 w-4" />
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-sosikaBlue" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sosikaDark/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-sosikaBlue transition-colors duration-300 py-3 border-b border-gray-700"
              >
                {link.name}
              </button>
            ))}
            <Button 
              variant="outline" 
              className="my-4 text-sosikaBlue border-sosikaBlue hover:bg-sosikaBlue hover:text-white"
              onClick={() => window.print()}
            >
              Download PDF
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
