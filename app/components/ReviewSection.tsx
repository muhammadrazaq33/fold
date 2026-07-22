// "use client";
// import SliderCard from "./SliderCard";
// import { images } from "../ui";
// import { useState } from "react";
// import ReviewSlider from "./ReviewSlider";
// import SliderLeftArrow from "@/public/icons/SliderLeftArrow";
// import { SliderRightArrow } from "@/public/icons";

// const reviews = [
//   {
//     avatar: images.landingimages.Avatar,
//     name: "Yasmin Box",
//     reviews: 4,
//     photos: 0,
//     weeksAgo: "15 weeks ago",
//     category: "Takeaway · Brunch · £1–10",
//     description:
//       "10/10!!! Can’t recommend this place enough! I have been raving about this place since my first visit.",
//   },
//   {
//     avatar: images.landingimages.Avatar,
//     name: "John Smith",
//     reviews: 12,
//     photos: 5,
//     weeksAgo: "2 weeks ago",
//     category: "Coffee · Breakfast · £10–20",
//     description:
//       "Amazing coffee and fresh pastries. The atmosphere is really nice.",
//   },
//   {
//     avatar: images.landingimages.Avatar,
//     name: "John Smith",
//     reviews: 12,
//     photos: 5,
//     weeksAgo: "2 weeks ago",
//     category: "Coffee · Breakfast · £10–20",
//     description:
//       "Amazing coffee and fresh pastries. The atmosphere is really nice.",
//   },
// ];

// const ReviewSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="py-24  bg-white flex flex-col gap-16 relative">
//       <div className="px-25">
//         <div className="container max-w-7xl mx-auto px-8 overflow-hidden ">
//           <div className="flex flex-col gap-16 ">
//             {/* content */}
//             <div className="flex flex-col gap-4.5 items-center justify-center ">
//               <div className="flex flex-row gap-2.5 items-center">
//                 <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(255,242,197,0)_0%,#800029_100%)_1]"></p>
//                 <p className="text-[20px] font-normal text-Bright-Maroon font-montserrat">
//                   What customers are saying
//                 </p>
//                 <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
//               </div>
//               <p className="capitalize font-extrabold text-[60px] leading-15 text-Dune font-playfair">
//                 Good things unfold -{" "}
//                 <span className="text-wine-red">and people notice.</span>
//               </p>
//               <p className="text-neutral-800 text-[22px] font-normal text-center max-w-230 leading-[160%] font-montserrat">
//                 Our bakes are made fresh from scratch each day, served from
//                 counters full of cookies, buns, doughnuts and seasonal specials
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-16 relative">
//         <div className="flex  gap-7.5">
//           {" "}
//           {reviews.map((review, index) => (
//             <SliderCard
//               key={index}
//               avatar={review.avatar}
//               name={review.name}
//               reviews={review.reviews}
//               photos={review.photos}
//               weeksAgo={review.weeksAgo}
//               category={review.category}
//               description={review.description}
//             />
//           ))}{" "}
//         </div>
//         <div className="absolute top-[30%] left-40 border border-wine-red rounded-[58px] bg-white p-6">
//           <SliderLeftArrow />
//         </div>
//         <div className="absolute top-[30%] right-40 border border-wine-red rounded-[58px] bg-white p-6">
//           <SliderRightArrow />
//         </div>
//         <div className="flex items-center self-center gap-1">
//           {[0, 1, 2, 3].map((index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`
//             rounded-full
//             transition-all
//             duration-300
//             cursor-pointer
//             ease-in-out
//             ${
//               activeIndex === index
//                 ? "w-9 h-3 bg-[#B32B49]"
//                 : "w-3 h-3 bg-[#D9D9D9]"
//             }
//           `}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="bg-linear-to-l from-white to-[#ffffff]/0 w-67 h-full absolute top-0 right-0"></div>

//       <div className="bg-linear-to-r from-white to-[#ffffff]/0 w-67 h-full absolute top-0 left-0"></div>
//     </div>
//   );
// };

// export default ReviewSection;

"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

import SliderCard from "./SliderCard";
import { images } from "../ui";
import SliderLeftArrow from "@/public/icons/SliderLeftArrow";
import { SliderRightArrow } from "@/public/icons";

const reviews = [
  {
    avatar: images.landingimages.Avatar,
    name: "Yasmin Box 1",
    reviews: 4,
    photos: 0,
    weeksAgo: "15 weeks ago",
    category: "Takeaway · Brunch · £1–10",
    description:
      "10/10!!! Can’t recommend this place enough! I have been raving about this place since my first visit.",
  },
  {
    avatar: images.landingimages.Avatar,
    name: "John Smith 2",
    reviews: 12,
    photos: 5,
    weeksAgo: "2 weeks ago",
    category: "Coffee · Breakfast · £10–20",
    description:
      "Amazing coffee and fresh pastries. The atmosphere is really nice.",
  },
  {
    avatar: images.landingimages.Avatar,
    name: "John Smith 3",
    reviews: 12,
    photos: 5,
    weeksAgo: "2 weeks ago",
    category: "Coffee · Breakfast · £10–20",
    description:
      "Amazing coffee and fresh pastries. The atmosphere is really nice.",
  },
  {
    avatar: images.landingimages.Avatar,
    name: "John Smith 4",
    reviews: 12,
    photos: 5,
    weeksAgo: "2 weeks ago",
    category: "Coffee · Breakfast · £10–20",
    description:
      "Amazing coffee and fresh pastries. The atmosphere is really nice.",
  },
  {
    avatar: images.landingimages.Avatar,
    name: "John Smith 5",
    reviews: 12,
    photos: 5,
    weeksAgo: "2 weeks ago",
    category: "Coffee · Breakfast · £10–20",
    description:
      "Amazing coffee and fresh pastries. The atmosphere is really nice.",
  },
  {
    avatar: images.landingimages.Avatar,
    name: "John Smith 6",
    reviews: 12,
    photos: 5,
    weeksAgo: "2 weeks ago",
    category: "Coffee · Breakfast · £10–20",
    description:
      "Amazing coffee and fresh pastries. The atmosphere is really nice.",
  },
];

const sliderReviews = [...reviews, ...reviews];

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex % reviews.length);
  };

  const handlePaginationClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <div className="py-24 bg-white flex flex-col gap-16 relative overflow-hidden">
      <div className="px-25">
        <div className="container max-w-7xl mx-auto px-8 overflow-hidden">
          <div className="flex flex-col gap-16">
            {/* content */}
            <div className="flex flex-col gap-4.5 items-center justify-center">
              <div className="flex flex-row gap-2.5 items-center">
                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(255,242,197,0)_0%,#800029_100%)_1]"></p>

                <p className="text-[20px] font-normal text-Bright-Maroon font-montserrat">
                  What customers are saying
                </p>

                <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
              </div>

              <p className="capitalize font-extrabold text-[60px] leading-15 text-Dune font-playfair">
                Good things unfold -{" "}
                <span className="text-wine-red">and people notice.</span>
              </p>

              <p className="text-neutral-800 text-[22px] font-normal text-center max-w-230 leading-[160%] font-montserrat">
                Our bakes are made fresh from scratch each day, served from
                counters full of cookies, buns, doughnuts and seasonal specials
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          loopAdditionalSlides={reviews.length}
          slidesPerView="auto"
          spaceBetween={30}
          speed={600}
          grabCursor={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="w-full z-0 [&_.swiper-wrapper]:items-stretch"
        >
          {sliderReviews.map((review, index) => (
            <SwiperSlide key={index} className="!w-auto !h-auto flex">
              <SliderCard
                avatar={review.avatar}
                name={review.name}
                reviews={review.reviews}
                photos={review.photos}
                weeksAgo={review.weeksAgo}
                category={review.category}
                description={review.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous review"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[30%] left-40 border border-wine-red rounded-[58px] bg-white p-6 cursor-pointer z-20"
        >
          <SliderLeftArrow />
        </button>

        <button
          type="button"
          aria-label="Next review"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[30%] right-40 border border-wine-red rounded-[58px] bg-white p-6 cursor-pointer z-20"
        >
          <SliderRightArrow />
        </button>

        <div className="flex items-center self-center gap-1">
          {reviews.map((_, index) => (
            <button
              type="button"
              aria-label={`Go to review ${index + 1}`}
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`
                rounded-full
                transition-all
                duration-300
                cursor-pointer
                ease-in-out
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

      {/* Right white layer */}
      <div className="bg-linear-to-l from-white via-white/90 to-white/0 w-67 h-full absolute top-0 right-0 z-10 pointer-events-none"></div>

      {/* Left white layer */}
      <div className="bg-linear-to-r from-white via-white/90 to-white/0 w-67 h-full absolute top-0 left-0 z-10 pointer-events-none"></div>
    </div>
  );
};

export default ReviewSection;