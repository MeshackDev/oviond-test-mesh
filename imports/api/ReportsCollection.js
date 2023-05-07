import { Mongo } from 'meteor/mongo';

export const ReportsCollection = new Mongo.Collection('reports');

Meteor.methods({
  removeProject: ({ _id }) => {
    console.log('remove called');
    return ReportsCollection.remove({ _id });
  },
});