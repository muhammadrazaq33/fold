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
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-8 items-center">

        {/* Left Side */}
        <div
          className={`flex flex-col gap-2.5 justify-center text-center lg:text-left ${contentClassName}`}
        >
          {showLabel && (
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
               <p className="w-29.25 h-0 lg:hidden block border [border-image:linear-gradient(90deg,rgba(255,242,197,0)_0%,#800029_100%)_1]"></p>
              <p className="text-Bright-Maroon font-normal font-montserrat text-base sm:text-lg lg:text-[20px] leading-[120%]">
                {label}
              </p>

              <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
            </div>
          )}

          <p
            className={`font-extrabold text-4xl
sm:text-5xl
md:text-6xl
xl:text-[60px]

leading-none capitalize text-Dune font-playfair ${headingClassName}`}
          >
            {title}
          </p>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base
sm:text-lg
lg:text-[22px]

leading-7
lg:leading-[160%] text-neutral-800 font-normal font-montserrat"
            >
              {paragraph}
            </p>
          ))}

          {children}
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <Image
  src={image}
  alt={imageAlt}
  className="
    w-full
    max-w-sm
    sm:max-w-md
    md:max-w-xl
    lg:max-w-full
    h-auto
    rounded-3xl
    lg:rounded-4xl
  "
/>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;