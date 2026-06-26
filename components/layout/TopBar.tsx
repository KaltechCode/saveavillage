import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

function TopBar() {
  return (
    <div
      className="
    hidden
    md:flex

    bg-[#250033]
    text-white
    py-3
  "
    >
      <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1800px] flex  items-center justify-between">
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            <span>
              <BiSolidPhoneCall />
            </span>
            +1 (214) 642 7635
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <span>
              <MdEmail />
            </span>
            info@saveavillageusa.org
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span>Follow us:</span>
          <span>
            <Link
              href={"https://www.facebook.com"}
              target="_blank"
              className="cursor-pointer"
            >
              <FaFacebookF size={12} />
            </Link>
          </span>
          <span>
            <Link
              href={"https://x.com"}
              target="_blank"
              className="cursor-pointer"
            >
              <RiTwitterXLine size={12} />
            </Link>
          </span>
          <span>
            <Link
              href={"https://www.linkedin.com"}
              target="_blank"
              className="cursor-pointer"
            >
              {" "}
              <FaLinkedinIn size={12} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
