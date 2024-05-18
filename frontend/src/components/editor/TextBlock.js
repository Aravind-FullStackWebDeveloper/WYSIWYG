// frontend/src/components/editor/TextBlock.js
import React, { useState } from 'react';

const TextBlock = () => {
  const [text, setText] = useState('Edit me');

  return (
    <div contentEditable={true} onInput={(e) => setText(e.currentTarget.textContent)}>
      {text}
    </div>
  );
};

export default TextBlock;
