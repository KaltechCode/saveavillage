"use client";

import {
  becomePartnerLink,
  donationAmounts,
  paymentLink,
} from "@/constant/data";
import { useState } from "react";
import Button from "../small/Button";

export default function VolunteerDonateSection() {
  const [selectedAmount, setSelectedAmount] = useState("$10");

  return (
    <section className="relative md:mb-10 xl:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Volunteer */}
        <div className="relative overflow-hidden ">
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
              bg-[url('/images/Educational-Support.webp')]
              bg-cover
              bg-center
              opacity-20
            "
          />

          <div
            className="
              relative
              z-10
              px-[2.5vw]
              py-10
              md:px-[2.5vw]
              md:py-14
              lg:px-[2.5vw]
              xl:pl-[5vw]
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
              We have beliefs developed solely on Biblical principles. We are
              pleased to have volunteers who have a similar belief system.
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
              <span className="text-white text-sm">
                ✓ We believe God created humans as male or female only, and that
                scientifically, these are unchangeable.
              </span>

              <span className="text-white text-sm">
                ✓ We believe life begins at the moment of fertilization of an
                egg by a sperm. We believe in the sanctity of life, with every
                human life having an intrinsic and sacred value that deserves to
                be protected from fertilization, up to natural death.
              </span>

              <span className="text-white text-sm">
                ✓ We believe that marriage is the legal and God-ordained union
                solely between a natural male and a natural female.
              </span>
              <span className="text-white text-sm">
                ✓ We believe that marriage is the legal and God-ordained union
                solely between a natural male and a natural female.
              </span>
              <span className="text-white text-sm">
                ✓ We believe that parents have a moral, emotional, and religious
                responsibility to guide their own children on life issues till
                adulthood, with no external hindrance.
              </span>
              <span className="text-white text-sm">
                ✓ To volunteer with Save A Village, you will need to line up
                with our belief system, and if there are any questions, please
                let us know.
              </span>
            </div>

            <Button
              label="Become A Volunteer"
              primary={false}
              iconColor="text-white"
              url={becomePartnerLink}
              link={true}
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
              bg-[url('/images/Community-Services.webp')]
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
              Send a Gift to Support Us
            </h3>

            <p
              className="
                text-white/90  mb-6 max-w-[500px]
              "
            >
              Your donation can help provide essential resources, hope, and
              lasting opportunities to families in need. Together, we can save a
              community and build a brighter future one generous gift at a time.
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
              link={true}
              url={paymentLink}
              blank={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
