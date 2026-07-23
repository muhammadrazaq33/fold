"use client"
import { AboutSection, HeroSection, ThemeButton } from '@/app/components'
import { images } from '@/app/ui'
import RightArrow from '@/public/icons/RightArrow'

const WorkWithUs = () => {
  return (
    <div>
      {/* hero section */}
         <HeroSection>
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-[90px] font-extrabold text-Dune font-playfair leading-none capitalize">
          Bring Fold to <span className="text-wine-red">your location.</span>
        </p>

        <p className="font-montserrat text-neutral-800 font-normal text-[22px] leading-[160%] text-center max-w-245.5">
         Fold is a customer-first bakery and coffee brand serving fresh bakes, proper coffee and matcha from compact, high-impact retail spaces.
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
      {/* Work With Us Section */}
    <AboutSection
  rootPadding="py-24"
  showLabel
  label="Work With Us"
  headingClassName="leading-none"
  contentClassName="items-start"
  image={images.LocationPageImages.WithWithUsImg}
  title={
    <>
      Unfolding into <span className="text-wine-red">exciting spaces.</span>
    </>
  }
  paragraphs={[
    "Fold brings fresh bakery, coffee and matcha into busy retail environments, creating warm, memorable spaces that customers want to stop for.",
    "Our compact formats are designed to add theatre, quality and everyday appeal - from morning coffee to freshly baked treats served throughout the day.",
  ]}
>
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
</AboutSection>
    </div>
  )
}

export default WorkWithUs
