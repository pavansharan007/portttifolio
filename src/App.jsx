import "./App.css";
import Navbar from "./compnts/Navbar";
import Home from "./compnts/Home";
import About from "./compnts/About";
import Projects from "./compnts/Projects";
import Contact from "./compnts/Contact";
import BackgroundParticles from "./compnts/BackgroundParticles";

function App() {
  return (
    <>
      {/* Dynamic Background */}
      <BackgroundParticles />
      
      {/* Fixed Navbar */}
      <div className="fixed p-4 md:p-2 top-0 left-0 w-full bg-cyber-bgSecondary border-b border-cyber-border shadow-[0_0_15px_rgba(0,212,255,0.05)] z-50">
        <Navbar />
      </div>
      {/* Page Content */}
      <div className="pt-24 p-4 md:p-8 lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 bg-cyber-bgPrimary min-h-screen text-cyber-textPrimary">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
