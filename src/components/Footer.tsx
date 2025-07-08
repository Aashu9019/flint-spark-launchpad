
import { Flame, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Enterprise", "API"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Partners"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Webinars", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Flint</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Igniting innovation and accelerating growth for businesses worldwide. 
              The all-in-one platform that transforms ideas into reality.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Flint. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Made with ❤️ for innovators everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
