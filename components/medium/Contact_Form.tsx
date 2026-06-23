import React from "react";
import { FaHeart } from "react-icons/fa6";

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
          rows={7}
          className="border-[#ffffff40] border placeholder:text-white! rounded-medium placeholder:text-dull-text text-dull-text px-5 py-4 font-[15px] lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2"
          placeholder="Type Your Message Here"
        ></textarea>

        <input
          type="submit"
          value={"Contact Now"}
          className={`w-full py-3 text-white border-none  text-center rounded-circle bg-background-primary group-[first]: flex items-center justify-center gap-3 font-medium text-default lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2`}
        />
      </div>
    </form>
  );
}

export default Contact_form;
