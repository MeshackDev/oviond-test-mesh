import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//components
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { AddClient } from './pages/AddClient';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/add/client" element={<AddClient />} />
    </Route>
  )
)

export const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);
