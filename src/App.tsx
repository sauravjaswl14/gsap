import { useRef } from "react";
import { useAnimations } from "./hooks/useAnimations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  useAnimations(root);

  return (
    <div ref={root}>
      <div className="progress" aria-hidden="true" />

      <div className="px-5 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
        <Header />
        <main id="top">
          <Hero />
          <Work />
        </main>
      </div>

      <Marquee />

      <div className="px-5 md:px-10 lg:px-20 xl:px-40 2xl:px-60 ">
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
