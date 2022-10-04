import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
