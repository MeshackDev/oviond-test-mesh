import { Meteor } from 'meteor/meteor';
import { ClientsCollection } from '/imports/api/ClientsCollection';
import { ReportsCollection } from '../imports/api/ReportsCollection';
import { fetchData } from '../imports/request';

Meteor.methods({
  'fetchPageFansLast30Days': function({ userID, userShortLivedAccessToken}) {
    const APP_ID = "1614287289038506"
    const APP_SECRETE = "5238925e788feb4f2898fa714ffa0e33"
    const GRAPH_API_VERSION = "v16.0"

    const fetchDataAsync = async () => {
      const userLongLivedAccessTokenUrl = `https://graph.facebook.com/${GRAPH_API_VERSION}/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRETE}&fb_exchange_token=${userShortLivedAccessToken}`;
      const firstResult = await fetchData(userLongLivedAccessTokenUrl)
      const userLongLivedAccessToken = firstResult.access_token
      const pageLongLivedAccessTokenUrl = `https://graph.facebook.com/${GRAPH_API_VERSION}/${userID}/accounts?access_token=${userLongLivedAccessToken}`
      const secondResult = await fetchData(pageLongLivedAccessTokenUrl)
      const pageID = secondResult.data[0].id
      const pageLongLivedAccessToken = secondResult.data[0].access_token
      console.log(pageLongLivedAccessToken)
      const pageFansUrl = `https://graph.facebook.com/v12.0/${pageID}/insights/page_fans?access_token=${pageLongLivedAccessToken}&since=-30%20days&until=-1%20days`;

      const response = await fetchData(pageFansUrl);
      console.log('pageResponse: ', response)

      // const data = response.data.data[0].values;

      // const reports = data.map((value) => {
      //   return {
      //     date: new Date(value.end_time),
      //     page_fans: value.value,
      //   };
      // });

      // ReportsCollection.insertMany(reports);
    };

    fetchDataAsync();
    console.log('fetch pageFans called')
  },
});


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

