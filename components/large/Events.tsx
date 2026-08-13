"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { events } from "@/constant/data";
import React, { useRef } from "react";
import EventCard from "../medium/EventCard";
import { IEvent } from "@/constant/types";
import Button from "../small/Button";
import { FaHeart } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

function Events() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const text = "Event Coming Soon";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#22002d]
  "
    >
      <div className=" relative top-0 left-0 py-[4em] md:py-[6em] lg:py-[10em] w-[95%] mx-auto lg:max-w-[1200px] xl:max-w-[90%]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8 mobile-landscape:flex-row mobile-landscape:items-center mobile-landscape:justify-between md:justify-between md:flex-row">
          <div className="flex flex-col gap-2 justify-center">
            <motion.p
              className="flex gap-2 justify-center mobile-landscape:justify-start md:justify-start"
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
              <span className="flex items-center gap-2">
                <FaHeart className="text-primary mt-0.5" />
              </span>
              <span className="hero-label text-white! ">Upcoming Events</span>
            </motion.p>

            <h2 className="section-title-text text-white!">Event Schedule</h2>
          </div>

          {false && (
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
          )}
        </div>

        {/* Empty Event */}
        {true ? (
          <div className="flex h-100 w-full justify-center items-center">
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="title-text text-white! font-bold"
            >
              {text.split(" ").map((item, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="mr-4 inline-block text-white!"
                >
                  {item}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        ) : (
          <>
            {" "}
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
                label="All Events"
                url="/events"
                primary={false}
                iconColor="text-white"
                link={true}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Events;
