import React from 'react';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Layout from './components/Layout'
import './style/desdeo_template.scss'

export default function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}




