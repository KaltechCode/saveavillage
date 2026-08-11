import React from "react";

function HeroBanner({ text }: { text: string }) {
  return (
    <section className=" py-16 lg:py-24 bg-primary">
      <div className="w-[95%] mx-auto xl:[95%] flex justify-center items-center h-40 mobile-landscape:h-30">
        <h3 className="hero-title-text text-center text-white">{text}</h3>
      </div>
    </section>
  );
}

export default HeroBanner;
