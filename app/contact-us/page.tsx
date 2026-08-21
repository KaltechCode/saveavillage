"use client";
import { FaHeart } from "react-icons/fa6";

import FAQAccordion from "@/components/medium/Accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import FormSection from "@/components/large/contact/FormSection";
import AccordionSection from "@/components/large/contact/AccordionSection";
import HeroBanner from "@/components/medium/HeroBanner";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

function Page() {
  return (
    <>
      <Header />
      <HeroBanner
        text="Contact Us"
        image="bg-[url(/images/Educational-Support.webp)]"
      />
      <main>
        <section className="h-auto py-[3em] md:py-[5em] lg:py-[4em] ">
          <div className="section-container  h-full">
            <div className="flex  flex-col justify-center items-center h-full">
              {/* section tittle*/}
              <div className="">
                {/* <motion.p
                  className="text-center text-primary flex items-center justify-center gap-2"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                >
                  <span>
                    <FaHeart className="text-primary" />{" "}
                  </span>
                  CONTACT US
                </motion.p> */}
                <motion.h2
                  className="hero-title-text text-center text-primary! md:w-[80%] lg:w-[70%] mobile-landscape:w-[60%] mx-auto"
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  initial={{ scaleY: 0, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  style={{ transformOrigin: "bottom" }}
                >
                  Empowering Communities Through Giving
                </motion.h2>
              </div>
            </div>
          </div>
        </section>

        <FormSection />

        {/* <AccordionSection /> */}
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

export default Page;
