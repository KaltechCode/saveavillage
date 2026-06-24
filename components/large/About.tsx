import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Helping_Hand from "../small/Icons/Helping_Hande";
import Button from "../small/Button";

function About() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="relative top-0 left-0">
        <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px] py-[4em]">
          <div
            className="
            w-full
        grid
        grid-cols-1
        gap-12

        mobile-landscape:grid-cols-2
        mobile-landscape:items-center

        md:grid-cols-7

        xl:grid-cols-2
        lg:gap-20
      "
          >
            {/* Left Side */}
            <div className="relative md:col-span-3 xl:col-span-1">
              {/* Background Shape */}
              <div
                className="
            absolute
            inset-0
            hidden
            md:block
          "
              >
                <img
                  src="/heart.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Paint Shape */}
              {/* <div
                className="
            absolute
            left-0
            bottom-0

            w-full
            max-w-[500px]

            opacity-30
          "
              >
                <img src="/images/about-paint.png" alt="" className="w-full" />
              </div> */}

              {/* Heart Image */}
              {/* <div
                className="
            relative
            z-10

            mx-auto

            w-[220px]
            h-[220px]

            mobile-landscape:w-[260px]
            mobile-landscape:h-[260px]

            md:w-[320px]
            md:h-[320px]

            lg:w-[420px]
            lg:h-[420px]
          "
              >
                <img
                  src="/images/about-heart.png"
                  alt="About Us"
                  className="w-full h-full object-contain"
                />
              </div> */}
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

                <div
                  className="
              flex
              justify-start
               overflow-hidden
               w-[70%]
               md:w-[70%]
               xl:w-[45%]
            "
                >
                  <img
                    src="/save-a-village-team.jpg"
                    alt="Team"
                    className="
                    rounded-full
                xl:w-full
                h-[70px]
                w-full
              "
                  />
                </div>
              </div>

              {/* Buttons */}
              <div
                className="
            flex
            gap-5
            mt-16
            md:flex-col-
            mobile-landscape:flex-row
            mobile-landscape:items-center
            mobile-landscape:flex-wrap
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
