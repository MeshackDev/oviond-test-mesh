import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ClientsCollection } from '../../api/ClientsCollection';
import { useTracker } from 'meteor/react-meteor-data';


//components
import { Header } from '../components/Header'
import { ClientForm } from '../components/ClientForm';


export const Settings = () => {
  const { clientID } = useParams();
  const navigate = useNavigate();

  const client = useTracker(() => {
    Meteor.subscribe('clients')
    return ClientsCollection.find({_id: clientID}).fetch()[0]
  });

  const handleDelete = () => {
    Meteor.call('removeClient', { _id: clientID });
    navigate("/");
  }
  
  return (
    <div>
      <Header>
       <div className='flex items-center'>
          <Link to={"/"} className="flex items-center">
            <img src="/images/favicon.png" className="h-10 w-10" alt="Aveond Logo" />
          </Link>
          <div className='ml-3'>
            <h3>Settings</h3>
          </div>
        </div>
      </Header>
      <section className='flex h-max p-8 bg-slate-50 items-start'>
        {client ? (
          <>
            <ClientForm client={client} />
            <button onClick={handleDelete} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-32 ml-10">Delete Client</button>
          </>
        ):(
          "Loading..."
        )}
      </section>
    </div>
  )
}
