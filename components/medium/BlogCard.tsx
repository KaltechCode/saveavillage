import { IBlog } from "@/constant/types";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa6";

import { IoPricetagOutline } from "react-icons/io5";

function BlogCard({ blog }: { blog: IBlog }) {
  return (
    <article
      key={blog.id}
      className="
            overflow-hidden
            rounded-[20px]
            bg-white
          "
    >
      {/* Image */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="
                w-full
                h-[220px]
                object-cover
                xsm:h-[200px]
                sm:h-[240px]
                md:h-[260px]
                lg:h-[250px]"
        />

        <div
          className="
                absolute
                bottom-0
                right-4 

                bg-primary
                text-white

                rounded-t-md
                flex
                flex-col
                items-center
                justify-center
                px-6
                py-1
              "
        >
          <span className="font-bold text-lg">15</span>

          <span className="sm-p-text mt-1.5 leading-0!">Dec</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div
          className={`
                flex
                flex-wrap
                gap-4
                text-sm
                mb-4
          `}
        >
          <Link href="" className="flex gap-2 cursor-pointer">
            <span>
              <FaUser className="text-primary" size={16} />
            </span>
            <span className="sm-p-text"> By Admin</span>
          </Link>
          <Link href="" className="flex gap-2 cursor-pointer">
            <span>
              <IoPricetagOutline className="text-primary" size={16} />
            </span>
            <span className="sm-p-text">Donation</span>
          </Link>
        </div>

        <h3 className=" title-text mb-7">{blog.title}</h3>

        <div className="border-t border-gray-200 pt-4">
          <a
            href={`/blog/${blog.slug}`}
            className="
                  flex
                  items-center
                  justify-between
                  font-medium
                "
          >
            <span>Read More</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
