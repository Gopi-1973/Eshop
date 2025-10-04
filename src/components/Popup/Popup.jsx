import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black z-50 backdrop-blur-sm">
          <div className="w-[300px] fixed top-1/2 p-4 shadow-md bg-white rounded-md">
            {/* Header section */}
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold me-2 mb-8">Order Now</h1>
              <div>
                <IoMdCloseCircleOutline
                  onClick={() => setOrderPopup(false)}
                  className="text-2xl cursor-pointer absolute top-2 left-5"
                />
              </div>
              {/* Form section */}
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded px-3 py-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full border rounded px-3 py-2 text-sm"
                />

                <button type="submit" className="w-full bg-orange-500 text-white">
                  Order Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
