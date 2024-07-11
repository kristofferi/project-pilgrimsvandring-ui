import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PointOfInterestComponent from './PointOfInterestComponent';
import NavBar from './NavBar';
import Home from './Home';
import WanderersList from './WanderersList';
import EventsList from './EventsList';
import Foto from './Foto';
import Information from './Information';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import MapComponent from './Components/MapComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowRegister = () => setShowRegister(true);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseForms = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleCloseForms();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <NavBar
          isLoggedIn={isLoggedIn}
          onShowRegister={handleShowRegister}
          onShowLogin={handleShowLogin}
          onLogout={handleLogout} // onLogout skickas som en prop till NavBar
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poi" element={<PointOfInterestComponent />} />
          <Route path="wanderers-list" element={<WanderersList />} />
          <Route path="events" element={<EventsList />} />
          <Route path="foto" element={<Foto />} />
          <Route path="information" element={<Information />} />
          <Route path="karta" element={<MapComponent />} />
        </Routes>
        {showRegister && <RegisterForm onClose={handleCloseForms} />}
        {showLogin && <LoginForm onClose={handleCloseForms} onLogin={handleLogin} />}
      </div>
    </Router>
  );
}

export default App;
