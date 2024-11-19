import Hero from "@/componets/hero";
import Nav from "@/componets/Nav";
import Mobilenav from "@/componets/Mobilenav";
import Services from "@/componets/Services";
import About from "@/componets/About";
import ContactUs from "@/componets/ContactUs";
import Footer from "@/componets/Footer";

const Page = () => {
  return (
    <main className="flex flex-col flex-1 h-screen">
      <section className="block md:hidden">
        <Mobilenav />
      </section>
      <section className="absolute z-10 right-0 top-5 p-5 md:block hidden">
        <Nav />
      </section>
      <section className="relative z-0 w-full">
        <Hero />
      </section>
      <section className="flex justify-center px-4 py-8 md:py-16">
        <Services />
      </section>
      <section>
        <About />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Page;
