import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
  <div className="relative">
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
  </div>
  );
}
