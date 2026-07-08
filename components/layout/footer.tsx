import React from "react";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import Button from "../small/Button";
import { IFooterLinks } from "@/constant/types";
import Link from "next/link";
import { footerLinks } from "@/constant/data";
import { FaAnglesRight } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-20 md:pt-7">
      <div className="bg-[#22002d] text-white relative bottom-0 left-0 flex items-center flex-col">
        {/* Main Footer */}
        <div className="mt-32 mobile-landscape:mt-24 md:mt-24 lg:mt-16 mx-auto py-14  w-[95%] ">
          <div className="grid grid-cols-1 gap-12 mobile-landscape:grid-cols-3 md:grid-cols-2 lg:grid-cols-11 xl:grid-cols-12">
            {/* Column 1 */}
            <div className="lg:col-span-3">
              <Image
                src={"/save-a-village-footer-logo.png"}
                alt={"Save a village"}
                className="title-text mb-5"
                width={200}
                height={200}
              />

              <p className="sm-p-text text-white mb-6 mt-7">
                Filling gaps where support is needed most in our communities,
                creating opportunities to positively impact lives in education,
                safe housing, and life skills development.
              </p>
              <div className="mt-7">
                {" "}
                <Button
                  handler="/"
                  label="Become A Volunteer"
                  primary={false}
                  iconColor="text-white"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="lg:col-span-2 xl:col-span-3">
              <h3 className="title-text mb-5 text-white!">Quick Links</h3>

              <ul className="space-y-4 mt-7">
                {footerLinks.map((item: IFooterLinks, key: number) => {
                  return (
                    <li
                      className="flex gap-2 li-a text-white! items-center"
                      key={key}
                    >
                      <span>
                        <FaAnglesRight
                          size={12}
                          className="text-white! mt-0.5"
                        />
                      </span>
                      <Link href={item.href}>{item.link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="lg:col-span-3">
              <h3 className="title-text mb-5 text-white!">Follow Us</h3>

              <div className="flex gap-2 mt-7">
                <div className="w-9 h-9 border border-gray-700!  flex justify-center items-center">
                  <FaFacebookF />
                </div>
                <div className="w-9 h-9 border border-gray-700!  flex justify-center items-center">
                  <RiTwitterXLine />
                </div>
                <div className="w-9 h-9 border border-gray-700!  flex justify-center items-center">
                  <FaLinkedinIn />
                </div>
              </div>

              <div className="flex gap-3 p-1 bg-white mt-7 rounded-full w-max">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-12 px-4 text-black bg-white rounded-full focus:outline-none"
                />

                <button
                  className="h-12 w-12 min-w-12 bg-primary rounded-full flex justify-center items-center min-   
            "
                >
                  <FaAnglesRight className="text-white" size={14} />
                </button>
              </div>
            </div>

            {/* Column 4 */}
            <div className="lg:col-span-3">
              <h3 className="title-text mb-5 text-white!">Contact Us</h3>

              <div className="space-y-4 mb-6 mt-7">
                <p className="flex gap-2 items-center">
                  <span>
                    <MdEmail size={20} className="text-white" />
                  </span>
                  info@saveavillageusa.org{" "}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <BiSolidPhoneCall className="text-white" size={20} />
                  </span>
                  +1(214) 642 7635
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaLocationDot className="text-white" size={20} />
                  </span>
                  2733 Franklin Dr,
                  <br /> Mesquite, TX 75150
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10  w-full bg-primary ">
          <div
            className="
        container
        mx-auto
        px-4
        py-5

        flex
        flex-col
        gap-4
        text-center

        md:flex-row
        md:justify-between
        md:text-left
      "
          >
            <p>© 2026 Save a Village. All rights reserved</p>

            <div className="flex justify-center gap-6">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <p>
                Designed by{" "}
                <Link
                  href="https://kaltechconsultancy.tech/"
                  target="_blank"
                  className="text-[#f6d648]"
                >
                  Kaltech
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
