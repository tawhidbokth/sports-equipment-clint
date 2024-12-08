import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/Layout/Layout';
import Home from './assets/Components/Home';
import AllEquipment from './Pages/AllEquipment';
import AddEquipment from './Pages/AddEquipment';
import MyEquipment from './Pages/MyEquipment';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DetailPage from './Pages/DetailPage';
import UpdateEquipment from './Pages/UpdateEquipment';
import AuthProvider from './Pages/Provider/Provider';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/equipment?limit=6'),
      },

      {
        path: 'allequipment',
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch('http://localhost:5000/equipment'),
      },

      {
        path: 'equipment',
        element: <AddEquipment></AddEquipment>,
      },

      {
        path: 'myequipment',
        element: <MyEquipment></MyEquipment>,
        loader: () => fetch('http://localhost:5000/equipment'),
      },
      {
        path: 'equipment/:id',
        element: <DetailPage> </DetailPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },

      {
        path: '/myequipment/updateequipment/:id',
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>
);
