import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/products/p-1.jpg"
import Img2 from "../../assets/products/p-2.jpg"
import Img3 from "../../assets/products/p-3.png"
import Img4 from "../../assets/products/p-4.png"
import Img5 from "../../assets/products/p-5.png"
import Img6 from "../../assets/products/p-6.png"
import Img7 from "../../assets/products/p-7.png"
import Img8 from "../../assets/products/p-8.png"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Smart watch",
    price: "920",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Earphone",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Video games",
    price: "520",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Speaker",
    price: "220",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Laptop",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
   {
    id: 8,
    img: Img8,
    title: "Watch",
    price: "220",
    aosDelay: "0",
  },
 
]

// const ProductsData2 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//     aosDelay: "200",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//     aosDelay: "0",
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "Boat Headphone",
//     price: "120",
//     aosDelay: "0",
//   },
//   {
//     id: 6,
//     img: Img7,
//     title: "Rocky Mountain",
//     price: "420",
//     aosDelay: "200",
//   },
//   {
//     id: 7,
//     img: Img9,
//     title: "Goggles",
//     price: "320",
//     aosDelay: "400",
//   },
 
// ]

const Products = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <div >
       <ProductCard data ={ProductsData}/>
       {/* <ProductCard data ={ProductsData2}/> */}
       </div>
      </div>
    </div>
  );
};

export default Products;
