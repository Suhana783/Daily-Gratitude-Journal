import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Journal from './components/Journal';
import AskGemini from './components/AskGemini';
import Challenge from './components/Challenge';
import Auth from './components/Auth';
import './App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set to false to see auth page

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated ? <Sidebar /> : null}
        <main className="main-content">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/journal" /> : <Auth setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/login" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/journal" element={isAuthenticated ? <Journal /> : <Navigate to="/login" />} />
            <Route path="/ask-gemini" element={isAuthenticated ? <AskGemini /> : <Navigate to="/login" />} />
            <Route path="/challenge" element={isAuthenticated ? <Challenge /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}