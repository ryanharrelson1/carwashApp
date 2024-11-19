import React from "react";

const nav = () => {
  return (
    <main className=" flex bg-primarycolor-card rounded-full px-[6px]">
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        Home/
      </section>
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        About/
      </section>
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        Gallery/
      </section>
      <section className=" text-[14px] hover:bg-primarycolor-accent rounded cursor-pointer">
        Contact Us
      </section>
    </main>
  );
};

export default nav;
