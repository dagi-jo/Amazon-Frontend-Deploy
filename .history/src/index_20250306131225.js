import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider';
import {} from './u'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={} initialstate={}>
          <App />

    </DataProvider>
  </React.StrictMode>
);


