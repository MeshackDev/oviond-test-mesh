import React, { useState } from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { Button } from 'flowbite-react';
import { useParams } from 'react-router-dom';


const APP_ID = '1614287289038506'


export const FacebookConnect = () => {
  const [connected, setConnected] = useState(false);
  const { clientID } = useParams();
  console.log('clientID',clientID)

  // const handleClick = () => {
  //   Meteor.call(
  //     'connectFacebook',
  //     {
  //       _id: clientID,
  //       userShortLivedAccessToken: 12345,
  //       userFacebookID: 6789,
  //     },
  //     (error, result) => {
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         console.log("result",result);
  //       }
  //     }
  //   )

  //   setConnected(true)
  // }

  return (
    <div>
      {connected ? (
        <div>
          <div>
            <button type="button" className="block border-0 rounded-md shadow-md text-white cursor-pointer text-lg m-5 w-60 overflow-hidden px-10 select-none h-12 bg-blue-800">
              <div className="items-center flex h-full">
                <div className='"flex justify-center min-w-26"'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 90 90"><g><path d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z" fill="#FFFFFF"></path></g></svg>
                </div>
                <div className="w-10">
                </div>
                <div className="text-left w-full text-lime-400">
                  Connected
                </div>
              </div>
            </button>
          </div>
        </div>

      ):(
        <div>
          <LoginSocialFacebook
            appId={APP_ID}
            onResolve={(response) => {
              if (response.data.accessToken) {
                Meteor.call(
                  'connectFacebook',
                  {
                    _id: clientID,
                    userShortLivedAccessToken: response.data.accessToken,
                    userFacebookID: response.data.userID,
                  },
                  (error, result) => {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log(result);
                    }
                  }
                )
                setConnected(true)
              } else {
                setConnected(false)
              }
              
            }}
            onReject={(reject) => {
              console.log(reject)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
              {/* <Button onClick={handleClick}>Fetch</Button> */}
        </div>
        
      )}
    </div>
  )
}
