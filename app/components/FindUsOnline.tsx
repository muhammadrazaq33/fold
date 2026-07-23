"use client";
import { Google, Instagram, Message, Tiktok } from "@/public/icons";
import { ThemeButton } from "./buttons/ThemeButton";
import Image from "next/image";
import { images } from "../ui";

export  const FindUsOnline = () => {
  return <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-14 lg:pb-16">
    <div className=" rounded-4xl
  lg:rounded-[64px]

  py-10
  px-5

  sm:py-14
  sm:px-8

  lg:p-16 bg-wine-red relative bg-[url('/images/findUsBg.png')] bg-contain bg-no-repeat bg-center overflow-hidden">
      <div className="container max-w-7xl mx-auto  px-0
  sm:px-4
  lg:px-8 flex flex-col  gap-10
  sm:gap-12
  lg:gap-14 ">
       
       {/* right side image */}
      <Image
           src={images.landingimages.findUsImg}
           width={821}
           height={800}
           className="lg:block hidden rotate-[-45.86deg] absolute xl:top-10  xl:right-0 -right-[22%] "
           alt=""
         />
       
 {/* content */}
        <div className="flex flex-col gap-4 lg:gap-4.5">
          <div className="flex items-center lg:justify-start justify-center gap-2 sm:gap-2.5">
             <p className="sm:w-29.25 w-18 h-0 lg:hidden block border [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)_1]"></p>
            <p className="font-normal text-[13px]
sm:text-lg
lg:text-[20px] text-white leading-[120%] font-montserrat">
              Find us online
            </p>
            <p className="sm:w-29.25 w-18 h-0 border [border-image:linear-gradient(90deg,#FFFFFF_0,rgba(255,255,255,0)_100%)_1]"></p>
          </div>
          <p className="font-extrabold text-[32px]
sm:text-5xl
lg:text-[50px] xl:text-[60px] leading-[120%] text-white max-w-full
lg:max-w-162.5 font-playfair capitalize lg:text-left text-center">
            See what’s fresh, what’s new and where
            <span className="text-Egg-White"> we’re unfolding next.</span>
          </p>
          <p className="font-normal text-base
sm:text-lg
lg:text-[22px] sm:leading-7 leading-6
lg:leading-[160%] text-neutral-50 max-w-full
lg:max-w-135.5 font-montserrat lg:text-left text-center">
            We’re starting with fresh bakes, coffee and matcha in busy everyday
            places — and more Fold locations are on the way.
          </p>
        </div>

        
        {/* buttons */}
        <div className=" grid

  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-4

  gap-4
  lg:gap-5

  items-stretch">
     
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
  </div>;
};

