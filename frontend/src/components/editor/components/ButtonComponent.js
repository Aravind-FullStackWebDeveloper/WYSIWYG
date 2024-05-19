import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ButtonComponent = ({ button, updateButton }) => {
  const [show, setShow] = useState(false);
  const [buttonSettings, setButtonSettings] = useState(button);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateButton(buttonSettings);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', border: '1px solid gray' }}>
        <h5>Button</h5>
        <Button variant={buttonSettings.variant}>{buttonSettings.text}</Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Button</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formButtonText">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                value={buttonSettings.text}
                onChange={(e) => setButtonSettings({ ...buttonSettings, text: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formButtonVariant">
              <Form.Label>Button Variant</Form.Label>
              <Form.Control
                as="select"
                value={buttonSettings.variant}
                onChange={(e) => setButtonSettings({ ...buttonSettings, variant: e.target.value })}
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </Form.Control>
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

export default ButtonComponent;
