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
            lg:aspect-[8/13]
            xl:aspect-[8/11]
            2xl:aspect-[8/9]
            3k:aspect-[8/8]
            4k:aspect-[8/7]
            shadow-md
          "
    >
      {/* Image */}
      <div className="relative mobile-landscape:h-[45%] lg:h-[50%] xl:h-[50%] 3k:h-[55%] 4k:h-[60%]">
        <img
          src={blog.image}
          alt={blog.title}
          className="
                w-full
                object-cover
                h-full"
        />

        <div className="absolute bottom-2 right-4 bg-primary text-white flex flex-col items-center justify-center h-16 w-16 rounded-full">
          <span className="font-bold text-lg">15</span>
          <span className="sm-p-text mt-1.5 leading-0!">Dec</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 py-10">
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

        <div className="border-t border-gray-200 mt-4 pt-4">
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
