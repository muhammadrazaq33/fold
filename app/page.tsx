"use client";

import Image from "next/image";
import RightArrow from "@/public/icons/RightArrow";
import { AboutSection, BrandHighlightSection, FindUsOnline, HeroSection, LocationSection, MenuCategoriesSection, MenuSection, ReviewSection, TakeABoxSection, ThemeButton } from "./components";
import { images } from "./ui";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden  z-100">
      {/* Top right Image */}
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
               z-1000"
      />
      {/* Top left Image */}
      <Image
        src={images.landingimages.cookie}
        alt="Decoration"
        width={200}
        height={200}
        className="
        absolute
         top-[1%]
         -left-22
         opacity-77
         pointer-events-none
         select-none
         z-50"
      />
      <div className="">
        <HeroSection showCookie>
      <div className="grid grid-cols-2 gap-16">
        {/* first column */}
        <div className="flex flex-col gap-8 justify-center">
          <p className="text-[90px] font-extrabold text-Dune font-playfair leading-none">
            Fresh Bakes. <span className="text-wine-red">Daily Rituals.</span>
          </p>

          <div className="flex flex-row gap-5">
            <ThemeButton
              label="See The Menu"
              bgcolor="#B32B49"
              color="#fff"
              onClick={() => {}}
              rightIcon={<RightArrow width={15} height={12} color="#fff" />}
              fontSize={20}
              paddingX={28}
              paddingY={12}
            />

            <ThemeButton
              label="Find us"
              bgcolor="#333333"
              color="#fff"
              onClick={() => {}}
              rightIcon={<RightArrow width={15} height={12} color="#fff" />}
              fontSize={20}
              paddingX={28}
              paddingY={12}
            />
          </div>
        </div>

        {/* second column */}
        <div>
          <Image
            src={images.landingimages.heroimage}
            alt="hero image"
          />
        </div>
      </div>
    </HeroSection>
      </div>
     {/* About Section */}
     <AboutSection
  rootPadding="py-24"
  showLabel
  label="About"
  headingClassName="leading-none"
  image={images.landingimages.aboutImg}
  title={
    <>
      Freshly folded, <span className="text-wine-red">every day.</span>
    </>
  }
  paragraphs={[
    "Our bakes are made fresh from scratch each day, served from counters full of cookies, buns, doughnuts and seasonal specials.",
    "Grab a coffee before work, pick up a matcha on the go, or take a box of bakes back for the office. Fresh, generous and easy to love — that's Fold.",
  ]}
/>
      <MenuSection />
      <ReviewSection />
      <FindUsOnline/>
      <BrandHighlightSection />
      {/* location section */}
       <LocationSection
      innerPadding="py-24"
      title={
        <>
          Unfolding <span className="text-wine-red">near you soon.</span>
        </>
      }
      description="We’re starting with fresh bakes, coffee and matcha in busy everyday places — and more Fold locations are on the way."
      buttonLabel="Find Your Nearest Fold"
    />
      <MenuCategoriesSection />
      <TakeABoxSection/>
    </div>
  );
}
