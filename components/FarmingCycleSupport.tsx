import React from 'react';
import Image from 'next/image';

interface FarmingStepProps {
  title: string;
  description?: string;
  isLast?: boolean;
  isActive?: boolean;
}

const FarmingStep: React.FC<FarmingStepProps> = ({ 
  title, 
  description, 
  isLast = false,
  isActive = false 
}) => (
  <div className="relative pl-6 pb-5">
    {/* Timeline vertical line */}
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${isActive ? 'bg-lime-600' : 'bg-lime-400/5'}`}>
      {/* This ensures the line stops at the last item */}
      {isLast && <div className="absolute bottom-0 w-full h-1/2 bg-[#1a3409]"></div>}
    </div>
    
    {/* Centered ball at the end of active item */}
    {isActive && (
      <div className="absolute left-[-1.8px] bottom-[-4px] w-[9px] h-[9px] rounded-full bg-lime-600"></div>
    )}
    
    <h3 className={`font-medium mb-1 ${isActive ? 'text-lime-500 font-semibold' : 'text-lime-400/90'}`}>
      {title}
    </h3>
    {description && (
      <p className={`text-sm ${isActive ? 'text-gray-200' : 'text-gray-300/80'}`}>
        {description}
      </p>
    )}
  </div>
);

const FarmingCycleSupport: React.FC = () => {
  const steps: (Omit<FarmingStepProps, 'isLast' | 'isActive'>) [] = [
    {
      title: 'Farmer Onboarding',
      description: 'Complete registration and verification of beneficiary farmers onto the platform.'
    },
    {
      title: 'Farm Mapping',
    },
    {
      title: 'Input distribution',
    },
    {
      title: 'Field monitory',
    },
    {
      title: 'Harvesting Management',
    },
    {
      title: 'Inventory Management',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-[#1a3409] text-white p-8 md:p-12 rounded-lg">
      <div className="flex-1 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-2xl font-semibold mb-10 text-center md:text-left">
          We Support Every Step<br />
          of the Farming Cycle
        </h2>
        
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <FarmingStep 
              key={index} 
              title={step.title} 
              description={step.description} 
              isLast={index === steps.length - 1}
              isActive={index === 0} // Only the first item is active
            />
          ))}
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
          <Image
            src="/images/farming-cycle.jpg"
            alt="Farmers working in a field"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FarmingCycleSupport;
