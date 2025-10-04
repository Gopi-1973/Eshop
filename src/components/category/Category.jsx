import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Image4 from '../../assets/category/gaming.png'
import Image5 from '../../assets/category/vr.png'
import Image6 from '../../assets/category/speaker.png'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container mx-auto'>
       <div data-aos="zoom-out" className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
      {/* 1st col */}
      <div className=' py-10 pl-4 bg-gradient-to-br from-black/80 to-red-500/60 text-white rounded-3xl h-[320px] w-full flex items-end relative'>
        <div>
            <div className='mb-4'>
                <p className='mb-2 text-xl font-semibold'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-3xl xl:text-4xl font-bold opacity-40 mb-2'>Earphone</p>
                <button className='bg-orange-500 px-3 py-1 rounded-full mt-4'>Browse</button>
            </div>
            <img src={Image1} alt="Earphone" className='absolute bottom-15 -right-4 w-[300px] h-[220px] object-contain'/>
        </div>
      </div>
      {/* 2nd col */}
        <div className='py-10 pl-4 bg-gradient-to-br from-black/80 to-yellow-400/90 text-white rounded-3xl h-[320px] w-auto flex items-end relative'>
        <div>
            <div className='mb-4'>
                <p className='mb-2 text-xl font-semibold'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-3xl xl:text-4xl font-bold opacity-40 mb-2'>Gadget</p>
                <button className='bg-gray-300 text-yellow-700 px-3 py-1 rounded-full mt-4'>Browse</button>
            </div>
            <img src={Image2} alt="Watch" className=' absolute bottom-20 -right-10 w-[250px] h-[220px] object-contain'/>
        </div>
      </div>
      {/* 3rd col */}
        <div className='col-span-2 py-10 pl-4 bg-gradient-to-br from-red-500/80 to-red-600/60 text-white rounded-3xl h-[320px] flex items-end relative'>
        <div>
            <div className='mb-4'>
                <p className='mb-2 text-xl font-semibold'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-3xl xl:text-4xl font-bold opacity-40 mb-2'>Laptop</p>
                <button className='bg-gray-500 px-3 py-1 rounded-full mt-4'>Browse</button>
            </div>
            <img src={Image3} alt="Laptop" className='absolute -bottom-1 -right-4 h-[320px] md:w-[380px] w-[200px] object-contain'/>
        </div>
      </div>
      {/* 4th col */}
        <div className='col-span-2 py-10 pl-4 bg-gradient-to-br from-gray-300/80 to-gray-400/90 text-white rounded-3xl h-[320px] w-full flex items-end relative'>
        <div>
            <div className='mb-4'>
                <p className='mb-2 text-xl font-semibold '>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-3xl xl:text-4xl text-gray-600 font-bold opacity-40 mb-2'>Video Game</p>
                <button className='bg-blue-400 px-3 py-1 rounded-full mt-4'>Browse</button>
            </div>
            <img src={Image4} alt="Gaming" className='absolute md:bottom-10 right-5 bottom-38 md:w-[250px] w-[150px]  object-contain'/>
        </div>
      </div>
      {/* 5th col */}
       <div className='py-10 pl-4 bg-gradient-to-br from-black/80 to-green-400/70 text-white rounded-3xl h-[320px] w-full flex items-end relative'>
        <div>
            <div className='mb-4'>
                <p className='mb-2 text-xl font-semibold'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-3xl xl:text-4xl font-bold opacity-40 mb-2'>Vr</p>
                <button className='bg-green-400 text-white-700 px-3 py-1 rounded-full mt-4'>Browse</button>
            </div>
            <img src={Image5} alt="" className=' absolute md:bottom-26 bottom-50 -right-0 md:w-[200px] w-[120px] h-auto object-contain'/>
        </div>
      </div>
      {/* 6th col */}
       <div className='py-10 pl-4 bg-gradient-to-br from-black/40 to-blue-500/80 text-white rounded-3xl h-[320px] w-full flex items-end relative'>
        <div>
            <div className='mb-4'>
                <p className='mb-2 text-xl font-semibold'>Enjoy</p>
                <p className='text-2xl font-semibold mb-2'>With</p>
                <p className='text-3xl xl:text-4xl font-bold opacity-40 mb-2'>Speaker</p>
                <button className='bg-gray-300 text-gray-800 px-3 py-1 rounded-full mt-4'>Browse</button>
            </div>
            <img src={Image6} alt="Speaker" className='absolute md:bottom-26 right-1 h-auto  md:w-[180px] w-[100px] bottom-56 object-contain'/>
        </div>
      </div>
       </div>
        </div>
    </div>
  )
}

export default Category