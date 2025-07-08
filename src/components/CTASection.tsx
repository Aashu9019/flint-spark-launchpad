
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    action: () => void;
  };
  secondaryButton?: {
    text: string;
    action: () => void;
  };
}

const CTASection = ({ title, description, primaryButton, secondaryButton }: CTASectionProps) => {
  return (
    <section className="py-8 bg-flint-cream-alt border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-montserrat text-2xl font-bold text-flint-maroon mb-2">
          {title}
        </h3>
        <p className="font-montserrat text-gray-700 mb-6">
          {description}
        </p>
        <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            className="bg-flint-coral hover:bg-flint-coral/90 text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            onClick={primaryButton.action}
          >
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button 
              variant="outline"
              className="border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300"
              onClick={secondaryButton.action}
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
