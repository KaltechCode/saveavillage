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
    <div className="grid grid-cols-3">
      {labels.map((label: string, key: number) => {
        return (
          <button
            onClick={() => setIndex(key)}
            className={`title-text py-5 text-left px-4 border-0 border-b-2 ${index == key ? "border-primary text-primary!" : "border-white text-white!"}`}
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
