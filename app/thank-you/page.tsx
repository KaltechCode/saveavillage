import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { FlyingEnvelope } from "@/components/small/flying-icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import Button from "@/components/small/Button";
export const metadata: Metadata = {
  title: `Thank You Save a Village}`,
  description:
    "Your message has been received. Thank you for supporting Save a Village.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#efe6f7_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_#f8f6ef_0%,_transparent_45%)]"
      />

      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-6 sm:mb-8"></div>

        <div
          className={cn(
            "w-full rounded-[7px] ",
            "bg-white/85 p-6 shadow-[0_18px_50px_-24px_rgb(38_7_53_/_0.35)] backdrop-blur-sm",
            "sm:p-10 md:p-12",
          )}
        >
          <FlyingEnvelope className="mb-2 sm:mb-4" />

          <div className="mx-auto max-w-xl space-y-4 text-center">
            <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight text-[var(--brand-dark-purple)] sm:text-4xl md:text-[2.65rem] md:leading-tight">
              Your application has been successfully submitted
            </h1>

            <p className="text-pretty text-base leading-relaxed text-[var(--brand-dark-text)]/80 sm:text-lg">
              Thank you for applying to volunteer with us.
            </p>
          </div>

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
    </main>
  );
}
