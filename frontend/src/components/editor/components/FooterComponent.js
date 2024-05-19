import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FooterComponent = ({ content, updateContent }) => {
  const [show, setShow] = useState(false);
  const [footerContent, setFooterContent] = useState(content);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateContent(footerContent);
    handleClose();
  };

  return (
    <>
      <footer onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
        <h5>{footerContent.title}</h5>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px' }}>
            {footerContent.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Footer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFooterTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={footerContent.title}
                onChange={(e) => setFooterContent({ ...footerContent, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formFooterLinks">
              <Form.Label>Links (comma separated text:url pairs)</Form.Label>
              <Form.Control
                type="text"
                value={footerContent.links.map(link => `${link.text}:${link.url}`).join(',')}
                onChange={(e) =>
                  setFooterContent({
                    ...footerContent,
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

export default FooterComponent;
