import FAQAccordion from "@/components/medium/Accordion";
import React from "react";

function AccordionSection() {
  return (
    <section className="py-[3em] md:py-[6em] lg:py-[2em] xl:py-40 3k:py-64 xl:flex xl:items-center bg-[#F8F9FA]">
      <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px]">
        <div className="grid h-full gap-10 mobile-landscape: lg:grid-cols-2">
          <div className="w-full h-[500px] xl:h-[590px] lg:h-full max-h-[620px] relative md:hidden lg:grid rounded-md overflow-hidden bg-[url(/save-a-village-poor-boy.jpg)] bg-center bg-cover"></div>
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;
