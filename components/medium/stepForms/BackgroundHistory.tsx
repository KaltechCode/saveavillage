import Button, { NextButton, PrevButton } from "@/components/small/Button";
import { nextStep, prevStep } from "@/features/formSteps";
import { AppDispatch } from "@/services/store";
import {
  CRIMES_OPTIONS,
  RegisterErrorControlTriggerValueProps,
  RegisterErrorControlValueProps,
} from "@/utils/schema";
import { useWatch } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function BackgroundHistory({
  registerField,
  errors,
  control,
  watch,
  setValue,
  trigger,
}: RegisterErrorControlTriggerValueProps) {
  const crimeValue = useWatch({
    control,
    name: "background_history.crime",
  });

  const handler = useDispatch<AppDispatch>();

  const validateNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isStepValid = await trigger("background_history");

    console.log("isStepValid", isStepValid);

    if (isStepValid) {
      handler(nextStep());
    }
  };

  return (
    <div className="grid grid-cols-1 bg-white  gap-7 lg:grid-cols-6 mobile-landscape:grid-cols-6 md:grid-cols-6 border p-5 mt-5 lg:py-10 xl:p-12 xl:mt-12 xl:gap-10  rounded-md border-[#ffffff25] ">
      <div className="lg:col-span-6 md:col-span-6 mobile-landscape:col-span-6 space-y-3">
        <div>
          <label className="block p-text text-primary">
            Have you ever been convicted of a major crime?
          </label>
          <p className="text-xs text-primary/50">
            Please select one option below.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-3"> */}
        <div className="grid grid-cols-1 gap-7 w-max">
          {CRIMES_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex items-center p-4 space-x-3 border border-primary bg-white rounded-md cursor-pointer hover:bg-white/10 transition-all duration-200 group pr-16"
            >
              <input
                type="radio"
                value={opt}
                /* Register the single target path name. React Hook Form links these together naturally */
                {...registerField("background_history.crime")}
                className="h-4 w-4 border-primary bg-transparent text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
                {/* Format the enum output string to look professional (e.g. Prefer Not To Say) */}
                {opt
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
            </label>
          ))}
        </div>

        {errors.background_history?.crime && (
          <p className="text-red-500 text-xs mt-1 font-medium pl-1">
            {errors.background_history.crime.message}
          </p>
        )}
      </div>
      {/* crime_details */}
      {crimeValue == "Yes" && (
        <div className="md:col-span-6 mobile-landscape:col-span-6">
          <label className="flex items-center py-4 space-x-3 border border-[#ffffff20] bg-[#ffffff05] rounded-md cursor-pointer hover:bg-white/10 transition-all duration-200 group">
            <input
              type="text"
              placeholder="Briefly describe what happened"
              {...registerField("background_history.crime_details")} // Fixed naming mapping mismatch to address_1
              className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
            />
            {errors.background_history?.crime_details && (
              <p className="mt-1 text-sm text-red-500">
                {errors.background_history?.crime_details.message}
              </p>
            )}
          </label>
        </div>
      )}

      <div className="md:col-span-6 mobile-landscape:col-span-6">
        <label className="flex items-center p-4 space-x-3 border border-[#ffffff20] bg-[#ffffff05] rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200 group">
          <input
            type="checkbox"
            /* Register the single target path name. React Hook Form links these together naturally */
            {...registerField("background_history.background_check")}
            className="h-4 w-4 border-primary bg-transparent text-purple-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
            {/* Format the enum output string to look professional (e.g. Prefer Not To Say) */}
            <p className="bold-text text-primary">Note:</p>
            <p className="p-text">
              A background check will be required for certain roles or programs
            </p>
          </span>
        </label>
        {errors.background_history?.background_check && (
          <p className="mt-1 text-sm text-red-500">
            {errors.background_history?.background_check.message}
          </p>
        )}
      </div>

      <div className="flex gap-10 justify-between w-full mt-7 col-span-1 md:col-span-6 mobile-landscape:col-span-6">
        <PrevButton handler={() => handler(prevStep())} />
        <NextButton handler={validateNext} />
      </div>
    </div>
  );
}
