import React from "react";
import { FaHeart } from "react-icons/fa6";

function Partners() {
  const partners = [
    "Kaltech Consultancy",
    "JOptiman Consultancy",
    "USFJesus",
    "Access to Water",
  ];
  return (
    <div className="bg-[#F8F9FA] md:mt-10 xl:mt-16 py-[3em] md:py-[5em] lg:py-[7em]">
      <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[80%]">
        <p className="hero-label flex items-center gap-3">
          <span>
            <FaHeart className="text-primary" />
          </span>
          <span className="text-primary">Partners</span>
        </p>

        <div className="grid grid-cols-2 mobile-landscape:grid-cols-4 md:grid-cols-4 gap-4 lg:gap-10 xl:gap-16 mt-10 md:mt-12">
          {partners.map((item: string, key: number) => {
            return (
              <div className="bg-[#F4F4F4] py-10 px-5 rounded-lg">
                <p className="title-text">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Partners;
