import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkZLRKmi7UNd7BWJN5evsXK_ATXesyb-M",
  authDomain: "rickmorty-f631f.firebaseapp.com",
  projectId: "rickmorty-f631f",
  storageBucket: "rickmorty-f631f.appspot.com",
  messagingSenderId: "10171710714",
  appId: "1:10171710714:web:3dc688187c97ac441a1d43",
  measurementId: "G-M0VEVVRWM6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
