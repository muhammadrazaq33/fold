import Image, { StaticImageData } from "next/image";
import { ThemeButton } from "./buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";

interface MenuCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  onClick: () => void;
}

const CategoryCards = ({ image, title, description, onClick }: MenuCardProps) => {
  return (
    <div className="flex flex-col gap-4.5 items-center">
      <div className="w-57 h-57 rounded-full bg-Egg-White flex items-center justify-center">
        <div className="relative w-56 h-56">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-Dark-Jungle-Green text-[24px] font-semibold leading-none pt-3 font-montserrat">
          {title}
        </h3>

        <p className="text-center font-normal text-neutral-800 text-[20px] leading-6.5 max-w-75.5 pb-3 font-montserrat">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCards;
