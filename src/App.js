import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PointOfInterestComponent from './PointOfInterestComponent';
import NavBar from './NavBar';
import Home from './Home';
import WanderersList from './WanderersList';
import EventsList from './EventsList'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poi" element={<PointOfInterestComponent />} />
          <Route path="wanderers-list" element={<WanderersList/>} />
          <Route path="events" element={<EventsList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;