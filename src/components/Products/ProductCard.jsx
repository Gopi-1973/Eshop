import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ data }) => {
  const{addToCart}=useCart();
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative shadow-2xl p-2 h-[260px]">
              <img
                src={data.img}
                alt=""
                className="h-[160px] w-[220px] object-cover rounded-md bg-gray-100"
              />
              {/* hover button */}
              <div >
                <button  onClick={()=> addToCart(data)}
                   className=" 
                  text-gray-600  text-xl  font-medium
                 group-hover:flex absolute -bottom-22 left-40  -translate-x-1/2 h-full w-full text-center group-hover:back-drop-blur-sm justify-center items-center duration-200 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            <div className="leading-7 mt-2">
              <h2 className="font-semibold text-gray-800">{data.title}</h2>
              <h2 className="font-bold text-gray-700">{data.price}</h2>
            </div>
          </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
