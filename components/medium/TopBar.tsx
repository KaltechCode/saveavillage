import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

function TopBar() {
  return (
    <div
      className="
    hidden
    md:flex

    bg-[#250033]
    text-white

    items-center
    justify-between

    px-6
    py-3
  "
    >
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
          <FaFacebookF size={12} />
        </span>
        <span>
          <RiTwitterXLine size={12} />
        </span>
        <span>
          <FaLinkedinIn size={12} />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
