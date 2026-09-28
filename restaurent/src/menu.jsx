import React from 'react'
import image from './assets/image.png'
import images from './assets/images.jfif'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='main flex'>
      <div className="classone m-5 p-2 h-[600px] w-[270px] bg-[#E5E9DD] border rounded-2xl flex flex-col items-center">
        <img src={image} alt="" className='mb-12' />
        <div className="spans flex flex-col items-center gap-5 ">
          <Link to="/"><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Dashboard</span></Link>
          <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Orders</span>
          <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Menu</span>
          <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Table</span>
          <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Sales</span>
        </div>
      </div>
      <div className="classtwo flex flex-col m-5">
        <div className='upper bg-[#E5E9DD] h-10 w-[300px] border rounded-3xl flex gap-3 items-center p-2'><img src={images} alt="" className='w-4 h-4 bg-[#E5E9DD] mix-blend-multiply'/><input type="search " name="" id="" className='w-[250px] bg-[#E5E9DD] border-none outline-none' /></div>
        <div className="cardbox h-[545px] w-[1050px] bg-[#E5E9DD] mt-3 p-3 border rounded-2xl flex">
          dsfdfdsfadsf
        </div>
      </div>
    </div>
  )
}

export default Menu