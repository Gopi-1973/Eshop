import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




const FooterLinks = [
  {
    name: "Home",
    link: "/#Home",
  },
  {
    name: "Shop",
    link: "/#shop",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Blogs",
    link: "/#blog",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-orange-600 font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, molestias!
            </p>
            <p className="text-gray-500 py-3 mb-2">Made with love By Ryan</p>
            <a
              href="https://www.youtube.com/shorts/0hvWKorpFvE"
              className="bg-orange-600 text-white py-2 px-4 text-sm rounded-full "
            >
              Visit our Youtube Channel
            </a>
          </div>
          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-10">
            <div className="py-8 px-4">
              <h1 className="text-gray-400 text-xl">Important Links</h1>
              <ul>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-gray-600 text-md">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* 2nd col links */}
            <div className="py-8 px-4">
              <h1 className="text-gray-400 text-xl">Quick Links</h1>
              <ul>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-gray-600 text-md">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Adress */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className=" text-gray-400 text-xl font-semibold text-start mb-3">Address</h1>
              <div className="">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaLocationArrow className="text-gray-400 text-sm " />
                  <div className="text-sm">
                    <p>Kalanki-13</p>
                    <p>Kathmandu,Nepal</p>
                  </div>
                  </div>
                  <div
                    className="flex items-center text-gray-400 gap-4
                "
                  >
                    <BsTelephoneForward className="text-sm"/>

                    <p>9860830252</p>
                  </div>
                  {/* social links */}
                  <div >
                    <a href="#" className="text-lg text-white  flex ml-1 mt-3 gap-3 ">
                       <FaFacebook className="hover:text-orange-400"/>
                       <FaWhatsapp className="hover:text-orange-400"/>
                       <FaTwitter className="hover:text-orange-400"/>
                       <FaLinkedin className="hover:text-orange-400"/>

                    </a>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
