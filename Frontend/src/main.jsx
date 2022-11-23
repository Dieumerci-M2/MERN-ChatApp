import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ChatProvider from './Context/Context'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <ChatProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </ChatProvider>
)
