
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-flint-coral mb-4">
              Flint Group
            </h3>
            <p className="font-montserrat text-gray-300 mb-4">
              Australia's trusted mortgage brokers, delivering tailored finance solutions with heart.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 123 Finance Street, Sydney NSW 2000</p>
              <p>📞 (02) 1234 5678</p>
              <p>✉️ hello@flintgroup.au</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-flint-coral transition-colors">First Home Loans</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">Investment Loans</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">Refinancing</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">Construction Loans</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">Commercial Loans</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-flint-coral transition-colors">Mortgage Calculator</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">First Home Buyer Guide</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">Market Updates</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">Podcast</a></li>
              <li><a href="#" className="hover:text-flint-coral transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get weekly market insights and finance tips delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white font-montserrat"
              />
              <Button className="w-full bg-flint-coral hover:bg-flint-coral/90 font-montserrat">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 font-montserrat">
              © 2024 Flint Group. All rights reserved. Australian Credit Licence #123456
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-flint-coral transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-flint-coral transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-flint-coral transition-colors text-sm">Credit Guide</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
