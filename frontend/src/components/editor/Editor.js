import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DragAndDrop from './DragAndDrop';
import TextBlockComponent from './components/TextBlockComponent';
import ImageHolderComponent from './components/ImageHolderComponent';
import ButtonComponent from './components/ButtonComponent';
import HeaderComponent from './components/HeaderComponent';
import CarouselComponent from './components/CarouselComponent';
import CardComponent from './components/CardComponent';
import VideoEmbedComponent from './components/VideoEmbedComponent';
import FormComponent from './components/FormComponent';
import GridComponent from './components/GridComponent';
import SocialMediaIconsComponent from './components/SocialMediaIconsComponent';

const Editor = () => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to add a component to the workspace
  const addComponent = (component) => {
    setComponents([...components, component]);
  };

  // Function to update a component's settings
  const updateComponent = (updatedComponent) => {
    const updatedComponents = components.map((comp) =>
      comp.id === updatedComponent.id ? updatedComponent : comp
    );
    setComponents(updatedComponents);
    setSelectedComponent(null);
  };

  // Function to delete a component from the workspace
  const deleteComponent = (id) => {
    const updatedComponents = components.filter((comp) => comp.id !== id);
    setComponents(updatedComponents);
  };

  // Function to handle component selection
  const handleComponentSelection = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} style={{ borderRight: '1px solid #ccc', minHeight: '100vh' }}>
          <h4>Component Library</h4>
          <DragAndDrop components={[
            { id: 1, name: 'Text Block', type: 'textBlock' },
            { id: 2, name: 'Image Holder', type: 'imageHolder' },
            { id: 3, name: 'Button', type: 'button' },
            { id: 4, name: 'Header', type: 'header' },
            { id: 5, name: 'Carousel', type: 'carousel' },
            { id: 6, name: 'Card', type: 'card' },
            { id: 7, name: 'Video Embed', type: 'videoEmbed' },
            { id: 8, name: 'Form', type: 'form' },
            { id: 9, name: 'Grid Layout', type: 'grid' },
            { id: 10, name: 'Social Media Icons', type: 'socialMediaIcons' }
          ]} addComponent={addComponent} />
        </Col>
        <Col md={9}>
          <h4>Workspace</h4>
          <Container>
            <Row>
              {components.map((component) => (
                <Col key={component.id} md={12}>
                  {component.type === 'textBlock' && (
                    <TextBlockComponent
                      textBlock={component}
                      updateTextBlock={updateComponent}
                      deleteTextBlock={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'imageHolder' && (
                    <ImageHolderComponent
                      imageHolder={component}
                      updateImageHolder={updateComponent}
                      deleteImageHolder={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'button' && (
                    <ButtonComponent
                      button={component}
                      updateButton={updateComponent}
                      deleteButton={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'header' && (
                    <HeaderComponent
                      header={component}
                      updateHeader={updateComponent}
                      deleteHeader={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'carousel' && (
                    <CarouselComponent
                      carousel={component}
                      updateCarousel={updateComponent}
                      deleteCarousel={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'card' && (
                    <CardComponent
                      card={component}
                      updateCard={updateComponent}
                      deleteCard={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'videoEmbed' && (
                    <VideoEmbedComponent
                      videoEmbed={component}
                      updateVideoEmbed={updateComponent}
                      deleteVideoEmbed={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'form' && (
                    <FormComponent
                      form={component}
                      updateForm={updateComponent}
                      deleteForm={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'grid' && (
                    <GridComponent
                      grid={component}
                      updateGrid={updateComponent}
                      deleteGrid={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                  {component.type === 'socialMediaIcons' && (
                    <SocialMediaIconsComponent
                      socialMediaIcons={component}
                      updateSocialMediaIcons={updateComponent}
                      deleteSocialMediaIcons={deleteComponent}
                      onSelect={handleComponentSelection}
                    />
                  )}
                </Col>
              ))}
            </Row>
          </Container>
          <Button variant="primary" onClick={() => console.log(components)}>Save</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Editor;
