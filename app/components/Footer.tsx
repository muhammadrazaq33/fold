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
    <footer className="bg-wine-red px-25 pt-17 pb-8 rounded-tl-[56px] rounded-tr-[56px] relative overflow-hidden mt-28">
      <div className="absolute -top-15 right-0 w-125 h-137.5 opacity-[0.27]">
        <Image
          src={images.landingimages.FooterBg}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="container max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-16">
          {/* upper footer */}
          <div className="grid grid-cols-2 gap-12.5">
            {/* first column */}
            <div className="flex flex-col gap-6.75">
              <Image src={images.landingimages.FooterLogo} alt="footer logo" />
              <p className="font-montserrat font-normal text-[20px] leading-[130%] text-white max-w-119.75">
                Fold serves freshly made doughnuts, cinnamon buns, cookies and
                coffee from compact, high-impact retail formats.{" "}
              </p>
            </div>
            {/* second column */}
            <div className="grid grid-cols-2 gap-12.5">
              <div className="flex flex-col gap-4.5">
                <p className="font-montserrat font-semibold text-[17px] leading-4.75 text-white uppercase">
                  Quick link
                </p>
                <ul className="flex flex-col gap-4.5">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-montserrat font-normal text-4 leading-5.5 text-neutral-100"
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
                        className="font-montserrat font-normal text-4 leading-5.5 text-neutral-100"
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
            <div className="flex flex-row justify-between items-end pt-4">
              <p className="font-montserrat font-normal text-3.5 leading-6 text-white">
                FOLD — Coffee • Bakes • Matcha
              </p>
              <a
                href="mailto:info@foldbakery.co.uk"
                className="font-montserrat font-normal text-3.5 leading-6 text-white cursor-pointer"
              >
                info@foldbakery.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
