"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { programs } from "@/constant/data";
import ProgramCard from "../medium/ProgramCard";
import { useRef, useState } from "react";
import { motion } from "motion/react";

import ProgramModal from "../medium/Modal";
function Programs() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [open, setopen] = useState<number>(-1);
  return (
    <>
      <section className="relative overflow-hidden md:mt-10 xl:mt-20 py-16 lg:py-24 ">
        {/* Background Shape */}
        <div className="w-[95%] mx-auto xl:max-w-[90%]">
          <div
            className="
          absolute
          top-0
          right-0
          h-full
          bg-[linear-gradient(rgba(102,0,155,0.9),rgba(102,0,155,0.5)),url('/save-a-village-beggar.jpg')]
          w-[35%]
          rounded-l-full
          hidden bg-no-repeat bg-cover bg-center
          lg:block
        "
          />

          <div className="relative z-10">
            {/* Header */}
            <div
              className="
            flex
            flex-col
            gap-8
            mb-10

            md:flex-row
            md:items-center
            md:justify-between
          "
            >
              <div>
                <motion.p
                  className="hero-label text-primary mb-2"
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
                  Our Programs
                </motion.p>

                <motion.h2
                  className="section-title-text max-w-[600px]"
                  initial={{ scaleY: 0, opacity: 0.5 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  style={{ transformOrigin: "bottom" }}
                >
                  Inspiring Our Communities with Compassion
                </motion.h2>
              </div>

              <div
                className="
              flex
              items-center
              gap-6
              justify-end
            "
              >
                {/* Arrows */}
                <div className="flex gap-3">
                  <div className="flex gap-3 ">
                    <button
                      ref={prevRef}
                      className="
      h-12
      w-12
      rounded-full
      bg-white
      shadow-sm
      cursor-pointer
    "
                    >
                      ←
                    </button>

                    <button
                      ref={nextRef}
                      className="
      h-12
      w-12
      rounded-full
      bg-white
      shadow-sm
      cursor-pointer
    "
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}

            <div className="">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  const navigation = swiper.params.navigation;

                  if (navigation && typeof navigation === "object") {
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;
                  }
                }}
                className=""
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  600: { slidesPerView: 2, spaceBetween: 15 },
                  960: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1800: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  2500: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {programs.map((program) => (
                  <SwiperSlide key={program.id} className="py-5">
                    <ProgramCard
                      program={program}
                      handler={() => setopen(program.id - 1)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {open >= 0 && <ProgramModal setOpen={setopen} program={programs[open]} />}
    </>
  );
}

export default Programs;
