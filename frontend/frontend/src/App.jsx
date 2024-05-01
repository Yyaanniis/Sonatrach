import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react'
import Login from './pages/Login'
import History from './pages/history'
import Devices from './pages/device'
import Profile from './pages/profile'
import './styles/App.css'
import Navbar from './components/Nav'
import Home from "./pages/Home"
import Homea from './pages/homea'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProtectedRoute from "./components/ProtectedRoute"
function Logout() {
  localStorage.clear()
  return <Navigate to="/login"/>
}


function App() {
  return( 
  <Router>
    <Routes>
      <Route path="/"
      element={<ProtectedRoute>
         <Home />
      </ProtectedRoute>
       
      }
      />
  
      <Route path="/login" element={<Login/>}/>
      <Route path="/devices" element={<Devices/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/homea" element={<Homea/>}/>
      <Route path="home" element={<Home/>}></Route>
    </Routes>
  </Router>
  )
}
  
export default App
