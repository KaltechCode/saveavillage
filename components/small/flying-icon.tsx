"use client";
import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import styles from "@/style/flying-envelope.module.css";

type FlyingEnvelopeProps = {
  className?: string;
  "aria-label"?: string;
};
/**
 * Animated thank-you envelope with flight path, flap open, rising card,
 * sparkles, and a gentle float. Honors prefers-reduced-motion.
 */
export function FlyingEnvelope({
  className,
  "aria-label": ariaLabel = "Animated envelope delivering a thank-you message",
}: FlyingEnvelopeProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    // Defer animation start one frame so hard refreshes reliably replay.
    const frame = requestAnimationFrame(() => setReady(true));
    return () => {
      media.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div
      className={cn(
        styles.stage,
        ready && styles.animate,
        reducedMotion && styles.reduced,
        className,
      )}
      role="img"
      aria-label={ariaLabel}
    >
      <div className={styles.trail} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className={styles.trailDot}
            style={{ "--i": index } as CSSProperties}
          />
        ))}
      </div>
      <div className={styles.flyer} aria-hidden="true">
        <div className={styles.float}>
          <div className={styles.envelope}>
            {/* Card sits under closed flap, rises after flap opens */}
            <div className={styles.card}>
              <svg
                className={styles.heart}
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path
                  fill="#66009B"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span className={styles.check} aria-hidden="true">
                <svg viewBox="0 0 20 20" focusable="false">
                  <circle cx="10" cy="10" r="9" fill="#260735" />
                  <path
                    d="M6 10.2 L8.6 12.8 L14 7.2"
                    fill="none"
                    stroke="#F8F6EF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.body}>
              <svg
                viewBox="0 0 160 90"
                className={styles.bodySvg}
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="envBody"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F8F6EF" />
                    <stop offset="100%" stopColor="#EFE6F7" />
                  </linearGradient>
                </defs>
                <rect
                  x="4"
                  y="4"
                  width="152"
                  height="82"
                  rx="10"
                  fill="url(#envBody)"
                  stroke="#260735"
                  strokeWidth="3"
                />
                <path
                  d="M8 10 L80 58 L152 10"
                  fill="none"
                  stroke="#260735"
                  strokeOpacity="0.16"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className={styles.flap}>
              <svg
                viewBox="0 0 160 56"
                className={styles.flapSvg}
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="envFlapFront"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#66009B" />
                    <stop offset="100%" stopColor="#260735" />
                  </linearGradient>
                </defs>
                <path
                  d="M6 50 L80 6 L154 50 Z"
                  fill="url(#envFlapFront)"
                  stroke="#260735"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 42 L80 16 L128 42"
                  fill="none"
                  stroke="#F8F6EF"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.sparkles}>
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className={styles.sparkle}
                  style={{ "--s": index } as CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
