"use client";
import JoinFormSection from "@/components/large/contact/JoinFormSection";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import HeroBanner from "@/components/medium/HeroBanner";
import Volunteer_form from "@/components/medium/Volunteer_form";

const VolunteerPage = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
        {/* Hero Section */}
        <HeroBanner
        text="Volunteer"
        image="bg-[url(/images/Educational-Support.webp)]"
      />


        {/* Content Section */}
        <div className="bg-white py-12 md:py-16 lg:py-20">
          <div className="w-[90%] max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(20,37,96)]">
                  Volunteering with Save a Village
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Volunteering with Save a Village offers an incredible opportunity
                  to make a meaningful impact in the community. Whether through hands-on outreach, organizing
                  events, or providing support to underserved individuals,
                  volunteers play a vital role in fulfilling save a village mission to
                  spread love, compassion, and the message of Christ. By
                  offering your time, skills, and resources, you not only help
                  meet the physical and emotional needs of others but also grow
                  spiritually and deepen your sense of purpose. Through the
                  collaborative efforts of volunteers, Save a Village
                  creates a network of care and support that transforms lives,
                  uplifts our communities, and embodies the teachings of Christ
                  in action.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/praying-1.png"
                  fill
                  className="object-cover"
                  alt="Volunteer with USFJ"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="py-12 md:py-16">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="bg-primary p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                   Save a Village Volunteer Application
                </h2>
                <p className="text-white/90 text-base md:text-lg">
                  Join our team and impact lives.
                </p>
              </div>

              <div className="w-full px-4 py-8 md:px-10 md:py-12">
                <Volunteer_form />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default VolunteerPage;
