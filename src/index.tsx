import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreProvider from './store/store-provider';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import './index.css';

export const ROOT = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(
  ROOT,
);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
);
