import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="h-screen w-screen flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <Image src="/coming-soon.gif" alt="" height={300} width={250} />
      </div>
      <Footer />
    </main>
  );
}

export default page;
