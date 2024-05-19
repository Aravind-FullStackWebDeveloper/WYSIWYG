import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SocialMediaIconsComponent = ({ icons, updateIcons }) => {
  const [show, setShow] = useState(false);
  const [socialIcons, setSocialIcons] = useState(icons);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateIcons(socialIcons);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', border: '1px solid gray' }}>
        <h5>Social Media Icons</h5>
        <div style={{ display: 'flex', gap: '10px' }}>
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.url}>
              <i className={`fab fa-${icon.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Social Media Icons</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSocialMediaIcons">
              <Form.Label>Icons (comma separated text:url pairs)</Form.Label>
              <Form.Control
                type="text"
                value={socialIcons.map(icon => `${icon.icon}:${icon.url}`).join(',')}
                onChange={(e) =>
                  setSocialIcons(
                    e.target.value.split(',').map(pair => {
                      const [icon, url] = pair.split(':');
                      return { icon, url };
                    })
                  )
                }
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

export default SocialMediaIconsComponent;
