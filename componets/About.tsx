import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className=" py-20 px-5 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primarycolor mb-8">
          Welcome to <span className="text-secondarycolor">Car Haven</span>
        </h2>
        <p className="text-lg  mb-6">
          At Car Haven, we believe your vehicle deserves more than just a
          regular wash. We offer premium, hand-crafted detailing services
          tailored to meet the highest standards of care and precision. Whether
          it's a quick exterior wash or a full-service detail, Car Haven is
          dedicated to providing a luxurious, high-end experience for every
          customer.
        </p>
        <div className="flex justify-center items-center gap-10 mt-10">
          <Button className="bg-secondarycolor rounded-lg px-6 py-3 text-white hover:bg-gray-800 font-bold transition-all">
            Learn More
          </Button>
          <Button className="bg-transparent border-2 border-primarycolor rounded-lg px-6 py-3 text-primarycolor hover:bg-primarycolor hover:text-white font-bold transition-all">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
