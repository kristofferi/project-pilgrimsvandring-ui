import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function NavBar() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [expanded, setExpanded] = useState(false); // Tillstånd för att hantera menyns expansion
  const location = useLocation();

  const handleShowRegister = () => setShowRegister(true);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseForms = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const handleToggle = () => setExpanded(!expanded);
  const handleCloseMenu = () => setExpanded(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleCloseMenu}>Hem</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/poi" onClick={handleCloseMenu}>Saker att se (sevärdheter)</Nav.Link>
            </Nav>
            <Button variant="primary" onClick={handleShowRegister} className="me-2">Registrera dig</Button>
            <Button variant="secondary" onClick={handleShowLogin}>Logga in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showRegister && <RegisterForm onClose={handleCloseForms} />}
      {showLogin && <LoginForm onClose={handleCloseForms} />}
    </div>
  );
}

export default NavBar;
