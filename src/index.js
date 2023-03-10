/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reducers';
import './normalize.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
