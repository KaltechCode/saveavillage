"use client";
import React from "react";
import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa6";
import Contact_form from "../medium/Contact_Form";

function HomeContact() {
  return (
    <section className="py-[3em] md:py-[2em] lg:py-[2em]">
      <div className="w-[90%] mx-auto">
        <div className="grid h-full gap-10 mobile-landscape: lg:grid-cols-2">
          {/* Form section*/}
          <motion.div
            className="bg-title rounded-medium lg:order-2 pb-10 bg-primary py-[3em] px-5 rounded-md"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="">
              <p className="flex gap-2 subtitle font-openSans justify-start! text-white! hero-label">
                <span>
                  <FaHeart />
                </span>
                Contact us
              </p>
              <h2 className="section-title-text text-white!">
                Become a Partner
              </h2>
            </div>

            <Contact_form />
          </motion.div>

          {/* image */}

          <div className="w-full lg:h-full relative md:hidden lg:grid rounded-md overflow-hidden">
            <motion.img
              src={"/save-a-village-poor-boy.jpg"}
              height={500}
              width={300}
              className="w-full rounded-medium lg:h-full"
              alt="office cleaning"
            />
            <motion.div
              className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ transformOrigin: "bottom" }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
