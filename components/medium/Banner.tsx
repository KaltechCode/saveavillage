import Image from "next/image";
import React from "react";
import Button from "../small/Button";

export function Banner() {
  return (
    <section className="py-10 lg:py-20 mt-12">
      <div className="relative rounded-[20px]">
        {/* Background Image */}
        <div
          className="relative top-0 left-0 w-full aspect-[5/2] min-h-[40vh]
            "
        >
          <Image
            src="/save-a-village-donate-now.jpg"
            alt="Children Need Your Help"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Decorative Shape Left */}
          <div
            className="
                absolute
                left-0
                top-1/2
                h-24
                w-24
                -translate-y-1/2
                rounded-r-full
                bg-primary/30
                blur-sm
              "
          />

          {/* Content */}
          <div
            className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                px-5
                text-center
              "
          >
            <span
              className="
                  hero-label
                  text-primary
                  mb-3
                "
            >
              ♥ Make A Better Future
            </span>

            <h2
              className="
                  hero-title-text
                  text-white
                  mb-6
                "
            >
              Children Need Your Help By
              <br className="" />
              Donating Today
            </h2>

            <div className="">
              <Button
                label="Donate Now"
                iconColor="text-primary"
                primary={true}
                handler="#"
              />
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
