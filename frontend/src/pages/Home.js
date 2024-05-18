// frontend/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Web Page Builder</h1>
      <Link to="/editor">Go to Editor</Link>
    </div>
  );
};

export default Home;
