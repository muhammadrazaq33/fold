

import Image, { StaticImageData } from "next/image";

interface MenuCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  onClick: () => void;
}

const CategoryCards = ({ image, title, description, onClick }: MenuCardProps) => {
  return (
    <div className="flex flex-col gap-4.5 items-center text-center">
      <div className="w-40 h-40
sm:w-48 sm:h-48
lg:w-52 lg:h-52
xl:w-57 xl:h-57 rounded-full bg-Egg-White flex items-center justify-center">
        <div className="relative w-39 h-39
sm:w-47 sm:h-47
lg:w-51 lg:h-51
xl:w-56 xl:h-56">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-Dark-Jungle-Green text-xl
sm:text-2xl font-semibold leading-none pt-3 font-montserrat">
          {title}
        </h3>

        <p className="text-center font-normal text-neutral-800 text-base
sm:text-lg
xl:text-[20px] leading-6.5 max-w-full
sm:max-w-72
xl:max-w-75.5 pb-3 font-montserrat">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCards;

