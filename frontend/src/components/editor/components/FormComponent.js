import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormComponent = ({ fields, updateFields }) => {
  const [show, setShow] = useState(false);
  const [formFields, setFormFields] = useState(fields);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    updateFields(formFields);
    handleClose();
  };

  const addField = () => {
    setFormFields([...formFields, { type: 'text', label: '', value: '' }]);
  };

  const updateField = (index, field) => {
    const updatedFields = formFields.map((f, i) => (i === index ? field : f));
    setFormFields(updatedFields);
  };

  return (
    <>
      <div onClick={handleShow} style={{ border: '1px solid gray', padding: '10px', cursor: 'pointer' }}>
        <h5>Form Component</h5>
        {formFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            <input type={field.type} value={field.value} readOnly />
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {formFields.map((field, index) => (
              <div key={index}>
                <Form.Group controlId={`formFieldType${index}`}>
                  <Form.Label>Field Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={field.type}
                    onChange={(e) => updateField(index, { ...field, type: e.target.value })}
                  >
                    <option value="text">Text</option>
                    <option value="textarea">Textarea</option>
                    <option value="checkbox">Checkbox</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId={`formFieldLabel${index}`}>
                  <Form.Label>Field Label</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.label}
                    onChange={(e) => updateField(index, { ...field, label: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId={`formFieldValue${index}`}>
                  <Form.Label>Field Value</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.value}
                    onChange={(e) => updateField(index, { ...field, value: e.target.value })}
                  />
                </Form.Group>
              </div>
            ))}
            <Button variant="secondary" onClick={addField}>
              Add Field
            </Button>
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

export default FormComponent;
