import { Email } from '@/public/icons'
import React from 'react'
import ContactForm from './form/ContactForm'
import { ThemeButton } from './buttons/ThemeButton'
import RightArrow from '@/public/icons/RightArrow'

const ContactRoutesSection = () => {
  return (
    <div className='py-24'>
      <div className='container max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-2 gap-12'>
            {/*left side   */}
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-2.5'>
                     <div className="flex flex-row gap-2.5 items-center">
            <p className="text-[20px] text-Bright-Maroon font-normal font-montserrat leading-[120%]">Contact Routes</p>
            <p className="w-29.25 h-0 border [border-image:linear-gradient(90deg,#800029_0%,rgba(255,242,197,0)_100%)_1]"></p>
          </div>
            <p className="font-extrabold text-[60px] capitalize text-Dune leading-none font-playfair">
            General <span className="text-wine-red">Enquiries.</span>
          </p>
            <p className="text-[22px] text-neutral-800 font-normal leading-[160%] font-montserrat">
            For customer questions, feedback or store information.
          </p>
                </div>
                <div className='flex flex-row gap-2.5 rounded-[99px] py-3 px-6 border-Sweet-Pink bg-Soft-Peach'>
                    <Email/>
                    <p className='text-wine-red font-montserrat font-semibold text-[20px] leading-none'>hello@foldbakes.co.uk</p>
                </div>
            </div>

            {/* right side form */}
            <div className=''>
               <ContactForm/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRoutesSection
