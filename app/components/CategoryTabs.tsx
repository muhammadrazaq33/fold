"use client";

import { useState } from "react";

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

  const handleClick = (index: number) => {
    setActive(index);
    onChange?.(tabs[index], index);
  };

  return (
    <div className="inline-flex items-center rounded-full bg-Bright-Maroon p-[5.33px]">
      {tabs.map((tab, index) => {
        const isActive = index === active;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => handleClick(index)}
            className={`font-montserrat px-7.5 py-4 text-[20px] leading-[26.67px] font-semibold rounded-full transition-colors duration-200 whitespace-nowrap cursor-pointer ${
              isActive
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-white/10"
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
