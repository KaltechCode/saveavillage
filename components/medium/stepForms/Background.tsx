import Button, { NextButton, PrevButton } from "@/components/small/Button";
import { nextStep, prevStep } from "@/features/formSteps";
import { AppDispatch } from "@/services/store";
import {
  FAITH_COMMUNITY_OPTIONS,
  HEAR_ABOUT_OPTIONS,
  RegisterErrorControlTriggerValueProps,
} from "@/utils/schema";
import { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import { IoChevronDownOutline, IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function Background({
  registerField,
  errors,
  watch,
  setValue,
  control,
  trigger,
}: RegisterErrorControlTriggerValueProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedItems: string[] = watch("background.hear_about") || [];

  const handler = useDispatch<AppDispatch>();

  const validateNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isStepValid = await trigger("background");

    if (isStepValid) {
      handler(nextStep());
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectOption = (option: string) => {
    let updatedItems: string[];
    if (selectedItems.includes(option)) {
      updatedItems = selectedItems.filter((item) => item !== option);
    } else {
      updatedItems = [...selectedItems, option];
    }
    // Update React Hook Form value dynamically & trigger validation rules
    setValue("background.hear_about", updatedItems, {
      shouldValidate: true,
    });
  };
  const handleRemoveItem = (itemToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Stop dropdown wrapper window from re-opening
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
    setValue("background.hear_about", updatedItems, {
      shouldValidate: true,
    });
  };

  const faithCommunityValue = useWatch({
    control,
    name: "background.faith_community",
  });

  return (
    <div className="grid grid-cols-1 bg-white  gap-7 lg:grid-cols-6 mobile-landscape:grid-cols-6 md:grid-cols-6 border p-5 mt-5 lg:py-10 xl:p-12 xl:mt-12 xl:gap-10  rounded-md border-[#ffffff25] ">
      {/* 1. Faith Community Enum Select Dropdown */}
      <div className="lg:col-span-6 md:col-span-6 mobile-landscape:col-span-6 space-y-3">
        <div>
          <label className="block p-text text-primary">
            Are you a member of a church or faith community?
          </label>
        </div>

        {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-3"> */}
        <div className="grid grid-cols-1 w-max gap-y-5">
          {FAITH_COMMUNITY_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex items-center p-4 space-x-3 border border-primary rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200 group"
            >
              <input
                type="radio"
                value={opt}
                /* Register the single target path name. React Hook Form links these together naturally */
                {...registerField("background.faith_community")}
                className="h-4 w-4 border-[#ffffff40] bg-transparent text-purple-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
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

        {errors.background?.faith_community && (
          <p className="text-red-500 text-xs mt-1 font-medium pl-1">
            {errors.background.faith_community.message}
          </p>
        )}
      </div>
      {/* Faith Journey */}
      {faithCommunityValue == "Yes" && (
        <div className="md:col-span-6 mobile-landscape:col-span-6">
          <input
            type="text"
            required={faithCommunityValue == "Yes" ? true : false}
            placeholder="Please describe your faith journey or spiritual background (if applicable) *"
            {...registerField("background.faith_journey")} // Fixed naming mapping mismatch to address_1
            className="placeholder:text-primary font-[15px] py-4 text-primary bg-transparent border border-primary rounded-md px-5 focus:outline-none w-full"
          />
          {errors.background?.faith_journey && (
            <p className="mt-1 text-sm text-red-500">
              {errors.background.faith_journey.message}
            </p>
          )}
        </div>
      )}

      {/* hear about us */}
      <div className="lg:col-span-6 md:col-span-6 mobile-landscape:col-span-6 space-y-2">
        <label className="block p-text text-primary">
          How do you here about Save a Village?
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary transition-colors hover:bg-primary/20"
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
                {HEAR_ABOUT_OPTIONS.map((option) => {
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

        {/* Hidden registration placeholder row matching your validation keys context path structure */}
        {/* <input type="hidden" {...registerField("personalInterest.involved")} /> */}

        {/* Dynamic validation reporting layout feedback blocks */}
        {errors.background?.hear_about && (
          <p className="text-red-500 text-xs mt-1 font-medium pl-2">
            {errors.background.hear_about.message}
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
