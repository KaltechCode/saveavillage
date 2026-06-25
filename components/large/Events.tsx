import { events } from "@/constant/data";
import React from "react";
import EventCard from "../medium/EventCard";
import { IEvent } from "@/constant/types";
import Button from "../small/Button";
import { FaHeart } from "react-icons/fa6";

function Events() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#22002d]
  "
    >
      <div className=" relative top-0 left-0 py-[4em] md:py-[6em] lg:py-[10em] w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px]">
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

          <Button
            label="All Blogs"
            handler="#"
            primary={false}
            iconColor="text-white"
          />
        </div>

        {/* Events Grid */}
        <div
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
        </div>
      </div>
    </section>
  );
}

export default Events;
