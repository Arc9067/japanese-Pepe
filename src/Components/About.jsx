import React from "react";
import TokenImg from "../assets/tokenImg.png";

const About = () => {
  return (
    <section className="py-14 w-full relative overflow-hidden" id="about">
      <div className="container flex justify-center flex-col gap-16 items-center relative">
        <h1 className="text-6xl md:text-8xl font-MAREKA capitalize">
          about us
        </h1>

        <article className="w-full p-10 relative bg-white lg:w-9/12 rounded-[20px]">
          <img src={TokenImg} alt="" className="absolute top-0 -left-28" />
          <div className=" text-green-600 text-base font-normal leading-loose z-10">
            Get ready to hop into the hilarious world of "Japanese Pepe Coin:
            The Ethereal Froggy Adventure"! <br />
            his zany crypto project on the Ethereum blockchain introduces a
            mischievous frog with a knack for pranks.
            <br />
            <br /> From spontaneously changing appearances to surprising holders
            with frog-themed emojis, Japanese Pepe keeps everyone laughing. Join
            the global treasure hunt and embrace the ribbitting madness!
          </div>
        </article>
      </div>{" "}
    </section>
  );
};

export default About;
