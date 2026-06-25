import About from "@/components/large/About";
import Acheivement from "@/components/large/Acheivement";
import OurTeam from "@/components/large/OutTeam";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import Banner from "@/components/medium/Banner";
import React from "react";

function Page() {
  return (
    <main>
      <Header />

      <About />
      <Acheivement />
      <OurTeam />
      <Banner />
      <Footer />
    </main>
  );
}

export default Page;
