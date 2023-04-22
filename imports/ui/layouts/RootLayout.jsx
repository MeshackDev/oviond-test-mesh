import React from "react"

//components
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const RootLayout = () => {
  return (
    <div className='min-h-screen bg-blue-gray-50 flex '>
      <Navbar />
      <main className='flex flex-col'>
        <Outlet />
      </main>
    </div>
  )
}
