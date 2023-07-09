import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
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
