import React from "react";
import { FaAnglesRight, FaHeart } from "react-icons/fa6";

function Contact_form() {
  return (
    <form className="mt-7">
      <div className="grid grid-cols-1  gap-7 lg:grid-cols-2 mobile-landscape:grid-cols-2 md:grid-cols-2">
        <input
          type="text"
          placeholder="Your Name"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />

        <input
          type="text"
          placeholder="Organization"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />
        <textarea
          name=""
          id=""
          rows={4}
          className="border-[#ffffff40] border placeholder:text-white! rounded-medium placeholder:text-dull-text text-dull-text px-5 py-4 font-[15px] lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2"
          placeholder="Type Your Message Here"
        ></textarea>

        <div className="flex gap-2 bg-black py-2 pl-1 w-max rounded-full">
          <div
            className={`bg-white p-3 rounded-full flex justify-center items-center`}
          >
            <FaAnglesRight
              //   style={{ color: primary ? "text-primary" : "text-white" }}
              size={16}
              className="text-black"
            />
          </div>
          <input
            type="submit"
            value={"Send Message"}
            className={`inline-flex btn pl-1 gap-2 pr-6 py-2 bg-black text-white }`}
          />
        </div>
      </div>
    </form>
  );
}

export default Contact_form;
