"use client";

import { Hero } from "@/components/Hero";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full">
      <div className="w-full">
        <Hero />
        <StickyScrollRevealDemo />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
