/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkZLRKmi7UNd7BWJN5evsXK_ATXesyb-M",
//   authDomain: "rickmorty-f631f.firebaseapp.com",
//   projectId: "rickmorty-f631f",
//   storageBucket: "rickmorty-f631f.appspot.com",
//   messagingSenderId: "10171710714",
//   appId: "1:10171710714:web:3dc688187c97ac441a1d43",
//   measurementId: "G-M0VEVVRWM6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
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
