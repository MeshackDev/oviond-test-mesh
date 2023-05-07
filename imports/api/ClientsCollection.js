import { Mongo } from 'meteor/mongo';

export const ClientsCollection = new Mongo.Collection('clients');

Meteor.methods({
  removeClient: ({ _id }) => {
    console.log('remove called');
    return ClientsCollection.remove({ _id });
  },

  addClient: (client) => {
    return ClientsCollection.insert({ ...client, createdAt: new Date() });
  },

  editClient: ({ _id, newClient}) => {
    const $set = {...newClient}
    console.log('edit cleint called')
    return ClientsCollection.update({_id}, {$set});
  },
});
