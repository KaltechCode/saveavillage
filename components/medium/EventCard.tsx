import { IEvent } from "@/constant/types";
import React from "react";
import Button from "../small/Button";

function EventCard({ event }: { event: IEvent }) {
  return (
    <article
      key={event.id}
      className="
            bg-white
            rounded-md
            p-5
            flex
            flex-col
            gap-5

            mobile-landscape:grid
            mobile-landscape:grid-cols-1
            md:grid lg:grid-cols-2
          "
    >
      {/* Image */}
      <div
        className={`relative shrink-0 w-full bg-[url(${event.image})]  h-[280px] rounded-lg lg:h-full object-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div
          className="
                absolute
                top-4
                left-4
                z-10

                w-[60px]
                h-[60px]

                bg-white
                rounded-xl

                flex
                flex-col
                items-center
                justify-center
              "
        >
          <span className="text-primary!">{event.date.day}</span>

          <span className="text-primary!">{event.date.month}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          className="
                font-quicksand
                font-bold
                text-[28px]
                leading-tight
                text-black
                mb-4
              "
        >
          {event.title}
        </h3>

        <p className="p-text mb-5 text-gray-600">{event.description}</p>

        <div className="border-t border-gray-200 pt-5 mb-5">
          <p className="font-bold text-primary mb-2">Venue</p>

          <p className="p-text text-gray-600">{event.venue}</p>
        </div>

        <Button
          label="Event Details"
          primary={true}
          handler="#"
          iconColor="text-primary"
        />
      </div>
    </article>
  );
}

export default EventCard;
