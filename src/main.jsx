import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts';
import ErrorPage from './Components/ErrorPage';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import GadgetDetails from './Components/GadgetDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
    {
      path: "/",
      element: <Home></Home>,
        loader: () => fetch('/category.json')
    },
    {
      path:"details/:productId",
      element:<GadgetDetails></GadgetDetails>,
      loader: () => fetch('/gadget.json')
    },
    {
      path: "statistics",
      element: <Statistics></Statistics>
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      loader: () => fetch('/gadget.json'),
    },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>
  </StrictMode>,
)
