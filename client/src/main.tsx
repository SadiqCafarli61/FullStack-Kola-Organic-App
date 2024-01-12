import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './redux/store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>


  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
