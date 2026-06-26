"use client";

import { IoClose } from "react-icons/io5";
import { HiBars3, HiPhone } from "react-icons/hi2";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { navlinks } from "@/constant/data";
import { INAVLINK } from "@/constant/types";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="lg:hidden flex items-center justify-between bg-white py-4  w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1800px]">
        <Image
          src="/save-a-vilage-logo.png"
          height={200}
          width={200}
          alt="save a vilage logo "
          className="md:w-[180px]"
        />

        <button
          className="lg:hidden bg-primary h-10 w-10 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose size={24} className="text-white" />
          ) : (
            <HiBars3 size={24} className="text-white" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-300 w-[90%] mx-auto ${
          menuOpen ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="py-6">
          <ul className="space-y-5 text-[15px] text-slate-700">
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

          {/* Contact Area */}
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                <BiSolidPhoneCall
                  size={12}
                  className="text-white"
                  color="#fff"
                />
              </div>

              <span className="text-sm font-medium text-slate-800">
                <Link href={"tel:+1(629)2175852"}>+1(629) -217 -5852</Link>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span>Follow us:</span>
              <span className="h-7 w-7 flex justify-center items-center bg-primary rounded-full">
                <Link
                  href={"https://www.facebook.com"}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaFacebookF size={12} className="text-white" />
                </Link>
              </span>
              <span className="h-7 w-7 flex justify-center items-center bg-primary rounded-full">
                {" "}
                <Link
                  href={"https://x.com"}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <RiTwitterXLine size={12} className="text-white" />
                </Link>
              </span>
              <span className="h-7 w-7 flex justify-center items-center bg-primary rounded-full">
                {" "}
                <Link
                  href={"https://www.linkedin.com"}
                  target="_blank"
                  className="cursor-pointer"
                >
                  {" "}
                  <FaLinkedinIn size={12} className="text-white" />
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
