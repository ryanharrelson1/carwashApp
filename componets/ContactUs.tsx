import React from "react";

const ContactUs = () => {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-primarycolor">
          Get in Touch with Car Haven
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-primarycolor-card p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primarycolor-accent">
              Contact Form
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" bg-primarycolor-main w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarycolor"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-primarycolor-main w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarycolor"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="bg-primarycolor-main w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarycolor"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-secondarycolors-button text-white py-3 px-6 rounded-lg w-full hover:bg-gray-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-primarycolor-card p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primarycolor-accent">
              Contact Information
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-primarycolor-accent">
                Address
              </h4>
              <p className="text-text-text2">
                123 Car Haven Rd, City, State 12345
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-primarycolor-accent">
                Phone
              </h4>
              <p className="text-text-text2">(123) 456-7890</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-primarycolor-accent">
                Email
              </h4>
              <p className="text-text-text2">contact@carhaven.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
