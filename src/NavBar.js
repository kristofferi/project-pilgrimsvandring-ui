import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function NavBar() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowRegister = () => setShowRegister(true);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseForms = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/poi">Point of Interest</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="primary" onClick={handleShowRegister} className="me-2">Register</Button>
            <Button variant="secondary" onClick={handleShowLogin}>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showRegister && <RegisterForm onClose={handleCloseForms} />}
      {showLogin && <LoginForm onClose={handleCloseForms} />}
    </div>
  );
}

export default NavBar;