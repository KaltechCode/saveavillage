"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { useAddVolunteerMutation } from "@/services/volunteer";
import { joinUsSchema, JOINUSTYPE } from "@/utils/schema";

import Emergency from "./stepForms/Emergency";
import BackgroundHistory from "./stepForms/BackgroundHistory";

import { useSelector } from "react-redux";
import Belief from "./stepForms/Believe";
import PersonalInformation from "./stepForms/PersonalInformation";
import PersonalInterest from "./stepForms/PersonalInterest";
import Background from "./stepForms/Background";
import { RootState } from "@/services/store";
import MultiStepControl from "./stepForms/Stepper";
import { formTitles } from "@/constant/data";

function Join_form() {
  const [addVolunteer, { isLoading, isSuccess, isError, error }] =
    useAddVolunteerMutation();

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
    resolver: zodResolver(joinUsSchema),
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

  async function onSubmit(values: JOINUSTYPE) {
    try {
      // Execute the mutation
      const response = await addVolunteer(values).unwrap();

      reset();
      toast.success(response.message ?? "Registration submitted successfully.");
    } catch (err: any) {
      toast.error(err?.message);
    }
  }

  return (
    // <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>

    <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
      <MultiStepControl />

      <div className="">
        <h3 className="title-text text-white!">{formTitles[step - 1]}</h3>

        {step == 1 && (
          <Belief
            registerField={registerField}
            errors={errors}
            control={control}
            setValue={setValue}
            watch={watch}
            trigger={trigger}
          />
        )}
        {step == 2 && (
          <PersonalInformation
            registerField={registerField}
            errors={errors}
            trigger={trigger}
            control={control}
            watch={watch}
            setValue={setValue}
          />
        )}

        {step == 3 && (
          <PersonalInterest
            registerField={registerField}
            errors={errors}
            watch={watch}
            setValue={setValue}
            control={control}
            trigger={trigger}
          />
        )}
        {step == 4 && (
          <Background
            registerField={registerField}
            errors={errors}
            control={control}
            setValue={setValue}
            watch={watch}
            trigger={trigger}
          />
        )}
        {step == 5 && (
          <BackgroundHistory
            registerField={registerField}
            errors={errors}
            control={control}
            setValue={setValue}
            watch={watch}
            trigger={trigger}
          />
        )}
        {step == 6 && (
          <Emergency
            registerField={registerField}
            errors={errors}
            isLoading={isLoading}
            isErr={isError}
          />
        )}
      </div>
    </form>
  );
}

export default Join_form;
