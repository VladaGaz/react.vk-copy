import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesComponent from "./components/routes/Routes";

import { initializeApp } from "firebase/app";
import { AuthProvider } from "./components/providers/AuthProvider";

const firebaseConfig = {
  apiKey: "AIzaSyDjcLoJDUlPwLndu8L-i0dyqD1JbBdiC14",
  authDomain: "vk-copy-65c7a.firebaseapp.com",
  projectId: "vk-copy-65c7a",
  storageBucket: "vk-copy-65c7a.appspot.com",
  messagingSenderId: "144970771832",
  appId: "1:144970771832:web:ca1c58e170acb1e5d22c8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  </React.StrictMode>
);
