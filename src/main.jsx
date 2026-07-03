import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.jsx'
import AltApp from './app/AltApp.jsx'
import AltApp2 from './app/AltApp2.jsx'
import CollectiveApp from './app/CollectiveApp.jsx'

const path = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/collective' ? <CollectiveApp /> : path === '/alt2' ? <AltApp2 /> : path === '/alt' ? <AltApp /> : <App />}
  </StrictMode>,
)
