"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { events } from "@/constant/data";
import React, { useRef } from "react";
import EventCard from "../medium/EventCard";
import { IEvent } from "@/constant/types";
import Button from "../small/Button";
import { FaHeart } from "react-icons/fa6";

function Events() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#22002d]
  "
    >
      <div className=" relative top-0 left-0 py-[4em] md:py-[6em] lg:py-[10em] w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[80%]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8 mobile-landscape:flex-row mobile-landscape:items-center mobile-landscape:justify-between md:justify-between md:flex-row">
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 justify-center mobile-landscape:justify-start md:justify-start">
              <span className="flex items-center gap-2">
                <FaHeart className="text-primary mt-0.5" />
              </span>
              <span className="hero-label text-white! ">Upcoming Events</span>
            </div>

            <h2 className="section-title-text text-white!">Event Schedule</h2>
          </div>

          <div className="flex gap-3">
            <div className="flex gap-3 ">
              <button
                ref={prevRef}
                className="h-12 w-12 rounded-full bg-white shadow-sm cursor-pointer"
              >
                ←
              </button>

              <button
                ref={nextRef}
                className="h-12 w-12 rounded-full bg-white shadow-sm cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {/* <div
          className="
        grid
        grid-cols-1
        gap-6
        mobile-landscape:grid-cols-2
        md:grid-cols-2
        mt-16
        lg:grid-cols-2
      "
        >
          {events.map((event: IEvent, key: number) => (
            <EventCard event={event} key={key} />
          ))}
        </div> */}

        <div
          className="
              flex
              items-center
              gap-6
              justify-end
            "
        >
          {/* Arrows */}
        </div>

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
            650: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {events.map((event, key: number) => (
            <SwiperSlide key={key}>
              <EventCard event={event} key={key} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16">
          <Button
            label="All Blogs"
            handler="#"
            primary={false}
            iconColor="text-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Events;
