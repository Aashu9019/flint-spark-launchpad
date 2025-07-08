
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-flint-maroon via-flint-maroon/95 to-flint-maroon relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-flint-coral/30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-montserrat text-4xl lg:text-6xl font-bold text-white mb-6">
            Tailored solutions for 
            <span className="text-flint-coral"> every scenario</span>
          </h2>
          <p className="font-montserrat text-xl text-white/90 mb-8 leading-relaxed">
            Whether you're buying your first home, expanding your investment portfolio, or refinancing for better rates, we're here to make it happen.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              className="bg-flint-coral hover:bg-flint-coral/90 text-white px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey Today
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-flint-maroon px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300"
            >
              Call (02) 1234 5678
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
