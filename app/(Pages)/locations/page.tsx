"use client"

import { CurrentLocationSection, HeroSection, ThemeButton } from '@/app/components'
import RightArrow from '@/public/icons/RightArrow';

const locations = () => {
  return (
    <div> 
      <HeroSection>
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-[90px] font-extrabold text-Dune font-playfair leading-none">
          Find your <span className="text-wine-red">nearest Fold.</span>
        </p>

        <p className="font-montserrat text-neutral-800 font-normal text-[22px] leading-[160%] text-center max-w-245.5">
          Fresh bakes are best when they’re close by. Find Fold in busy
          everyday places, serving coffee, bakes and matcha throughout the
          day.
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

    {/*current location section  */}
    <CurrentLocationSection/>
    </div>
  )
}

export default locations
