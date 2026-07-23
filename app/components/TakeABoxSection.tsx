import Image from "next/image";
import { images } from "../ui";
import Link from "next/link";

const TakeABoxSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-25 pb-10 md:pb-12 xl:pb-16">
      <div className="container max-w-7xl mx-auto px-0 sm:px-2 lg:px-8">
        <div
          className=" grid
    grid-cols-1
    lg:grid-cols-2
    gap-8
    xl:gap-12   pl-6
    sm:pl-8
    lg:pl-12
    xl:pl-15

    pr-6
    sm:pr-8
    lg:pr-4

    py-8
    lg:py-4 bg-Egg-White  rounded-4xl
    lg:rounded-[48px]
    xl:rounded-[64px] items-center"
          style={{ backgroundImage: `url(/images/TakeABoxBg.png)` }}
        >
          {/* left column */}
          <div className="flex flex-col gap-5 lg:gap-6 justify-center text-center lg:text-left">
            <p className="font-playfair font-extrabold text-[32px]
sm:text-5xl
lg:text-[50px]
xl:text-[62px] md:leading-none sm:leading-13 leading-10 text-black capitalize">
              Take a box. Make{" "}
              <span className="text-wine-red">someone’s day.</span>
            </p>
            <p className="text-neutral-800 font-montserrat font-normal text-base
sm:text-lg
lg:text-xl md:leading-7 leading-5">
              Our bakes are made for sharing — at work, at home, for birthdays,
              meetings, weekends or no reason at all.
            </p>
            <Link
              href="/"
              className="font-montserrat font-medium text-base
sm:text-lg
lg:text-[20px] wrap-break-word md:leading-7 leading-5 underline text-wine-red"
            >
              Ask in store about mixed boxes and daily selections.
            </Link>
          </div>
          {/* right column */}
          <div className="flex justify-center lg:justify-end">
            <Image src={images.landingimages.TakeABoxImg} alt=""   className="
    w-full
    max-w-[320px]
    sm:max-w-105
    lg:max-w-125
    xl:max-w-full
    h-auto
  "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeABoxSection;

