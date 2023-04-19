import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ClientsCollection = new Mongo.Collection('clients');

Meteor.methods({
  removeClient: ({ clientId }) => {
    check(clientId, String);
    console.log('Removed');
    ClientsCollection.remove({ _id: clientId });
  },

  addClient: (client) => {
    console.log('Added');
    ClientsCollection.insert({ ...client, createdAt: new Date() });
  }
});