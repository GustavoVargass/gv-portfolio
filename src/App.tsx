import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <Navbar />
      <div className="pt-16">
        <h1 className="text-5xl font-bold text-yellow-400 text-center pt-20">
          Engineering the Shadows
        </h1>
      </div>
    </div>
  );
}

export default App;
