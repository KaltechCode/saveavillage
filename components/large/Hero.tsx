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

const slides = [
  {
    image: "/save-a-village-hero-1.jpg",
    title: "Empowering Hope Futures Lives Through Giving",
  },
  {
    image: "/save-a-village-donating-food.jpg",
    title: "Supporting Communities Through Charity",
  },
  {
    image: "/save-a-village-create-happy-moment.jpg",
    title: "Creating Better Opportunities Together",
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative  w-[90%] mx-auto mt-7 lg:max-w-[1200px] xl:max-w-[1800px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index + 1}>
            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
              h-[400px]
                mobile-landscape:h-[400px]
                md:h-[500px]
                lg:h-[650px]
                xl:h-[750px]
              "
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-[linear-gradient(90deg,rgba(38,7,53,.95)_0%,rgba(38,7,53,.7)_40%,rgba(38,7,53,.1)_100%)]
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
                <div className="xl:w-[65%]">
                  <p className="hero-label text-white flex gap-2 items-center">
                    <span className="">
                      <FaHeart className="text-primary" />
                    </span>{" "}
                    Change The World Together
                  </p>

                  <h1 className="hero-title-text text-white! leading-[1.2]!">
                    {slide.title}
                  </h1>

                  <p className="hero-text text-white/90">
                    It is a long established fact that a reader will be
                    distracted by readable content.
                  </p>

                  <Button
                    label="Join Us"
                    handler="/"
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
          left-1/2
          -translate-x-[55%]
          mobile-landscape:-translate-x-[50%]
          z-20
          w-[70%]
          lg:w-[38%]
          xl:w-[35%]
          max-auto
           display: flex;
  align-items: center;
  justify-content: center;

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

          <div className="flex">
            <Image
              src="/save-a-village-hero-1.jpg"
              alt=""
              width={100}
              height={100}
              className="rounded-full border-2 h-12 w-12 border-white overflow-hidden object-cover"
            />

            <Image
              src="/save-a-village-donating-food.jpg"
              alt=""
              width={40}
              height={40}
              className="rounded-full border-2 h-12 w-12 border-white overflow-hidden object-cover"
            />

            <Image
              src="/save-a-village-create-happy-moment.jpg"
              alt=""
              width={40}
              height={40}
              className="rounded-full border-2 h-12 w-12 border-white overflow-hidden object-cover"
            />
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
