
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const WhoWeHelpSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('who-we-help-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { title: "First Home Buyers", icon: "🏠", description: "Navigate your first property purchase with confidence and expert guidance" },
    { title: "Property Investors", icon: "🏢", description: "Maximize returns with strategic financing solutions and investment advice" },
    { title: "Medical Professionals", icon: "👨‍⚕️", description: "Specialized loans tailored for doctors and healthcare workers" },
    { title: "Expats & Migrants", icon: "✈️", description: "Home loans designed for new Australian residents and visa holders" },
    { title: "Business Owners", icon: "💼", description: "Commercial and residential finance solutions for entrepreneurs" },
    { title: "Refinancing", icon: "🔄", description: "Lower rates and better terms on your existing home loans" },
    { title: "Construction Loans", icon: "🏗️", description: "Finance your dream home construction from ground up" },
    { title: "SMSF Lending", icon: "📊", description: "Self-managed super fund property investment financing" },
  ];

  return (
    <section id="who-we-help-section" className="py-12 md:py-20 bg-flint-cream-alt">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-flint-maroon mb-4 md:mb-6">
            Who We Help
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            From first-time buyers to seasoned investors, we provide tailored solutions for every financial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-white border-0 cursor-pointer transform ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6 text-center h-full flex flex-col">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" 
                     style={{ animationDelay: `${index * 0.3}s` }}>
                  {category.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-base md:text-lg text-flint-maroon mb-2 md:mb-3 group-hover:text-flint-coral transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="font-montserrat text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                  {category.description}
                </p>
                <div className="mt-3 md:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-flint-coral font-montserrat text-sm font-semibold">Learn More →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA for Mobile */}
        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
             style={{ animationDelay: '0.8s' }}>
          <p className="font-montserrat text-gray-600 mb-4 px-4">
            Don't see your situation? We help with all types of lending scenarios.
          </p>
          <button className="font-montserrat bg-flint-maroon hover:bg-flint-maroon/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base">
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
