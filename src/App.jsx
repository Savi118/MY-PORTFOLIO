import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Exprerience from "./pages/Exprerience";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className='min-h-screen bg-green-50/40 flex flex-col'>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className='flex-1 w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Exprerience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/tech-stack' element={<TechStack />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
