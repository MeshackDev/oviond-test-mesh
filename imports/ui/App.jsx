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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/add/client" element={<AddClient />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
)

export const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);
