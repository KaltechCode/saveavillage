"use client";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Helping_Hand from "../small/Icons/Helping_Hande";
import Button from "../small/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutText } from "@/constant/data";

function About({ hideBtn }: { hideBtn?: boolean }) {
  return (
    <section className="h-auto  mt-8 pt-10 md:mt-16 pb-[4rem]  lg:p-[6rem] flex items-center justify-center">
      <div className="">
        <div className="w-[95%] mx-auto lg:max-w-[1200px] xl:max-w-[90%]">
          <div
            className="
            w-full grid grid-cols-1 gap-5 mobile-landscape:grid-cols-2 mobile-landscape:items-center md:grid-cols-7 xl:grid-cols-2 lg:gap-20 items-center
      "
          >
            {/* Left Side */}
            <div className="md:col-span-3 xl:col-span-1 relative">
              {/* Background Shape */}
              <div className="inset-0 h-full md:block ">
                <Image
                  src="/images/SAV-About-heart-image.webp"
                  alt=""
                  height={300}
                  width={400}
                  className="w-full aspect-[1/1]"
                />
              </div>
              <Image
                src="/images/about-img-vector-1.png"
                alt=""
                height={400}
                width={600}
                className="w-full absolute bottom-0 -left-50 "
              />
            </div>

            {/* Right Side */}
            <div className="md:col-span-4 xl:col-span-1">
              <motion.p
                className="hero-label text-primary! mb-3 flex items-center gap-2"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                <span>
                  <FaHeart className="text-primary leading-[1.3]" />
                </span>
                About Us
              </motion.p>

              <motion.h2
                className=" section-title-text mt-7"
                initial={{ scaleY: 0, opacity: 0.5 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                style={{ transformOrigin: "bottom" }}
              >
                Compassion is Our Strength
              </motion.h2>

              <p className="hero-text text-gray-600 mt-7">
                We are purpose driven nonprofit organization committed to
                uplifting low income families and underserved communities
                through meaningful, sustainable support. At our core, we believe
                that every individual, regardless of their circumstances,
                deserves access to the fundamental resources that foster
                dignity, stability, and opportunity.
              </p>

              {hideBtn && (
                <div
                  dangerouslySetInnerHTML={{ __html: aboutText }}
                  className="hero-text text-gray-600"
                />
              )}
              {!hideBtn && (
                <>
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

                        <h3 className="title-text mb-0">
                          Passion for Impacting Lives
                        </h3>
                      </div>

                      <div className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text-primary" />

                        <p className="sm-p-text mb-0!">
                          Giving All We Can to Change Lives
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
            flex
            gap-5 justify-between md:justify-start md:gap-10
            mt-10 mobile-landscape:flex-row mobile-landscape:items-center mobile-landscape:flex-wrap
          "
                  >
                    <Button
                      label="Read More"
                      primary={true}
                      url="/about-us"
                      iconColor="text-primary"
                      link={true}
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

                        <p className="bold-p-text">
                          <Link
                            href="tel:+1(214) 642 7635"
                            className="cursor-pointer"
                          >
                            +1(214) 642 7635
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
