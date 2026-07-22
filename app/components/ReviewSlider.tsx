"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SliderCard from "./SliderCard";
import { images } from "../ui";

const reviews = [
  {
    avatar: images.landingimages.Avatar,
    name: "Yasmin Box",
    reviews: 4,
    photos: 0,
    weeksAgo: "15 weeks ago",
    category: "Takeaway · Brunch · £1–10",
    description:
      "10/10!!! Can’t recommend this place enough! I have been raving about this place since my first visit one Sunday afternoon. I happened to be in Ilford and stumbled on it, I told everyone in my office.",
  },

  {
    avatar: images.landingimages.Avatar,
    name: "Waleed Al-Amin",
    reviews: 530,
    photos: 8,
    weeksAgo: "26 weeks ago",
    category: "Takeaway · Other · £1–10",
    description:
      "Joanna and her colleagues are wonderful. We came in to order two coffees. Joanna noticed that my son really liked one pastry and kindly offered it to him.",
  },

  {
    avatar: images.landingimages.Avatar,
    name: "Emily Smith",
    reviews: 20,
    photos: 10,
    weeksAgo: "8 weeks ago",
    category: "Coffee · Bakery · £5–15",
    description:
      "The coffee is always delicious. I have been coming here every week. Great cinnamon buns, cookies and doughnuts.",
  },
];

const ReviewSlider = () => {
    const swiperRef = useRef<SwiperType | null>(null);

const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative">
 <Swiper
  modules={[Navigation]}
  loop
  centeredSlides
  grabCursor
  speed={700}
  spaceBetween={32}
  slidesPerView={2.6}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.realIndex);
  }}
  onSlideChange={(swiper) => {
    setActiveIndex(swiper.realIndex);
  }}
  breakpoints={{
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.1,
      spaceBetween: 28,
    },
    1280: {
      slidesPerView: 2.6,
      spaceBetween: 32,
    },
  }}
>
  {reviews.map((review, index) => (
    <SwiperSlide key={index}>
      {({ isActive }) => (
        <div
          className={`
            transition-all
            duration-500
            ${
              isActive
                ? "scale-100 opacity-100"
                : "scale-[0.92] opacity-50"
            }
          `}
        >
          <SliderCard
            avatar={review.avatar}
            name={review.name}
            reviews={review.reviews}
            photos={review.photos}
            weeksAgo={review.weeksAgo}
            category={review.category}
            description={review.description}
          />
        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>
{/* left arrow */}
<button
  onClick={() => swiperRef.current?.slidePrev()}
  className="
  absolute
  left-3
  top-1/2
  -translate-y-1/2
  z-20

  flex
  items-center
  justify-center

  w-14
  h-14

  rounded-full

  bg-white

  border

  border-[#B32B49]

  text-[#B32B49]

  shadow-md

  transition

  hover:scale-105
"
>
  ←
</button>


{/* right arrow */}
<button
  onClick={() => swiperRef.current?.slideNext()}
  className="
  absolute
  right-3
  top-1/2
  -translate-y-1/2
  z-20

  flex
  items-center
  justify-center

  w-14
  h-14

  rounded-full

  bg-white

  border

  border-[#B32B49]

  text-[#B32B49]

  shadow-md

  transition

  hover:scale-105
"
>
  →
</button>

  {/* ===== Custom Pagination ===== */}
      <div className="mt-10 flex justify-center gap-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                activeIndex === index
                  ? "w-9 h-3 bg-[#B32B49]"
                  : "w-3 h-3 bg-[#D9D9D9]"
              }
            `}
          />
        ))}
      </div>
</div>
  );
};

export default ReviewSlider;