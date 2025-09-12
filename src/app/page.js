import Image from "next/image";
import Hero from "./components/Home/Hero";
import Awards from "./components/Home/Awared";
import Notable from "./components/Home/Notable";
import Navbar from "./components/Navbar";
import Contact from "./components/Home/Contact";
import Projects from "./components/Home/Projects";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Awards />
      <Notable />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}
