import { Meteor } from 'meteor/meteor';
import { ClientsCollection } from '/imports/api/ClientsCollection';

const insertClient = (client) => ClientsCollection.insert({...client, createdAt: new Date()});

Meteor.startup(() => {
  if (ClientsCollection.find().count() === 0) {
    [
      {
        companyName: 'Apple',
        clientWebsite: 'https://www.apple.com/',
        clientManager: 'Meshack',
        selectCurrency: 'United States - USD',
        clientFolders: null,
        clientTimezone: 'CET',
        clientFirstName: '',
      },
      {
        companyName: 'Tesla',
        clientWebsite: 'https://www.tesla.com/',
        clientManager: 'Meshack',
        selectCurrency: 'United States - USD',
        clientFolders: null,
        clientTimezone: 'CET',
        clientFirstName: '',
      },
      {
        companyName: 'Amazon',
        clientWebsite: 'https://www.amazon.com/',
        clientManager: 'Meshack',
        selectCurrency: 'United States - USD',
        clientFolders: null,
        clientTimezone: 'CET',
        clientFirstName: '',
      },
      {
        companyName: 'Walmart',
        clientWebsite: 'https://www.walmart.com/',
        clientManager: 'Meshack',
        selectCurrency: 'United States - USD',
        clientFolders: null,
        clientTimezone: 'CET',
        clientFirstName: '',
      }
    ].forEach(insertClient)
  }

  Meteor.publish("clients", function () {
    return ClientsCollection.find();
  });
});