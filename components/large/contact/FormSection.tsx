import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

import { motion } from "motion/react";
import Contact_form from "@/components/medium/Contact_Form";
import { FaHeart } from "react-icons/fa6";

function FormSection() {
  return (
    <div>
      <div className="py-[2em] md:py-[2em] lg:py-[7em] w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px] ">
        <div className="grid grid-cols-1 gap-7 lg:gap-16 xl:gap-16 md-landscape:grid-cols-5 lg:grid-cols-5">
          <motion.div
            className="bg-title rounded-medium lg:order-2 pb-10 bg-primary py-[3em] px-5 xl:px-10 rounded-lg mobile-landscape:col-span-3 lg:col-span-3"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="">
              <p className="flex gap-2 subtitle font-openSans justify-start! items-center text-white! hero-label">
                <span>
                  <FaHeart />
                </span>
                Contact us
              </p>
              <h2 className="section-title-text text-white!">
                Drop us a message, our team usually replies within a few hours.
              </h2>
            </div>

            <Contact_form />
          </motion.div>

          <div className="rounded-[20px] border border-gray-300 bg-[#f5f5f5] p-6 md:p-8 mobile-landscape:col-span-2 lg:col-span-2  md-landscape:order-3 ">
            <h3 className="title-text mb-2!">Quick Contacts</h3>

            <p className="">
              Drop us a message, our team usually replies within a few hours.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <BiSolidPhoneCall size={32} className="fill-primary" />

                <p className="">Mobile: +1 (214) 642 7635</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <MdEmail size={32} className="fill-primary" />

                <p className="">info@saveavillageusa.org</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <FaLocationDot size={32} className="fill-primary" />

                <p className="">102 Some Address Road</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
