"use client";

import Image from "next/image";
import RightArrow from "@/public/icons/RightArrow";
import {
  AboutSection,
  BrandHighlightSection,
  FindUsOnline,
  HeroSection,
  LocationSection,
  MenuCategoriesSection,
  MenuSection,
  ReviewSection,
  TakeABoxSection,
  ThemeButton,
} from "./components";
import { images } from "./ui";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
{/* hero section  */}
      <section className="">
        <HeroSection showCookie>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col md:gap-8 gap-6.5 justify-center">
              <p
                className="text-5xl
sm:text-6xl
md:text-[55px]
lg:7xl
xl:text-[90px] text-center
md:text-left font-extrabold text-Dune font-playfair leading-none"
              >
                Fresh Bakes.{" "}
                <span className="text-wine-red">Daily Rituals.</span>
              </p>

              <div
                className="
flex
flex-col
sm:flex-row
lg::flex-row
gap-3.5
md:gap-3.5
lg::gap-5
justify-center
md:justify-start
md:items-center
items-center
self-center
md:self-start
"
              >
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

            <div className="flex justify-center lg:justify-end">
              <Image src={images.landingimages.heroimage} alt="hero image" className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto"/>
            </div>
          </div>
        </HeroSection>
      </section>
      {/* About Section */}
      <AboutSection
  rootPadding="py-14 sm:py-16 md:py-20 lg:py-24"
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
      {/* <BrandHighlightSection /> */}
      {/* location section */}
      <LocationSection
      innerPadding="py-14 sm:py-16 lg:py-24"
      innerRounded="rounded-[0px]"
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
