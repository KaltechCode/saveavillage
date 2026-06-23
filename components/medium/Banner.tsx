import Image from "next/image";
import React from "react";
import Button from "../small/Button";

export function Banner() {
  return (
    <section className="py-10 lg:py-20">
      <div className="relative rounded-[20px]">
        {/* Background Image */}
        <div
          className="relative top-0 left-0 w-full h-[70vh]
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
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="block w-full h-[40px] fill-white"
            >
              <path d="M0,80 C40,20 80,120 120,80 C160,40 200,120 240,80 C280,40 320,120 360,80 C400,40 440,120 480,80 C520,40 560,120 600,80 C640,40 680,120 720,80 C760,40 800,120 840,80 C880,40 920,120 960,80 C1000,40 1040,120 1080,80 C1120,40 1160,120 1200,80 C1240,40 1280,120 1320,80 C1360,40 1400,120 1440,80 L1440,120 L0,120 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
