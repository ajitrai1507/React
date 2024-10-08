import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Root />,
//         children: [
//             {
//                 path: "",
//                 element: <Home/>
//             },
//             {
//                 path: "about",
//                 element: <About />
//             },
//             {
//                 path:"contact",
//                 element: <Contact />
//             }

//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path='' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='user/:userid' element={<User/>}></Route>
            <Route path='github' element={<Github/>}></Route>
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    
  
)
