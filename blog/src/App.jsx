import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
//importação de hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
//importando as páginas
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
//importando os componentes

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// importando o contexto
import { AuthProvider } from "./context/AuthContext";
function App() {
  const [user, setUser] = useState(undefined);
  const [auth] = useAuthentication();
  const loadingUser = user === undefined;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
