import React from 'react'
import { Header } from '../components/Header'
import { ClientForm } from '../components/ClientForm'

export const AddClient = () => {
  return (
    <>
      <Header>
        <h1 className='text-lg leading-6 font-medium text-gray-900'>
          Add New Client
        </h1>
      </Header>
      <section className='flex justify-center items-start h-full p-8 bg-slate-50'>
        <ClientForm />
      </section>
    </>
  )
}
