import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreProvider from './store/store-provider';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
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
