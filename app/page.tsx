import Image from "next/image";
import { images } from "./ui";
import { AboutSection, BrandHighlightSection, FindUsOnline, HeroSection, LocationSection, MenuCategoriesSection, MenuSection, ReviewSection, TakeABoxSection } from "./components";

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
               opacity-75
               blur-xs
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
         opacity-75
         blur-xs
         pointer-events-none
         select-none
         z-50"
      />
      <div className="">
        <HeroSection />
      </div>
      <AboutSection />
      <MenuSection />
      <ReviewSection />
      <FindUsOnline/>
      <BrandHighlightSection />
      <LocationSection />
      <MenuCategoriesSection />
      <TakeABoxSection/>
    </div>
  );
}
