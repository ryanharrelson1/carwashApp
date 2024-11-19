import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Hero = () => {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
      </div>

      {/* Navbar */}
      <section className="absolute right-0 p-5 mr-2 hidden md:block z-10">
        <Nav />
      </section>

      {/* Content Section */}
      <section className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4 md:p-10 bg-opacity-70 bg-black">
        {/* Headline and Paragraph */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Drive Clean. Shine Bright
          </h1>
          <p className="text-white mb-6">
            Experience the ultimate car care with our eco-friendly, fast, and
            convenient car wash services. Your car deserves the best.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="w-full flex justify-center">
          <Button className="bg-secondarycolors-button rounded-lg px-6 py-3 hover:bg-gray-700 font-bold text-white shadow-lg max-w-xs w-full sm:w-auto">
            Book Now
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
