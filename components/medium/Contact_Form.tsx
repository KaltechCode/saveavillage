"use client";
import { FaAnglesRight, FaHeart } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function Contact_form() {
  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(3, "name must be at least 3 characters.")
      .max(30, "name cannot exceed 30 characters."),
    // .regex(
    //   /^[a-zA-Z0-9._-]+$/,
    //   "name can only contain letters, numbers, dots, underscores, and hyphens.",
    // ),
    email: z.string().trim().email("Please enter a valid email address."),
    phone: z.string(),
    organization: z.string("Organization must be string").optional(),
    message: z.string("Message is required"),
  });

  type schemaType = z.infer<typeof schema>;

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      organization: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(values: schemaType) {
    await fetch("/api/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values,
      }),
    });
  }

  return (
    <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1  gap-7 lg:grid-cols-2 mobile-landscape:grid-cols-2 md:grid-cols-2 border p-5 lg:py-10 xl:p-12 xl:mt-12 xl:gap-10  rounded-md border-[#ffffff25] ">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...registerField("name")}
            className="placeholder:text-white font-[15px] py-4 text-white bg-transparent  border-1 border-[#ffffff40] rounded-circle px-5 focus:outline-none outline-none w-full"
          />
          <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...registerField("email")}
            className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5 focus:outline-none outline-none w-full"
          />
          <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone Number"
            {...registerField("phone")}
            className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5 focus:outline-none outline-none w-full"
          />
          <p className="mt-1 text-sm text-red-500">{errors.phone?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Organization"
            {...registerField("organization")}
            className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5 focus:outline-none outline-none w-full"
          />
          <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
        </div>

        <div className="lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2">
          <textarea
            id=""
            rows={4}
            {...registerField("message")}
            className="border-[#ffffff40] border text-white placeholder:text-white! rounded-medium placeholder:text-dull-text text-dull-text px-5 py-4 font-[15px] lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2 focus:outline-none outline-none w-full"
            placeholder="Type Your Message Here"
          ></textarea>
          <p className="mt-1 text-sm text-red-500">{errors.message?.message}</p>
        </div>

        <div className="flex gap-2 bg-[#22002d] hover:bg-white py-2 pl-1 w-max rounded-full lg:mt-7 xl:mt-0 group transition-all duration-500">
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
            className={`inline-flex btn pl-1 gap-2 pr-6 py-2  text-white group-hover:text-[#22002d] transition-all duration-500}`}
          />
        </div>
      </div>
    </form>
  );
}

export default Contact_form;
