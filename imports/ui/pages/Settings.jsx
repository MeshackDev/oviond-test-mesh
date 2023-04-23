import React from 'react'
import { Header } from '../components/Header'

export const Settings = () => {

  const handleDelete = (clientId) => {
    Meteor.call('removeClient', { clientId });
  }

  return (
    <div>
      <Header>
        Settings header
      </Header>
      <button onClick={() => handleDelete(client._id)}>Delete Client</button>
    </div>
  )
}
