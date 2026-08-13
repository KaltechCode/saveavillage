"use client";
import { programs } from "@/constant/data";
import React, { useState } from "react";
import ProgramCard from "./ProgramCard";
import ProgramModal from "./Modal";

function ProgramsGrid() {
  const [open, setOpen] = useState<number>(-1);
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 mobile-landscape:grid-cols-2 mobile-landscape:gap-y-5 mobile-landscape:gap-x-5 smLg:grid-cols-2 smLg:gap-7 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-7 xl:grid-cols-3 xl:gap-16 2xl:gap-12">
        {programs.map((program, id) => {
          return (
            <ProgramCard
              program={program}
              handler={() => setOpen(program.id - 1)}
            />
          );
        })}
      </div>

      {open >= 0 && <ProgramModal program={programs[open]} setOpen={setOpen} />}
    </>
  );
}

export default ProgramsGrid;
