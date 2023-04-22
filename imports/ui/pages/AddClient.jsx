import React from 'react'
import { Header } from '../components/Header'
import { ClientForm } from '../components/ClientForm'

export const AddClient = () => {
  return (
    <>
      <Header>
        Client header
      </Header>
      <section>
        <ClientForm />
      </section>
    </>
  )
}
