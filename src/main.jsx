import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-rose-50'><App /></div>
    
  </StrictMode>,
)
