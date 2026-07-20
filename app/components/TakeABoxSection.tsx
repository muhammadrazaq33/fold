import Image from "next/image";
import { images } from "../ui";
import Link from "next/link";

const TakeABoxSection = () => {
  return (
    <div className="px-25 pb-16">
      <div className="container max-w-7xl mx-auto px-8">
        <div
          className="pl-15 py-4 pr-4 grid grid-cols-2 gap-12 bg-Egg-White rounded-[64px]"
          style={{ backgroundImage: `url(/images/TakeABoxBg.png)` }}
        >
          {/* left column */}
          <div className="flex flex-col gap-6 justify-center">
            <p className="font-playfair font-extrabold text-[62px] leading-none text-black capitalize">
              Take a box. Make{" "}
              <span className="text-wine-red">someone’s day.</span>
            </p>
            <p className="text-neutral-800 font-montserrat font-normal text-5 leading-7">
              Our bakes are made for sharing — at work, at home, for birthdays,
              meetings, weekends or no reason at all.
            </p>
            <Link
              href="/"
              className="font-montserrat font-medium text-[20px] leading-7 underline text-wine-red"
            >
              Ask in store about mixed boxes and daily selections.
            </Link>
          </div>
          {/* right column */}
          <div className="">
            <Image src={images.landingimages.TakeABoxImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeABoxSection;
