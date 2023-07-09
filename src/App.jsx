import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    document.querySelectorAll("img").forEach((ele) => {
      ele.setAttribute("loading", "lazy");
    });
    document.querySelectorAll("a").forEach((ele) => {
      ele.setAttribute("target", "_blank");
    });
  }, []);
  return (
    <div className="min-h-screen w-full relative font-sans bg-red-600 text-white">
      <Header />
      <Hero />
      <Features />
      <About />
      {/* <Mics /> */}
      <Footer />
    </div>
  );
};

export default App;
