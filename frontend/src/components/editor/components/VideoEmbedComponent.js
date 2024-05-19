import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const VideoEmbedComponent = ({ videoEmbed, updateVideoEmbed }) => {
  const [show, setShow] = useState(false);
  const [videoEmbedSettings, setVideoEmbedSettings] = useState(videoEmbed);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateVideoEmbed(videoEmbedSettings);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', border: '1px solid gray' }}>
        <h5>Video Embed</h5>
        <iframe
          width="560"
          height="315"
          src={videoEmbedSettings.url}
          title="Video Embed"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Video Embed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formVideoUrl">
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                type="text"
                value={videoEmbedSettings.url}
                onChange={(e) => setVideoEmbedSettings({ ...videoEmbedSettings, url: e.target.value })}
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

export default VideoEmbedComponent;
