// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './App.css'; // Import your CSS file

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
