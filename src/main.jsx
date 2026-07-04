import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Import all styles
import './styles/index.css'
import './styles/App.css'
import './styles/collective.css'
import './styles/alt.css'
import './styles/alt2.css'
import './styles/global.css' // We'll move styles.css here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
