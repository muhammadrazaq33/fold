import Image, { StaticImageData } from "next/image";
import { Start } from "@/public/icons";

interface SliderCardProps {
  avatar: StaticImageData;
  name: string;
  reviews: number;
  photos: number;
  weeksAgo: string;
  category: string;
  description: string;
  rating?: number;
}

const SliderCard = ({
  avatar,
  name,
  reviews,
  photos,
  weeksAgo,
  category,
  description,
  rating = 5,
}: SliderCardProps) => {
  return (
    <div className="flex-1 h-full flex flex-col  gap-5
  sm:gap-6

  rounded-2xl
  lg:rounded-3xl border border-neutral-200 bg-neutral-50  p-5
  sm:p-6
  lg:p-8  w-[88vw]
  max-w-[320px]

  sm:max-w-[460px]
  md:max-w-[520px]
  lg:max-w-[660px]
">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <Image src={avatar} alt={name}  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-auto lg:h-auto"/>

        <div className="flex flex-col gap-0.5 justify-center">
          <p className="font-montserrat font-semibold text-[15px]
sm:text-[16px]
lg:text-[18px] leading-3xl text-Mirage">
            {name}
          </p>

          <p className="font-montserrat font-medium text-sm
sm:text-[15px]
lg:text-[16px] leading-3xl text-neutral-600">
            {reviews} reviews · <span>{photos} photos</span>
          </p>
        </div>
      </div>

      {/* Review */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-2 justify-start">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3.5">
            <div className="flex">
            {Array.from({ length: rating }).map((_, index) => (
  <div
    key={index}
    className="scale-90 sm:scale-100"
  >
    <Start />
  </div>
))}
            </div>

            <p className="font-montserrat font-medium text-sm
sm:text-base
lg:text-[18px]
 leading-3xl text-neutral-600">
              {weeksAgo}
            </p>
          </div>

          <p className="font-inter font-medium text-base
sm:text-lg
lg:text-[18px] leading-3xl text-neutral-800">
            {category}
          </p>
        </div>

        <p className="font-montserrat text-[15px]
sm:text-base
lg:text-[18px] leading-[160%] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;