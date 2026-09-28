import React from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Menu from "./menu"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
