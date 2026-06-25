import { IProgram } from "@/constant/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

function ProgramCard({ program }: { program: IProgram }) {
  return (
    <article
      key={program.id}
      className="
                rounded-[18px]
                bg-[#fafafa]
                p-4
              "
    >
      <div className="relative mb-5">
        <Image
          src={program.image}
          alt={program.title}
          width={300}
          height={200}
          className="
                    h-[180px]
                    w-full
                    rounded-[14px]
                    object-cover
                  "
        />
      </div>

      <h3
        className="
                  font-quicksand
                  text-[20px]
                  font-bold
                  mb-4
                "
      >
        {program.title}
      </h3>

      <p
        className="
                  text-sm
                  leading-7
                  text-gray-600
                  mb-6
                "
      >
        {program.description}
      </p>

      <Link
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
      </Link>
    </article>
  );
}

export default ProgramCard;
