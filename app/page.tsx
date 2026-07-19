import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contect";
import SignalSection from "@/components/sections/SignalSection";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <SignalSection />
      <Services />
      <Process />
      <About />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
