import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-orange-700 text-center" />,
    title: "Free Shipping",
    description: "Free Shipping All",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-orange-700" />,
    title: "Safe Money",
    description: "30 days Cash Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-orange-700" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl md:text-5xl text-orange-700" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];
const Services = () => {
  return (
  <div className="container mx-auto my-14 md:my-20">
     <div data-aos="zoom-out" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
      {ServiceData.map((data)=>(
        <div className="flex flex-col items-center sm:flex-row gap-4">
         {data.icon}
         <div>
            <h1 className="lg:text-xl font-bold">{data.title}</h1>
            <h1 className="text-gray-400 text-shadow-amber-500">{data.description}</h1>
         </div>
        </div>
      ))}
     </div>
  </div>
  );
};

export default Services;
