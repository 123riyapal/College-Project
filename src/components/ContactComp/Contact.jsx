import React, { useEffect } from 'react';
import ContactHero from './ContactHero';
import ContactCard from './ContactCard';
import Footer from "../MainContent/Footer";
import Form from './Form';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    // Animate paragraph in `.rightBlog`
    gsap.from(".rightBlog p", {
      y: 120,
      duration: 1,
      ease: "power2.out",
    });

    // Animate `.Card` elements with scroll-triggered animation that reverses on scroll up
    gsap.from(".Card", {
      y: -300,  // Adjusted distance for a smoother animation
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "body",  // Target specific cards
        start: "top 80%",  // Start animation when .Card elements are in view
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    });

    // Animate `.left img`
    gsap.from(".left img", {
      y: -300,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "body",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    });

    // Animate `.right` section
    gsap.from(".right", {
      y:300,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "body",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    });
  }, []);

  return (
    <div className='contact'>
      <ContactHero />
      <ContactCard />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
