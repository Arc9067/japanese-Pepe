import React from "react";
import headerLogo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-2 w-full absolute top-0 z-50">
      <nav className="container flex items-center justify-between">
        <a
          href=""
          className="flex items-center hover:underline hover:decoration-wavy transition  text-4xl font-MAREKA capitalize gap-8"
        >
          <img src={headerLogo} alt="" className="w-[4rem]" />
          japanese pepe
        </a>
        <a
          href=""
          className="hidden md:block font-MAREKA hover:scale-95 transition text-2xl"
        >
          <div className=" pl-px pb-1 bg-indigo-400 rounded-full justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white rounded-full justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-lime-600 rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl  leading-7 tracking-wide">
                  Telegraam
                </div>
              </div>
            </div>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
