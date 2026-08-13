"use client";
import { IProgram } from "@/constant/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Button from "../small/Button";
import { motion } from "framer-motion";

function ProgramCard({
  program,
  handler,
}: {
  program: IProgram;
  handler: () => void;
}) {
  return (
    <>
      <motion.article
        key={program.id}
        className="rounded-md bg-[#fafafa] p-4 sm:p-8 600:px-4 md:p-8 shadow-none lg:p-10 aspect-square flex flex-col justify-center 3k:p-10 hover:shadow-2xl transition-all duration-300"
        whileHover="hover"
        viewport={{
          once: true,
          amount: 0.4,
        }}
      >
        <div className="relative rounded-md overflow-hidden mb-5 h-[50%]">
          <motion.img
            src={program.image}
            alt={program.title}
            width={300}
            height={200}
            className="h-full w-full object-cover "
            variants={{
              initial: {
                scale: 1.2,
              },
              inView: {
                scale: 1,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                },
              },
              hover: {
                scale: 1.15,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          />
        </div>
        <h3 className="font-quicksand title-text mb-6 truncate ">
          {program.title}
        </h3>
        {/* <div
        className="
                  p-text
                  leading-7
                  text-gray-600
                  mb-6
                "
      >
        {program.description}
      </div> */}
        <div
          dangerouslySetInnerHTML={{ __html: program.description }}
          className="line-clamp-5 p-text leading-7 mb-6 text-gray-6"
        />
        {/* <Link
        href={`/programs/${program.slug}`}
        className="
                  inline-flex
                  items-center
                  gap-2

                  px-5
                  py-3

                  rounded-[12px]
                  bg-primary
                  text-white
                  font-semibold
                  group
                "
      >
        More info
        <span>
          <FaAnglesRight className="group-hover:-rotate-45 transition-all duration-700" />
        </span>
      </Link> */}
        <Button
          label="More Details"
          primary={true}
          link={false}
          url="/programs"
          handler={handler}
          iconColor="text-primary"
        />
      </motion.article>
    </>
  );
}

export default ProgramCard;
