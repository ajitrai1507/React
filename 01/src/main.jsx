import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ajit from './Ajit.jsx'
import Nikhil from './Nikhil.jsx'
import Aman from './Aman.jsx'


createRoot(document.getElementById('root')).render(

  <>
    <App />
    <Ajit />
    <Nikhil />
    <Aman />
      <App />
      <Ajit />
      <Nikhil />
      <Aman />
  </>
  
  
  
)
