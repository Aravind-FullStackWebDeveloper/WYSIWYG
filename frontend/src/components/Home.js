import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to the Web Page Builder</h1>
          <p>This is a tool that allows you to create and customize web pages using a drag-and-drop interface.</p>
          <p>Get started by signing up or logging in.</p>
          <div>
            <Link to="/register">
              <Button variant="primary">Sign Up</Button>
            </Link>{' '}
            <Link to="/login">
              <Button variant="secondary">Log In</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
