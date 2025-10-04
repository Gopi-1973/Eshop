import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/hero/image1.png";
import image2 from "../../assets/hero/image2.png";
import image3 from "../../assets/hero/image3.png";

const HeroData = [
  {
    id: 1,
    img: image1,
    subtitle: "Beats Sale",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Sale",
    title: "Wireless",
    title2: "Macbook",
  },
  {
    id: 3,
    img: image3,
    subtitle: "Beats Sale",
    title: "Wireless",
    title2: "Virtual",
  },
];

const Hero = ({ HandleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    CSSKeyframesRule: "ease in out",
    pauseOnHover: false,
    pauseONFocus: true,
  };
  return (
    <div className="container bg-gray-200 md:w-[1000px] h-[600px] md:h-[450px] rounded-2xl  mx-auto mt-8">
      <div className="overflow-hidden rounded-3xl flex justify-center items-center">
        {/* hero section */}
        <div className="container  pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-5 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-3xl text-gray-600 font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl text-gray-600  font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="
                    text-5xl uppercase text-gray-600  font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div>
                      <button className="bg-orange-500 text-white px-5 py-3 rounded-lg handler={HandleOrderPopup}">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="order-1 sm:order-2">
                      <div 
                        data-aos="zoom-in"
                        data-aos-once="true"
                        className="relative z-10"    >
                        <img
                          src={data.img}
                          alt=""
                          className="w-[300px] h-[300px] sm:h-[450px] object-contain mx-auto relative z-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
