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
      className={`inline-flex btn pl-1 gap-2 pr-6 py-2 ${primary ? "bg-primary text-white" : "bg-white text-primary"}`}
    >
      <div
        className={`${primary ? "bg-white" : "bg-primary"} p-2 rounded-full`}
      >
        <FaAnglesRight
          //   style={{ color: primary ? "text-primary" : "text-white" }}
          size={16}
          className={iconColor}
        />
      </div>
      <p>{label}</p>
    </Link>
  );
}

export default Button;
