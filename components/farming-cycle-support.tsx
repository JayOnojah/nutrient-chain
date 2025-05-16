"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SupportIMG1 from "@/public/images/pngs/support-mage (1).png";
import SupportIMG2 from "@/public/images/pngs/support-mage (2).png";
import SupportIMG3 from "@/public/images/pngs/support-mage (3).png";
import SupportIMG4 from "@/public/images/pngs/support-mage (4).png";
import SupportIMG5 from "@/public/images/pngs/support-mage (5).png";
import SupportIMG6 from "@/public/images/pngs/support-mage (6).png";

interface FarmingStepProps {
  title: string;
  description?: string;
  isLast?: boolean;
  isActive?: boolean;
  isPassed?: boolean;
  id: string;
}

const FarmingStep: React.FC<FarmingStepProps> = ({
  title,
  description,
  isLast = false,
  isActive = false,
  isPassed = false,
  id,
}) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stepRef.current) {
      if (isActive) {
        gsap.to(stepRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (isPassed) {
        gsap.to(stepRef.current, {
          opacity: 0.9,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(stepRef.current, {
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [isActive, isPassed]);

  return (
    <div ref={stepRef} id={id} className="relative pl-6 pb-10">
      {/* Timeline vertical line */}
      <div
        className={`absolute left-0 top-0 ${
          isLast && isActive ? "bottom-[4px]" : "bottom-0"
        } w-1 ${isActive || isPassed ? "bg-lime-600" : "bg-lime-400/5"}`}
      >
        {/* This ensures the line stops at the last item */}
        {isLast && !isActive && (
          <div className="absolute bottom-0 w-full h-1/2 bg-[#1a3409]"></div>
        )}
      </div>

      {/* Centered ball at the end of ONLY the currently active item */}
      {isActive && !isPassed && (
        <div className="absolute left-[-1.8px] bottom-[-4px] w-[9px] h-[9px] rounded-full bg-lime-600"></div>
      )}

      <h3
        className={`font-medium mb-1 ${
          isActive || isPassed
            ? "text-lime-500 font-semibold"
            : "text-lime-400/90"
        }`}
      >
        {title}
      </h3>
      {isActive && (
        <p
          className={`text-sm ${
            isActive || isPassed ? "text-gray-200" : "text-gray-300/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

const FarmingCycleSupport: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [passedSteps, setPassedSteps] = useState<Set<number>>(new Set());
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const lastActiveIndexRef = useRef(0);

  const steps: (Omit<
    FarmingStepProps,
    "isLast" | "isActive" | "isPassed" | "id"
  > & { image: any })[] = [
    {
      title: "Farmer Onboarding",
      description:
        "Complete registration and verification of beneficiary farmers onto the platform.",
      image: SupportIMG1,
    },
    {
      title: "Farm Mapping",
      description:
        "Geo-tagging and satellite-based mapping for accurate land profiling.",
      image: SupportIMG2,
    },
    {
      title: "Input distribution",
      description:
        "Efficient delivery of seedlings, fertilizers, and chemicals directly to farmers.",
      image: SupportIMG3,
    },
    {
      title: "Field monitory",
      description:
        "Remote crop and soil monitoring using satellite imagery and AI insights.",
      image: SupportIMG4,
    },
    {
      title: "Harvesting Management",
      description:
        "Coordinated tracking and support during harvesting to optimize yields and reduce waste.",
      image: SupportIMG5,
    },
    {
      title: "Inventory Management",
      description:
        "Real-time logging of harvested crops, storage, and movement across the value chain.",
      image: SupportIMG6,
    },
  ];

  useEffect(() => {
    // Determine scroll direction
    const isScrollingDown = activeStepIndex > lastActiveIndexRef.current;
    const isScrollingUp = activeStepIndex < lastActiveIndexRef.current;

    // Update passed steps based on scroll direction
    setPassedSteps((prevPassedSteps) => {
      const newPassedSteps = new Set(prevPassedSteps);

      if (isScrollingDown) {
        // When scrolling down, add all steps before the active step
        for (let i = 0; i < activeStepIndex; i++) {
          newPassedSteps.add(i);
        }
      } else if (isScrollingUp) {
        // When scrolling up, remove all steps after the active step
        for (
          let i = activeStepIndex + 1;
          i <= lastActiveIndexRef.current;
          i++
        ) {
          newPassedSteps.delete(i);
        }
        // Also remove the current active step from passed steps
        newPassedSteps.delete(activeStepIndex);
      }

      // Update the reference for next comparison
      lastActiveIndexRef.current = activeStepIndex;

      return newPassedSteps;
    });

    // Animate image change
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [activeStepIndex]);

  useEffect(() => {
    // Set up intersection observer
    const options = {
      root: null, // viewport
      rootMargin: "-30% 0px -60% 0px", // consider elements 30% from top of viewport
      threshold: 0.1, // trigger when 10% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract index from the id
          const index = parseInt(entry.target.id.split("-")[1]);
          setActiveStepIndex(index);
        }
      });
    }, options);

    // Observe all step elements
    if (stepsContainerRef.current) {
      const stepElements =
        stepsContainerRef.current.querySelectorAll('[id^="step-"]');
      stepElements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      // Clean up
      observer.disconnect();
    };
  }, []);

  // Get the current active image
  const activeImage = steps[activeStepIndex]?.image;

  return (
    <div className=" bg-[#1a3409] text-white p-8 md:p-12">
      <h2 className="text-2xl font-semibold mb-10 text-center">
        We Support Every Step
        <br />
        of the Farming Cycle
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <div
            ref={stepsContainerRef}
            className="flex max-w-[430px] flex-col pr-2"
          >
            {steps.map((step, index) => (
              <FarmingStep
                key={index}
                id={`step-${index}`}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
                isActive={index === activeStepIndex}
                isPassed={passedSteps.has(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div
            ref={imageContainerRef}
            className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden"
          >
            <Image
              src={activeImage}
              alt={`${steps[activeStepIndex]?.title} illustration`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingCycleSupport;
