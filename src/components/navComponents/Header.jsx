import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './header.css';
import SearchApply from './SearchApply';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// import About from './components/MainContent/About';
// import Course from './components/MainContent/Course';
// import Gallery from './components/MainContent/Gallery';
// import EnrollmentForm from './components/MainContent/EnrollmentForm';
// import Footer from './components/MainContent/Footer';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Blog', path: '/blog' },
  { name: 'Admission', path: '/admission' },
  { name: 'Contact', path: '/contact' }
];
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Header() {
  useGSAP(()=>{
    gsap.from('.logo img, .Nav li a ,.applysearch', {
      opacity: 0,
      y: -20, // Slide from above
      duration: 1,
      ease: "power2.out",
      stagger: 0.2, // Adds delay between each animation for a cascading effect
      scrollTrigger: {
        trigger: '.Nav', // Only start when '.Nav' is in view
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }, []);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Logo />
      <Navigation navItems={navItems} />
      <SearchApply />
    </header>
  );
}

export default Header;
