"use client";
import { Google, Instagram, Message, Tiktok } from "@/public/icons";
import { ThemeButton } from "./buttons/ThemeButton";
import Image from "next/image";
import { images } from "../ui";

const FindUsOnline = () => {
  return (
    <div className="px-8 pb-16">
      <div className="p-16 rounded-[64px] bg-wine-red relative bg-[url('/images/findUsBg.png')] overflow-hidden">
        <div className="container max-w-7xl mx-auto p-8 flex flex-col gap-14 relative overflow-hidden">
          {/* right side image */}
          <Image
            src={images.landingimages.findUsImg}
            width={921}
            height={300}
            className=" rotate-[-45.86deg] absolute -top-10 -right-55"
            alt=""
          />
          {/* content */}
          <div className="flex flex-col gap-4.5">
            <div className="flex flex-row gap-2.5 items-center">
              <p className="font-normal text-[20px] text-white leading-[120%]">
                Find us online
              </p>
              <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#FFFFFF_0,rgba(255,255,255,0)_100%)_1]"></p>
            </div>
            <p className="font-extrabold text-[60px] leading-none text-white max-w-162.5 capitalize">
              See what’s fresh, what’s new and where
              <span className="text-Egg-White"> we’re unfolding next.</span>
            </p>
            <p className="font-normal text-[22px] leading-[160%] text-neutral-50 max-w-135.5">
              We’re starting with fresh bakes, coffee and matcha in busy
              everyday places — and more Fold locations are on the way.
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-row flex-wrap gap-4 items-center justify-evenly">
            <ThemeButton
              label={"Follow on Instagram"}
              bgcolor={"#FFF2C5"}
              color="#000000"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              leftIcon={<Instagram />}
              fontSize={16}
              paddingX={28}
              paddingY={12}
            />
            <ThemeButton
              label={"Find us on Google"}
              bgcolor={"#FFF2C5"}
              color="#000000"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              leftIcon={<Google />}
              fontSize={16}
              paddingX={28}
              paddingY={12}
            />
            <ThemeButton
              label={"Leave a review"}
              bgcolor={"#FFF2C5"}
              color="#000000"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              leftIcon={<Message />}
              fontSize={16}
              paddingX={28}
              paddingY={12}
            />
            <ThemeButton
              label={"Find us on Tiktok"}
              bgcolor={"#FFF2C5"}
              color="#000000"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              leftIcon={<Tiktok />}
              fontSize={16}
              paddingX={28}
              paddingY={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsOnline;
