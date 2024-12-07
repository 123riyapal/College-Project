import React, { useState, useRef } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloseIcon from '@mui/icons-material/Close';
import "./hero.css";
import image from "../images/image.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function HeroPage({ id }) {
  const container = useRef();
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  // Close video modal if clicked outside the video
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("video-modal")) {
      closeVideo();
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(() => {
    gsap.from('.hero , .welcome-heading , p ,.button', {
      y:-120,
      stagger: 0.2,
      opacity: 0,
      duration: 0.2,
      ease: "power1.out"
    });
    gsap.from('img', {
      opacity: 0,
      y: 120,
      ease: "power1.out"
    });
  }, { scope: container });

  return (
    <section ref={container} id='Home'>
      <div className="hero">
        <div className="welcome">
          <AutoStoriesIcon className='stories' />
          <h2>Welcome to our college</h2>
        </div>
        <h1 className='welcome-heading'>Start Your <span className='highlight'>Bright</span> Journey With Us.</h1>
        <p className="welcome-description">
          There are many variations of passages available, but the majority have suffered alteration in some form.
        </p>
        <div className="welcome-buttons">
          <button className="button about-button" onClick={() => scrollToSection("about-section")}>ABOUT MORE ➔</button>
          <button className="button learn-button" onClick={() => scrollToSection("learn-section")}>LEARN MORE ➔</button>
        </div>
      </div>
      <div className="heroImage" onClick={openVideo}>
        <img src={image} alt="Hero" />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal" onClick={handleOutsideClick} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ position: 'relative', width: '80%', maxWidth: '600px' }}>
            <button onClick={closeVideo} style={{
              position: 'absolute', top: '10px', right: '10px', fontSize: '24px', color: 'white',
              background: 'transparent', border: 'none', cursor: 'pointer'
            }}>
              <CloseIcon style={{ backgroundColor: "black", borderRadius: "50%" }} />
            </button>
            <video controls style={{ width: '100%' }}>
              <source src="https://www.shutterstock.com/shutterstock/videos/3524861147/preview/stock-footage-cheerful-young-multiethnic-university-students-in-stylish-clothes-interacting-and-strolling-on.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroPage;
