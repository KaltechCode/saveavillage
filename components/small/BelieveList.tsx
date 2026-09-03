import React from "react";

export default function SaveAVillageBeliefs() {
  // Deduplicated beliefs array
  const beliefs = [
    {
      id: "gender",
      text: "We believe God created humans as male or female only, and that scientifically, these are unchangeable.",
    },
    {
      id: "life",
      text: "We believe life begins at the moment of fertilization of an egg by a sperm. We believe in the sanctity of life, with every human life having an intrinsic and sacred value that deserves to be protected from fertilization, up to natural death.",
    },
    {
      id: "marriage",
      text: "We believe that marriage is the legal and God-ordained union solely between a natural male and a natural female.",
    },
    {
      id: "parenting",
      text: "We believe that parents have a moral, emotional, and religious responsibility to guide their own children on life issues till adulthood, with no external hindrance.",
    },
    {
      id: "volunteer",
      text: "To volunteer with Save A Village, you will need to line up with our belief system, and if there are any questions, please let us know.",
    },
  ];

  return (
    <div className="w-full mx-auto py-6 bg-transparent">
      {/* Next.js Unordered List Component */}
      <ul className="space-y-6 list-none pl-0">
        {beliefs.map((belief) => (
          <li
            key={belief.id}
            className="flex items-start gap-3 text-primary p-text leading-relaxed"
          >
            {/* Custom styled checkmark indicator element */}
            <span className="text-primary font-semibold text-lg select-none shrink-0 pt-0.5">
              ✓
            </span>
            <span>{belief.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
