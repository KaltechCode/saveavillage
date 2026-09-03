"use client";
import Link from "next/link";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function Button({
  handler,
  label,
  primary,
  iconColor,
  link,
  url,
  blank,
}: {
  handler?: () => void;
  url?: string;
  label: string;
  primary: boolean;
  iconColor: string;
  link?: boolean;
  blank?: boolean;
}) {
  return link && url ? (
    <Link
      href={url}
      target={blank ? "_blank" : "_self"}
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
  ) : (
    <button
      onClick={handler}
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
    </button>
  );
}

export function PrevButton({ handler }: { handler?: any }) {
  return (
    <button
      onClick={handler}
      className={` inline-flex w-max h-max btn pl-1 transition-all duration-700 cursor-pointer gap-2 pr-6 py-2 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 hover:border-primary`}
    >
      <div
        className={` bg-white h-8 w-8 flex justify-center items-center rounded-full`}
      >
        <FaAnglesLeft
          //   style={{ color: primary ? "text-primary" : "text-white" }}
          size={16}
          className={`text-primary`}
        />
      </div>
      <p>Previous</p>
    </button>
  );
}
export function NextButton({ handler }: { handler?: any }) {
  return (
    <button
      onClick={handler}
      className={`inline-flex w-max h-max btn pl-1 transition-all duration-700 cursor-pointer gap-2 pr-6 py-2 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 hover:border-primary`}
    >
      <div
        className={` bg-white h-8 w-8 flex justify-center items-center rounded-full`}
      >
        <FaAnglesRight
          //   style={{ color: primary ? "text-primary" : "text-white" }}
          size={16}
          className={`text-primary`}
        />
      </div>
      <p>Next</p>
    </button>
  );
}

export default Button;
