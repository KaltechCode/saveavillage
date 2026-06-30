"use client";
import Image from "next/image";
import Button from "../small/Button";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { navlinks } from "@/constant/data";
import { INAVLINK } from "@/constant/types";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();
  return (
    <nav
      className="
      hidden
   lg:flex
    items-center
    justify-between
    w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1800px]
    py-4
  "
    >
      <Link href={"/"}>
        <Image
          src="/save-a-vilage-logo.png"
          height={200}
          width={200}
          alt="save a vilage logo "
          className="md:w-[180px]"
        />
      </Link>
      <ul
        className="
      hidden
      md:flex
      items-center
      gap-10
      md:gap-4
      lg:gap-10
      xl:gap-15
    "
      >
        {navlinks.map((link: INAVLINK, key: number) => {
          return (
            <li>
              <Link
                href={link.link}
                className={`cursor-pointer bold-p-text font-bold! ${path === link.link ? "text-primary border-b border-b-2 border-primary py-1 transition-all duration-300" : "text-black py-1"}`}
                key={key}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex">
        <Button
          label="Donate"
          primary={true}
          iconColor="text-primary"
          handler="/"
        />
      </div>

      <button className="md:hidden bg-primary h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
        <HiBars3 className="text-white" size={24} />
      </button>
    </nav>
  );
}

export default Navbar;
