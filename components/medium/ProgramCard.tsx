import { IProgram } from "@/constant/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Button from "../small/Button";

function ProgramCard({ program }: { program: IProgram }) {
  return (
    <article
      key={program.id}
      className="rounded-md bg-[#fafafa] p-4 sm:p-8 600:px-4 md:p-8 lg:p-10 aspect-square flex flex-col justify-center 3k:p-10"
    >
      <div className="relative rounded-md overflow-hidden mb-5 h-[50%]">
        <img
          src={program.image}
          alt={program.title}
          width={300}
          height={200}
          className="
          h-full
                    w-full
                    object-cover
                  "
        />
      </div>

      <h3 className="font-quicksand title-text mb-6 truncate ">
        {program.title}
      </h3>

      <p
        className="
                  p-text
                  leading-7
                  text-gray-600
                  mb-6
                "
      >
        {program.description}
      </p>

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
        label="Event Details"
        primary={true}
        handler="#"
        iconColor="text-primary"
      />
    </article>
  );
}

export default ProgramCard;
