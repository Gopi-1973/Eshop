import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/category/Category.jsx'
import Services from './components/Services/Services.jsx'
import Banner from './components/Banner/Banner.jsx'
import headphone from './assets/hero/image1.png'
import Products from './components/Products/Products.jsx'
import smartwatch2 from './assets/category/smartwatch.png'
import Blogs from './components/Blogs/Blogs.jsx'
import Partners from './components/Partners/Partners.jsx'
import Footer from './components/Footer/Footer.jsx'
import Popup from './components/Popup/Popup.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Myroute from './Myroute.jsx'

const BannerData={
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis?",
  bgColor: '#F42C37',
}
const BannerData2={
  discount: "30% Off",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, molestias!",
  bgColor:"#2dcc6f",
}


const App = () => {
  const[orderPopup,setOrderPopup]=useState(false)

  const HandleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }
  useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing: "ease-in-sine",
        delay:100,
        offset:100,
       })
       AOS.refresh()
  },[])
  return (
    <div className='bg-gray-300/90'>
     
      <Myroute/>
    </div>
  )
}

export default App