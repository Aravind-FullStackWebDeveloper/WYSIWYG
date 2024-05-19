import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ImageHolderComponent = ({ src, updateSrc }) => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateSrc(imageSrc);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', textAlign: 'center' }}>
        <img src={imageSrc} alt="Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formImageSrc">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={imageSrc}
                onChange={(e) => setImageSrc(e.target.value)}
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

export default ImageHolderComponent;
