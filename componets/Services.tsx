import React from "react";

const Services = () => {
  return (
    <main className="flex flex-col gap-5 p-5 items-center">
      <h1 className="text-2xl font-bold md:text-3xl">Services</h1>
      <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="bg-primarycolor-card p-5 rounded-xl shadow-md border-2 border-primarycolor-accent">
          <h1 className="font-bold text-2xl mb-2">Exterior Hand Wash</h1>
          <p>
            A thorough hand wash of the vehicle's exterior, including washing
            the body, windows, and wheels to remove dirt, grime, and road
            debris.
          </p>
          <h2 className="font-bold text-2xl text-primarycolor-accent">
            Starting at $50
          </h2>
        </section>

        <section className="bg-primarycolor-card p-5 rounded-xl shadow-md border-2 border-primarycolor-accent">
          <h1 className="font-bold text-2xl mb-2">Interior Detailing</h1>
          <p>
            Deep cleaning of the car's interior, including vacuuming, wiping
            down surfaces, cleaning seats, carpets, and floor mats, as well as
            treating the dashboard and console areas.
          </p>
          <h2 className="font-bold text-2xl text-primarycolor-accent">
            Starting at $150
          </h2>
        </section>

        <section className="bg-primarycolor-card p-5 rounded-xl shadow-md border-2 border-primarycolor-accent">
          <h1 className="font-bold text-2xl mb-2">Waxing and Polishing</h1>
          <p>
            Application of a protective wax coat to the vehicle’s exterior to
            enhance shine, protect the paint from contaminants, and provide
            long-lasting protection.
          </p>
          <h2 className="font-bold text-2xl text-primarycolor-accent">
            Starting at $120
          </h2>
        </section>

        <section className="bg-primarycolor-card p-5 rounded-xl shadow-md border-2 border-primarycolor-accent">
          <h1 className="font-bold text-2xl mb-2">Engine Bay Cleaning</h1>
          <p>
            Cleaning the engine compartment, including degreasing and removing
            dirt and grease to improve the engine's appearance and performance.
          </p>
          <h2 className="font-bold text-2xl text-primarycolor-accent">
            Starting at $95
          </h2>
        </section>
      </div>
    </main>
  );
};

export default Services;
