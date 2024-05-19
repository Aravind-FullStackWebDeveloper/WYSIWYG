import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const HeaderComponent = ({ content, updateContent }) => {
  const [show, setShow] = useState(false);
  const [headerContent, setHeaderContent] = useState(content);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateContent(headerContent);
    handleClose();
  };

  return (
    <>
      <header onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
        <h1>{headerContent.title}</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px' }}>
            {headerContent.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formHeaderTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formHeaderLinks">
              <Form.Label>Links (comma separated text:url pairs)</Form.Label>
              <Form.Control
                type="text"
                value={headerContent.links.map(link => `${link.text}:${link.url}`).join(',')}
                onChange={(e) =>
                  setHeaderContent({
                    ...headerContent,
                    links: e.target.value.split(',').map(pair => {
                      const [text, url] = pair.split(':');
                      return { text, url };
                    }),
                  })
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

export default HeaderComponent;
