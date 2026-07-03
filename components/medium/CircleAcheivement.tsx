import { IACHEIVEMENT } from "@/constant/types";
import React from "react";

function CircleAcheivement({ item }: { item: IACHEIVEMENT }) {
  return (
    <div className="relative top-0 left-0 h-60 w-60 mobile-landscape:h-45 mobile-landscape:w-45 border-5 overflow-hidden border-white rounded-full  overflow-hidden group">
      <div
        className={`absolute z-10 left-0 top-0 w-full h-full`}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="absolute z-20 left-0 top-0 w-full h-full bg-primary group-hover:hidden"></div>
      <div className="absolute z-30 left-0 top-0 w-full h-full flex flex-col justify-center items-center">
        <div className="">
          <item.Icon size={35} className="text-white" />
        </div>
        <h2 className="title-text text-white!">{item.count} +</h2>
        <p className="p-text text-white!">{item.text}</p>
      </div>
    </div>
  );
}

export default CircleAcheivement;
