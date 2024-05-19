import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CarouselComponent = ({ carousel, updateCarousel }) => {
  const [show, setShow] = useState(false);
  const [carouselSettings, setCarouselSettings] = useState(carousel);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateCarousel(carouselSettings);
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer', padding: '10px', border: '1px solid gray' }}>
        <h5>Carousel</h5>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {carouselSettings.slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.caption}</h5>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Carousel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {carouselSettings.slides.map((slide, index) => (
              <div key={index}>
                <Form.Group controlId={`formCarouselImage${index}`}>
                  <Form.Label>Slide {index + 1} Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={slide.image}
                    onChange={(e) => {
                      const newSlides = [...carouselSettings.slides];
                      newSlides[index].image = e.target.value;
                      setCarouselSettings({ ...carouselSettings, slides: newSlides });
                    }}
                  />
                </Form.Group>
                <Form.Group controlId={`formCarouselCaption${index}`}>
                  <Form.Label>Slide {index + 1} Caption</Form.Label>
                  <Form.Control
                    type="text"
                    value={slide.caption}
                    onChange={(e) => {
                      const newSlides = [...carouselSettings.slides];
                      newSlides[index].caption = e.target.value;
                      setCarouselSettings({ ...carouselSettings, slides: newSlides });
                    }}
                  />
                </Form.Group>
              </div>
            ))}
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

export default CarouselComponent;

