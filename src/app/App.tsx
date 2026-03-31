import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
