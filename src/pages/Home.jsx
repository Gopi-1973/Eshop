import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/category/Category";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";

// Example banner data
import headphone from "../assets/hero/image1.png";
import smartwatch2 from "../assets/category/smartwatch.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Get your perfect headphones with style and comfort.",
  bgColor: "#F42C37",
};

const BannerData2 = {
  discount: "25% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Flash Deal",
  title4: "Grab smartwatches at special discount prices.",
  bgColor: "#2dcc6f",
};

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <Hero />

      {/* Categories */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
        <Category />
      </section>

      {/* Banner 1 */}
      <Banner data={BannerData} />

      {/* Products */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <Products />
      </section>

      {/* Banner 2 */}
      <Banner data={BannerData2} />

      {/* Services */}
      <section className="my-12 px-4">
        <Services />
      </section>

      {/* Blog Section */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Latest News & Blogs</h2>
        <Blogs />
      </section>

      {/* Partners */}
      <section className="my-12 px-4">
        <Partners />
      </section>
    </div>
  );
};

export default Home;
