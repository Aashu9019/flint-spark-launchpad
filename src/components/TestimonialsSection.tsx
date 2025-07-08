
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
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

    const section = document.getElementById('testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah & Mike Chen",
      location: "Sydney, NSW",
      rating: 5,
      text: "Flint Group made our first home purchase seamless. Their expertise saved us thousands and gave us peace of mind throughout the entire process.",
      category: "First Home Buyers"
    },
    {
      name: "Dr. James Robertson",
      location: "Melbourne, VIC",
      rating: 5,
      text: "As a busy GP, I needed someone who understood medical professionals' unique financial situations. Flint delivered exactly that.",
      category: "Medical Professional"
    },
    {
      name: "Lisa Park",
      location: "Brisbane, QLD",
      rating: 5,
      text: "The refinancing process was quick and professional. We're now saving $400 per month thanks to their negotiation skills.",
      category: "Refinancing"
    },
    {
      name: "Michael Thompson",
      location: "Perth, WA",
      rating: 5,
      text: "Exceptional service from start to finish. They found us a loan with better terms than we thought possible.",
      category: "Investment Property"
    },
    {
      name: "Emma & David Wilson",
      location: "Adelaide, SA",
      rating: 5,
      text: "Moving to Australia was stressful enough. Flint made getting our home loan the easiest part of the process.",
      category: "Expats & Migrants"
    },
    {
      name: "Robert Chang",
      location: "Gold Coast, QLD",
      rating: 5,
      text: "As a business owner, my income structure is complex. They understood my needs and delivered the perfect solution.",
      category: "Business Owner"
    }
  ];

  return (
    <section id="testimonials-section" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-flint-maroon mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Real stories from real people who achieved their property dreams with us.
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name}>
                  <Card className={`bg-flint-cream border-0 hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex mb-4 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                        ))}
                      </div>
                      <p className="font-montserrat text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-center">
                        "{testimonial.text}"
                      </p>
                      <div className="text-center">
                        <div className="font-montserrat font-semibold text-flint-maroon">
                          {testimonial.name}
                        </div>
                        <div className="font-montserrat text-sm text-gray-600">
                          {testimonial.location} • {testimonial.category}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-flint-coral text-white border-flint-coral hover:bg-flint-coral/90" />
            <CarouselNext className="bg-flint-coral text-white border-flint-coral hover:bg-flint-coral/90" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`bg-flint-cream border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                  ))}
                </div>
                <p className="font-montserrat text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-montserrat font-semibold text-flint-maroon">
                    {testimonial.name}
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    {testimonial.location} • {testimonial.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button for Mobile */}
        <div className="block md:hidden mt-8 text-center">
          <button className="font-montserrat bg-flint-coral hover:bg-flint-coral/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
