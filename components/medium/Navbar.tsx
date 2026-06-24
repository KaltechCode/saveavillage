import Image from "next/image";
import React from "react";
import Button from "../small/Button";

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

      <Button
        label="Donate"
        primary={true}
        iconColor="text-primary"
        handler="/"
      />

      <button className="md:hidden">☰</button>
    </nav>
  );
}

export default Navbar;
