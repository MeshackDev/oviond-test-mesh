import React from 'react'
import { useNavigate } from 'react-router-dom'

//components
import { ClientList } from '../components/ClientList'
import { ClientForm } from '../components/ClientForm'
import { Header } from '../components/Header'


export const Home = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/add/client");
  }; 

  return (
    <>
      <Header>
        <div className='flex justify-between w-full items-center'>
          <span>Logo</span>
          Home header
          <button onClick={handleAdd}>
            Add Client
          </button>
        </div>
      </Header>
      <section>
        <ClientForm />
        <ClientList/>
      </section>
    </>
  )
}
