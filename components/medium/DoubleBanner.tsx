"use client";

import { donationAmounts } from "@/constant/data";
import { useState } from "react";
import Button from "../small/Button";

export default function VolunteerDonateSection() {
  const [selectedAmount, setSelectedAmount] = useState("$10");

  return (
    <section className="relative md:mt-10 xl:my-16">
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
        "
      >
        {/* Volunteer */}
        <div className="relative overflow-hidden">
          <div
            className="
              absolute
              inset-0
              bg-primary/90
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[url('/save-a-village-donating-food.jpg')]
              bg-cover
              bg-center
              opacity-20
            "
          />

          <div
            className="
              relative
              z-10

              px-6
              py-10

              md:px-10
              md:py-14

              lg:px-16
            "
          >
            <h3
              className="
                banner-title-text
                text-white
                font-caveat!
                mb-4
              "
            >
              Become A Volunteer
            </h3>

            <p
              className="
                text-white/90
                mb-6
                max-w-[500px]
              "
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit. The aspernatur aut odit aut fugit.
            </p>

            <div
              className="
                flex
                flex-col
                gap-3
                mb-8

                mobile-landscape:flex-row
                mobile-landscape:flex-wrap
              "
            >
              <span className="text-white text-sm">✓ Donate Money</span>

              <span className="text-white text-sm">✓ Handle With Care</span>

              <span className="text-white text-sm">✓ Donate Money</span>
            </div>

            <Button
              label="Become A Volunteer"
              primary={false}
              iconColor="text-white"
              handler="#"
            />
          </div>
        </div>

        {/* Donate */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/70" />

          <div
            className="
              absolute
              inset-0
              bg-[url('/save-a-village-beggar.jpg')]
              bg-cover
              bg-center
              opacity-10
            "
          />

          <div
            className="
              relative
              z-10

              px-6
              py-10

              md:px-10
              md:py-14

              lg:px-16
            "
          >
            <h3
              className="
                banner-title-text
                font-caveat!
                text-white
                mb-4
              "
            >
              Send a Gift For Children's
            </h3>

            <p
              className="
                text-white/90
                mb-6
                max-w-[500px]
              "
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit. The aspernatur aut odit aut fugit.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-3
                mb-8
              "
            >
              {donationAmounts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedAmount(item.amount)}
                  className={`
                    min-w-[80px]
                    h-11
                    rounded-full
                    border
                    px-5
                    transition-all

                    ${
                      selectedAmount === item.amount
                        ? "bg-primary border-primary text-white"
                        : "border-white text-white"
                    }
                  `}
                >
                  {item.amount}
                </button>
              ))}
            </div>

            <Button
              label="Donate Now"
              primary={false}
              iconColor="text-white"
              handler="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
