import AccordionSection from "@/components/large/contact/AccordionSection";
import Hero from "@/components/large/Hero";
import Program from "@/components/large/pages/program";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/medium/HeroBanner";

function page() {
  return (
    <>
      <main className="">
        <Header />
        {/* <Hero /> */}
        <HeroBanner
          text="Our Programs"
          image="bg-[url(/images/Educational-Support.webp)]"
        />
        <Program />
        {/* <AccordionSection /> */}
        <Footer />
      </main>
    </>
  );
}

export default page;
