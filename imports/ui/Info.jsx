import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ClientsCollection } from '../api/ClientsCollection';
import { Client } from './Client';

export const Info = () => {
  const clients = useTracker(() => {
    Meteor.subscribe('clients')
    return ClientsCollection.find({}).fetch()
  });
  console.log(clients)

  return (
    <div>
      <h2>Learn Meteor!</h2>
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
