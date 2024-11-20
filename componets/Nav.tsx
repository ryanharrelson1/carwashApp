import React from "react";

const nav = () => {
  return (
    <main className=" flex bg-primarycolor-card rounded-full p-1">
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        Home
      </section>
      <div>/</div>
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        About
      </section>
      <div>/</div>
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        Gallery
      </section>
      <div>/</div>
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        Contact Us
      </section>
    </main>
  );
};

export default nav;
