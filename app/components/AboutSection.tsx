import Image from "next/image";
import React from "react";
import { images } from "../ui";

const AboutSection = () => {
  return (
    <div className="py-24">
      <div className="container max-w-7xl mx-auto px-8 grid grid-cols-2 gap-10">
        {/* start of left side */}
        <div className="flex flex-col gap-2.5 justify-center">
          <div className="flex flex-row gap-1.5 items-center">
            <p className="text-5 text-Bright-Maroon font-normal font-montserrat">About</p>
            <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
          </div>
          <p className="font-extrabold text-[60px] capitalize text-Dune leading-none font-playfair">
            Freshly folded, <span className="text-wine-red">every day.</span>
          </p>
          <p className="text-[22px] text-neutral-800 font-normal leading-[160%] font-montserrat">
            Our bakes are made fresh from scratch each day, served from counters
            full of cookies, buns, doughnuts and seasonal specials
          </p>
          <p className="text-[22px] text-neutral-800 font-normal leading-[160%] font-montserrat">
            Grab a coffee before work, pick up a matcha on the go, or take a box
            of bakes back for the office. Fresh, generous and easy to love —
            that’s Fold.
          </p>
        </div>
        {/* end of left side */}
        {/* start of left side */}
        <div className="">
          <div className="">
            <Image
              className="rounded-4xl"
              src={images.landingimages.aboutImg}
              alt="About Image"
            />
          </div>
        </div>
        {/* end of right side */}
      </div>
    </div>
  );
};

export default AboutSection;
