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
import PrivateRoute from './Pages/Provider/PrivateRoute';
import ErrorPage from './Pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(
            'https://sports-equipment-server-indol.vercel.app/equipment?limit=6'
          ),
      },

      {
        path: 'allequipment',
        element: <AllEquipment></AllEquipment>,
      },

      {
        path: 'equipment',
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>,
          </PrivateRoute>
        ),
      },

      {
        path: 'myequipment',
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://sports-equipment-server-indol.vercel.app/equipment'),
      },
      {
        path: 'equipment/:id',
        element: (
          <PrivateRoute>
            <DetailPage> </DetailPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sports-equipment-server-indol.vercel.app/equipment/${params.id}`
          ),
      },

      {
        path: '/myequipment/updateequipment/:id',
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sports-equipment-server-indol.vercel.app/equipment/${params.id}`
          ),
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
