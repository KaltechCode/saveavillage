import Hero from "@/components/large/Hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import EventPage from "@/components/large/pages/EventPage";
import Image from "next/image";
import React from "react";
import HeroBanner from "@/components/medium/HeroBanner";

function page() {
  return (
    <main className="">
      <Header />
      <HeroBanner text="Our Events" />
      <EventPage />
      <Footer />
    </main>
  );
}

export default page;
