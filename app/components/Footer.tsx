import Image from "next/image";
import { images } from "../ui";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Menu", href: "/menu" },
];

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy and Policy", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-wine-red   px-4
  sm:px-6
  lg:px-10
  xl:px-20
  2xl:px-25

  pt-10
  md:pt-14
  xl:pt-17

  pb-6
  md:pb-8
  rounded-tl-4xl
  rounded-tr-4xl
  lg:rounded-tl-[56px]
  lg:rounded-tr-[56px] relative overflow-hidden">
      <div className="absolute   -top-8
  md:-top-12
  xl:-top-15

  right-0

  w-52
  sm:w-72
  lg:w-96
  xl:w-125

  h-auto opacity-[0.27]">
        <Image
          src={images.landingimages.FooterBg}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="container max-w-7xl mx-auto px-0 sm:px-2 lg:px-8">
        <div className="flex flex-col gap-10 lg:gap-16">
          {/* upper footer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12.5">
            {/* first column */}
            <div className="flex flex-col gap-6.75 items-center lg:items-start text-center lg:text-left">
              <Image src={images.landingimages.FooterLogo} alt="footer logo"  className="w-40 sm:w-48 lg:w-auto h-auto" />
              <p className="font-montserrat font-normal text-base
sm:text-lg
lg:text-[20px] leading-[130%] text-white max-w-full
lg:max-w-119.75">
                Fold serves freshly made doughnuts, cinnamon buns, cookies and
                coffee from compact, high-impact retail formats.{" "}
              </p>
            </div>
            {/* second column */}
            <div className="grid grid-cols-2 gap-4 md:gap-12.5">
              <div className="flex flex-col gap-4.5 ">
                <p className="font-montserrat font-semibold text-base
lg:text-[17px] leading-4.75 text-white uppercase">
                  Quick link
                </p>
                <ul className="flex flex-col  gap-3 lg:gap-4.5">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
  relative
  inline-block
  font-montserrat
  font-normal
  text-4
  leading-5.5
  text-neutral-100

  transition-all
duration-700
ease-[cubic-bezier(0.22,1,0.36,1)]
hover:opacity-80

  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:-bottom-1
  after:h-0.5
  after:w-0
  after:bg-white
  after:rounded-full
  after:transition-all
  after:duration-700
  after:ease-[cubic-bezier(0.22,1,0.36,1)]

  hover:after:w-full
"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4.5">
                <p className="font-montserrat font-semibold text-[17px] leading-4.75 text-white uppercase">
                  Quick link
                </p>
                <ul className="flex flex-col gap-4.5">
                  {supportLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
  relative
  inline-block
  font-montserrat
  font-normal
  text-4
  leading-5.5
  text-neutral-100

  transition-all
duration-700
ease-[cubic-bezier(0.22,1,0.36,1)]
hover:opacity-80

  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:-bottom-1
  after:h-0.5
  after:w-0
  after:bg-white
  after:rounded-full
  after:transition-all
  after:duration-700
  after:ease-[cubic-bezier(0.22,1,0.36,1)]

  hover:after:w-full
"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* lower footer */}
          <div>
            <hr className="border border-t border-white/29"></hr>
            <div className="  flex
  flex-col
  md:flex-row
  justify-between
  items-center
  gap-3
  pt-4
  text-center
  md:text-left">
              <p className="font-montserrat font-normal text-sm
sm:text-base leading-6 text-white">
                FOLD — Coffee • Bakes • Matcha
              </p>
              <Link
                href="mailto:info@foldbakery.co.uk"
                className="
    relative
    inline-block

    font-montserrat
    font-normal
    text-sm
sm:text-base
    leading-6
    text-white

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:opacity-90

    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-white
    after:rounded-full
    after:transition-all
    after:duration-700
    after:ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:after:w-full
  "
              >
                info@foldbakery.co.uk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
