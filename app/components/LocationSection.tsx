"use client"
import RightArrow from "@/public/icons/RightArrow";
import { ThemeButton } from "./buttons/ThemeButton";

const LocationSection = () => {
  return (
    <div
      className="py-24 bg-Egg-White"
      style={{ backgroundImage: `url(/images/BgLocation.png)` }}
    >
      <div className="container max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-3.5 items-center">
            <div className="flex flex-col gap-1 items-center">
              <div className="flex flex-row gap-2.5 items-center">
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,#000000_100%)_1]"></p>
                <p className="text-[20px] font-normal leading-[120%] text-black font-montserrat">
                  Location
                </p>
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_100%)_1]"></p>
              </div>
              <p className="font-playfair font-extrabold text-[60px] leading-15 capitalize text-black">
                Unfolding <span className="text-wine-red">near you soon.</span>
              </p>
            </div>
            <p className="font-montserrat font-normal text-[22px] leading-[160%] text-neutral-800 w-236 text-center">
              We’re starting with fresh bakes, coffee and matcha in busy
              everyday places — and more Fold locations are on the way.
            </p>
          </div>
          {/* button */}
          <ThemeButton
            label={"Find Your Nearest Fold"}
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
  );
};

export default LocationSection;
