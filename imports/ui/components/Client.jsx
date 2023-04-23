import React from 'react'
import { Link } from 'react-router-dom'

export const Client = ({ client }) => {

  return (
      <Link className="relative hover:shadow-lg col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
        <div className='group w-full aspect-w-10 aspect-h-7 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500 overflow-hidden rounded-t-lg flex justify-center items-center'>
          <img className="object-cover pointer-events-none group-hover:opacity-75 rounded-t-lg" src="/images/placeholder.png" alt="" />
        </div>
          <p className="block text-sm font-medium text-gray-900 truncate pointer-events-none p-4 pb-0 text-center">{client.companyName}</p>
          <p className="block text-sm text-gray-500 pointer-events-none p-4 pt-0 truncate text-center">{client.clientWebsite}</p>
      </Link>
  )
}
