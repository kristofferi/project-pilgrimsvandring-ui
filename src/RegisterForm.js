import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm({ onClose }) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        //event.preventDefault();
        navigate('/'); // Ersätt '/wanderers-list' med din destination om vi skall ha detta i portalen

    };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrera dig</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Mejl</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Lösenord</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Bekräfta lösenord</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
            Spar
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

export default RegisterForm;