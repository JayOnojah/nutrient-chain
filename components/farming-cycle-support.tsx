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
    <div ref={stepRef} id={id} className="relative pl-6 pb-8">
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
  const [isSticky, setIsSticky] = useState(false);
  const [hasCompletedScroll, setHasCompletedScroll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const lastActiveIndexRef = useRef(0);
  const contentHeight = useRef(0);
  const stickyTriggerPoint = useRef(0);
  const stickyEndPoint = useRef(0);

  const steps: (Omit<
    FarmingStepProps,
    "isLast" | "isActive" | "isPassed" | "id"
  > & { image: any })[] = [
    {
      title: "Farmer Onboarding",
      description:
        "We collect verified data (name, location, gender, facial ID, etc.), organize farmers into clusters, and assign group leaders to ensure management, training, and growth.",
      image: SupportIMG1,
    },
    {
      title: "Farm Mapping",
      description:
        "Using satellite imagery and GIS tools, we identify land boundaries, assess soil health, and enable smart planning per farmer and region.",
      image: SupportIMG2,
    },
    {
      title: "Input Distribution",
      description:
        "We deliver quality inputs (seeds, fertilizers, tools) at scale, tracked digitally and linked to each farmer's record for transparency.",
      image: SupportIMG3,
    },
    {
      title: "Field monitory",
      description:
        "We track farm progress with mobile agents and satellite tools, supporting early intervention and adaptive practices.",
      image: SupportIMG4,
    },
    {
      title: "Harvesting Management",
      description:
        "We provide collection materials, receive and digitize commodities, and trigger automated payments upon verified warehouse delivery.",
      image: SupportIMG5,
    },
    {
      title: "Inventory Management",
      description:
        "Post-harvest crops are documented, stored, and matched to buyers via our digital supply chain, ensuring traceability and minimizing waste.",
      image: SupportIMG6,
    },
  ];

  // Calculate dimensions and scroll points
  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      // Store content height for positioning
      contentHeight.current = contentRef.current.offsetHeight;

      // Calculate trigger points for sticky behavior
      const rect = sectionRef.current.getBoundingClientRect();
      stickyTriggerPoint.current = window.scrollY + rect.top;

      // Calculate a more reasonable scroll distance
      // Each step gets a portion of the viewport height (adjusted for better pacing)
      const scrollPerStep = window.innerHeight * 0.3; // 30% of viewport per step
      const totalScrollDistance = scrollPerStep * steps.length;

      stickyEndPoint.current = stickyTriggerPoint.current + totalScrollDistance;

      // Set section height to accommodate the scroll distance plus content height
      sectionRef.current.style.height = `${
        totalScrollDistance + contentHeight.current
      }px`;
    }
  }, [steps.length]);

  // Handle scroll to determine sticky state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Start sticky mode when scrolling past the trigger point
      if (
        scrollY >= stickyTriggerPoint.current &&
        scrollY < stickyEndPoint.current
      ) {
        setIsSticky(true);
        setHasCompletedScroll(false);
      }
      // End sticky mode after scrolling past end point
      else if (scrollY >= stickyEndPoint.current) {
        setIsSticky(false);
        setHasCompletedScroll(true);
      }
      // Before sticky section
      else {
        setIsSticky(false);
        setHasCompletedScroll(false);
      }

      // Calculate which step should be active based on scroll position
      if (isSticky) {
        const scrollProgress =
          (scrollY - stickyTriggerPoint.current) /
          (stickyEndPoint.current - stickyTriggerPoint.current);
        const stepIndex = Math.min(
          Math.floor(scrollProgress * steps.length),
          steps.length - 1
        );
        setActiveStepIndex(stepIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial call to set correct state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, steps.length]);

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

  // Get the current active image
  const activeImage = steps[activeStepIndex]?.image;

  return (
    <div ref={sectionRef} className="hidden md:block relative bg-[#1a3409]">
      {/* Content container - will be fixed during scroll */}
      <div
        ref={contentRef}
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0"
            : hasCompletedScroll
            ? "absolute bottom-0 left-0 right-0"
            : ""
        } text-white p-8 md:p-12 bg-[#1a3409] z-10`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 text-center">
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
      </div>
    </div>
  );
};

export default FarmingCycleSupport;
