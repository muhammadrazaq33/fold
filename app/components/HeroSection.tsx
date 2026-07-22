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
    <div id="hero-section" className="relative max-h-250 rounded-b-[56px] bg-center bg-cover bg-no-repeat bg-[url('/images/BgImage.png')] overflow-hidden bg-Egg-White">

      {/* Top Right Cookie */}
      {showCookie && (
        <Image
          src={images.landingimages.cookie}
          alt="Decoration"
          width={200}
          height={200}
          className="
            absolute
            -top-15
            -right-20
            opacity-77
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
          width={200}
          height={200}
          className="
            absolute
            top-[8%]
            -left-22
            opacity-77
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
            top-110
            right-[40%]
            opacity-8
            pointer-events-none
            select-none
            z-0
            rotate-28
          "
        />
      )}

      <div className="relative container max-w-7xl mx-auto px-8 pt-35 pb-10 gap-16">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;