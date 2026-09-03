"use client";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { motion, number } from "framer-motion";
import Marquee from "react-fast-marquee";

const images = [
  "/partners/Andi_Logo.webp",
  "/partners/JOptiman.webp",
  "/partners/Kaltech.webp",
  "/partners/Kumis_foundation.webp",
  "/partners/La_Bella.webp",
  "/partners/Kiki_Victory.webp",
  "/partners/WOVD.webp",
  "/partners/UpWealth_Logo.webp",
];

function Partners() {
  return (
    <div className="bg-[#F8F9FA] md:mt-10 xl:mt-16 py-[3em] md:py-[5em] lg:py-[7em]">
      <div className="w-[95%] mx-auto lg:max-w-[1200px] xl:max-w-[90%]">
        <motion.p
          className="hero-label flex items-center gap-3"
          initial={{ y: 0 }}
          animate={{
            y: [0, -10, 0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <span>
            <FaHeart className="text-primary" />
          </span>
          <span className="text-primary">Partners</span>
        </motion.p>

        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          <ImageComponents />
        </Marquee>
      </div>
    </div>
  );
}

function ImageComponents() {
  return (
    <div className="flex mt-10">
      {images.map((item: string, key: number) => {
        return (
          <img
            className="rounded-lg aspect-[5/1] w-[200px] md:w-[300px] object-contain mx-2 md:w-mx-5 "
            key={key}
            src={item}
            alt={`Partner ${key + 1}`}
          />
        );
      })}
    </div>
  );
}

export default Partners;
