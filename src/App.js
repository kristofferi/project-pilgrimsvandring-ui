import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PointOfInterestComponent from './PointOfInterestComponent';
import NavBar from './NavBar';
import Home from './Home';
import WanderersList from './WanderersList';
import EventsList from './EventsList'
import Foto from './Foto';
import Information from './Information';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <Router>
          <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poi" element={<PointOfInterestComponent />} />
          <Route path="wanderers-list" element={<WanderersList/>} />
          <Route path="events" element={<EventsList />} />
          <Route path="foto" element={<Foto/>} />
          <Route path="information" element={<Information />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;