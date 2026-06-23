import Events from "@/components/large/Events";
import HomeContact from "@/components/large/HomeContact";
import LatestNews from "@/components/large/LatestNews";
import Banner from "@/components/medium/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <HomeContact />
      <Banner />
      <Events />
      <LatestNews />
    </main>
  );
}
