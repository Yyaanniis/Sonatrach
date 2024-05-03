import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Login from './pages/Login';
import History from './pages/userhis';
import Devices from './pages/userdev';
import Profile from './pages/userpro';
import './styles/App.css';
import Navbar from './components/Nav';
import User from "./pages/user";
import HomePage from './pages/admin';
import Adev from './pages/admindev';
import Adm from './pages/admindmemp';
import Aem from './pages/adminemp';
import Ahi from './pages/adminhis';
import Ana from './pages/adminnadm';
import Apro from './pages/adminpro';
import Ast from './pages/adminstock';
import Anu from './pages/adminusers';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />     
        <Route path="/userhome" element={<User />} />
        <Route path="/userdev" element={<Devices />} />
        <Route path="/userhis" element={<History />} />
        <Route path="/userpro" element={<Profile />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/admindev" element={<Adev />} />
        <Route path="/adminhis" element={<Ahi />} />
        <Route path="/adminpro" element={<Apro />} />
        <Route path="/emprunts" element={<Aem />} />
        <Route path="/dmemprunts" element={<Adm />} />
        <Route path="/users" element={<Anu />} />
        <Route path="/stock" element={<Ast />} />
        <Route path="/nadm" element={<Ana />} />
      </Routes>
    </Router>
  );
}
  
export default App;
