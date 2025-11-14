import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-green-50/40 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        
      </main>

      {/* Footer (Optional) */}
      <footer className="py-4 text-center text-sm text-green-700">
        © {new Date().getFullYear()} Your Name — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
