import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navabar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Navabar />
      <App />
    </>
  
)
