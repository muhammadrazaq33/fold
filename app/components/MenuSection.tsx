"use client";
import { images } from "../ui";
import MenuCards from "./MenuCards";
import Image from "next/image";

const menuItems = [
  {
    image: images.landingimages.menuImg1,
    title: "Bakes",
    description:
      "Cookies, cinnamon buns, doughnuts and specials made fresh each day.",
  },
  {
    image: images.landingimages.menuImg2,
    title: "Coffee",
    description: "Proper coffee, made with care.",
  },
  {
    image: images.landingimages.menuImg3,
    title: "Matcha",
    description: "Smooth, fresh matcha served hot or iced.",
  },
];

const MenuSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="rounded-4xl lg:rounded-[64px] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-25 bg-wine-red relative overflow-hidden">
        {/* bg coffee image */}
        <Image
          src={images.landingimages.BgCoffeeImg}
         className="
hidden
md:block
absolute
-top-5
-right-7
lg:-right-13

w-28
lg:w-47.75

h-auto

rotate-[-39deg]

opacity-20
"
          alt=""
        />
        {/* bg cookie image */}
        <Image
          src={images.landingimages.cookie}
         className="
hidden
md:block

absolute

-bottom-8
lg:-bottom-12

-left-16
lg:-left-30

w-40
lg:w-68

h-auto

opacity-20
z-10
"
          alt=""
        />
        <div className="container max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            <div className="flex flex-col items-center gap-2 sm:gap-2.5">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)_1]"></p>
                <p className="text-base sm:text-lg lg:text-[20px] font-normal text-white font-montserrat">
                  Menu
                </p>
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#FFFFFF_0,rgba(255,255,255,0)_100%)_1]"></p>
              </div>
              <p className="
font-playfair
font-extrabold
text-white

text-center

text-4xl
sm:text-5xl
lg:text-[60px]

sm:leading-15 leading-tight
">
                Coffee • Bakes • Matcha
              </p>
            </div>
            {/* cards */}
            <div className="grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3

gap-y-16
sm:gap-x-6 sm:gap-y-16
xl:gap-6

justify-items-center
items-start">
              {menuItems.map((item) => (
                <MenuCards
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

