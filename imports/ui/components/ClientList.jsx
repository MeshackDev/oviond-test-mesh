import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ClientsCollection } from '../../api/ClientsCollection';
import { Client } from './Client';

export const ClientList = () => {
  const clients = useTracker(() => {
    Meteor.subscribe('clients')
    return ClientsCollection.find({}, { sort: { createdAt: -1 }}).fetch()
  });
  console.log(clients)

  return (
    <div>
      <h2>Client List!</h2>
      <ul>
        {clients.map(client => (
          <li key={client._id}>
            <Client client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
};
