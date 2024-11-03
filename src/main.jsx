import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts';
import ErrorPage from './Components/ErrorPage';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
    {
      path: "/",
      element: <Home></Home>
      },
    {
      path: "statistics",
      element: <Statistics></Statistics>
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>
    },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
