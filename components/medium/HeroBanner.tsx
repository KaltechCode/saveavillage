import React from "react";

function HeroBanner({ text, image }: { text: string; image: string }) {
  return (
    <section className="bg-primary relative overflow-hidden w-screen h-70 lg:h-100">
      <div
        className="
              absolute
              inset-0
              z-20
               bg-[#22002d]/90
            "
      />

      <div className={`absolute z-10 inset-0 bg-cover bg-center ${image}`} />
      <div className="mx-auto  flex justify-center items-center h-full w-full  absolute z-30">
        <h3 className="hero-title-text text-center text-white">{text}</h3>
      </div>
    </section>
  );
}

export default HeroBanner;
