"use client";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

function Button({
  handler,
  label,
  primary,
  iconColor,
}: {
  handler: string;
  label: string;
  primary: boolean;
  iconColor: string;
}) {
  return (
    <Link
      href={handler}
      className={` inline-flex w-max h-max btn pl-1 transition-all duration-700 cursor-pointer gap-2 pr-6 py-2 ${primary ? "bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-2 hover:border-primary" : "bg-white text-primary"}`}
    >
      <div
        className={`${primary ? "bg-white" : "bg-primary"} h-8 w-8 flex justify-center items-center rounded-full`}
      >
        <FaAnglesRight
          //   style={{ color: primary ? "text-primary" : "text-white" }}
          size={16}
          className={`${iconColor}`}
        />
      </div>
      <p>{label}</p>
    </Link>
  );
}

export default Button;
