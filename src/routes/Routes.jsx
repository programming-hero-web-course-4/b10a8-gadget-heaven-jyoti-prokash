import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Deshboard from "../pages/Deshboard";
import CategoryCard from "../components/CategoryCard";
import Allproducts from "../components/Allproducts";
import ViewDetails from "../components/ViewDetails";
import AboutUs from "../pages/AboutUs";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../category.json'),
                children: [
                    {
                        path: '/',
                        element: <Allproducts></Allproducts>,
                        loader: () => fetch('../allproduct.json')
                        
                    },
                    {
                        path: '/category/:category',
                        element: <CategoryCard></CategoryCard>,
                        loader: () => fetch('../allproduct.json')
                        
                    },
                   
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/deshboard',
                element: <Deshboard></Deshboard>,
                loader: () => fetch('../allproduct.json'),
                
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>,
                
            },
            {
                path: '/viewDetails/:product_id',
                element: <ViewDetails></ViewDetails>,
                loader: () => fetch('../allproduct.json'),
            },
               
               
        ]

    }
])

export default routes 