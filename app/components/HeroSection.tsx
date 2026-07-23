"use client";

import Image from "next/image";
import { images } from "../ui";

type CommonHeroSectionProps = {
  children: React.ReactNode;
  showCookie?: boolean;
};

const HeroSection = ({
  children,
  showCookie = true, // Default true
}: CommonHeroSectionProps) => {
 
  return (
    <div id="hero-section" className="relative max-h-200
lg:max-h-250
rounded-b-4xl
lg:rounded-b-[56px] lg:bg-center lg:bg-cover bg-contain bg-center bg-no-repeat md:bg-[url('/images/BgImage.png')] overflow-hidden bg-Egg-White">

      {/* Top Right Cookie */}
      {showCookie && (
        <Image
          src={images.landingimages.cookie}
          alt="Decoration"
width={180}
height={180}
        className="
absolute
w-28
lg:w-36
xl:w-48
hidden
md:block

-top-8
sm:-top-10
lg:-top-16

-right-10
sm:-right-14
lg:-right-18

opacity-70
pointer-events-none
select-none
z-50
"
        />
      )}

      {/* Top Left Cookie */}
      {showCookie && (
        <Image
          src={images.landingimages.cookie}
          alt="Decoration"
          width={180}
height={180}
          className="
absolute

w-28
lg:w-36
xl:w-48

hidden
md:block

top-[15%]
lg:top-[10%]

-left-10
sm:-left-14
lg:-left-16
xl:-left-18

opacity-70
pointer-events-none
select-none
z-50
"
        />
      )}

      {/* Background Cookie */}
      {showCookie && (
        <Image
          src={images.landingimages.bgcookie}
          alt="Decoration"
          width={200}
          height={200}
          className="
absolute

hidden
lg:block

w-36
lg:w-52

top-[65%]
right-[38%]

opacity-10

pointer-events-none
select-none

rotate-28
z-0
"
        />
      )}

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 pt-28 sm:pt-32 lg:pt-35 pb-8 sm:pb-10">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;