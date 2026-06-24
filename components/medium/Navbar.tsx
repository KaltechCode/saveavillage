import Image from "next/image";
import React from "react";
import Button from "../small/Button";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  return (
    <nav
      className="
    flex
    items-center
    justify-between

    w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px]
    py-4
  "
    >
      <Image
        src="/save-a-vilage-logo.png"
        height={200}
        width={200}
        alt="save a vilage logo"
      />

      <ul
        className="
      hidden
      md:flex
      items-center
      gap-10
    "
      >
        <li>Home</li>
        <li>About Us</li>
        <li>Programs</li>
        <li>Events</li>
        <li>Contact Us</li>
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
