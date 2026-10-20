import React from 'react'
import image from './assets/image.png'
import images from './assets/images.jfif'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [menuList, setMenuList] = useState([])
  const [cart, setCart] = useState([])

  const fetchMenu = async () => {
    const res = await fetch('http://localhost:3000/api/menu')
    const data = await res.json()
    setMenuList(data)
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  const addToCart = (item) => {
    const existing = cart.find((c) => c._id === item._id)
    if (existing) {
      const updated = cart.map((c) =>
        c._id === item._id ? { ...c, qty: c.qty + 1 } : c
      )
      setCart(updated)
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  const increaseQty = (id) => {
    const updated = cart.map((c) =>
      c._id === id ? { ...c, qty: c.qty + 1 } : c
    )
    setCart(updated)
  }

  const decreaseQty = (id) => {
    const updated = cart
      .map((c) => (c._id === id ? { ...c, qty: c.qty - 1 } : c))
      .filter((c) => c.qty > 0)
    setCart(updated)
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className='main flex h-screen overflow-hidden'>
      <div className="classone m-5 p-2 h-[calc(100vh-40px)] w-[270px] bg-[#E5E9DD] border rounded-2xl flex flex-col items-center">
        <img src={image} alt="" className='mb-12' />
        <div className="spans flex flex-col items-center gap-5">
          <Link to="/"><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Dashboard</span></Link>
          <Link to="/orders"><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Orders</span></Link>
          <Link to="/menu"><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Menu</span></Link>
          <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Table</span>
          <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Sales</span>
        </div>
      </div>

      <div className="classtwo flex m-5 flex-1 min-w-0 h-[calc(100vh-40px)] gap-4">

        {/* Left side - Menu items to pick from */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className='upper bg-[#E5E9DD] h-10 w-[300px] border rounded-3xl flex gap-3 items-center p-2'>
            <img src={images} alt="" className='w-4 h-4 bg-[#E5E9DD] mix-blend-multiply' />
            <input type="search" className='w-[250px] bg-[#E5E9DD] border-none outline-none' />
          </div>

          <div className="flex-1 bg-[#E5E9DD] mt-3 p-3 border rounded-2xl overflow-auto grid grid-cols-3 gap-3 content-start">
            {menuList.map((item) => (
              <div
                key={item._id}
                onClick={() => addToCart(item)}
                className="bg-[#D9D9D9] h-[120px] rounded-2xl flex flex-col justify-between p-3 cursor-pointer hover:bg-[#CACDC5]"
              >
                <span className="font-semibold text-[16px]">{item.foodname}</span>
                <span className="text-[14px]">₹{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Cart */}
        <div className="w-[320px] bg-[#E5E9DD] mt-[52px] p-3 border rounded-2xl flex flex-col">
          <span className="font-semibold text-[20px] mb-3">Current Order</span>

          <div className="flex-1 overflow-auto flex flex-col gap-2">
            {cart.length === 0 && (
              <span className="text-[14px] text-gray-500">No items added yet</span>
            )}

            {cart.map((item) => (
              <div key={item._id} className="bg-[#D9D9D9] rounded-xl p-2 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold">{item.foodname}</span>
                  <span className="text-[12px]">₹{item.price} x {item.qty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item._id)} className="w-6 h-6 bg-[#CACDC5] rounded-full">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item._id)} className="w-6 h-6 bg-[#CACDC5] rounded-full">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-black mt-3 pt-3 flex justify-between font-semibold text-[18px]">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="mt-3 bg-[#CACDC5] h-[45px] rounded-2xl font-semibold">
            Place Order
          </button>
        </div>

      </div>
    </div>
  )
}

export default Orders