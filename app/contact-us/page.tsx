"use client";
import { FaHeart } from "react-icons/fa6";

import FAQAccordion from "@/components/medium/Accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import FormSection from "@/components/large/contact/FormSection";
import AccordionSection from "@/components/large/contact/AccordionSection";

function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="h-auto py-[3em] md:py-[5em] lg:py-[4em] ">
          <div className="section-container  h-full">
            <div className="flex  flex-col justify-center items-center h-full">
              {/* section tittle*/}
              <div className="">
                <p className="text-center text-primary flex items-center justify-center gap-2">
                  <span>
                    <FaHeart className="text-primary" />{" "}
                  </span>
                  CONTACT US
                </p>
                <h2 className="hero-title-text text-center text-primary! md:w-[80%] lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
                  Empowering Hope Futures Lives Through Giving
                </h2>
              </div>
            </div>
          </div>
        </section>

        <FormSection />

        <AccordionSection />
      </main>
      <Footer />
    </>
  );
}

export default Page;
