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
          <Button className="relative bg-primarycolor-accent/20 backdrop-blur-lg rounded-lg px-6 py-3 hover:bg-blue-500/30 font-bold text-white shadow-lg shadow-blue-500/30 border border-white/20 max-w-xs w-full sm:w-auto overflow-hidden">
            Book Now
            <span className="absolute inset-0 bg-white/30 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300 transform rotate-12 pointer-events-none blur-md"></span>
            <span className="absolute -top-1/2 left-0 w-full h-full bg-white opacity-10 rounded-full transform rotate-45 translate-x-1/4 translate-y-1/4 pointer-events-none"></span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
