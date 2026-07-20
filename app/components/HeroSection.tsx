"use client";

import React from "react";
import Image from "next/image";
import { images } from "../ui";
import { ThemeButton } from "./buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";

const HeroSection = () => {
  return (
    <div className="relative max-h-250 rounded-bl-[56px] rounded-br-[56px] bg-top bg-[url('/images/BgImage.png')]  overflow-hidden bg-Egg-White">
      <Image
        src={images.landingimages.bgcookie}
        alt="Decoration"
        width={200}
        height={200}
        className="
                  absolute
                   top-110
                   right-140
                   opacity-8
                   pointer-events-none
                   select-none
                   z-00
                    rotate-28"
      />

      <div className="relative container max-w-7xl mx-auto px-8 pt-[140px] pb-10 grid grid-cols-2 gap-16 ">
        <div className="flex flex-col gap-8 justify-center">
          <p className="text-[89px] font-extrabold text-Dune font-playfair leading-none">
            Fresh Bakes. <span className="text-wine-red">Daily Rituals.</span>
          </p>
          <div className="flex flex-row gap-5">
            <ThemeButton
              label={"See The Menu"}
              bgcolor={"#B32B49"}
              color={"#fff"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              rightIcon={<RightArrow width={15} height={12} color="#fff" />}
              fontSize={20}
              paddingX={28}
              paddingY={12}
            />
            <ThemeButton
              label={"Find us"}
              bgcolor={"#333333"}
              color={"#fff"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              rightIcon={<RightArrow width={15} height={12} color="#fff" />}
              fontSize={20}
              paddingX={28}
              paddingY={12}
            />
          </div>
        </div>

        {/* second column */}
        <div>
          <Image src={images.landingimages.heroimage} alt={"hero image"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
