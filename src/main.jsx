import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/Layout/Layout';
import Home from './assets/Components/Home';
import AllEquipment from './Pages/AllEquipment';
import AddEquipment from './Pages/AddEquipment';
import MyEquipment from './Pages/MyEquipment';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: 'allequipment',
        element: <AllEquipment></AllEquipment>,
      },

      {
        path: 'addequipment',
        element: <AddEquipment></AddEquipment>,
      },

      {
        path: 'myequipment',
        element: <MyEquipment></MyEquipment>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
