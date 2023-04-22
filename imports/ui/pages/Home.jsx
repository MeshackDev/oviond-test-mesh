import React from 'react'

//components
import { ClientList } from '../components/ClientList'
import { ClientForm } from '../components/ClientForm'
import { Header } from '../components/Header'

export const Home = () => {
  return (
    <>
      <Header>
        <span>Logo</span>
        Home header
        <button>
          Add Client
        </button>
      </Header>
      <section>
        <ClientForm />
        <ClientList/>
      </section>
    </>
  )
}
