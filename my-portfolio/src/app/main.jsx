import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PortfolioDataProvider } from '../context/PortfolioDataContext'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortfolioDataProvider>
  </React.StrictMode>,
)
