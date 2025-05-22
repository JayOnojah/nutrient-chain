"use client";

import React, { useState, useEffect, useRef, useCallback, FC } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SupportIMG1 from "@/public/images/pngs/support-mage (1).png";
import SupportIMG2 from "@/public/images/pngs/support-mage (2).png";
import SupportIMG3 from "@/public/images/pngs/support-mage (3).png";
import SupportIMG4 from "@/public/images/pngs/support-mage (4).png";
import SupportIMG5 from "@/public/images/pngs/support-mage (5).png";
import SupportIMG6 from "@/public/images/pngs/support-mage (6).png";

const FarmingCycleSupportSmall: FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  const steps = [
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
      title: "Field Monitoring",
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

  const goToStep = useCallback(
    (index: number) => {
      if (isAnimating) return;
      const newIndex = Math.max(0, Math.min(index, steps.length - 1));
      if (newIndex === activeStepIndex) return;

      setIsAnimating(true);

      gsap.to(carouselRef.current, {
        opacity: 0,
        x: newIndex > activeStepIndex ? -20 : 20,
        duration: 0.3,
        onComplete: () => {
          setActiveStepIndex(newIndex);
          gsap.fromTo(
            carouselRef.current,
            {
              opacity: 0,
              x: newIndex > activeStepIndex ? 20 : -20,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.3,
              onComplete: () => setIsAnimating(false),
            }
          );
        },
      });

      if (imageContainerRef.current) {
        gsap.to(imageContainerRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          onComplete: () => {
            gsap.fromTo(
              imageContainerRef.current,
              { opacity: 0, scale: 0.9 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              }
            );
          },
        });
      }
    },
    [activeStepIndex, isAnimating, steps.length]
  );

  const nextStep = useCallback(() => {
    goToStep(activeStepIndex + 1);
  }, [goToStep, activeStepIndex]);

  const prevStep = useCallback(() => {
    goToStep(activeStepIndex - 1);
  }, [goToStep, activeStepIndex]);

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        goToStep((activeStepIndex + 1) % steps.length);
      }, 5000);
    };

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    // startAutoPlay();

    // const handleInteraction = () => {
    //   stopAutoPlay();
    //   setTimeout(startAutoPlay, 10000);
    // };

    // window.addEventListener("click", handleInteraction);
    // window.addEventListener("touchstart", handleInteraction);

    // return () => {
    //   stopAutoPlay();
    //   window.removeEventListener("click", handleInteraction);
    //   window.removeEventListener("touchstart", handleInteraction);
    // };
  }, [goToStep, activeStepIndex, steps.length]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50) {
        diff > 0 ? nextStep() : prevStep();
      }
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [nextStep, prevStep]);

  return (
    <div className="bg-[#1a3409] md:hidden text-white py-8 md:py-12">
      <div className="app-width mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          We Support Every Step
          <br />
          of the Farming Cycle
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex justify-center items-center mb-10">
            <div
              ref={imageContainerRef}
              className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
              <Image
                src={steps[activeStepIndex].image}
                alt={`${steps[activeStepIndex].title} illustration`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={activeStepIndex === 0}
              />
            </div>
          </div>

          <div className="flex-1 md:pr-8 mb-8 text-center">
            <div ref={carouselRef} className="mb-3 min-h-[150px]">
              <h3 className="text-2xl text-white font-semibold mb-3">
                {steps[activeStepIndex].title}
              </h3>
              <p className="text-gray-200">
                {steps[activeStepIndex].description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={activeStepIndex === 0 || isAnimating}
                className={`p-2 rounded-full ${
                  activeStepIndex === 0 || isAnimating
                    ? "text-gray-500 cursor-not-allowed"
                    : "text-lime-500 hover:bg-lime-900/50"
                }`}
                aria-label="Previous step">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeStepIndex
                        ? "bg-lime-500 w-4"
                        : "bg-lime-500/30 hover:bg-lime-500/50"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                disabled={activeStepIndex === steps.length - 1 || isAnimating}
                className={`p-2 rounded-full ${
                  activeStepIndex === steps.length - 1 || isAnimating
                    ? "text-gray-500 cursor-not-allowed"
                    : "text-lime-500 hover:bg-lime-900/50"
                }`}
                aria-label="Next step">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingCycleSupportSmall;
