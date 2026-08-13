import React from "react";
import { Dispatch, SetStateAction } from "react";

function Control({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) {
  const labels: string[] = ["Our Mission", "Our Vission", "Our History"];
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {labels.map((label: string, key: number) => {
        return (
          <button
            onClick={() => setIndex(key)}
            className={`title-text py-5 rounded-md  px-4  border-b-2 border text-center  ${index == key ? "border-primary text-primary! bg-white text-center" : "border-white/20 text-white!"}`}
            key={key}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default Control;
