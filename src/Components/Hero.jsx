import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-32 relative" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-16">
        <article className="flex flex-col gap-6 items-start">
          <h1 className="text-white text-7xl lg:text-8xl font-MAREKA capitalize">
            welcome to Japenese Pepe
          </h1>
          <p className="text-white text-base font-normal leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            molestiae neque ipsam cumque nisi voluptatum sed tempore ea
            voluptates dignissimos, dolorum omnis! Officia nobis nesciunt ab
            impedit nostrum, ullam ea exercitationem animi blanditiis distinctio
            obcaecati ipsa, laborum doloribus earum.
          </p>
          <a
            href=""
            className=" pl-px pb-1 bg-indigo-400 rounded-full justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white rounded-full justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-yellow-500 rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-MAREKA capitalize leading-7 tracking-wide">
                  join telegram
                </div>
              </div>
            </div>
          </a>
        </article>
        <img src={Logo} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
