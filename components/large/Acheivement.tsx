"use client";
import { acheivement, statement } from "@/constant/data";
import { IACHEIVEMENT } from "@/constant/types";
import React, { useState } from "react";
import CircleAcheivement from "../medium/CircleAcheivement";
import Button from "../small/Button";
import { FaHeart } from "react-icons/fa6";
import Control from "../medium/Control";
import Image from "next/image";

function Acheivement() {
  const [index, setIndex] = useState<number>(0);
  return (
    <section className="bg-gradient-start">
      <div className="py-[4em] md:py-[6em] lg:py-[10em] w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[80%]">
        <div className="flex flex-wrap justify-between gap-10">
          {acheivement.map((item: IACHEIVEMENT, key: number) => {
            return <CircleAcheivement item={item} key={key} />;
          })}
        </div>

        <section className="relative overflow-hidden md:mt-10 xl:mt-20 py-16 lg:py-24 ">
          {/* Background Shape */}
          <div className="relative z-10">
            {/* Header */}
            <div className=" flex flex-col gap-8 mb-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="hero-label text-white! mb-2 flex items-center gap-2">
                  <span>
                    <FaHeart className="text-white" />
                  </span>
                  Our Organization History
                </p>

                <h2 className="section-title-text max-w-[600px] text-white!">
                  Charitics Information of Event Schedule
                </h2>
              </div>

              <div
                className="
              flex
              items-center
              gap-6
              justify-end
            "
              >
                <Button
                  handler="#"
                  iconColor="text-primary"
                  label="Donate Now"
                  primary={true}
                />
              </div>
            </div>

            {/* Cards */}

            {/* <div className="grid grid-cols-2 gap-5 lg:gap-10 xl:gap-16 md:grid-cols-4">
                {teamData.map((team: ITeam, key: number) => {
                  return <TeamCard team={team} key={key} />;
                })}
              </div> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 lg:gap-10 bg-white rounded-lg w-full p-5 lg:p-10">
            {/* image */}
            <div
              className="col-span-1 py-5 lg:col-span-2 rounded-lg overflow-hidden h-[400px] md:"
              style={{
                backgroundImage: `url(${statement[index].image})`,
                backgroundOrigin: "center",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* <Image
                src={statement[index].image}
                alt="Save a village activities"
                height={200}
                width={400}
                className="w-full h-full rounded-lg"
              /> */}
            </div>

            {/* content */}
            <div className="lg:col-span-3">
              <h3 className="title-text mb-5!">{statement[index].title}</h3>

              <div
                className="sm-p-text leading-[1.5]!"
                dangerouslySetInnerHTML={{ __html: statement[index].intro }}
              />

              <div className="">
                {statement[index].list && (
                  <ul className="my-5">
                    {statement[index].list.map((item: string, key: number) => {
                      return (
                        <li
                          key={key}
                          className="bold-p-text pl-4 my-4 list-dot"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <p className="sm-p-text leading-[1.3]!">
                {statement[index].outro}
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <Control index={index} setIndex={setIndex} />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Acheivement;
