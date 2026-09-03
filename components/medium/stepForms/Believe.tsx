import SaveAVillageBeliefs from "@/components/small/BelieveList";
import Button, { NextButton } from "@/components/small/Button";
import { nextStep } from "@/features/formSteps";
import { AppDispatch } from "@/services/store";
import { RegisterErrorControlTriggerValueProps } from "@/utils/schema";
import { useDispatch } from "react-redux";

export default function Belief({
  trigger,
  errors,
  registerField,
}: RegisterErrorControlTriggerValueProps) {
  const handler = useDispatch<AppDispatch>();
  const validateNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isStepValid = await trigger("belief");

    if (isStepValid) {
      handler(nextStep());
    }
  };
  return (
    <div className=" bg-white  gap-7 lg:grid-cols-6 mobile-landscape:grid-cols-6 md:grid-cols-6 border p-5 mt-5 lg:py-10 xl:p-12 xl:mt-12 xl:gap-10  rounded-md border-[#ffffff25] ">
      {/* input container */}
      <SaveAVillageBeliefs />
      <div className="border-t border-slate-200 py-5">
        <input type="checkbox" id="beleive" {...registerField("belief")} />
        <label htmlFor="beleive" className="p-text text-primary ml-2">
          Please read about what we believe and make sure you understand and
          acknowledge before proceeding with your application.{" "}
          <span className="text-red-700">*</span>
        </label>
        {errors.belief && (
          <p className="mt-1 text-sm text-red-500">{errors.belief.message}</p>
        )}
      </div>
      {/* button */}
      <div className="flex w-full justify-end mt-7">
        <NextButton handler={validateNext} />
      </div>
    </div>
  );
}
