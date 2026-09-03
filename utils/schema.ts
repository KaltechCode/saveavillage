import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";
export const FAITH_COMMUNITY_OPTIONS = [
  "Yes",
  "No",
  // "Prefer not to say",
] as const;
export const CRIMES_OPTIONS = ["Yes", "No"] as const;
export const BACKGROUND_HISTORY = ["Yes", "No"] as const;

export const HEAR_ABOUT_OPTIONS = [
  "Social Media",
  "Google Search",
  "Word Mouth",
  "Church or Faith Community",
  "Event/Conference",
];

export const HOW_TO_GET_INVOLVED = [
  "Educational Support",
  "Donor",
  "Community Services",
  "Financial Literacy",
  "Counselling Services",
  "Other",
];
export const EXPERIENCE_INVOLVED = [
  "Resume Building",
  "Spiritual Guidance and Mentorship",
  "Tutoring",
  "Substance Abuse Training",
  "Leadership Development",
  "Administrative Support",
  "Other",
];

export const joinUsSchema = z.object({
  belief: z
    .boolean("Select this option.")
    .refine((val) => val === true, "Select this option."),

  // CRITICAL: Nested groups must use z.object()
  personalInfo: z.object({
    first_name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters.")
      .max(30, "Name cannot exceed 30 characters."),
    last_name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters.")
      .max(30, "Name cannot exceed 30 characters."),
    email: z.string().trim().email("Please enter a valid email address."),
    phone: z.string().min(1, "Phone number is required"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    zipcode: z.string().min(1, "City is required"),
    country: z.string().min(1, "City is required"),
    address_1: z.string().trim().min(1, "Address is required"),
    address_2: z.string().trim().optional(),
  }),

  personalInterest: z.object({
    involved: z
      .array(z.string().min(2))
      .min(1, "At least 1 involved must be selected"),
    experience: z
      .array(z.string().min(2))
      .min(1, "At least 1 involved must be selected"),
    inspired: z.string().min(1, "Tell us what inspired you"),
    explainInvolved: z.string().optional(),
    explainExperience: z.string().optional(),
  }),

  background: z.object({
    faith_community: z.enum(FAITH_COMMUNITY_OPTIONS, {
      message: "Please select an option",
    }),
    faith_journey: z.string(),
    hear_about: z.array(z.string().min(2)).min(1, "Select at least 1 option"),
  }),

  background_history: z.object({
    crime: z.enum(CRIMES_OPTIONS, {
      message: "Please select an option",
    }),
    crime_details: z.string().optional(),
    background_check: z
      .boolean()
      .refine((val) => val === true, "Select this option."),
  }),

  emergency_contact: z.object({
    first_name: z.string().trim().min(3).max(30),
    last_name: z.string().trim().min(3).max(30),
    email: z.string().trim().email(),
    phone: z.string(),
    relationship: z.string(),
    terms: z.boolean(),
  }),
});

// export type JoinUsInputs = z.infer<typeof joinUsSchema>;

export type JOINUSTYPE = z.infer<typeof joinUsSchema>;

export interface RegisterErrorProps {
  registerField: UseFormRegister<JOINUSTYPE>;
  errors: FieldErrors<JOINUSTYPE>;
}

export interface RegisterErrorWatchValueProps {
  registerField: UseFormRegister<JOINUSTYPE>;
  errors: FieldErrors<JOINUSTYPE>;
  setValue: UseFormSetValue<JOINUSTYPE>;
  watch: UseFormWatch<JOINUSTYPE>;
}

export interface RegisterErrorWatchProps {
  registerField: UseFormRegister<JOINUSTYPE>;
  errors: FieldErrors<JOINUSTYPE>;
  watch: UseFormWatch<JOINUSTYPE>;
}
export interface RegisterErrorControlValueProps {
  registerField: UseFormRegister<JOINUSTYPE>;
  errors: FieldErrors<JOINUSTYPE>;
  control: Control<JOINUSTYPE>;
  watch: UseFormWatch<JOINUSTYPE>;
  setValue: UseFormSetValue<JOINUSTYPE>;
}
export interface RegisterErrorControlTriggerValueProps {
  registerField: UseFormRegister<JOINUSTYPE>;
  errors: FieldErrors<JOINUSTYPE>;
  control: Control<JOINUSTYPE>;
  watch: UseFormWatch<JOINUSTYPE>;
  setValue: UseFormSetValue<JOINUSTYPE>;
  trigger: UseFormTrigger<JOINUSTYPE>;
}
