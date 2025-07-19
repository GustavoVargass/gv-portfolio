import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
    </div>
  );
}

export default App;
