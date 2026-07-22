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
    <div className="flex-1 h-full flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 min-w-[660px] max-w-[660px]">
      {/* User Info */}
      <div className="flex flex-row gap-3">
        <Image src={avatar} alt={name} />

        <div className="flex flex-col gap-0.5 justify-center">
          <p className="font-montserrat font-semibold text-[16px] leading-3xl text-Mirage">
            {name}
          </p>

          <p className="font-montserrat font-medium text-[16px] leading-3xl text-neutral-600">
            {reviews} reviews · <span>{photos} photos</span>
          </p>
        </div>
      </div>

      {/* Review */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 justify-start">
          <div className="flex flex-row gap-3.25">
            <div className="flex">
              {Array.from({ length: rating }).map((_, index) => (
                <Start key={index} />
              ))}
            </div>

            <p className="font-montserrat font-medium text-[18px] leading-3xl text-neutral-600">
              {weeksAgo}
            </p>
          </div>

          <p className="font-inter font-medium text-[18px] leading-3xl text-neutral-800">
            {category}
          </p>
        </div>

        <p className="font-montserrat text-[18px] leading-[160%] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;