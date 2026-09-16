"use client";
import { useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { useAddVolunteerMutation } from "@/services/volunteer";
import { JOINUSTYPE, volunteerSchema } from "@/utils/schema";

import Emergency from "./stepForms/Emergency";

import { useSelector } from "react-redux";
import PersonalInformation from "./stepForms/PersonalInformation";
import PersonalInterest from "./stepForms/PersonalInterest";
import Background from "./stepForms/Background";
import { RootState } from "@/services/store";
import MultiStepControl from "./stepForms/Stepper";
import { volunteerFormTitles } from "@/constant/data";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/services/store";
import { useDispatch } from "react-redux";
import { setStep, setTotalSteps } from "@/features/formSteps";

function Volunteer_form() {
  const [addVolunteer, { isLoading, isError }] = useAddVolunteerMutation();

  const {
    register: registerField,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    trigger,
    formState: { errors },
  } = useForm<JOINUSTYPE>({
    resolver: zodResolver(volunteerSchema) as Resolver<JOINUSTYPE>,
    defaultValues: {
      belief: false,
      personalInfo: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        country: "",
        address_1: "",
        address_2: "",
        zipcode: "",
      },
      personalInterest: {
        involved: [],
        experience: [],
        inspired: "",
      },
      background: {
        faith_community: "No",
        faith_journey: "",
        hear_about: [],
      },
      background_history: {
        crime: "No",
        crime_details: "",
        background_check: false,
      },
      emergency_contact: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        relationship: "",
        terms: false,
      },
    },
  });

  const step = useSelector((state: RootState) => state.steps.step);
  const handler = useDispatch<AppDispatch>();
  const navigate = useRouter();

  useEffect(() => {
    handler(setTotalSteps(4));
    handler(setStep(1));
    return () => {
      handler(setTotalSteps(6));
      handler(setStep(1));
    };
  }, [handler]);

  async function onSubmit(values: JOINUSTYPE) {
    try {
      await addVolunteer(values).unwrap();
      reset();
      handler(setStep(1));
      navigate.push("/confirmation");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[98%] md:w-[95%] lg:w-[90%] mx-auto"
    >
      <MultiStepControl />

      <div className="border border-[#f8f8f8] rounded-md p-4 md:p-6 lg:p-12">
        <h3 className="title-text text-primary!">{volunteerFormTitles[step - 1]}</h3>

        {step == 1 && (
          <PersonalInformation
            registerField={registerField}
            errors={errors}
            trigger={trigger}
            control={control}
            watch={watch}
            setValue={setValue}
          />
        )}

        {step == 2 && (
          <PersonalInterest
            registerField={registerField}
            errors={errors}
            watch={watch}
            setValue={setValue}
            control={control}
            trigger={trigger}
          />
        )}
        {step == 3 && (
          <Background
            registerField={registerField}
            errors={errors}
            control={control}
            setValue={setValue}
            watch={watch}
            trigger={trigger}
          />
        )}
        {step == 4 && (
          <Emergency
            registerField={registerField}
            errors={errors}
            isLoading={isLoading}
            isErr={isError}
            optional
          />
        )}
      </div>
    </form>
  );
}

export default Volunteer_form;
