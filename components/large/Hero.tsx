"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import Button from "../small/Button";
import { becomePartnerLink } from "@/constant/data";

const slides = [
  {
    image: "/images/SAV-Team-1.webp",
    title: "Passion for Impacting  Lives",
  },
  {
    image: "/images/SAV-Team-2.webp",
    title: "No Communities Left Behind",
  },
  {
    image: "/images/SAV-Team-3.webp",
    title: "Giving All We Can to Change Lives",
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative  w-[95%] mx-auto mt-7 rounded-[20px] overflow-hidden h-[calc(100vh-200px)] mobile-landscape:h-[400px] md:h-[600px] lg:h-[650px] xl:h-[750] max-h-[1200px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 3000 }}
        speed={1000}
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
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index + 1}>
            <div
              className="
                relative
                overflow-hidden
                h-[100%]
                mobile-landscape:h-[400px]
                md:h-[600px]
                lg:h-[650px]
                xl:h-[750]
              "
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-[linear-gradient(90deg,rgba(38,7,53,.65)_0%,rgba(38,7,53,.45)_40%,rgba(38,7,53,.1)_100%)]
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  flex
                  items-center

                  px-6
                  md:px-12
                  lg:px-20
                "
              >
                <div className="600:w-[70%] md:w-[60%] xl:w-[55%] 3k:w-[40%]">
                  {/* <p className="hero-label text-white flex gap-2 items-center">
                    <span className="">
                      <FaHeart className="text-primary" />
                    </span>{" "}
                    Change The World Together
                  </p> */}

                  <h1 className="hero-title-text text-white! leading-[1.2]!">
                    {slide.title}
                  </h1>

                  {/* <p className="hero-text text-white/90">
                    It is a long established fact that a reader will be
                    distracted by readable content.
                  </p> */}

                  <Button
                    label="Join Us"
                    link={true}
                    url={becomePartnerLink}
                    iconColor="text-primary"
                    primary={true}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation */}

      <div
        className="
          absolute
          bottom-0
          left-[5%]
          sm:left-[15%]
          mobile-landscape:left-1/2
          lg:left-[31%]
          xl:left-[32.5%]
          mobile-landscape:-translate-x-[50%]
          z-20
          w-[90%] sm:w-[70%] lg:w-[38%] xl:w-[35%] max-auto
           flex items-center justify-between
        "
      >
        <div className="hero-nav w-[110%]">
          <button
            ref={prevRef}
            className="
              text-primary
              text-xl
              font-bold cursor-pointer
            "
          >
            ←
          </button>

          <div className="flex w-[228px] justify-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop
              autoplay={{ delay: 3000 }}
              speed={1000}
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
              slidesPerView={3}
              className="h-full"
              spaceBetween={30}
            >
              {[
                "/images/SAV-Team-1.webp",
                "/images/SAV-Team-2.webp",
                "/images/SAV-Team-3.webp",
                "/images/SAV-Team-1.webp",
                "/images/SAV-Team-2.webp",
                "/images/SAV-Team-3.webp",
              ].map((item, index) => {
                return (
                  <SwiperSlide key={index + 1} className="">
                    {({ isActive }) => (
                      <div
                        className={`flex justify-center items-center h-14 w-14 ${isActive ? " p-1 border bc border-2 border-primary rounded-full" : "p-1"}`}
                      >
                        <Image
                          src={item}
                          alt=""
                          width={100}
                          height={100}
                          className={`rounded-full h-full w-full  border-white overflow-hidden object-cover`}
                        />
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <button
            ref={nextRef}
            className="
              text-primary
              text-xl
              font-bold cursor-pointer
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
