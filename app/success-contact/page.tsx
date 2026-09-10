"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
type ThankYouProps = {
  homeHref?: string;
};
import "@/style/contact-success.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import Button from "@/components/small/Button";
import { MdEmail } from "react-icons/md";

export default function ContactSuccess({ homeHref = "/" }: ThankYouProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const iconAnimation = icon.animate(
      reduceMotion
        ? [
            { opacity: 0, transform: "translateY(0.75rem)" },
            { opacity: 1, transform: "translateY(0)" },
          ]
        : [
            {
              opacity: 0,
              transform:
                "translateY(3.25rem) scale(0.45) rotateY(-200deg) rotateZ(-18deg)",
            },
            {
              opacity: 1,
              offset: 0.35,
              transform:
                "translateY(-2.4rem) scale(1.12) rotateY(28deg) rotateZ(10deg)",
            },
            {
              opacity: 1,
              offset: 0.55,
              transform:
                "translateY(-3.1rem) scale(1.05) rotateY(-12deg) rotateZ(-4deg)",
            },
            {
              offset: 0.75,
              transform:
                "translateY(-0.45rem) scale(0.98) rotateY(6deg) rotateZ(2deg)",
            },
            {
              opacity: 1,
              transform: "translateY(0) scale(1) rotateY(0deg) rotateZ(0deg)",
            },
          ],
      {
        duration: reduceMotion ? 450 : 1700,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      },
    );
    const textAnimations = textRefs.current.filter(Boolean).map((el, index) =>
      el!.animate(
        [
          { opacity: 0, transform: "translateY(0.9rem)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: reduceMotion ? 400 : 750,
          delay: reduceMotion ? 80 * index : 700 + index * 180,
          easing: "ease-out",
          fill: "both",
        },
      ),
    );
    return () => {
      iconAnimation.cancel();
      textAnimations.forEach((animation) => animation.cancel());
    };
  }, []);
  return (
    <>
      <Header />
      <section className="thank-you" aria-labelledby="thank-you-heading">
        <svg
          className="thank-you__gradient-defs"
          width="0"
          height="0"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient
              id="thank-you-mail-gradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#ff2d95" />
              <stop offset="45%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#00c2ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="thank-you__content">
          <div className="thank-you__icon-wrap" aria-hidden="true">
            <div className="thank-you__icon" ref={iconRef}>
              <MdEmail className="thank-you__mail" />
            </div>
          </div>
          <h1
            id="thank-you-heading"
            className="thank-you__heading"
            ref={(el) => {
              textRefs.current[0] = el;
            }}
          >
            Thanks for Contacting Us!
          </h1>
          <p
            className="thank-you__subheading"
            ref={(el) => {
              textRefs.current[1] = el;
            }}
          >
            your message has been sent!
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button
              label="Back to Home"
              primary={true}
              iconColor="text-primary"
              url="/"
              link={true}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
