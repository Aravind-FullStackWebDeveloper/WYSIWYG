import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const DragAndDrop = ({ components, addComponent }) => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, component) => {
    setDraggedItem(component);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    addComponent(draggedItem);
    setDraggedItem(null);
  };

  return (
    <Container>
      <h4>Drag Components Here</h4>
      <Row>
        {components.map((component, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} draggable onDragStart={(e) => handleDragStart(e, component)}>
            <div style={{ padding: '10px', border: '1px solid gray', marginBottom: '10px', cursor: 'move' }}>
              {component.name}
            </div>
          </Col>
        ))}
      </Row>
      <div
        style={{
          border: '2px dashed gray',
          padding: '20px',
          marginTop: '20px',
          minHeight: '200px',
        }}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {components.length === 0 && <p>No components available</p>}
      </div>
    </Container>
  );
};

export default DragAndDrop;
