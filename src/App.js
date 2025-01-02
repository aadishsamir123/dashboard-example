import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Tasks from './components/Tasks';
import Messages from './components/Messages';
import Progress from './components/Progress';
import ProfileCard from './components/ProfileCard';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Track the first load of the app
  useEffect(() => {
    // If it's the first time loading, show splash for 1 second
    if (isInitialLoad) {
      setTimeout(() => {
        setIsInitialLoad(false); // Hide the splash screen after 1 second
      }, 1000);
    }
  }, [isInitialLoad]);

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar Navigation */}
        <nav style={{ width: '250px', borderRight: '1px solid #ddd', padding: '20px' }}>
          <h2 style={{ marginBottom: '20px' }}>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <i className="fas fa-home" style={{ marginRight: '10px' }}></i>
              <a href="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</a>
            </li>
            <li>
              <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>
              <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div style={{ flex: 1, position: 'relative' }}>
          {isInitialLoad && <SplashScreen />}
          <div style={isInitialLoad ? { visibility: 'hidden' } : {}}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </div>
        </div>

        {/* Profile Card */}
        <ProfileCard />
      </div>
    </Router>
  );
}

export default App;
