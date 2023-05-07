import { Meteor } from 'meteor/meteor';
import { ClientsCollection } from '/imports/api/ClientsCollection';
import { ReportsCollection } from '../imports/api/ReportsCollection';
import { fetchData } from '../imports/request';

Meteor.methods({
  connectFacebook: ({ _id, userShortLivedAccessToken, userFacebookID}) => {
    const $set = {}
    if (userShortLivedAccessToken) {
      $set.userShortLivedAccessToken = userShortLivedAccessToken;
    }
    if (userFacebookID) {
      $set.userFacebookID = userFacebookID;
    }

    return ClientsCollection.update({_id}, {$set})
  },

  fetchPageFansLast30Days: ({ userFacebookID, userShortLivedAccessToken, clientID}) => {
    const APP_ID = "1614287289038506"
    const APP_SECRETE = "5238925e788feb4f2898fa714ffa0e33"
    const GRAPH_API_VERSION = "v16.0"

    const fetchDataAsync = async () => {
      const userLongLivedAccessTokenUrl = `https://graph.facebook.com/${GRAPH_API_VERSION}/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRETE}&fb_exchange_token=${userShortLivedAccessToken}`;
      const firstResult = await fetchData(userLongLivedAccessTokenUrl)
      const userLongLivedAccessToken = firstResult.access_token
      const pageLongLivedAccessTokenUrl = `https://graph.facebook.com/${GRAPH_API_VERSION}/${userFacebookID}/accounts?access_token=${userLongLivedAccessToken}`
      const secondResult = await fetchData(pageLongLivedAccessTokenUrl)
      const pageID = secondResult.data[0].id
      const pageLongLivedAccessToken = secondResult.data[0].access_token
      console.log(pageLongLivedAccessToken)
      const pageFansUrl = `https://graph.facebook.com/v12.0/${pageID}/insights/page_fans?access_token=${pageLongLivedAccessToken}&since=-30%20days&until=-1%20days`;

      const response = await fetchData(pageFansUrl);
      console.log('pageResponsebefore: ', response)
      // let response = {
      //   "data": [
      //     {
      //       "name": "page_fans",
      //       "period": "day",
      //       "values": [
      //         {
      //           "value": 5000,
      //           "end_time": "2023-05-01T07:00:00+0000"
      //         },
      //         {
      //           "value": 5020,
      //           "end_time": "2023-05-02T07:00:00+0000"
      //         },
      //         {
      //           "value": 5045,
      //           "end_time": "2023-05-03T07:00:00+0000"
      //         }
      //       ],
      //       "title": "Lifetime Total Likes",
      //       "description": "Lifetime The total number of people who have liked your Page. (Unique Users)"
      //     }
      //   ],
      //   "paging": {
      //     "previous": "https://graph.facebook.com/v13.0/{page-id}/insights/page_fans?since=-30days&until=2023-05-03&access_token={access-token}&limit=25&__paging_token=...",
      //     "next": "https://graph.facebook.com/v13.0/{page-id}/insights/page_fans?since=-30days&until=2023-05-01&access_token={access-token}&limit=25&__paging_token=..."
      //   }
      // }

      const data = response.data[0];
  
      ReportsCollection.insert({
        clientID,
        name: data.name,
        period: data.period,
        values: data.values,
        title: data.title,
        description: data.description,
        createdAt: new Date()
      });
    };

    fetchDataAsync();
    console.log('fetch pageFans called')
  },
});


const insertClient = (client) => ClientsCollection.insert({...client, createdAt: new Date()});

Meteor.startup(() => {
  // ReportsCollection.remove({})

  if (ClientsCollection.find().count() === 0) {
    [
      {
        companyName: 'Demo Client',
        clientWebsite: 'https://www.democlient.com/',
        clientManager: 'Meshack',
        selectCurrency: 'United States - USD',
        clientFolders: null,
        clientTimezone: 'CET',
        clientFirstName: '',
      },
      // {
      //   companyName: 'Tesla',
      //   clientWebsite: 'https://www.tesla.com/',
      //   clientManager: 'Meshack',
      //   selectCurrency: 'United States - USD',
      //   clientFolders: null,
      //   clientTimezone: 'CET',
      //   clientFirstName: '',
      // },
      // {
      //   companyName: 'Amazon',
      //   clientWebsite: 'https://www.amazon.com/',
      //   clientManager: 'Meshack',
      //   selectCurrency: 'United States - USD',
      //   clientFolders: null,
      //   clientTimezone: 'CET',
      //   clientFirstName: '',
      // },
      // {
      //   companyName: 'Walmart',
      //   clientWebsite: 'https://www.walmart.com/',
      //   clientManager: 'Meshack',
      //   selectCurrency: 'United States - USD',
      //   clientFolders: null,
      //   clientTimezone: 'CET',
      //   clientFirstName: '',
      // }
    ].forEach(insertClient)
  }

  Meteor.publish("clients", function () {
    return ClientsCollection.find();
  });

  Meteor.publish('reports', function() {
    return ReportsCollection.find();
  });
});

