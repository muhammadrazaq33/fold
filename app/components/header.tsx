


"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { images } from "../ui";
import { ThemeButton } from "./buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";
import { MenuIcon } from "@/public/icons";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Locations", href: "/locations" },
  { name: "Work With Us", href: "/workwithus" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isMenuOpen]);

 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    // Check scroll position on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

console.log(isScrolled);
  return (
    <header className={`fixed top-0 left-0 w-full z-9 overflow-hidden transition-all duration-300 ease-in-out ${
    isScrolled ? "rounded-b-[30px] shadow-lg bg-Egg-White" : "rounded-none"
  }`}>
      <div className="px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-25 py-1">
        <div className="container max-w-7xl mx-auto py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={images.landingimages.Logo} alt="Fold Logo"  className="w-22 sm:w-28 md:w-32 lg:w-auto h-auto"/>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-1 xl:gap-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`py-2 px-3 xl:px-5 lg:text-[16px] text-[14px] flex items-center justify-center text-base font-montserrat outline-none ${
                      pathname === item.href
                        ? "md:border-b-2 border-b border-b-wine-red text-wine-red"
                        : "text-neutral-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

{/* hamburger */}
<button
  onClick={() => setIsMenuOpen(true)}
  className="block lg:hidden"
>
  <MenuIcon />
</button>

          {/* CTA Button */}
          <div className="hidden lg:block">
          <ThemeButton
            label="Find us"
            bgcolor="#B32B49"
            color="#fff"
            onClick={() => {}}
            rightIcon={<RightArrow width={15} height={12} color="#fff" />}
            fontSize={20}
            paddingX={28}
            paddingY={12}
          />
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
<div
  className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden ${
    isMenuOpen
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  }`}
  onClick={() => setIsMenuOpen(false)}
>
  {/* Drawer */}
  <div
    onClick={(e) => e.stopPropagation()}
    className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isMenuOpen
        ? "translate-x-0"
        : "translate-x-full"
    }`}
  >
    {/* Header */}
    <div className="flex items-center justify-between px-6 py-6 border-b">
      <Image
        src={images.landingimages.Logo}
        alt="Logo"
        className="w-24 h-auto"
      />

      <button
        onClick={() => setIsMenuOpen(false)}
         className="
    transition-transform
    duration-300
    hover:rotate-90
  "
      >
       
        <MenuIcon />
      </button>
    </div>

    {/* Navigation */}
    <nav className="px-6 py-8">
      <ul className="flex flex-col gap-6">
        {navItems.map((item,index) => (
          <li key={item.name}  className={`
    transition-all
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${
      isMenuOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-8 opacity-0"
    }
  `}
  style={{
    transitionDelay: `${100 + index * 80}ms`,
  }}>
<Link
  href={item.href}
  onClick={() => setIsMenuOpen(false)}
  className={`
    relative
    inline-block

    text-lg
    font-montserrat

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    

    ${
      pathname === item.href
        ? "text-wine-red font-semibold"
        : "text-neutral-700 hover:text-wine-red hover:opacity-90"
    }

    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-[#B32B49]
    after:rounded-full
    after:transition-all
    after:duration-700
    after:ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:after:w-full
  `}
>
  {item.name}
</Link>
          </li>
        ))}
      </ul>

      <div  className={`
    mt-10
    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${
      isMenuOpen
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0"
    }
  `}   style={{
    transitionDelay: "500ms",
  }}>
        <ThemeButton
          label="Find us"
          bgcolor="#B32B49"
          color="#fff"
          onClick={() => setIsMenuOpen(false)}
          rightIcon={
            <RightArrow
              width={15}
              height={12}
              color="#fff"
            />
          }
          fontSize={18}
          paddingX={24}
          paddingY={12}
        />
      </div>
    </nav>
  </div>
</div>
    </header>
  );
};

export default Header;

