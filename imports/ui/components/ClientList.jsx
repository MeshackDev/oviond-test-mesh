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
    <div className='max-w-7xl mx-auto w-full'>
      <ul className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-6 xl:gap-x-8'>
        {clients.map(client => (
          <li key={client._id}>
            <Client client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
};
