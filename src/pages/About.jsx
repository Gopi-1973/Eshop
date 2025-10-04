import React from "react";
import AboutImg from "@/assets/category/about.webp";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-700 mb-6">
            About Eshop
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Welcome to Eshop! We are committed to bringing you the best quality
            electronics and gadgets at unbeatable prices. Our mission is to
            provide a seamless shopping experience while keeping you updated
            with the latest tech trends.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            From headphones to smartwatches, we carefully select each product
            to ensure durability, style, and performance. Customer satisfaction
            is at the core of everything we do.
          </p>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-700 transition">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={AboutImg}
            alt="About Eshop"
            className="rounded-full shadow-lg w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>

  
    </div>
  );
};

export default About;
