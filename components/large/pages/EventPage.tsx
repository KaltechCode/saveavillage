"use client";
import EventCard from "@/components/medium/EventCard";
import PaginatedItems from "@/components/small/pagination";
import { events } from "@/constant/data";
import React from "react";

function EventPage() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 ">
      <div className="w-[95%] mx-auto xl:max-w-[95%]">
        <div className="grid grid-cols-1 gap-y-7 mobile-landscape:grid-cols-2 mobile-landscape:gap-5 600:grid-cols-2 600:gap-5">
          {events.map((event, i) => {
            return <EventCard event={event} />;
          })}
        </div>
      </div>
      <PaginatedItems itemsPerPage={4} />
    </section>
  );
}

export default EventPage;
