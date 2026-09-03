import Button, { NextButton, PrevButton } from "@/components/small/Button";
import { nextStep, prevStep } from "@/features/formSteps";
import { AppDispatch } from "@/services/store";
import {
  RegisterErrorControlTriggerValueProps,
  RegisterErrorProps,
} from "@/utils/schema";
import { useDispatch } from "react-redux";

export default function PersonalInformation({
  registerField,
  errors,
  trigger,
}: RegisterErrorControlTriggerValueProps) {
  const handler = useDispatch<AppDispatch>();

  const validateNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isStepValid = await trigger("personalInfo");

    console.log("isStepValid", isStepValid);

    if (isStepValid) {
      handler(nextStep());
    }
  };
  return (
    <div className="grid bg-white gap-7  grid-cols-1 lg:grid-cols-6 mobile-landscape:grid-cols-6 md:grid-cols-6 border p-5 mt-5 lg:py-10 xl:p-10 xl:mt-8 xl:gap-10 rounded-md border-[#ffffff25]">
      {/* First Name */}
      <div className="col-span-1 md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="First Name"
          {...registerField("personalInfo.first_name")} // Fixed variable & mapped dot path
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.first_name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.first_name.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className=" col-span-1 md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="Last Name"
          {...registerField("personalInfo.last_name")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.last_name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.last_name.message}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="email"
          placeholder="Email Address"
          {...registerField("personalInfo.email")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.email.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text" // Kept as text to prevent phone character dropping bugs
          placeholder="Phone Number"
          {...registerField("personalInfo.phone")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.phone.message}
          </p>
        )}
      </div>

      {/* Address 1 */}
      <div className="md:col-span-6 mobile-landscape:col-span-6">
        <input
          type="text"
          placeholder="Street Address 1"
          {...registerField("personalInfo.address_1")} // Fixed naming mapping mismatch to address_1
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.address_1 && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.address_1.message}
          </p>
        )}
      </div>

      {/* Address 2 */}

      <div className="md:col-span-6 mobile-landscape:col-span-6">
        <input
          type="text"
          placeholder="Street Address - 2"
          {...registerField("personalInfo.address_2")} // Fixed naming mapping mismatch to address_1
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.address_2 && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.address_2.message}
          </p>
        )}
      </div>

      {/* City */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="City"
          {...registerField("personalInfo.city")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.city && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.city.message}
          </p>
        )}
      </div>

      {/* State */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="State"
          {...registerField("personalInfo.state")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.state && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.state.message}
          </p>
        )}
      </div>
      {/* Country */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="country"
          {...registerField("personalInfo.country")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.country && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.country.message}
          </p>
        )}
      </div>

      {/* zipcode */}
      <div className="md:col-span-3 mobile-landscape:col-span-3">
        <input
          type="text"
          placeholder="Zipcode/postal code"
          {...registerField("personalInfo.zipcode")} // Added personalInfo. prefix
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInfo?.zipcode && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInfo.zipcode.message}
          </p>
        )}
      </div>

      {/* Form Submission Action Target Button wrapper UI */}
      <div className="flex gap-10 justify-between w-full mt-7 col-span-1 md:col-span-6 mobile-landscape:col-span-6">
        <PrevButton handler={() => handler(prevStep())} />

        <NextButton handler={validateNext} />
      </div>
    </div>
  );
}
