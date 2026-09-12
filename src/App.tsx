import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Navbar/sections/Hero/Hero";

function App() {
  return (
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Hero />
      </main>
  );
}

export default App;
