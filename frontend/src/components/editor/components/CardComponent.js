import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CardComponent = ({ card, updateCard }) => {
  const [show, setShow] = useState(false);
  const [cardSettings, setCardSettings] = useState(card);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateCard(cardSettings);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', border: '1px solid gray' }}>
        <h5>Card</h5>
        <div className="card">
          <img src={cardSettings.image} className="card-img-top" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title">{cardSettings.title}</h5>
            <p className="card-text">{cardSettings.content}</p>
            <Button variant={cardSettings.button.variant}>{cardSettings.button.text}</Button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCardImage">
              <Form.Label>Card Image URL</Form.Label>
              <Form.Control
                type="text"
                value={cardSettings.image}
                onChange={(e) => setCardSettings({ ...cardSettings, image: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCardTitle">
              <Form.Label>Card Title</Form.Label>
              <Form.Control
                type="text"
                value={cardSettings.title}
                onChange={(e) => setCardSettings({ ...cardSettings, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCardContent">
              <Form.Label>Card Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={cardSettings.content}
                onChange={(e) => setCardSettings({ ...cardSettings, content: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formButtonVariant">
              <Form.Label>Button Variant</Form.Label>
              <Form.Control
                as="select"
                value={cardSettings.button.variant}
                onChange={(e) =>
                  setCardSettings({ ...cardSettings, button: { ...cardSettings.button, variant: e.target.value } })
                }
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
            <Form.Group controlId="formButtonText">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                value={cardSettings.button.text}
                onChange={(e) => setCardSettings({ ...cardSettings, button: { ...cardSettings.button, text: e.target.value } })}
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

export default CardComponent;
