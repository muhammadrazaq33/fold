"use client";

import Image from "next/image";
import { images } from "../ui";

type CommonHeroSectionProps = {
  children: React.ReactNode;
  showCookie?: boolean;
};

const HeroSection = ({
  children,
  showCookie = false,
}: CommonHeroSectionProps) => {
  return (
    <div className="relative max-h-250 rounded-b-[56px] bg-center bg-[url('/images/BgImage.png')] overflow-hidden bg-Egg-White">
      {showCookie && (
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