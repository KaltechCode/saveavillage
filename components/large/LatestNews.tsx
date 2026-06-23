import { homeBlogs } from "@/constant/data";
import React from "react";
import BlogCard from "../medium/BlogCard";
import Button from "../small/Button";
import { FaHeart } from "react-icons/fa6";

function LatestNews() {
  return (
    <div className="relative">
      <section className="section-padding pt-[2em]">
        <div className="container mx-auto w-[90%]">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-8 mobile-landscape:flex-row mobile-landscape:items-center mobile-landscape:justify-between md:justify-between md:flex-row">
            <div className="flex flex-col gap-2 justify-center">
              <div className="flex gap-2 justify-center mobile-landscape:justify-start md:justify-start">
                <span className="">
                  <FaHeart className="text-primary" />
                </span>
                <span className="hero-label text-primary flex ">
                  Latest Blog
                </span>
              </div>

              <h2 className="section-title-text">Read Our Latest News</h2>
            </div>

            <Button
              label="All Blogs"
              handler="#"
              primary={true}
              iconColor="text-primary"
            />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-6 mobile-landscape:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 ">
            {homeBlogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestNews;
