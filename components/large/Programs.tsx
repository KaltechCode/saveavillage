"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { programs } from "@/constant/data";
import { IProgram } from "@/constant/types";
import ProgramCard from "../medium/ProgramCard";
import { useRef } from "react";
function Programs() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Shape */}
      <div className="w-[90%] mx-auto">
        <div
          className="
          absolute
          top-0
          right-0
          h-full
          linear-gradient(bg-primary, bg-primary,url(/save-a-village-beggar.jpg)
          w-[45%]
          rounded-l-full
          hidden
          lg:block
        "
        />

        <div className="container relative z-10">
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
              <p className="hero-label text-primary mb-2">Our Programs</p>

              <h2 className="section-title-text max-w-[600px]">
                Inspiring and Helping for Better Lifestyle
              </h2>
            </div>

            <div
              className="
              flex
              items-center
              gap-6
              justify-end
            "
            >
              {/* Donors */}
              <div className="flex items-center flex">
                <div className="flex -space-x-3">
                  <Image
                    src="/sva-avater-1.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/sva-avater-2.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/sva-avater-3.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <div
                    className="
                  ml-3
                  flex
                  items-center
                  gap-2
                "
                  >
                    <span
                      className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    font-bold
                    text-white
                  "
                    >
                      2M
                    </span>

                    <span className="text-sm">Active donors</span>
                  </div>
                </div>
              </div>

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
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className=""
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
              }}
            >
              {programs.map((program) => (
                <SwiperSlide key={program.id}>
                  <ProgramCard program={program} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
