import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { Home, Character, Signin } from "./pages";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { actionSignIn } from "./actions";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User from APP", currentUser);
      dispatch(actionSignIn(currentUser));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/characters/:characterId" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
