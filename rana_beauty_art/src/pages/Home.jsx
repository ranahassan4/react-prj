import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../CSS/Home.CSS";
import Navbar from "../components/Navbar";
import homImage from "../assets/hom.jpg";
import solitaireImage from "../assets/solitair.jpg";
import weddingImage from "../assets/wed.jpg";
import diamondImage from "../assets/2Diam.jpg";
import necklaceImage from "../assets/ProductImages/necklace/nickles1.jpg";
import PiercingImage from "../assets/ProductImages/bracelet/bracelet1.jpg";
import whatsappIcon from "../assets/whicon.gif";

const Home = () => {
  const textSection = useRef(null); // This is your reference
  const zoomImage = useRef(null);
  const necklaceText = useRef(null);
  const shopNowImage = useRef(null);
  const piercingImage = useRef(null);

  useEffect(() => {
    // Animate text section
    const textSection2 = textSection.current; // Ensure you're using the correct reference
    setTimeout(() => {
      if (textSection2) textSection2.classList.add("animate");
    }, 500);

    // Animate zoom image
    const zoomImage2 = zoomImage.current;
    setTimeout(() => {
      if (zoomImage2) zoomImage2.classList.add("loaded");
    }, 300);

    // Animate necklaces text
    const necklaceText2 = necklaceText.current;
    setTimeout(() => {
      if (necklaceText2) necklaceText2.classList.add("animate-necklace-text");
    }, 500);

    // Animate "Shop Now" image
    const shopNowImage2 = shopNowImage.current;
    setTimeout(() => {
      if (shopNowImage2) shopNowImage2.classList.add("animate-shop-now");
    }, 700);

    // Animate Piercing Image
    const piercingImage2 = piercingImage.current;
    setTimeout(() => {
      if (piercingImage2) piercingImage2.classList.add("animate-piercing");
    }, 1000);
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="image-section">
        <img
          ref={zoomImage} // Add ref for zoom animation
          className="zoom-out-image"
          src={homImage}
          alt="Diamond Background"
        />
        <div className="image-overlay">
          <h1>Welcome to Rana Store</h1>
          <p>
            The finest collection of diamonds and jewelry for every occasion.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div ref={textSection} className="text-section">
        <h2 className="luxury-title">
          Where the Art of Elegance Meets the Brilliance of Diamonds
        </h2>
        <p className="luxury-description">
          We curate only the finest, most exquisite diamonds, handpicked for
          their unparalleled brilliance and timeless beauty. Each piece in our
          collection reflects a dedication to craftsmanship and perfection,
          offering a luxurious experience that transcends trends. Whether you're
          celebrating a special moment or indulging in something extraordinary,
          our diamonds promise to elevate your every occasion. Discover the art
          of luxury, where elegance meets sophistication.
        </p>
      </div>
      <br />
      <br />

      {/* Carousel */}
      <div
        // ref={carousel}
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* Solitaire Rings */}
          <div className="carousel-item active">
            <img
              src={solitaireImage}
              className="d-block carousel-img mx-auto"
              alt="Solitaire Rings"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Solitaire Rings</h5>
              <a
                href="http://localhost:8000/solitaire.php"
                className="btn btn-primary no-underline"
              >
                Shop Now
              </a>
            </div>
          </div>
          {/* Wedding Rings */}
          <div className="carousel-item">
            <img
              src={weddingImage}
              className="d-block carousel-img mx-auto"
              alt="Wedding Rings"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Wedding Rings</h5>
              <a
                href="http://localhost:8000/weddr.php"
                className="btn btn-primary no-underline"
              >
                Discover It
              </a>
            </div>
          </div>
          {/* 2 Diamond Rings */}
          <div className="carousel-item">
            <img
              src={diamondImage}
              className="d-block carousel-img mx-auto"
              alt="2 Diamond Rings"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>2 Diamond Rings</h5>
              <a
                href="http://localhost:8000/twodiam.php"
                className="btn btn-primary no-underline"
              >
                Explore more
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />

      {/* Necklace Section */}
      <div ref={necklaceText} className="necklace-section">
        <h2 className="animated-necklace-text">
          Explore the Elegance of Necklaces
        </h2>
      </div>

      {/* Shop Now Section */}
      <div className="shop-now-section">
        <div ref={shopNowImage} className="shop-now-container">
          <img src={necklaceImage} alt="Shop Now" className="shop-now-image" />
          <div className="shop-now-overlay">
            <h3>Update Your Look</h3>
            <a
              href="http://localhost:8000/shopnow.php"
              className="btn btn-primary no-underline"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Piercing Section */}
      <div className="piercing-section">
        <div className="piercing-container">
          <h2 className="piercing-title">Discover the Art of Piercing</h2>
          <p className="piercing-description">
            Elevate your style with our unique collection of piercings. Each
            piece is crafted with precision and designed to make a statement.
          </p>
          <div ref={piercingImage} className="piercing-image-container">
            <img
              src={PiercingImage}
              alt="Piercing Collection"
              className="piercing-image"
            />
          </div>
          <a
            href="http://localhost:8000/piercings.php"
            className="btn btn-primary no-underline"
          >
            Show More
          </a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/+96181039584"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <img src={whatsappIcon} alt="WhatsApp Chat" />
        </a>
      </div>
    </div>
  );
};

export default Home;
