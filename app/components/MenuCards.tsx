import Image, { StaticImageData } from "next/image";
import {ThemeButton} from "./buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";

interface MenuCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  onClick: () => void;
}

const MenuCards = ({ image, title, description, onClick }: MenuCardProps) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-57 h-57 rounded-full bg-Egg-White flex items-center justify-center">
        <div className="relative w-56 h-56">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-white text-[24px] font-semibold leading-none pt-3 font-montserrat">
          {title}
        </h3>

        <p className="text-center font-normal text-neutral-100 text-[20px] leading-[140%] max-w-75.5 pb-3 font-montserrat">
          {description}
        </p>

        <ThemeButton
          label="Where TO Buy"
          bgcolor="#FFF2C5"
          color="#800029"
          onClick={onClick}
          rightIcon={<RightArrow width={15} height={12} color="#800029" />}
          fontSize={20}
          paddingX={28}
          paddingY={12}
        />
      </div>
    </div>
  );
};

export default MenuCards;
