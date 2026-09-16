"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import FormSection from "@/components/large/contact/FormSection";
import HeroBanner from "@/components/medium/HeroBanner";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import JoinFormSection from "@/components/large/contact/JoinFormSection";
import Join_form from "@/components/medium/Join_Form";

function Page() {
  return (
    <>
      <Header />
      <HeroBanner
        text="Join Save a Village"
        image="bg-[url(/images/Educational-Support.webp)]"
      />
      <main>
        <section className="h-auto py-[3em] md:py-[5em] lg:py-[4em] ">
          <div className="section-container  h-full">
            <div className="flex  flex-col justify-center items-center h-full">
              {/* section tittle*/}
             
            </div>
          </div>
        </section>

        

        {/* <div className="w-full px-4 py-8 md:px-10 md:py-12">
        <Join_form />
              </div> */}

              <div className="py-12 md:py-16">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="bg-primary p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                   Save a Village Join Us Application
                </h2>
                <p className="text-white/90 text-base md:text-lg">
                  Join our team and impact lives.
                </p>
              </div>

              <div className="w-full px-4 py-8 md:px-10 md:py-12">
                <Join_form />
              </div>
            </div>
          </div>
        </div>

        {/* <AccordionSection /> */}
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

export default Page;
