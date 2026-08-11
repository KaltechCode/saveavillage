import { programs } from "@/constant/data";
import React from "react";
import ProgramCard from "./ProgramCard";

function ProgramsGrid() {
  return (
    <div className="grid grid-cols-1 gap-y-10 mobile-landscape:grid-cols-2 mobile-landscape:gap-y-5 mobile-landscape:gap-x-5 smLg:grid-cols-2 smLg:gap-7 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-7 xl:grid-cols-3 xl:gap-16 2xl:gap-12">
      {programs.map((item, id) => {
        return <ProgramCard program={item} />;
      })}
    </div>
  );
}

export default ProgramsGrid;
