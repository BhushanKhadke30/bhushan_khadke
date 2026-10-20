import React from 'react'
import Navbar from './components/navbar'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const handeladd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    console.log(todos)
  }
  const handeledit = () => {

  }
  const handeldelete = (e, id) => {
    let newTodos = todos.filter(item =>{
       return item.id!==id
    })
    settodos(newTodos)
  }
  const handelchange = (e) => {
    settodo(e.target.value)
  }

  const handelcheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)

  }

  return (

    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold my-5'>Add a Todo</h2>
          <input onChange={handelchange} value={todo} type="text" className='w-80' />
          <button onClick={handeladd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
         {todos.length ===0 && <div className='m-5'>No Todos To Display.....</div>}
          {todos.map(item => {


            return <div key={item.id} className="todo flex justify-between w-1/2 my-2">
              <input name={item.id} type="checkbox" onChange={handelcheck} value={item.isCompleted} id=""  className='w-[2%] mr-1'/>
              <div className={`${item.isCompleted ? "line-through" : ""} w-[68%] `}>{item.todo}</div>
              <div className="buttons w-[30%]">
                <button onClick={handeledit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                <button onClick={(e) => { handeldelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
