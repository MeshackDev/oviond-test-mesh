import React from "react"

//components
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const RootLayout = () => {
  return (
    <div className='min-h-screen bg-blue-gray-50 md:flex'>
      <Navbar />
      <main className='flex flex-col flex-1'>
        <Outlet />
      </main>
    </div>
  )
}
