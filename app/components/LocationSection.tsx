
"use client";

import React from "react";
import RightArrow from "@/public/icons/RightArrow";
import { ThemeButton } from "./buttons/ThemeButton";

interface LocationBannerProps {
  sectionPadding?: string;
  innerPadding: string;
  innerRounded: string;
  title: React.ReactNode;
  description: string;
  buttonLabel: string;
}

const LocationSection = ({
  sectionPadding,
  innerPadding,
  innerRounded,
  title,
  description,
  buttonLabel,
}: LocationBannerProps) => {
  return (
    <div className={sectionPadding}>
      <div
        className={`${innerPadding} ${innerRounded}
     bg-Egg-White  bg-center
    bg-cover
    bg-no-repeat  px-5
    sm:px-8
    lg:px-0`}
        style={{ backgroundImage: `url(/images/BgLocation.png)` }}
      >
        <div className="container max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:gap-10">
            <div className="flex flex-col gap-3 sm:gap-3.5 items-center">
              <div className="flex flex-col gap-1 items-center">
                <div className="flex gap-2 sm:gap-2.5 items-center">
                  <p className="sm:w-29.25 w-16 h-0 border [border-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,#000000_100%)_1]"></p>

                  <p className="text-[12px]
sm:text-lg
lg:text-[20px] font-normal leading-[120%] text-black font-montserrat">
                    Location
                  </p>

                  <p className="sm:w-29.25 w-16 h-0 border [border-image:linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)_1]"></p>
                </div>

                <p className="font-playfair font-extrabold text-center

text-4xl
sm:text-5xl
lg:text-[60px] lg:leading-15 leading-12 capitalize text-black">
                  {title}
                </p>
              </div>

              <p className="font-montserrat font-normal text-base
sm:text-lg
lg:text-[22px] leading-7
lg:leading-[160%] text-neutral-70 
w-full
max-w-xl
lg:max-w-236

mx-auto text-center">
                {description}
              </p>
            </div>

<div className="w-full sm:w-auto flex justify-center">
            <ThemeButton
              label={buttonLabel}
              bgcolor={"#B32B49"}
              color={"#fff"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              rightIcon={<RightArrow width={15} height={12} color="#fff" />}
              fontSize={20}
              paddingX={32}
              paddingY={16}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;