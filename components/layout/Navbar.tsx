import Image from "next/image";
import React from "react";
import Button from "../small/Button";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { navlinks } from "@/constant/data";
import { INAVLINK } from "@/constant/types";

function Navbar() {
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
      <Image
        src="/save-a-vilage-logo.png"
        height={200}
        width={200}
        alt="save a vilage logo "
        className="md:w-[180px]"
      />

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
                className="cursor-pointer bold-p-text"
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
