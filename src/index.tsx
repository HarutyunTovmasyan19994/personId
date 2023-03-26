import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import "./index.css"
import {store,Storage} from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={false} persistor={Storage}>
              <App />
          </PersistGate>
      </Provider>

  </React.StrictMode>
);

