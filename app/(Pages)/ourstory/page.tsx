"use client"

import { AboutSection, HeroSection, ThemeButton } from "@/app/components"
import { images } from "@/app/ui"
import RightArrow from "@/public/icons/RightArrow"
import Image from "next/image"


const OurStory = () => {
  return (
    <div>
        <HeroSection>
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-[90px] font-extrabold text-Dune font-playfair leading-none capitalize">
          Fresh bakes, <span className="text-wine-red">properly made.</span>
        </p>

        <p className="font-montserrat text-neutral-800 font-normal text-[22px] leading-[160%] text-center max-w-245.5">
          Fold was created around a simple idea: fresh bakes, good coffee and matcha should be easy to find, easy to enjoy and worth coming back for.
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
    </HeroSection>

    {/*about section  */}
     <AboutSection
  rootPadding="pb-12 pt-24"
  headingClassName="leading-15"
  image={images.landingimages.aboutImg}
  title={
    <>
      Fold began with <span className="text-wine-red">a simple belief.</span>
    </>
  }
  paragraphs={[
    "Fresh bakes should actually be fresh. The best food rituals are often the smallest ones. The coffee before work. The matcha on the move. The warm bun you look forward to in the afternoon. The box you take back for everyone else, even though one somehow disappears on the way. That’s what Fold is built around.",
    "Every day, we start again. Doughs are mixed, proofed, baked, filled and finished from scratch, ready to be served that same day.",
  ]}
/>
    {/*  */}
    <div className="container max-w-7xl mx-auto px-8">
<div className="grid grid-cols-2 gap-12">
    {/*left side   */}
    <div>
        <Image src={images.LocationPageImages.OurStoryImg} alt=""/>
    </div>
    {/* right side */}
    <div className="flex flex-col items-start justify-center gap-4.5">
        <div className="flex flex-col gap-3 ">
            <p className="font-montserrat font-normal text-[22px] leading-[160%] text-neutral-800">No long shelf life. No shortcuts. Just proper bakes, made fresh for the people walking past our counter.</p>
             <p className="font-montserrat font-normal text-[22px] leading-[160%] text-neutral-800">Warm cinnamon buns. Cookies with soft centres. Doughnuts finished fresh. Coffee and matcha that fit into the rhythm of the day.</p>
              <p className="font-montserrat font-normal text-[22px] leading-[160%] text-neutral-800">Fold is about making those everyday rituals feel a little better — with something made today, served with care, and worth coming back for.</p>
        </div>
        <ThemeButton
            label="Freshly Folded"
            bgcolor="#B32B49"
            color="#fff"
            onClick={() => {}}
            rightIcon={<RightArrow width={15} height={12} color="#fff" />}
            fontSize={20}
            paddingX={28}
            paddingY={12}
          />
    </div>
</div>
    </div>
    </div>
  )
}

export default OurStory
