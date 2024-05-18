// frontend/src/components/editor/ImageHolder.js
import React, { useState } from 'react';

const ImageHolder = () => {
  const [src, setSrc] = useState('https://via.placeholder.com/150');

  return (
    <div>
      <img src={src} alt="Placeholder" />
      <input type="file" onChange={(e) => setSrc(URL.createObjectURL(e.target.files[0]))} />
    </div>
  );
};

export default ImageHolder;
