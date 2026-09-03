import Button, { NextButton, PrevButton } from "@/components/small/Button";
import { nextStep, prevStep } from "@/features/formSteps";
import { AppDispatch } from "@/services/store";
import {
  EXPERIENCE_INVOLVED,
  HOW_TO_GET_INVOLVED,
  RegisterErrorControlTriggerValueProps,
  RegisterErrorWatchValueProps,
} from "@/utils/schema";
import { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import { IoChevronDownOutline, IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function PersonalInterest({
  registerField,
  errors,
  setValue,
  watch,
  trigger,
  control,
}: RegisterErrorControlTriggerValueProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownExperience = useRef<HTMLDivElement>(null);

  const handler = useDispatch<AppDispatch>();

  // 1. Watch the selected items array from React Hook Form in real-time
  const selectedItems: string[] = watch("personalInterest.involved") || [];
  const experienceSelectedItems: string[] =
    watch("personalInterest.experience") || [];

  // Close dropdown when clicking outside of the element
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        dropdownExperience.current &&
        !dropdownExperience.current.contains(event.target as Node)
      ) {
        setExperienceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 2. Toggle item selection inside the array state
  const handleSelectOption = (option: string) => {
    let updatedItems: string[];
    if (selectedItems.includes(option)) {
      updatedItems = selectedItems.filter((item) => item !== option);
    } else {
      updatedItems = [...selectedItems, option];
    }
    // Update React Hook Form value dynamically & trigger validation rules
    setValue("personalInterest.involved", updatedItems, {
      shouldValidate: true,
    });
  };
  const ExperienceSelectOption = (option: string) => {
    let updatedItems: string[];
    if (experienceSelectedItems.includes(option)) {
      updatedItems = experienceSelectedItems.filter((item) => item !== option);
    } else {
      updatedItems = [...experienceSelectedItems, option];
    }
    // Update React Hook Form value dynamically & trigger validation rules
    setValue("personalInterest.experience", updatedItems, {
      shouldValidate: true,
    });
  };

  // 3. Helper to remove a badge pill
  const handleRemoveItem = (itemToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Stop dropdown wrapper window from re-opening
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
    setValue("personalInterest.involved", updatedItems, {
      shouldValidate: true,
    });
  };
  const experienceRemoveItem = (itemToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Stop dropdown wrapper window from re-opening
    const updatedItems = experienceSelectedItems.filter(
      (item) => item !== itemToRemove,
    );
    setValue("personalInterest.experience", updatedItems, {
      shouldValidate: true,
    });
  };

  const validateNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isStepValid = await trigger("personalInterest");

    console.log("isStepValid", isStepValid);

    if (isStepValid) {
      handler(nextStep());
    }
  };

  const involveValue = useWatch({
    control,
    name: "personalInterest.involved",
  });

  const experienceValue = useWatch({
    control,
    name: "personalInterest.experience",
  });

  const [experienceTrue, setExperienceTrue] = useState<boolean>(false);
  const [involvedTrue, setiInvolvedTrue] = useState<boolean>(false);

  useEffect(() => {
    const hasOther =
      (experienceValue?.length ?? 0) > 0 &&
      (experienceValue?.some((item) => item === "Other") ?? false);

    setExperienceTrue(hasOther);
  }, [experienceValue]);

  useEffect(() => {
    const involvedTrue =
      (involveValue?.length ?? 0) > 0 &&
      involveValue?.some((item) => item === "Other");

    setiInvolvedTrue(involvedTrue);
  }, [involveValue]);

  return (
    <div className="animate-[fadeIn_0.9s_ease-out] grid grid-cols-1 gap-7 bg-white lg:grid-cols-6 mobile-landscape:grid-cols-6 md:grid-cols-6 border p-5 mt-5 lg:py-10 xl:p-12 xl:mt-8 xl:gap-10 rounded-md border-[#ffffff25]">
      <div className="lg:col-span-6 md:col-span-6 mobile-landscape:col-span-6 space-y-2">
        <label className="block p-text text-primary">
          How would you like to get involved?
        </label>

        {/* Custom Multi-Select Dropdown Container */}
        <div ref={dropdownRef} className="relative w-full">
          {/* Main selection input bar area */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="min-h-[56px] w-full p-3 flex flex-wrap gap-2 items-center border border-primary bg-transparent rounded-md px-5 cursor-pointer focus:outline-none transition-all duration-300"
          >
            {/* Displaying selected values dynamically as removable badges */}
            {selectedItems.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-[#ffffff20] transition-colors hover:bg-white/20"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={(e) => handleRemoveItem(item, e)}
                      className="text-primary/60 hover:text-red-400 focus:outline-none transition-colors"
                    >
                      <IoCloseCircleSharp size={16} />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-white/50 text-[15px]">
                -- Select Involvement Options --
              </span>
            )}

            {/* Trailing arrow chevron positioning */}
            <div className="absolute right-5 pointer-events-none text-white/50">
              <IoChevronDownOutline
                size={18}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div>

          {/* Floating selection option grid box layout dropdown */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-2 bg-[#1b0a21] border border-[#ffffff25] rounded-xl shadow-2xl max-h-60 overflow-y-auto backdrop-blur-md">
              <div className="p-2 space-y-1">
                {HOW_TO_GET_INVOLVED.map((option) => {
                  const isChecked = selectedItems.includes(option);
                  return (
                    <div
                      key={option}
                      onClick={() => handleSelectOption(option)}
                      className={`flex items-center justify-between p-3 rounded-lg text-sm text-white cursor-pointer transition-all duration-200 ${
                        isChecked
                          ? "bg-white/20 font-semibold"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <span>{option}</span>
                      {/* Sub-Checkbox anchor checkmark indicator layout tracking choice */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="h-4 w-4 rounded border-gray-600 bg-transparent text-purple-600 focus:ring-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Dynamic validation reporting layout feedback blocks */}
        {errors.personalInterest?.involved && (
          <p className="text-red-500 text-xs mt-1 font-medium pl-2">
            {errors.personalInterest.involved.message}
          </p>
        )}
      </div>

      {/* Explain how you want to get Involved*/}
      {involvedTrue && (
        <div className="md:col-span-6 mobile-landscape:col-span-6">
          <label className="block p-text text-primary mb-2">
            How do you want to get Involved?{" "}
          </label>
          <input
            type="text"
            placeholder="How do you want to get Involved?"
            {...registerField("personalInterest.explainInvolved")} // Fixed naming mapping mismatch to address_1
            className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
          />
          {errors.personalInterest?.explainInvolved && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalInterest.explainInvolved.message}
            </p>
          )}
        </div>
      )}

      <div className="lg:col-span-6 md:col-span-6 mobile-landscape:col-span-6 space-y-2">
        <label className="block p-text text-primary">
          Do you have any experience in the following areas?
        </label>

        {/* Custom dropDown Container */}
        <div ref={dropdownExperience} className="relative w-full">
          {/* Main selection input bar area */}
          <div
            onClick={() => setExperienceOpen(!experienceOpen)}
            className="min-h-[56px] w-full p-3 flex flex-wrap gap-2 items-center border border-primary bg-transparent rounded-md px-5 cursor-pointer focus:outline-none transition-all duration-300"
          >
            {/* Displaying selected values dynamically as removable badges */}
            {experienceSelectedItems.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {experienceSelectedItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary transition-colors hover:bg-white/20"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={(e) => experienceRemoveItem(item, e)}
                      className="text-primary/60 hover:text-red-400 focus:outline-none transition-colors"
                    >
                      <IoCloseCircleSharp size={16} />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-primary/50 text-[15px]">
                -- Do you have any experience in the following areas? --
              </span>
            )}

            {/* Trailing arrow chevron positioning */}
            <div className="absolute right-5 pointer-events-none text-white/50">
              <IoChevronDownOutline
                size={18}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div>

          {/* Floating selection option grid box layout dropdown */}
          {experienceOpen && (
            <div className="absolute z-50 w-full mt-2 bg-[#1b0a21] border border-[#ffffff25] rounded-xl shadow-2xl max-h-60 overflow-y-auto backdrop-blur-md">
              <div className="p-2 space-y-1">
                {EXPERIENCE_INVOLVED.map((option) => {
                  const isChecked = experienceSelectedItems.includes(option);
                  return (
                    <div
                      key={option}
                      onClick={() => ExperienceSelectOption(option)}
                      className={`flex items-center justify-between p-3 rounded-lg text-sm text-white cursor-pointer transition-all duration-200 ${
                        isChecked
                          ? "bg-white/20 font-semibold"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <span>{option}</span>
                      {/* Sub-Checkbox anchor checkmark indicator layout tracking choice */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="h-4 w-4 rounded border-gray-600 bg-transparent text-purple-600 focus:ring-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Hidden registration placeholder row matching your validation keys context path structure */}
        <input
          type="hidden"
          {...registerField("personalInterest.experience")}
        />

        {/* Dynamic validation reporting layout feedback blocks */}
        {errors.personalInterest?.experience && (
          <p className="text-red-500 text-xs mt-1 font-medium pl-2">
            {errors.personalInterest.experience.message}
          </p>
        )}
      </div>

      {/* Explain your experience */}
      {experienceTrue && (
        <div className="md:col-span-6 mobile-landscape:col-span-6">
          <label className="block p-text font-semibold text-primary mb-2">
            Field of Experience
          </label>
          <input
            type="text"
            placeholder="Field of Experience"
            {...registerField("personalInterest.explainExperience")} // Fixed naming mapping mismatch to address_1
            className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
          />
          {errors.personalInterest?.explainExperience && (
            <p className="mt-1 text-sm text-red-500">
              {errors.personalInterest.explainExperience.message}
            </p>
          )}
        </div>
      )}

      {/*  inspired*/}
      <div className="md:col-span-6 mobile-landscape:col-span-6">
        <label className="block p-text text-primary mb-2">
          What inspired you to join Save a Village?{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="What inspired you to join  Save a Village? "
          {...registerField("personalInterest.inspired")} // Fixed naming mapping mismatch to address_1
          className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
        />
        {errors.personalInterest?.inspired && (
          <p className="mt-1 text-sm text-red-500">
            {errors.personalInterest.inspired.message}
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
