"use client";
import Image from "next/image";
import React from "react";
import { images } from "../ui";
import { ThemeButton } from "./buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";

const MenuSection = () => {
  return (
    <div className="px-8">
      <div className="rounded-[64px] py-20 px-25 bg-wine-red ">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2.5  items-center">
              <div className="flex flex-row gap-2.5 items-center">
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)_1]"></p>
                <p className="text-[20px] font-normal text-white">Menu</p>
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#FFFFFF_0,rgba(255,255,255,0)_100%)_1]"></p>
              </div>
              <p className="text-[60px] font-extrabold text-white leading-15">
                Coffee • Bakes • Matcha
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 justify-center items-start">
              <div className="flex flex-col gap-3 items-center">
                <div className="w-57 h-57 rounded-full bg-Egg-White flex items-center justify-center">
                  <div className="relative w-56 h-56">
                    <Image
                      src={images.landingimages.menuImg1}
                      alt="Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-white text-[24px] font-semibold leading-none pt-3">
                    Bakes
                  </h3>
                  <p className="text-center font-normal text-neutral-100 text-[20px] leading-[140%] max-w-75.5 pb-3">
                    Cookies, cinnamon buns, doughnuts and specials made fresh
                    each day.
                  </p>
                  {/* button */}
                  <ThemeButton
                    label={"Where TO Buy"}
                    bgcolor={"#FFF2C5"}
                    color="#800029"
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    rightIcon={
                      <RightArrow width={15} height={12} color="#800029" />
                    }
                    fontSize={20}
                    paddingX={28}
                    paddingY={12}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="w-57 h-57 rounded-full bg-Egg-White flex items-center justify-center">
                  <div className="relative w-56 h-56">
                    <Image
                      src={images.landingimages.menuImg2}
                      alt="Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-white text-[24px] font-semibold leading-none pt-3">
                    Coffee
                  </h3>
                  <p className="text-center font-normal text-neutral-100 text-[20px] leading-[140%] max-w-75.5 pb-3">
                    Proper coffee, made with care.
                  </p>
                  {/* button */}
                  <ThemeButton
                    label={"Where TO Buy"}
                    bgcolor={"#FFF2C5"}
                    color="#800029"
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    rightIcon={
                      <RightArrow width={15} height={12} color="#800029" />
                    }
                    fontSize={20}
                    paddingX={28}
                    paddingY={12}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="w-57 h-57 rounded-full bg-Egg-White flex items-center justify-center">
                  <div className="relative w-56 h-56">
                    <Image
                      src={images.landingimages.menuImg3}
                      alt="Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-white text-[24px] font-semibold leading-none pt-3">
                    Matcha
                  </h3>
                  <p className="text-center font-normal text-neutral-100 text-[20px] leading-[140%] max-w-75.5 pb-3">
                    Smooth, fresh matcha served hot or iced.
                  </p>
                  {/* button */}
                  <ThemeButton
                    label={"Where TO Buy"}
                    bgcolor={"#FFF2C5"}
                    color="#800029"
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    rightIcon={
                      <RightArrow width={15} height={12} color="#800029" />
                    }
                    fontSize={20}
                    paddingX={28}
                    paddingY={12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
