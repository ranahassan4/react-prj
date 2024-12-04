import React, { useState } from "react";
import "../CSS/Rings.css";
import solitaireImage from "../assets/ProductImages/solitar/solitar1.jpg"; // Example import, replace with your actual paths
import weddingImage from "../assets/ProductImages/weddr/weddingring1.jpg";
import diamondImage from "../assets/ProductImages/twodiamond/tdiamond1.jpg";

export default function Signin_up() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: solitaireImage, alt: "Solitaire Rings" },
    { src: weddingImage, alt: "Wedding Rings" },
    { src: diamondImage, alt: "2 Diamond Rings" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="rings-container">
        <div className="rings">
          <button className="move-left" onClick={handlePrev}>
            &lt;
          </button>

          {images.map((image, index) => (
            <div
              className={`carousel-item ${
                index === activeIndex
                  ? "active"
                  : index === (activeIndex - 1 + images.length) % images.length
                  ? "prev"
                  : "next"
              }`}
              key={index}
            >
              <img
                src={image.src}
                className="d-block carousel-img mx-auto"
                alt={image.alt}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{image.alt}</h5>
                <a href="#" className="btn btn-primary no-underline">
                  Shop Now
                </a>
              </div>
            </div>
          ))}

          <button className="move-right" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
