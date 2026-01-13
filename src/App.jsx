import "./App.css";
import Navbar from "./compnts/Navbar";
import Home from "./compnts/Home";
import About from "./compnts/About";
import Projects from "./compnts/Projects";
import Contact from "./compnts/Contact";

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed p-4 md:p-2 top-0 left-0 w-full bg-orange-50 z-50 shadow-md">
        <Navbar />
      </div>
      <div className="border-t-2 border-black opacity-10"></div>
      {/* Page Content */}
      <div className="pt-24 p-4 md:p-8 lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 bg-orange-50">
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
