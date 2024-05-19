import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const GridComponent = ({ layout, updateLayout }) => {
  const [show, setShow] = useState(false);
  const [gridLayout, setGridLayout] = useState(layout);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateLayout(gridLayout);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', border: '1px solid gray' }}>
        <h5>Grid Layout</h5>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridLayout.columns}, 1fr)`, gap: '10px' }}>
          {gridLayout.cells.map((cell, index) => (
            <div key={index}>{cell.content}</div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Grid Layout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGridLayoutColumns">
              <Form.Label>Number of Columns</Form.Label>
              <Form.Control
                type="number"
                value={gridLayout.columns}
                onChange={(e) => setGridLayout({ ...gridLayout, columns: parseInt(e.target.value) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GridComponent;
