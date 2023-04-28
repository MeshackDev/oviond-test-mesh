import React, { useState } from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { fetchData } from '../../request';

export const FacebookConnect = () => {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <LoginSocialFacebook
      appId='1381657259326106'
      onResolve={(response) => {
        const URL = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=1381657259326106&client_secret=60a7e8fc92162bbe19f0f0eb553ab083&fb_exchange_token=${response.data.accessToken}`
        const fetchDataAsync = async () => {
          const result = await fetchData(URL);
          setAccessToken(result.access_token);
          console.log(result.access_token);
        };
    
        fetchDataAsync();
      }}
      onReject={(reject) => {
        console.log(reject)
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
}
