import Image from 'next/image'
import { images } from '../ui'
import { Location, Watch } from '@/public/icons'

const CurrentLocationSection = () => {
  return (
    <div className='py-24'>
      <div className='container max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-2 gap-10.5'>
            {/*left side   */}
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-2.5'>
                     <div className="flex flex-row gap-2.5 items-center">
            <p className="text-[20px] leading-[120%] text-Bright-Maroon font-normal font-montserrat">Current Location</p>
            <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
          </div>
            <p className="font-extrabold text-[58px] capitalize text-Dune leading-none font-playfair">
            Fold Ilford <span className="text-wine-red">Exchange.</span>
          </p>
            <p className="text-[22px] text-neutral-800 font-normal leading-[160%] font-montserrat">
            Coffee, bakes and matcha served daily.
          </p>
                </div>
                <div className='flex flex-col gap-6.75'>
                   {/* /address  */}
                   <div className='flex flex-col gap-4.5 rounded-xl bg-neutral-50 border border-neutral-200 p-4.5'>
                    <div className='flex flex-col gap-3.5'>
                        <div className='flex flex-row gap-2.5 items-center'>
                            <Location/>
                            <p className='font-montserrat font-semibold text-[20px] leading-[120%] text-neutral-800'>Address</p>
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-[#E5E5E5] from-[46.15%] to-transparent"></div>
                    </div>
                    <p className='font-montserrat font-normal text-[20px] leading-[140%] text-neutral-800'>Ilford Exchange, Ilford </p>
                   </div>
                   {/* Opening hours */}
                    <div className='flex flex-col gap-4.5 rounded-xl bg-neutral-50 border border-neutral-200 p-4.5'>
                    <div className='flex flex-col gap-3.5'>
                        <div className='flex flex-row gap-2.5 items-center'>
                            <Watch/>
                            <p className='font-montserrat font-semibold text-[20px] leading-[120%] text-neutral-800'>Opening Hours</p>
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-[#E5E5E5] from-[46.15%] to-transparent"></div>
                    </div>
                   <div className='flex flex-col gap-3.5'>
                     <div className='flex flex-row gap-2.5 items-center justify-between'>
                        <p className='font-montserrat font-normal text-[20px] leading-[140%] text-neutral-800'>Monday to Saturday</p>
                        <p className='font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>7:30am - 8:00pm</p>
                        </div>
                         <div className='flex flex-row gap-2.5 items-center justify-between'>
                        <p className='font-montserrat font-normal text-[20px] leading-[140%] text-neutral-800'>Sunday</p>
                        <p className='font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>10:00am - 6:00pm</p>
                        </div>
                   </div>
                   </div>
                   {/* freshly folded here */}
                   <div className='flex flex-col gap-5'>
                    <p className='font-montserrat font-semibold text-[20px] leading-[120%] text-neutral-800'>Freshly folded here</p>
                  <div className='flex flex-row flex-wrap gap-3.5'>
                    <p className='py-1 px-4 rounded-[99px] bg-neutral-50 border border-neutral-200 font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>Cookies</p>
                     <p className='py-1 px-4 rounded-[99px] bg-neutral-50 border border-neutral-200 font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>Cinnamon buns</p>
                      <p className='py-1 px-4 rounded-[99px] bg-neutral-50 border border-neutral-200 font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>Doughnuts</p>
                       <p className='py-1 px-4 rounded-[99px] bg-neutral-50 border border-neutral-200 font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>Coffee</p>
                        <p className='py-1 px-4 rounded-[99px] bg-neutral-50 border border-neutral-200 font-montserrat font-normal text-[20px] leading-[140%] text-neutral-700'>Matcha</p>
                  </div>
                   </div>
                </div>
            </div>
            {/* right side column */}
            <div className=''>
                <Image src={images.LocationPageImages.CurrentLocationImg} alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentLocationSection
