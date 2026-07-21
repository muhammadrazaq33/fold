import Image, { StaticImageData } from "next/image";
import React from "react";

interface AboutSectionProps {
  rootPadding?: string;
  showLabel?: boolean;
  label?: string;
  title: React.ReactNode;
  paragraphs: string[];
  image: StaticImageData;
  imageAlt?: string;

  headingClassName?: string;
  contentClassName?: string;

  children?: React.ReactNode;
}

const AboutSection = ({
  rootPadding = "py-24",
  showLabel = false,
  label = "About",
  title,
  paragraphs,
  image,
  imageAlt = "About Image",
  headingClassName = "",
  contentClassName = "",
  children,
}: AboutSectionProps) => {
  return (
    <div className={rootPadding}>
      <div className="container max-w-7xl mx-auto px-8 grid grid-cols-2 gap-10">

        {/* Left Side */}
        <div
          className={`flex flex-col gap-2.5 justify-center ${contentClassName}`}
        >
          {showLabel && (
            <div className="flex flex-row gap-2.5 items-center">
              <p className="text-Bright-Maroon font-normal font-montserrat text-[20px] leading-[120%]">
                {label}
              </p>

              <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
            </div>
          )}

          <p
            className={`font-extrabold text-[60px] capitalize text-Dune font-playfair ${headingClassName}`}
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

          {children}
        </div>

        {/* Right Side */}
        <div>
          <Image
            className="rounded-4xl"
            src={image}
            alt={imageAlt}
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;