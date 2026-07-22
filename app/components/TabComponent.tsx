"use client";

import React, { useEffect, useRef, useState } from "react";
import PricingCard from "../cards/PricingCard";
import { pricingCards } from "@/app/constants/dataConstants";



const billingOptions = [
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
] as const;

type BillingCycle = (typeof billingOptions)[number]["value"];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = billingOptions.findIndex(
    (option) => option.value === billingCycle,
  );

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });

  useEffect(() => {
    const activeButton = buttonRefs.current[activeIndex];

    if (!activeButton) return;

    setIndicatorStyle({
      width: activeButton.offsetWidth,
      transform: `translateX(${activeButton.offsetLeft}px)`,
      opacity: 1,
    });
  }, [activeIndex]);

  return (
    <>
      <div className="container relative max-w-7xl mx-auto flex flex-col items-center gap-0 xl:gap-12">
        <div className="absolute -top-12 left-[50%] rounded-lg bg-[#17B26A] py-2 px-3 text-sm text-white font-semibold">
          Save 20%
          <div className="absolute -bottom-1 left-10 rotate-45 w-3 h-3 bg-[#17B26A]" />
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="relative bg-white rounded-full p-1.5 shadow-[0px_0px_12px_0_rgba(0,0,0,0.08)] flex flex-row gap-1.5">
            <div
              className="absolute top-1.5 bottom-1.5 left-0 rounded-full bg-primary transition-all duration-300 ease-out"
              style={{
                width: indicatorStyle.width,
                transform: indicatorStyle.transform,
                opacity: indicatorStyle.opacity,
              }}
            />

            {billingOptions.map((option, index) => {
              const isActive = billingCycle === option.value;

              return (
                <button
                  key={option.value}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => setBillingCycle(option.value)}
                  className={`relative z-10 rounded-full py-2 px-6 text-xl font-semibold transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="text-gray-800 text-xl lg:mb-2 xl:mb-0">
            Choose a plan that scales with your product. Cancel anytime. No
            setup fees. No hidden costs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {pricingCards[billingCycle].map((card) => (
            <PricingCard
              key={card.title}
              title={card.title}
              description={card.description}
              price={card.price}
              period={card.period}
              planType={card.planType}
              features={card.features}
              isPopular={card.isPopular}
              onClick={card.onclick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingSection;
