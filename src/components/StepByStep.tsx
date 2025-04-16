
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import CookingTimer from './CookingTimer';

interface Step {
  instruction: string;
  image?: string;
  timerMinutes?: number;
  tip?: string;
}

interface StepByStepProps {
  steps: Step[];
}

const StepByStep = ({ steps }: StepByStepProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const goToStep = (index: number) => {
    setCurrentStep(Math.max(0, Math.min(steps.length - 1, index)));
  };
  
  const step = steps[currentStep];
  const fallbackImage = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb";
  
  return (
    <div className="paper-texture p-6">
      <h3 className="font-handwritten text-2xl text-wood-dark mb-6">Step by Step Instructions</h3>
      
      {/* Step indicator */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                currentStep === index ? 'bg-butter-dark scale-125' : 'bg-butter'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Current step content */}
      <div className="mb-8 slide-in">
        <div className="mb-6">
          <img 
            src={step.image || fallbackImage} 
            alt={`Step ${currentStep + 1}`}
            className="w-full h-64 object-cover rounded-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
        </div>
        
        <p className="text-wood-dark mb-4">
          <span className="font-handwritten text-xl text-butter-dark mr-2">
            {currentStep + 1}.
          </span>
          {step.instruction}
        </p>
        
        {/* Timer if applicable */}
        {step.timerMinutes && (
          <div className="mt-4 mb-4">
            <CookingTimer minutes={step.timerMinutes} />
          </div>
        )}
        
        {/* Tip if applicable */}
        {step.tip && (
          <div className="mt-4 p-3 bg-butter/20 border-l-4 border-butter rounded">
            <p className="text-sm text-wood-dark">
              <span className="font-medium">Tip:</span> {step.tip}
            </p>
          </div>
        )}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => goToStep(currentStep - 1)}
          disabled={currentStep === 0}
          className={`flex items-center px-3 py-1.5 rounded ${
            currentStep === 0
              ? 'text-muted-foreground cursor-not-allowed'
              : 'text-wood hover:text-wood-dark'
          }`}
        >
          <ArrowLeft size={16} className="mr-1" />
          Previous
        </button>
        
        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {steps.length}
        </div>
        
        <button
          onClick={() => goToStep(currentStep + 1)}
          disabled={currentStep === steps.length - 1}
          className={`flex items-center px-3 py-1.5 rounded ${
            currentStep === steps.length - 1
              ? 'text-muted-foreground cursor-not-allowed'
              : 'text-wood hover:text-wood-dark'
          }`}
        >
          Next
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default StepByStep;
