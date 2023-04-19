import React from 'react';
import { Info } from './Info.jsx';
import { ClientForm } from './ClientForm.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ClientForm />
    <Info/>
  </div>
);
