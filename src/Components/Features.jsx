import React from "react";
import Token1 from "../assets/token1.svg";
import Token2 from "../assets/token2.svg";
import Fork from "../assets/fork.png";

const Features = () => {
  return (
    <section className="py-14 w-full relative bg-[#F9FFFD] text-red-500">
      <img
        src={Fork}
        alt=""
        className="absolute top-0 right-0 z-10 w-[10rem] md:w-fit"
      />
      <div className="container flex justify-center flex-col gap-16 items-center relative">
        <h1 className="text-6xl md:text-8xl font-MAREKA">features</h1>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 justify-between items-center w-full">
          <article className="bg-white p-10 shadow rounded-xl flex flex-col gap-5">
            <div className="flex w-full items-center capitalize gap-10 font-MAREKA text-4xl">
              <img src={Token1} alt="" className="no" />
              <h1>zero tax</h1>
            </div>
            <p className="text-green-600 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              maiores corporis, blanditiis aut soluta quia dolorem officia neque
              molestias vitae quis assumenda ipsam illo amet aspernatur rem
              magni provident! Veritatis!
            </p>
          </article>
          <article className="bg-white p-10 shadow rounded-xl flex flex-col gap-5">
            <div className="flex w-full items-center capitalize gap-10 font-MAREKA text-4xl">
              <img src={Token2} alt="" className="no" />
              <h1>
                max wallet <span className="font-sans">2%</span>
              </h1>
            </div>
            <p className="text-green-600 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              maiores corporis, blanditiis aut soluta quia dolorem officia neque
              molestias vitae quis assumenda ipsam illo amet aspernatur rem
              magni provident! Veritatis!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
