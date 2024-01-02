import React from 'react'
import App from "./App.jsx"
import Home from './pages/home.jsx'; // Adjust the path based on the actual location of your components
import Projects from './pages/projects.jsx'; // Adjust the path based on the actual location of your components
import About from './pages/about.jsx'; // Adjust the path based on the actual location of your components
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/About", // same as page file name
    element: <About />, // same as function name in the page file. 
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
