import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider';
import {reducer, initialState} from './Utility/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider value={[state, dispatch]}>
    {/* //  reducer={reducer} initialstate={initialState}> */}
          <App />

    </DataProvider>
  </React.StrictMode>
);


