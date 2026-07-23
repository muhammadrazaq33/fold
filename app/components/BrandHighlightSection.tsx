


import CheckMark from "@/public/icons/CheckMark";
import Image from "next/image";
import { images } from "../ui";

const items = [
  "Morning coffee on the move.",
  "A warm bun fresh from the oven.",
  "A cookie you probably won’t save for later.",
  "A box of bakes to take back for everyone else.",
];

const BrandHighlightSection = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-8">
        {/* right side image */}
        <Image
          src={images.landingimages.BrandHighlightBg}
          width={550}
          height={550}
          className="absolute top-15 right-15 z-10"
          alt=""
        />
        {/* right side image */}
        <Image
          src={images.landingimages.heroimage}
          width={605}
          height={605}
          className="absolute top-35 right-10 z-10"
          alt=""
        />
        <div className="grid grid-cols-2 gap-8">
          {/* left side content */}
          <div className="flex flex-col gap-4.5 max-w-139.5">
            <p className="text-Dune font-extrabold text-[60px] leading-none capitalize font-playfair">
              Coffee, bakes and matcha -{" "}
              <span className="text-wine-red">made fresh, every day.</span>
            </p>
            <p className="text-neutral-800 font-normal text-[22px] leading-[160%] font-montserrat">
              From warm cinnamon buns and proper cookies to freshly finished
              doughnuts and drinks worth stopping for, Fold is built around the
              small treats that make the day better.
            </p>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="flex flex-row gap-3.5 items-center">
                  <div className="w-6.5 h-6.5 bg-Bright-Maroon rounded-full flex justify-center items-center">
                    <CheckMark width={73} height={73} />
                  </div>
                  <p className="font-normal text-[22px] leading-[120%] text-neutral-800">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <p className="font-normal text-[22px] leading-[160%] text-neutral-800 font-montserrat">
              Freshly folded. Properly made. Easy to love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandHighlightSection
