import React from 'react'

const ReviewSection = () => {
  return (
    <div className="py-24 px-25 bg-white ">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-16 items-center justify-center">
          <div className="flex flex-col gap-4.5 items-center justify-center ">
            <div className="flex flex-row gap-2.5 items-center">
              <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,rgba(255,242,197,0)_0%,#800029_100%)_1]"></p>
              <p className="text-[20px] font-normal text-Bright-Maroon font-montserrat">
                What customers are saying
              </p>
              <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
            </div>
            <p className="capitalize font-extrabold text-[60px] leading-15 text-Dune font-playfair">
              Good things unfold - <span className="text-wine-red">and people notice.</span>
            </p>
            <p className='text-neutral-800 text-[22px] font-normal text-center max-w-230 leading-[160%] font-montserrat'>
              Our bakes are made fresh from scratch each day, served from
              counters full of cookies, buns, doughnuts and seasonal specials
            </p>
                  </div>
                  {/* slider */}
                  <div></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection
