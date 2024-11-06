import React, { useState } from 'react';
import "./AddImages.css"

function ProductImages() {
  const [images, setImages] = useState([
    { id: 1, src: 'image1.jpg' }, // Replace with actual image paths
    { id: 2, src: 'image2.jpg' },
    { id: 3, src: 'image3.jpg' },
  ]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const newImage = { id: Date.now(), src: URL.createObjectURL(file) };
    setImages((prevImages) => [...prevImages, newImage]);
  };

  const handleReplace = (id) => {
    // Logic to replace an image based on its ID
  };

  const handleRemove = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (    
    <>
        <div className="upload-box">
            <label htmlFor="upload-input">
            <span>Click to upload or drag and drop</span>
            </label>
            <input
            id="upload-input"
            type="file"
            onChange={handleUpload}
            style={{ display: 'none' }}
            />
        </div>
        <div className="image-thumbnails">
            {images.map((image) => (
                <div key={image.id} className="thumbnail">
                    <img src={image.src} alt="Product" />
                    <div className="overlay">
                    <button onClick={() => handleReplace(image.id)}>Replace</button>
                    <button onClick={() => handleRemove(image.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
}

export default ProductImages;
