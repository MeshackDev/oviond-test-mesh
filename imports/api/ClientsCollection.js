import { Mongo } from 'meteor/mongo';

export const ClientsCollection = new Mongo.Collection('clients');

Meteor.methods({
  removeClient: ({ _id }) => {
    console.log('remove called');
    ClientsCollection.remove({ _id });
  },

  addClient: (client) => {
    ClientsCollection.insert({ ...client, createdAt: new Date() });
  }
});
