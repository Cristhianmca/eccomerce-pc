import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import Slider from "./cristhian/Slider";
import RafaFooter from './Rafael/RafaFooter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <Slider />
    <RafaFooter />

  </React.StrictMode>,
)
