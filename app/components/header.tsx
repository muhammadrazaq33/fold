"use client";
import React, { Children } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../ui";

import { usePathname } from "next/navigation";
import { ThemeButton } from "./buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Locations", href: "/##" },
  { name: "Work With Us", href: "/####" },
  { name: "Contact", href: "/#####" },
];
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="px-25 py-1  fixed top-0 left-0  w-full z-9999">
      <div
        className="container max-w-7xl mx-auto py-2.5 pl-5 pr-10 flex flex-row justify-between
      "
      >
        <Image src={images.landingimages.Logo} alt={"logo"} />
        <div className="flex flex-row gap-2.5 ">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`py-2.5 px-5 flex items-center justify-center text-base outline-none ${
                  pathname === item.href
                    ? "border-b-2 border-b-wine-red text-wine-red"
                    : "text-neutral-700"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <ThemeButton
          label={"Find us"}
          bgcolor={"#B32B49"}
          color={"#fff"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          rightIcon={<RightArrow width={15} height={12} color="#fff" />}
          fontSize={20}
          paddingX={28}
          paddingY={12}
        />
      </div>
    </header>
  );
};

export default Header;
