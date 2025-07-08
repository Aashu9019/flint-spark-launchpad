
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Our Services", href: "#services" },
    { name: "Who We Help", href: "#who-we-help" },
    { name: "Calculators", href: "#calculators" },
    { name: "Learn", href: "#learn" },
    { name: "About", href: "#about" },
    { name: "Commercial Investment", href: "#commercial" },
  ];

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-flint-maroon transform rotate-45 rounded-sm"></div>
              <span className="font-montserrat text-xl md:text-2xl font-bold text-flint-maroon">Flint</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-flint-coral transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              onClick={scrollToContact}
              className="bg-flint-coral hover:bg-flint-coral/90 text-white px-4 md:px-6 py-2 font-montserrat font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              CONTACT US
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-flint-maroon hover:text-flint-coral transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={scrollToContact}
                className="w-full bg-flint-coral hover:bg-flint-coral/90 text-white py-3 font-montserrat font-semibold rounded-full transition-all duration-300 hover:scale-105 mt-4"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
