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
    <div className="px-8">
      <div className="rounded-[64px] py-20 px-25 bg-wine-red relative overflow-hidden ">
        {/* bg coffee image */}
        <Image
          src={images.landingimages.BgCoffeeImg}
          className="absolute -top-5 -right-13 w-[191.5865px] h-[269.9498px] rotate-[-39.03deg] opacity-20"
          alt=""
        />
        {/* bg cookie image */}
        <Image
          src={images.landingimages.cookie}
          className="absolute -bottom-12 -left-30 w-68 h-66 opacity-20 z-10"
          alt=""
        />
        <div className="container max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2.5  items-center">
              <div className="flex flex-row gap-2.5 items-center">
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)_1]"></p>
                <p className="text-[20px] font-normal text-white font-montserrat">
                  Menu
                </p>
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#FFFFFF_0,rgba(255,255,255,0)_100%)_1]"></p>
              </div>
              <p className="text-[60px] font-extrabold text-white leading-15 font-playfair">
                Coffee • Bakes • Matcha
              </p>
            </div>
            {/* cards */}
            <div className="grid grid-cols-3 gap-6 justify-center items-start">
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
