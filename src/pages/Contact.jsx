import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          Have a question or need help? Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="block  text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Our Address</h2>
            <p className="text-gray-600">
              123 Eshop Street, Kathmandu, Nepal
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Email</h2>
            <p className="text-gray-600">support@eshop.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Phone</h2>
            <p className="text-gray-600">+977 123 456 7890</p>
          </div>
        </div>
      </div>

      {/* Optional Map Section */}
      <div className="mt-16">
        <iframe
          title="Eshop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456!2d85.324!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193ab1e2cd45%3A0xabcdef123456!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890"
          className="w-full h-80 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
