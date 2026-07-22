"use client";

import { useEffect, useRef, useState } from "react";

interface CategoryTabsProps {
  tabs?: string[];
  defaultActive?: number;
  onChange?: (tab: string, index: number) => void;
}

const CategoryTabs = ({
  tabs = ["Bakes", "Coffee & Matcha"],
  defaultActive = 0,
  onChange,
}: CategoryTabsProps) => {
  const [active, setActive] = useState(defaultActive);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });

  useEffect(() => {
    const activeButton = buttonRefs.current[active];

    if (!activeButton) return;

    const updateIndicator = () => {
      setIndicatorStyle({
        width: activeButton.offsetWidth,
        transform: `translateX(${activeButton.offsetLeft}px)`,
        opacity: 1,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(activeButton);

    return () => {
      resizeObserver.disconnect();
    };
  }, [active, tabs]);

  const handleClick = (index: number) => {
    setActive(index);
    onChange?.(tabs[index], index);
  };

  return (
    <div className="relative inline-flex items-center rounded-full bg-Bright-Maroon p-[5.33px]">
      {/* Sliding active background */}
      <div
        className="absolute top-[5.33px] bottom-[5.33px] left-0 rounded-full bg-white transition-all duration-300 ease-out"
        style={{
          width: indicatorStyle.width,
          transform: indicatorStyle.transform,
          opacity: indicatorStyle.opacity,
        }}
      />

      {tabs.map((tab, index) => {
        const isActive = index === active;

        return (
          <button
            key={tab}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            type="button"
            onClick={() => handleClick(index)}
            className={`relative z-10 font-montserrat px-7.5 py-4 text-[20px] leading-[26.67px] font-semibold rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer ${
              isActive
                ? "text-black"
                : "text-white hover:text-white/90"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
