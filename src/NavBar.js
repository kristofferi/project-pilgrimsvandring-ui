import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar({ isLoggedIn, onShowRegister, onShowLogin, onLogout }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);
  const handleCloseMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleCloseMenu}>Hem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/poi" onClick={handleCloseMenu}>Saker att se (sevärdheter)</Nav.Link>
                <Nav.Link as={Link} to="/events" onClick={handleCloseMenu}>Events</Nav.Link>
                <Nav.Link as={Link} to="/foto" onClick={handleCloseMenu}>Foto</Nav.Link>
                <Nav.Link as={Link} to="/information" onClick={handleCloseMenu}>Information</Nav.Link>
                <Nav.Link as={Link} to="/wanderers-list" onClick={handleCloseMenu}>Team</Nav.Link>
                <Nav.Link as={Link} to="/mina-minnen" onClick={handleCloseMenu}>Mina minnen</Nav.Link>
                <Button variant="secondary" onClick={onLogout}>Logga ut</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/poi" onClick={handleCloseMenu}>Saker att se (sevärdheter)</Nav.Link>
                <Nav.Link as={Link} to="/events" onClick={handleCloseMenu}>Events</Nav.Link>
                <Nav.Link as={Link} to="/foto" onClick={handleCloseMenu}>Foto</Nav.Link>
                <Nav.Link as={Link} to="/information" onClick={handleCloseMenu}>Information</Nav.Link>
                <Button variant="primary" onClick={onShowRegister} className="me-2">Registrera dig</Button>
                <Button variant="secondary" onClick={onShowLogin}>Logga in</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
