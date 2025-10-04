import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from '../../assets/Blogs/blog-1.jpg'
import Img2 from '../../assets/Blogs/blog-2.jpg'
import Img3 from '../../assets/Blogs/blog-3.jpg'

const  BlogData=[,
   {
     title: "How to choose perfect smartwatch",
     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit officia ducimus ratione placeat repellendus, at porro eius hic aperiam laborum.",
     published:"Jan 20,2024 by Dilshad",
     image: Img1,
     aosDelay:"0",
   },
   {
     title: "How to choose perfect gadget",
     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit officia ducimus ratione placeat repellendus, at porro eius hic aperiam laborum.",
     published:"Jan 20,2024 by Satya",
     image: Img2,
     aosDelay:"200",
   },
   {
     title: "How to choose perfect VR headset",
     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit officia ducimus ratione placeat repellendus, at porro eius hic aperiam laborum.",
     published:"Jan 20,2024 by Arya",
     image: Img3,
     aosDelay:"400",
   },
]
const Blogs = () => {
  return (
    <div className='container mx-auto mt-8'>
     {/* Header section */}
     <Heading title="Recent News" subtitle="Explore our News"/>
     {/* Blog section */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-6">
      {/* Blog card */}
      {
        BlogData.map((data)=>(
            <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title} 
              className=' bg-gray-800 rounded-2xl w-full  mx-auto mb-8 '  >
                {/* image section */}
                <div className='overflow-hidden'>
                    <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 '/>
                </div>
                {/* content section */}
                <div className='space-y-2 text-center p-2'>
                <p className='text-gray-500 text-sm '>{data.published}</p>
                <p className='font-bold line-clamp-1 text-gray-400'>{data.title}</p>
                <p className='line-clamp-3 text-sm text-gray-500 '>{data.subtitle}</p>
                </div>
            </div>
        ))
      }
     </div>
    </div>
  )
}

export default Blogs