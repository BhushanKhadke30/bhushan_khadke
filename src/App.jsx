import React from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Menu from "./menu"
import Orders from "./order"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
