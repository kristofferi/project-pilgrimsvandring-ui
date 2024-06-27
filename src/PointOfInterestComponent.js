import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner, Alert, Pagination, Collapse, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function ApiComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');

  // Hårdkodad lista över kategorier
  const categories = ['kyrka', 'restaurang', 'museum', 'utsiktspunkt', 'sevärdheter'];

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const fetchData = (category) => {
    let url = 'https://localhost:7198/api/PointsOfInterest';
    if (category) {
      url = `https://localhost:7198/api/Category/PointsOfInterest/${category}`;
    }
    axios.get(url)
      .then(response => {
        setData(response.data);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setData([]);
      });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  const handleToggle = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container>
      <h2 className="my-4">Points of Interest</h2>
      {error && <Alert variant="danger">Error: {error}</Alert>}
      
      <Form.Group controlId="categorySelect">
        <Form.Label>Select a category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {data.length > 0 ? (
        <>
          <Row>
            {currentItems.map(point => (
              <Col key={point.id} sm={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{point.name}</Card.Title>
                    <Button
                      onClick={() => handleToggle(point.id)}
                      aria-controls={`collapse-text-${point.id}`}
                      aria-expanded={open[point.id]}
                      variant="link"
                    >
                      <FontAwesomeIcon icon={open[point.id] ? faChevronUp : faChevronDown} />
                    </Button>
                    <Collapse in={open[point.id]}>
                      <div id={`collapse-text-${point.id}`}>
                        <Card.Text>
                          {point.description || 'No description available'}
                        </Card.Text>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination>{paginationItems}</Pagination>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
}

export default ApiComponent;
