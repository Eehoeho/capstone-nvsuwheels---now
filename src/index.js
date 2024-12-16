import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./nav.css"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import UserReducer from './UserReducer';

const store = configureStore({
  reducer:{
    users: UserReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

