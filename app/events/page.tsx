"use client";
import Hero from "@/components/large/Hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import EventPage from "@/components/large/pages/EventPage";

import HeroBanner from "@/components/medium/HeroBanner";
import { motion, type Variants } from "framer-motion";
function page() {
  const text = "Event Coming Soon";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="">
      <Header />
      <HeroBanner
        text="Our Events"
        image="bg-[url(/assets/cleaning-event.jpg)]"
      />
      {/* <EventPage /> */}
      <div className="flex h-100 w-screen justify-center items-center">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="text-5xl font-bold"
        >
          {text.split(" ").map((item, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="mr-4 inline-block text-primary!"
            >
              {item}
            </motion.span>
          ))}
        </motion.h2>
      </div>
      <Footer />
    </main>
  );
}

export default page;
