import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//components
import { RootLayout } from './layouts/RootLayout';

//pages
import { Home } from './pages/Home';
import { AddClient } from './pages/AddClient';
import { Integrations } from './pages/Integrations';
import { Projects } from './pages/Projects';
import { Settings } from './pages/Settings';
import { Project } from './pages/Project';

//component
import { PrivacyPolicy } from './components/PrivacyPolicy';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/add/client" element={<AddClient />} />
      <Route path="/:clientID/integrations" element={<Integrations />} />
      <Route path="/:clientID/projects" element={<Projects />} />
      <Route path="/:clientID/project/:projectID" element={<Project />} />
      <Route path="/:clientID/client/settings" element={<Settings />} />
      <Route path="/privacy_policy" element={<PrivacyPolicy />} />
    </Route>
  )
)

export const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);
