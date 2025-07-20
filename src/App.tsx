import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";

function App() {
  return (
    <div className="w-full min-h-full bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
