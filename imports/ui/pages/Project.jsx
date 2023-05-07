import React from 'react';
import { Link, useParams } from 'react-router-dom';


//components
import { Header } from '../components/Header';
import { PageFansChart } from '../components/PageFansChart';


export const Project = () => {
  const { clientID } = useParams();

  return (
    <div>
      <Header>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
          <div className='flex items-center'>
            <Link to={"/"} className="flex items-center">
              <img src="/images/favicon.png" className="h-10 w-10" alt="Aveond Logo" />
            </Link>
            <div className='ml-3'>
              <h3>Likes report for the past 30 days</h3>
            </div>
          </div>
        </div>
      </Header>
      <section className='flex justify-center items-start h-full p-8'>
        <PageFansChart clientID={clientID} />
      </section> 
    </div>
  )
}
