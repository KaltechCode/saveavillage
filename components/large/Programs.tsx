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
      <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px]">
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
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
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
