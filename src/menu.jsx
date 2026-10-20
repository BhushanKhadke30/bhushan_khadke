import React from 'react'
import image from './assets/image.png'
import images from './assets/images.jfif'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const Menu = () => {

  const [SrNo, setSrNo] = useState('')
  const [foodname, setfoodname] = useState('')
  const [price, setprice] = useState('')
  const [MenuList, setMenuList] = useState([])
  //extra code
  const [editId, setEditId] = useState(null)
  const [editPrice, setEditPrice] = useState('')


  //extra code
  const [editIdname, setEditIdname] = useState(null)
  const [editname, setEditname] = useState('')

  const fetchMenu = async () => {
    const res = await fetch('http://localhost:3000/api/menu')
    const data = await res.json()
    setMenuList(data)
  }

  const handleAdd = async () => {
    await fetch('http://localhost:3000/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        SrNo: Number(SrNo),
        foodname: foodname,
        price: Number(price)
      })
    })

    setSrNo('')
    setfoodname('')
    setprice('')

    fetchMenu()
  }


  useEffect(() => {
    fetchMenu()
  }, [])

  //extra code
  const handleUpdate = async (id) => {
    await fetch(`http://localhost:3000/api/menu/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: Number(editPrice) })
    })

    setEditId(null)
    setEditPrice('')
    fetchMenu()
  }
  const handleUpdatename = async (id) => {
    await fetch(`http://localhost:3000/api/menu/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foodname: editname })
    })

    setEditIdname(null)
    setEditname('')
    fetchMenu()
  }


  return (
    <>
      <div className='main flex h-screen overflow-hidden'>
        <div className="classone m-5 p-2 h-[calc(100vh-40px)] w-[270px] bg-[#E5E9DD] border rounded-2xl flex flex-col items-center">
          <img src={image} alt="" className='mb-12' />
          <div className="spans flex flex-col items-center gap-5 ">
            <Link to="/"><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Dashboard</span></Link>
            <Link to='/order'><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Orders</span></Link>
            <Link to='/menu'><span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Menu</span></Link>
            <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Table</span>
            <span className='w-[200px] h-[50px] border rounded-2xl bg-[#CACDC5] flex items-center justify-center font-semibold text-[20px] cursor-pointer'>Sales</span>
          </div>
        </div>
        <div className="classtwo flex flex-col m-5 flex-1 min-w-0 h-[calc(100vh-40px)]">
          <div className='upper bg-[#E5E9DD] h-10 w-[300px] border rounded-3xl flex gap-3 items-center p-2'><img src={images} alt="" className='w-4 h-4 bg-[#E5E9DD] mix-blend-multiply' /><input type="search " name="" id="" className='w-[250px] bg-[#E5E9DD] border-none outline-none' /></div>
          <div className="cardbox flex-1 flex flex-col w-full bg-[#E5E9DD] mt-3 p-3 border rounded-2xl  overflow-auto">
            <div className='flex mb-5'>
              <input type="number" value={SrNo} onChange={(e) => setSrNo(e.target.value)} name="name1" id="" className='border border-black h-10 w-[60px] flex justify-center items-center rounded-2xl mr-3 p-2 overflow-y-auto no-scrollbar' />
              <input type="text" value={foodname} onChange={(e) => setfoodname(e.target.value)} name="name2" id="" className='border border-black h-10 w-[600px] flex justify-center items-center rounded-2xl mr-3 p-2 overflow-y-auto no-scrollbar' />
              <input type="number" value={price} onChange={(e) => setprice(e.target.value)} name="name3" id="" className='border border-black h-10 w-[60px] flex justify-center items-center rounded-2xl mr-3 p-2 overflow-y-auto no-scrollbar' />
              <button onClick={handleAdd} className="border border-black h-6 w-16 flex justify-center items-center rounded-2xl mt-2">Add+</button>
            </div>
            <div className='border border-black h-[400px] rounded-2xl p-2 overflow-y-scroll-scroll overflow-x-hidden'>
              {MenuList.map((item) => (
                <div key={item._id} className='w-[100%] h-[40px] p-2 bg-[#CACDC5] border rounded-md flex items-center my-2 justify-between'>
                  <div className='flex gap-3 font-semibold text-[20px]'><span className='w-4'>{item.SrNo}</span><span className='w-2'>-</span> <span>

                    {editIdname === item._id ? (
                      <>
                        <input
                          type="text"
                          value={editname}
                          onChange={(e) => setEditname(e.target.value)}
                          className='w-[400px] border rounded-md mr-2 pl-2 bg-[#cacdc5] border-none outline-none'
                        />
                        <button onClick={() => handleUpdatename(item._id)}>Save</button>
                      </>
                    ) : (
                      <span onClick={() => { setEditIdname(item._id); setEditname(item.foodname) }} className='cursor-pointer'>
                        {item.foodname}
                      </span>
                    )}



                  </span></div>
                  <div>
                    {editId === item._id ? (
                      <>
                        <input
                          type="number"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          className='w-[42px] border rounded-md mr-2'
                        />
                        <button onClick={() => handleUpdate(item._id)}>Save</button>
                      </>
                    ) : (
                      <span onClick={() => { setEditId(item._id); setEditPrice(item.price) }} className='cursor-pointer'>
                        {item.price}
                      </span>
                    )}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu