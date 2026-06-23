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
    <footer className="pt-60 md:pt-32">
      <div className="bg-[#22002d] text-white relative bottom-0 left-0 flex items-center flex-col">
        {/* Contact Bar */}
        <div className="mx-auto absolute -top-32 mobile-landscape:-top-24 lg:-top-16 md:-top-24 w-[90%] max-w-[1200px] 2xl:max-w-[1300px]">
          <div className=" bg-primary flex px-4 py-8 rounded-2xl flex-col gap-8 mobile-landscape:grid mobile-landscape:grid-cols-2 md:grid  md:grid-cols-2 lg-grid-cols-3 lg:rounded-b-2xl lg:flex lg:flex-row lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <FaLocationDot className="text-primary" size={20} />
              </div>

              <div>
                <p className="text-xs">Address</p>
                <p className="title-text text-white!">
                  4648 Dallas Road TX, 19206
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <MdEmail className="text-primary" size={20} />
              </div>

              <div>
                <p className="text-xs">Send Email</p>
                <p className="title-text text-white!">info@saveavillage.org</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <BiSolidPhoneCall className="text-primary" size={20} />
              </div>

              <div>
                <p className="text-xs">Call Us</p>
                <p className="title-text text-white!">+1 (214) 642 7635</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="mt-32 mobile-landscape:mt-24 md:mt-24 lg:mt-16 mx-auto px-4 py-14  max-w-[1200px] 2xl:max-w-[1300px]">
          <div className="grid grid-cols-1 gap-12 mobile-landscape:grid-cols-2 md:grid-cols-2 lg:grid-cols-11 xl:grid-cols-12">
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
                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
                a lacinia curabitur lacinia mollis
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
              <h3 className="title-text mb-5 text-white!">Recent Posts</h3>

              <div className="space-y-5 mt-7">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      src={"/save-a-village-feeding-the-poor.jpg"}
                      alt="Save a village image"
                      className="h-16 w-30"
                    />
                  </div>

                  <div className="">
                    <p className="bold-p-text mb-2">May 12, 2025</p>

                    <p className="text-sm ">
                      There are many variations of passages
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      src={"/save-a-village-sharing-moment-with-poor.jpg"}
                      alt="Save a village image"
                      className="h-16 w-30"
                    />
                  </div>
                  <div>
                    <p className="bold-p-text mb-2">May 12, 2025</p>

                    <p className="text-sm">
                      There are many variations of passages
                    </p>
                  </div>
                </div>
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
                  info@saveavillageusa.org
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <BiSolidPhoneCall className="text-white" size={20} />
                  </span>
                  +1 (214) 642 7635
                </p>
              </div>

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

              <div className="flex p-1 bg-white rounded-lg mt-7">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 h-12 px-4 text-black bg-white rounded-l-lg"
                />

                <button
                  className="
              w-12
              lg:w-8
              bg-primary
              rounded-r-lg
            "
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
