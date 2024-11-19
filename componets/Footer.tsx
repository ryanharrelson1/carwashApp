import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primarycolor py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primarycolor-accent">
              About Car Haven
            </h3>
            <p className="text-lg text-gray-200">
              At Car Haven, we provide top-tier car detailing services that will
              leave your vehicle looking brand new. From hand washes to waxing,
              we have you covered with our premium services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primarycolor-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-lg hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-lg hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-lg hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-lg hover:text-gray-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primarycolor-accent">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-lg">123 Car Haven Rd, City, State 12345</li>
              <li className="text-lg">Phone: (123) 456-7890</li>
              <li className="text-lg">Email: contact@carhaven.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primarycolor-accent">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                className="text-lg hover:text-gray-300"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                className="text-lg hover:text-gray-300"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                className="text-lg hover:text-gray-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Car Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
