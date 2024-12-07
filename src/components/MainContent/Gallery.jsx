import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import img13 from "../images/img13.jpg";
import img15 from "../images/img16.jpg";
import img16 from "../images/img17.jpg";
import img17 from "../images/img11.jpg";
import img18 from "../images/img19.jpg";
import img19 from "../images/img20.jpg";
import img20 from "../images/img14.jpg";
import img14 from "../images/img15.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from './Modal'; // Import the modal component
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Gallery({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const images = [img13, img14, img15, img16, img17, img18, img19, img20];
  const refe = useRef();

  useGSAP(() => {
    gsap.from(".gallery-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top 80%",
        toggleActions: "play none play none",
      },
    });
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setCurrentImageIndex(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Circular navigation
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Circular navigation
  };

  return (
    <section id="Gallery">
      <h2 className="mainHeading">
        Our Photo <span className='highLight'>Gallery</span>
      </h2>
      <section ref={refe} className="gallery-section">
        <div className="gallerycover">
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
                <img src={img} alt={`Student Image ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isOpen} 
        imageIndex={currentImageIndex}
        images={images}
        onClose={handleCloseModal} 
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </section>
  );
}

export default Gallery;
