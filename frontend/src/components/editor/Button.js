// frontend/src/components/editor/Button.js
import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('Click me');
  const [link, setLink] = useState('#');

  return (
    <div>
      <button>{text}</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Button Text" />
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Button Link" />
    </div>
  );
};

export default Button;
