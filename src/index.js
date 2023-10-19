import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { CartStore } from './redux/CartStore';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-m7rbt63cbghnusx8.us.auth0.com"
    clientId="qdARVFyEKJpXMDoiwF5NyNCy6Zg158jk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Provider store={CartStore}>
        <App />
        <Toaster />
      </Provider>
  </Auth0Provider>
);