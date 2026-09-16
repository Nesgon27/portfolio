import Navbar from "./components/Navbar/Navbar";
import Reveal from "./components/Reveal/Reveal";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Néstor Méndez.
      </footer>
    </div>
  );
}

export default App;
