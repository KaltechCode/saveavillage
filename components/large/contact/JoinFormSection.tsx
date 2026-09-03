"use client";

import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa6";
import Join_form from "@/components/medium/Join_Form";

function JoinFormSection() {
  return (
    <div>
      <div className="py-[2em] md:py-[2em] lg:py-[7em] w-[90%] mx-auto lg:w-[80%] xl:w-[90%]">
        <div className="grid grid-cols-1 gap-7 lg:gap-16 xl:gap-16 md-landscape:grid-cols-5 lg:grid-cols-5 xl:gap-20">
          <motion.div
            className="bg-title rounded-medium lg:order-2 pb-10 bg-primary py-[3em] px-5  rounded-lg mobile-landscape:col-span-3 lg:col-span-3 xl:px-20 xl:gap-16 h-[1510px] md:h-[1220px]"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="">
              <motion.p
                className="flex gap-2 subtitle font-openSans justify-start! items-center text-white! hero-label"
                animate={{
                  y: [0, -10, 0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                <span>
                  <FaHeart />
                </span>
                Contact us
              </motion.p>
              <h2 className="title-text text-white! w-[80%] lg:w-[70%] 2xl:w-[60%]">
                Join Save a Village.
              </h2>
            </div>

            <Join_form />
          </motion.div>

          <div className="rounded-md overflow-hidden relative border border-gray-300 bg-[#f5f5f5]  mobile-landscape:col-span-2 lg:col-span-2  md-landscape:order-3 h-full w-full bg-[url(/images/Community-Services.webp)] bg-cover bg-center">
            <motion.div
              className="h-full w-full bg-primary/70 left-0 top-0 absolute z-90"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "bottom" }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinFormSection;
