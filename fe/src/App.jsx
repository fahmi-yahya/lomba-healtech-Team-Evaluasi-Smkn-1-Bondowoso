import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Index from './auth/Login';
import { AuthProtected, AuthProvider } from "./auth/AuthProvider";
import Login from "./auth/Login";
import Index from "./view/navbar";
import Coba from "./view/Dashboard";
import Dashboard from "./view/Dashboard";
import Inventory from "./view/Invetory";
import Supplier from "./view/Supplier";
import Notifikasi from "./view/Notifikasi";
import Pengguna from "./view/Pengaturan";
import Pengaturan from "./view/Pengguna";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/Dashboard"
              element={
                <AuthProtected>
                  <Dashboard />
                </AuthProtected>
              }
            />

            <Route
              path="/Inventory"
              element={
                <AuthProtected>
                  <Inventory />
                </AuthProtected>
              }
            />
         
            <Route
              path="/Supplier"
              element={
                <AuthProtected>
                  <Supplier />
                </AuthProtected>
              }
            />
            <Route
              path="/Notifikasi"
              element={
                <AuthProtected>
                  <Notifikasi />
                </AuthProtected>
              }
            />
            <Route
              path="/Pengguna"
              element={
                <AuthProtected>
                  <Pengguna />
                </AuthProtected>
              }
            />
            <Route
              path="/Pengaturan"
              element={
                <AuthProtected>
                  <Pengaturan />
                </AuthProtected>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
