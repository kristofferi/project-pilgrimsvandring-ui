import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({ onClose }) {
  const navigate = useNavigate();
    var [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
           };
 //const handleSubmit = (event) => {
   // event.preventDefault();
   //  setIsLoggedIn(true);
    // Här kan du lägga till din inloggningslogik
    // navigate('/'); // Ersätt '/wanderers-list' med din destination om vi skall ha detta i portalen

  //};
  
  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Logga in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
             <Form > {/* onSubmit={handleSubmit}>*/}
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Mejl</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Lösenord</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
                  <Button variant="secondary" onClick={handleLogin}>{/*type="submit" className="w-100 mb-3">*/}
                      Logga in
                  </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Avbryt
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginForm;