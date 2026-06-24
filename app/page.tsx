import About from "@/components/large/About";
import Events from "@/components/large/Events";
import Hero from "@/components/large/Hero";
import HomeContact from "@/components/large/HomeContact";
import LatestNews from "@/components/large/LatestNews";
import Programs from "@/components/large/Programs";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import Banner from "@/components/medium/Banner";
import VolunteerDonateSection from "@/components/medium/DoubleBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <Hero />
      <About />
      <VolunteerDonateSection />
      <Programs />
      <Banner />
      <HomeContact />
      <Events />
      <LatestNews />
      <Footer />
    </main>
  );
}
