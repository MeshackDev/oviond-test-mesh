import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ClientsCollection } from '../../api/ClientsCollection';


export const ClientForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { clientID } = useParams();

  const client = useTracker(() => {
    Meteor.subscribe('clients')
    return ClientsCollection.find({_id: clientID}).fetch()[0]
  });

  console.log(client)

  const [companyName, setCompanyName] = useState(client ? client.companyName : "");
  const [clientWebsite, setClientWebsite] = useState("");
  const [clientManager, setClientManager] = useState("");
  const [selectCurrency, setSelectCurrency] = useState('US');
  const [clientFolders, setClientFolders] = useState("");
  const [clientTimezone, setClientTimezone] = useState('CET');
  const [clientFirstName, setClientFirstName] = useState("");


  const handleSubmit = (e) => {
  
    e.preventDefault();

    const newClient = {
      companyName,
      clientWebsite,
      clientManager,
      selectCurrency,
      clientFolders,
      clientTimezone,
      clientFirstName,
    };

    Meteor.call('addClient', newClient);
    navigate("/");
  }

  return (    
  <div className="p-6 flex-1 max-w-3xl sm:p-6 shadow sm:rounded-md bg-white" onSubmit={handleSubmit}>
    <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Company Name</label>
                <input value={companyName} onChange={e => setCompanyName(e.target.value)} type="text" id="company_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Website</label>
                <input value={clientWebsite} onChange={e => setClientWebsite(e.target.value)} type="url" id="website" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
                <label htmlFor="manager" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Manager</label>
                <input value={clientManager} onChange={e => setClientManager(e.target.value)} type="text" id="manager" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Currency</label>
              <select id="currency" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectCurrency} onChange={e => setSelectCurrency(e.target.value)}>
                <option value="US" defaultValue>United States - USD</option>
                <option value="GB">Great Britain - GBP</option>
                <option value="AU">Austraila - AUD</option>
                <option value="CA">Canada - CAD</option>
                <option value="NZ">New Zealand - NZD</option>
                <option value="SA">South Africa - ZAR</option>
                <option value="EU">Europe - EUR</option>
                <option value="JP">Japan - JPY</option>
              </select>
            </div>
            <div>
              <label htmlFor="folders" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Folders</label>
              <select value={clientFolders} onChange={e => setClientFolders(e.target.value)} id="folders" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue disabled>Choose Folders</option>
              </select>
            </div>
            <div>
              <label htmlFor="timezone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Timezone</label>
              <select value={clientTimezone} onChange={e => setClientTimezone(e.target.value)} id="timezone" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="CE" defaultValue>CET</option>
              </select>
            </div>
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client First Name</label>
                <input value={clientFirstName} onChange={e => setClientFirstName(e.target.value)} type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
        </div>

        {pathname === '/add/client' ? (
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Client</button>
        ): (
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        )}
    </form>
  </div>
  );
}
