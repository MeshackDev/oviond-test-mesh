import React from 'react'

export const Header = ({ children }) => {
  return (
    <header className='h-16 bg-white px-8 flex items-center'>
      {children}
    </header>
  )
}
