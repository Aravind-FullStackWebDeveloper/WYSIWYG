// frontend/src/components/Sidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Sidebar = () => {
  const components = [
    { name: 'TextBlock', type: 'text' },
    { name: 'ImageHolder', type: 'image' },
    { name: 'Button', type: 'button' },
    // Add other components
  ];

  return (
    <div className="sidebar">
      {components.map((component, index) => (
        <ComponentItem key={index} component={component} />
      ))}
    </div>
  );
};

const ComponentItem = ({ component }) => {
  const [, drag] = useDrag(() => ({
    type: component.type,
    item: component,
  }));

  return (
    <div ref={drag} className="component-item">
      {component.name}
    </div>
  );
};

export default Sidebar;
