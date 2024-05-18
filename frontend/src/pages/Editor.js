// frontend/src/pages/Editor.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';
import Workspace from '../components/Workspace';

const Editor = () => {
  return (
    <div className="editor">
      <Toolbar />
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default Editor;
