import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/global.css';
import {AppProvider} from "./Hooks/useFetch.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
)
