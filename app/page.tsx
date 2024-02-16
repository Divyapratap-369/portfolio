"use client"
import {motion} from "framer-motion"
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import { RightSide } from "@/components/RightSide";
import Middle from "@/components/Middle";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/10
    scrollbar-thumb-textDark/60">
      <Navbar/>
      <motion.div
      initial = {{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.5}} 
      className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <LeftSide/>
        </div>
      <div className="w-full h-[88vh] mx-auto p-4">
        <Middle/>
        <About/>
        <Experience/>
        <Projects/>
        <Archive/>
        <Contact/>
        <Footer/>
      </div>
      <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"><RightSide/></div>
      </motion.div>
    </main>
  );
}
