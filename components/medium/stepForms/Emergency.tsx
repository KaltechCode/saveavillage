import Button, { PrevButton } from "@/components/small/Button";
import { prevStep } from "@/features/formSteps";
import { AppDispatch } from "@/services/store";
import { RegisterErrorProps } from "@/utils/schema";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export default function Emergency({
  registerField,
  errors,
  isLoading,
  isErr,
}: RegisterErrorProps & { isLoading: boolean; isErr: boolean }) {
  const handler = useDispatch<AppDispatch>();
  return (
    <div className="grid bg-white grid-cols-1 gap-7 lg:grid-cols-6 mobile-landscape:grid-cols-6 md:grid-cols-6 border mt-5 p-5 lg:py-10 xl:p-12 xl:mt-12 xl:gap-10 rounded-md border-[#ffffff25]">
      {/* First Name */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="First Name"
          {...registerField("emergency_contact.first_name")} // Fixed variable & mapped dot path
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.emergency_contact?.first_name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.emergency_contact.first_name.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="Last Name"
          {...registerField("emergency_contact.last_name")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.emergency_contact?.last_name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.emergency_contact.last_name.message}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="email"
          placeholder="Email Address"
          {...registerField("emergency_contact.email")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.emergency_contact?.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.emergency_contact.email.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text" // Kept as text to prevent phone character dropping bugs
          placeholder="Phone Number"
          {...registerField("emergency_contact.phone")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.emergency_contact?.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.emergency_contact.phone.message}
          </p>
        )}
      </div>

      {/* relationship */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="relationship"
          {...registerField("emergency_contact.relationship")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.emergency_contact?.relationship && (
          <p className="mt-1 text-sm text-red-500">
            {errors.emergency_contact.relationship.message}
          </p>
        )}
      </div>

      <div className="lg:col-span-6 md:col-span-6 mobile-landscape:col-span-6 space-y-3">
        <div>
          <label className="block text-sm font-medium text-primary">
            Check the box below
          </label>
          {/* <p className="text-xs text-primary/50">
            Please select one option below.
          </p> */}
        </div>

        <div className="grid col-span-1 gap-3 md:md:col-span-6mobile-landscape:md:col-span-6">
          <label className="flex items-center p-4 space-x-3   bg-white rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200 group">
            <input
              type="checkbox"
              /* Register the single target path name. React Hook Form links these together naturally */
              {...registerField("emergency_contact.terms")}
              className="h-4 w-4 border-primary bg-white text-purple-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
            />
            <span className="p-text text-primary/80 group-hover:text-primary transition-colors">
              {/* Format the enum output string to look professional (e.g. Prefer Not To Say) */}
              I accept the Terms and Conditions.
            </span>
          </label>
        </div>

        {errors.emergency_contact?.terms && (
          <p className="text-red-500 text-xs mt-1 font-medium pl-1">
            {errors.emergency_contact.terms.message}
          </p>
        )}
      </div>

      {/* Form Submission Action Target Button wrapper UI */}
      <div className="flex gap-10 justify-between w-full mt-7 col-span-1 md:col-span-6 mobile-landscape:col-span-6">
        <PrevButton handler={() => handler(prevStep())} />

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
            value={isLoading ? "Sending" : "Send Message"}
            className={`inline-flex btn pl-1 gap-2 pr-6 py-2  text-white group-hover:text-[#22002d] transition-all duration-500}`}
          />
        </div>
      </div>
    </div>
  );
}
