// frontend/src/components/Workspace.js
import React from 'react';
import { useDrop } from 'react-dnd';
import TextBlock from './editor/TextBlock';
import ImageHolder from './editor/ImageHolder';
import Button from './editor/Button';
// Import other components

const Workspace = () => {
  const [components, setComponents] = React.useState([]);

  const [, drop] = useDrop(() => ({
    accept: ['text', 'image', 'button'], // Add other types
    drop: (item) => addComponent(item),
  }));

  const addComponent = (component) => {
    setComponents((prev) => [...prev, component]);
  };

  return (
    <div ref={drop} className="workspace">
      {components.map((component, index) => {
        switch (component.type) {
          case 'text':
            return <TextBlock key={index} />;
          case 'image':
            return <ImageHolder key={index} />;
          case 'button':
            return <Button key={index} />;
          // Add other cases
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Workspace;
