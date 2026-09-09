/**
 * Save a Village brand + thank-you page configuration.
 * Update logo, messages, colors, links, and animation timing here.
 */
export const brand = {
  name: "Save a Village",
  tagline: "Stronger communities. Brighter futures.",
  websiteUrl: "https://saveavillage.org",
  websiteLabel: "saveavillage.org",
  email: "hello@saveavillage.org",
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/saveavillage",
      label: "Visit Save a Village on Facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/saveavillage",
      label: "Visit Save a Village on Instagram",
    },
    {
      name: "X",
      href: "https://x.com/saveavillage",
      label: "Visit Save a Village on X",
    },
  ],
} as const;
/** Hex brand palette — mirrored in globals.css as CSS variables */
export const colors = {
  darkPurple: "#260735",
  lightPurple: "#66009B",
  white: "#FFFFFF",
  offWhite: "#F8F6EF",
  darkText: "#17231E",
  softLavender: "#EFE6F7",
  accentGold: "#D4A84B",
} as const;
export const thankYouContent = {
  heading: "Thank You for Supporting Save a Village",
  message:
    "Your message has been received. Thank you for joining us in creating stronger communities and brighter futures. A member of our team will contact you soon.",
  primaryCta: {
    label: "Return to Home",
    href: "/",
  },
  secondaryCta: {
    label: "Explore Our Impact",
    href: "/impact",
  },
} as const;
/**
 * Animation timing (seconds). Also mirrored in flying-envelope.module.css
 * via --flight-duration, --open-delay, etc.
 */
export const envelopeAnimation = {
  flightDuration: 3,
  settleDuration: 0.5,
  flapOpenDuration: 0.8,
  cardRiseDuration: 0.95,
  sparkleDuration: 1.4,
  floatDuration: 4.5,
  openDelay: 3.05,
  cardDelay: 3.45,
  sparkleDelay: 3.6,
} as const;
