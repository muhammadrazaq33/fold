"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { images } from "../ui";
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
    <header className="fixed top-0 left-0 w-full z-[9999]">
      <div className="px-25 py-1">
        <div className="container max-w-7xl mx-auto py-2.5 pl-5 pr-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={images.landingimages.Logo} alt="Fold Logo" />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`py-2 px-5 flex items-center justify-center text-base font-montserrat outline-none ${
                      pathname === item.href
                        ? "border-b-2 border-b-wine-red text-wine-red"
                        : "text-neutral-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
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
    </header>
  );
};

export default Header;
