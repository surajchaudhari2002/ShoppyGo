import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shop from './Shop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shop />
  </StrictMode>,
)
