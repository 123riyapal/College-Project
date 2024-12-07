import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navComponents/Header';
import './App.css';
import Hompage from './components/MainContent/Hompage';
import Academics from './components/Academics/Academics';
import Blog from './components/BlogComp/Blog';
import Contact from './components/ContactComp/Contact';
import Admission from './components/AdmissionComp/Admission';
import Progress from './progress';
import CourseEnquiry from './components/MainContent/CourseEnquiry';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(()=>{
    const cursor = document
        .querySelector(".custom-cursor");
    
    // Adding the animations when the
    // mouse button is clicked
    
    window.addEventListener("mousedown", (event) => {
        if (!cursor.classList.contains("click")) {
            cursor.classList.add("click");
    
            setTimeout(() => {
                cursor.classList.remove("click");
            }, 800);
        }
    });
    
    // Getting the position of the cursor
    window.addEventListener("mousemove", (event) => {
        let x = event.pageX - cursor.offsetWidth / 2,
            y = event.pageY - cursor.offsetHeight / 2;
    
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });

  })
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        const sections = ['Home', 'About', 'Course', 'Gallery', 'Enrollment','Footer'];
        const currentSectionIndex = sections.findIndex((id) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top >= -100;
        });

        if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
          const nextSection = document.getElementById(sections[currentSectionIndex + 1]);
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Cleanup listener on unmount
    };
  }, []);

  return (
    
    <div className="App " style={{ cursor: 'url("./components/images/cursor.png")' }}>
      <div className="custom-cursor"></div>
    <Router>
        <Progress/>
        <Header />
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/course/:courseId" element={<CourseEnquiry />} /> {/* New route for course enquiry */}

        </Routes>
    </Router>
    </div>

  );
}

export default App;
