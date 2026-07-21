import Image, { StaticImageData } from "next/image";
import React from "react";

interface AboutContentSectionProps {
  rootPadding:string;
  showLabel?: boolean;
  title: React.ReactNode;
  paragraphs: string[];
  image: StaticImageData;
  imageAlt?: string;
}

const AboutSection = ({
  rootPadding,
  showLabel = false,
  title,
  paragraphs,
  image,
  imageAlt = "About Image",
}: AboutContentSectionProps) => {
  return (
    <div className={`${rootPadding} pt-24`}>
      <div className="container max-w-7xl mx-auto px-8 grid grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-2.5 justify-center">
          {showLabel && (
            <div className="flex flex-row gap-1.5 items-center">
              <p className="text-5 text-Bright-Maroon font-normal font-montserrat">
                About
              </p>
              <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
            </div>
          )}

          <p
            className={`font-extrabold text-[60px] capitalize text-Dune font-playfair ${
              showLabel ? "leading-none" : "leading-15"
            }`}
          >
            {title}
          </p>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[22px] text-neutral-800 font-normal leading-[160%] font-montserrat"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right Side */}
        <div>
          <div>
            <Image
              className="rounded-4xl"
              src={image}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;