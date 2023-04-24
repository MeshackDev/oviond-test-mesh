import { Mongo } from 'meteor/mongo';

export const ClientsCollection = new Mongo.Collection('clients');

Meteor.methods({
  removeClient: ({ clientId }) => {
    console.log('remove called');
    ClientsCollection.remove({ _id: clientId });
    console.log('remove called');
  },

  addClient: (client) => {
    ClientsCollection.insert({ ...client, createdAt: new Date() });
  }
});
