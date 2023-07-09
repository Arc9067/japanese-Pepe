import React from "react";
import Fork from "../assets/fork.png";
import Fork2 from "../assets/fork2.png";

const Mics = () => {
  return (
    <section className="py-14 w-full relative bg-[#F9FFFD] text-red-500">
      <img
        src={Fork2}
        alt=""
        className="absolute top-0 left-0 z-10 w-[5rem] md:w-fit"
      />
      <img
        src={Fork}
        alt=""
        className="absolute top-0 right-0 z-10 w-[5rem] md:w-fit"
      />
      <div className="container flex justify-center flex-col gap-16 items-center relative">
        <h1 className="text-6xl md:text-8xl font-MAREKA capitalize">
          tokenomics
        </h1>

        <div className="grid"></div>
      </div>
    </section>
  );
};

export default Mics;
