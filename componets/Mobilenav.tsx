"use client";
import { useState } from "react";

const mobilenav = () => {
  const [isopen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <main className="flex justify-between items-center bg-primarycolor-card p-1">
      <section className="pl-1">
        <img src="/carwash.png" alt="logo" width={40} height={40} />
      </section>
      <section className="">
        <h1 className="font-bold text-text-text2">Car Haven</h1>
      </section>

      <section className="pr-1 hover:text-primarycolor-accent">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </section>

      <section
        className={` fixed z-10 h-screen w-full inset-0 bg-opacity-80 transition-all duration-300 ease-in-out bg-primarycolor-card ${
          isopen ? "block" : "hidden"
        } `}
      >
        <header className="flex justify-between">
          <section className="p-5 flex">
            <img src="/carwash.png" alt="logo" height={50} width={50} />
            <h1 className="mt-4 pl-2 font-bold text-text-text2 text-2xl">
              Car Haven
            </h1>
          </section>
          <section className=" p-5">
            <button onClick={toggleMenu}>
              <div className="bg-primarycolor-card rounded-full p-1 bg-opacity-60 border-primarycolor-accent border-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </section>
        </header>

        <nav className="flex flex-col p-5 gap-10">
          <a className="font-bold text-5xl text-secondarycolors-button ">
            Home
          </a>
          <a className="font-bold text-5xl text-secondarycolors-button ">
            About
          </a>
          <a className="font-bold text-5xl text-secondarycolors-button ">
            Gallery
          </a>
          <a className="font-bold text-5xl text-secondarycolors-button ">
            Contact Us
          </a>
        </nav>
      </section>
    </main>
  );
};

export default mobilenav;
