"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import HomeProjects from "@/components/HomeProjects";
import WorkEx from "@/components/WorkEx";
import { FloatingDockDemo } from "@/components/FloatingDock";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <WorkEx />
    <HomeProjects />
    <Instructors />
    <div className="hidden md:block sticky -bottom-52 ">
      <FloatingDockDemo />
    </div>
    <Footer />
  </main>
  
  );
}
