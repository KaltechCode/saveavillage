import { ITeam } from "@/constant/types";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import React from "react";
import { IconType } from "react-icons/lib";

const icons: IconType[] = [
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  RiTwitterXLine,
];

function TeamCard({ team }: { team: ITeam }) {
  return (
    <div className="md:odd:mt-10">
      <div className="relative rounded-lg overflow-hidden group ">
        <div className="">
          {/* Image */}
          <div className="">
            <Image
              src={team.image}
              height={200}
              width={150}
              alt={team.name}
              className="w-full"
            />
          </div>

          {/* Name */}
          <div className="flex justify-center flex-col items-center text h-24 w-full text-black bg-gray-300">
            <h2 className="title-text">{team.name}</h2>
            <p className="p-text mt-0.5">{team.role}</p>
          </div>
        </div>

        {/* overlay when hover */}
        <div className="hidden group-hover:flex flex-col justify-end items-center transition-[display] duration-[5s] absolute top-0 left-0 h-full w-full z-10 bg-[linear-gradient(45deg,rgba(38,7,53,.95)_0%,rgba(38,7,53,.7)_40%,rgba(38,7,53,.1)_100%)]">
          <div className="flex gap-3 opacity-0 -mb-7 group-hover:opacity-100 group-hover:mb-7 transition-all duration-1000">
            {icons.map((Icon: IconType, key: number) => {
              return (
                <div className="py-2 px-2 border border-white rounded-full">
                  <Icon size={16} className="text-white" />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center flex-col items-center text h-24 w-full  bg-primary">
            <h2 className="title-text text-white!">{team.name}</h2>
            <p className="p-text mt-0.5 text-white!">{team.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
