import React from 'react'

export const Header = ({ children }) => {
  return (
    <header className='h-16 bg-white px-8 flex items-center border-gray-200 dark:bg-gray-900'>
      {children}
    </header>
  )
}
