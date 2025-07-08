
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const ProgressTracker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const steps = [
    { id: 1, title: "Learn About Us", completed: true },
    { id: 2, title: "See What We Offer", completed: false },
    { id: 3, title: "Read Reviews", completed: false },
    { id: 4, title: "Book a Free Call", completed: false }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 25) {
        setCurrentStep(2);
        setProgress(50);
      }
      if (scrollPercent > 50) {
        setCurrentStep(3);
        setProgress(75);
      }
      if (scrollPercent > 75) {
        setCurrentStep(4);
        setProgress(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 z-50 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="font-montserrat text-sm font-semibold text-flint-maroon">
          Step {currentStep} of 4
        </span>
        <span className="font-montserrat text-xs text-gray-600">
          {progress}% Complete
        </span>
      </div>
      <Progress value={progress} className="mb-2" />
      <p className="font-montserrat text-xs text-gray-700">
        {steps[currentStep - 1]?.title} • You're {4 - currentStep} step{4 - currentStep !== 1 ? 's' : ''} away from expert advice
      </p>
    </div>
  );
};

export default ProgressTracker;
