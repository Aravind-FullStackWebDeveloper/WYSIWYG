import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const componentsList = [
  { id: 1, type: 'TextBlock', content: 'Text Block' },
  { id: 2, type: 'ImageHolder', src: 'https://via.placeholder.com/150' },
  { id: 3, type: 'Button', label: 'Click Me' },
  // Add other components here
];

const Editor = () => {
  const [components, setComponents] = useState([]);

  const addComponent = (component) => {
    setComponents([...components, component]);
  };

  const [{ isOver }, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Container fluid>
        <Row>
          <Col md={3}>
            <h5>Components</h5>
            {componentsList.map((comp) => (
              <ComponentItem key={comp.id} component={comp} />
            ))}
          </Col>
          <Col md={9}>
            <div ref={drop} className="editor-workspace" style={{ border: isOver ? '2px solid green' : '2px solid gray', minHeight: '400px' }}>
              {components.map((comp, index) => (
                <DraggableComponent key={index} component={comp} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
};

const ComponentItem = ({ component }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'COMPONENT', ...component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {component.type}
    </div>
  );
};

const DraggableComponent = ({ component }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'COMPONENT', ...component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  switch (component.type) {
    case 'TextBlock':
      return <TextBlockComponent content={component.content} />;
    case 'ImageHolder':
      return <ImageHolderComponent src={component.src} />;
    case 'Button':
      return <ButtonComponent label={component.label} />;
    default:
      return null;
  }
};

export default Editor;
