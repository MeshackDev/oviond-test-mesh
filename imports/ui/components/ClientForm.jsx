import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const ClientForm = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [clientWebsite, setClientWebsite] = useState("");
  const [clientManager, setClientManager] = useState("");
  const [selectCurrency, setSelectCurrency] = useState('United States - USD');
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
    navigate("/integrations");
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Client Website"
        value={clientWebsite}
        onChange={e => setClientWebsite(e.target.value)}
      />

      <input
        type="text"
        placeholder="Client Manager"
        value={clientManager}
        onChange={e => setClientManager(e.target.value)}
      />

      <input
        type="text"
        placeholder="Select Currency"
        value={selectCurrency}
        onChange={e => setSelectCurrency(e.target.value)}
      />

      <input
        type="text"
        placeholder="Client Folders"
        value={clientFolders}
        onChange={e => setClientFolders(e.target.value)}
      />

      <input
        type="text"
        placeholder="Client Timezone"
        value={clientTimezone}
        onChange={e => setClientTimezone(e.target.value)}
      />

      <input
        type="text"
        placeholder="Client First Name"
        value={clientFirstName}
        onChange={e => setClientFirstName(e.target.value)}
      />

      <button type="submit">Add Client</button>
    </form>
  );
}
