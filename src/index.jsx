import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {BrowserRouter} from "react-router-dom"
import {store,Storage} from "./redux/store";
import App from './App';
import "./index.css"


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={false} persistor={Storage}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </PersistGate>
      </Provider>

  </React.StrictMode>
);

