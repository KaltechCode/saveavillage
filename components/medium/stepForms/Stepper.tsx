// components/MultiStepControl.tsx
"use client";

import { nextStep, prevStep } from "@/features/formSteps";
import { RootState } from "@/services/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MultiStepControl() {
  const dispatch = useDispatch();
  const { totalSteps } = useSelector(
    (state: RootState) => state.steps.StepperState,
  );

  const currentStep = useSelector((state: RootState) => state.steps.step);

  // Calculate progress connector fill line percentage
  const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mx-auto py-8">
      {/* --- Progress Indicator Row --- */}
      <div className="relative flex items-center justify-between w-full mb-5">
        {/* Background Line (Gray) */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-300 -translate-y-1/2 z-0" />

        {/* Active Line (Dark Fill) */}
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-slate-800 -translate-y-1/2 transition-all duration-300 ease-in-out z-0"
          style={{ width: `${progressWidth}%` }}
        />

        {/* Step Nodes */}
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div
              key={stepNumber}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Outer Focus Ring (Matches your image mock) */}
              <div
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-7 h-7 border border-slate-800 bg-white"
                    : "w-7 h-7 border border-transparent"
                }`}
              >
                {/* Main Node Circle */}
                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#22002d]"
                      : isCompleted
                        ? "bg-[#22002d] text-white"
                        : "bg-slate-300 text-slate-500"
                  }`}
                >
                  {stepNumber}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
