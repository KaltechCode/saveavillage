import ProgramCard from "@/components/medium/ProgramCard";
import ProgramsGrid from "@/components/medium/ProgramsGrid";
import { programs } from "@/constant/data";
import React from "react";

function Program() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 ">
      <div className="w-[95%] mx-auto xl:max-w-[95%]">
        <ProgramsGrid />
      </div>
    </section>
  );
}

export default Program;
