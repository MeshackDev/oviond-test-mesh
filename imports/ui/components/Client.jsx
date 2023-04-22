import React from 'react'

export const Client = ({ client }) => {

  const handleDelete = (clientId) => {
    Meteor.call('removeClient', { clientId });
  }

  return (
    <div>
      {client.companyName}
      <button onClick={() => handleDelete(client._id)}>Delete Client</button>
    </div>
  )
}
