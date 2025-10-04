import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Cart from "../../pages/Cart";
import { useCart } from '../../context/CartContext';



const Navbar = ({ HandleOrderPopup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {cart} =useCart()

  const totalItems = cart.reduce((acc,item)=> acc + item.qty,0);

  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Products",
      link: "/products",
    },
    {
      id: 3,
      name: "About",
      link: "/about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/blogs",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Products",
      link: "/products",
    },
    {
      id: 3,
      name: "About",
      link: "/about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/blogs",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full bg-white shadow-md py-4 px-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div>
          <NavLink
            to="/"
            className="text-red-600 font-semibold text-2xl uppercase"
          >
            Eshop
          </NavLink>
        </div>
        {/* menu items */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8 ">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.link}
                  className="text-lg font-semibold text-gray-600 hover:text-gray-800"
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
            {/* dropdown */}
            <li
              className=" relative flex items-center gap-2 text-gray-600 font-semibold text-lg cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Quick Links</span>
              <span
                className={`transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <FaCaretDown />
              </span>
              {/* dropdown links */}
              {isDropdownOpen && (
                <div
                  className="absolute top-8  w-full z-50 rounded-md bg-white shadow-md
              "
                >
                  <ul className="space-y-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <NavLink
                          to={data.link}
                          className="text-gray-500 inline-block w-full p-2 rounded-md font-semibold"
                        >
                          {data.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* search bar section */}
        <div className=" flex justify-between items-center gap-6">
          <div className=" group hidden sm:block relative">
            <input
              type="text"
              placeholder="search"
              className="bg-gray-100 px-6 rounded p-2 "
            />
            <FaMagnifyingGlass className=" text-xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          {/* order button section */}
          <button onClick={HandleOrderPopup}>
            <NavLink to="/cart" className="relative p-2">
              <FaCartShopping className=" text-xl text-gray-700 hover:text-red-600"/>
              {totalItems >0 && (
               <div className="w-4 h-4 text-white text-xs bg-red-500 rounded-full flex  justify-center items-cent er absolute top-5 left-2">
                {totalItems}
              </div>
              )}
             
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
