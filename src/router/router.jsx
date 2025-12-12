import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../Mainlayout/MainLayout';
import Dashboard from '../Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        // element: <About />,
      },
    ],
  },
]);

export default router;