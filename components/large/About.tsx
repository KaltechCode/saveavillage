import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Helping_Hand from "../small/Icons/Helping_Hande";
import Button from "../small/Button";
import Image from "next/image";

function About() {
  return (
    <section className="h-auto mt-8 pt-10 md:mt-16 pb-[4rem]  lg:p-[6rem]">
      <div className="">
        <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px]">
          <div
            className="
            w-full
        grid
        grid-cols-1
        gap-5
        mobile-landscape:grid-cols-2
        mobile-landscape:items-center
        md:grid-cols-7
        xl:grid-cols-2
        lg:gap-20
      "
          >
            {/* Left Side */}
            <div className="md:col-span-3 xl:col-span-1">
              {/* Background Shape */}
              <div
                className="
            inset-0
           h-[400px]
            md:block
          "
              >
                <Image
                  src="/heart-2.png"
                  alt=""
                  height={400}
                  width={400}
                  className="w-full"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="md:col-span-4 xl:col-span-1">
              <p className="hero-label text-primary! mb-3 flex items-center gap-2">
                <span>
                  <FaHeart className="text-primary leading-[1.3]" />
                </span>
                About Us
              </p>

              <h2
                className="
            section-title-text

           mt-7
          "
              >
                Helping Each Other can Make
                <br />
                World Better
              </h2>

              <p
                className="
            hero-text
            text-gray-600
            mt-7
          "
              >
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit. The aspernatur aut odit aut fugit, sed quia consequuntur.
              </p>

              {/* Team */}
              <div
                className="
            flex
            flex-col
            gap-5
            mt-10
            xl:flex-row
            xl:items-center
            xl:justify-between
          "
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-full
                  bg-primary
                  text-white
                "
                    >
                      <Helping_Hand />
                    </div>

                    <h3 className="title-text mb-0">Start Helping Team</h3>
                  </div>

                  <div className="flex gap-2 items-center">
                    <IoMdCheckmarkCircleOutline className="text-primary" />

                    <p className="sm-p-text mb-0!">
                      There are many variations of solve
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div
                className="
            flex
            gap-5 justify-between md:justify-start md:gap-10
            mt-10 mobile-landscape:flex-row mobile-landscape:items-center mobile-landscape:flex-wrap
          "
              >
                <Button
                  label="Explore More"
                  primary={true}
                  handler="#"
                  iconColor="text-primary"
                />

                <div className="flex items-center gap-4">
                  <div
                    className="
                flex
                items-center
                justify-center

                w-12.5
                h-12.5

                rounded-full
                border
                border-primary
              "
                  >
                    <BiSolidPhoneCall size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Call Us:</p>

                    <p className="bold-p-text">+1(214) 642 7635</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
