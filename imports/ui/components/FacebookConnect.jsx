import React, { useState } from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";


const APP_ID = '1614287289038506'


export const FacebookConnect = () => {
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <LoginSocialFacebook
        appId={APP_ID}
        onResolve={(response) => {
          Meteor.call('fetchPageFansLast30Days', { 
            userID: response.data.userID,
            userShortLivedAccessToken: response.data.accessToken,
           },
           (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log(result);
            }
          });
        }}
        onReject={(reject) => {
          console.log(reject)
        }}
      >
        <FacebookLoginButton />
    </LoginSocialFacebook>
    </div>
  )
}
