import { IProgram } from "@/constant/types";
import React from "react";
import { IoClose } from "react-icons/io5";

function ProgramModal({
  program,
  setOpen,
}: {
  program: IProgram;
  setOpen: (num: number) => void;
}) {
  return (
    <div className="h-screen w-screen bg-primary/55  z-90 fixed top-0 left-0">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-[90%] h-max bg-white rounded-md pt-30 pb-7 px-4 md:px-12 md:w-[75%] mb:pb-10 lg:w-[70%] xl:w-[50%] 2xl:px-16 relative left-0 top-0 ">
          <button
            className="cursor-pointer h-10 w-10 rounded-full bg-primary flex justify-center items-center absolute right-5 top-5"
            onClick={() => setOpen(-1)}
          >
            <IoClose size={24} className="text-white cursor-pointer" />
          </button>
          <h3 className="font-quicksand title-text mb-6 truncate text-center">
            {program.title}
          </h3>

          <div
            dangerouslySetInnerHTML={{ __html: program.description }}
            className="p-text leading-7 mb-6 text-gray-6"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgramModal;
