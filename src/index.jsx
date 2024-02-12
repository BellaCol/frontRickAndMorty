import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import axios from 'axios'
//axios.defaults.baseURL='http://localhost:3001/rickandmorty'
axios.defaults.baseURL='https://frontrickandmorty-production.up.railway.app/'
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);