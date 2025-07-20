import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="w-full min-h-full bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Technologies />
        <Projects />
      </div>
    </div>
  );
}

export default App;
