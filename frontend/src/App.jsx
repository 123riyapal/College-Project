import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navComponents/Header";
import "./App.css";
import Hompage from "./components/MainContent/Hompage";
import Academics from "./components/Academics/Academics";
import Blog from "./components/BlogComp/Blog";
import Contact from "./components/ContactComp/Contact";
import Admission from "./components/AdmissionComp/Admission";
import Progress from "./progress";
import CourseEnquiry from "./components/MainContent/CourseEnquiry";
import gsap from "gsap";
import { AuthProvider } from "./components/context/AuthProvider";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseDown = () => {
      if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");
        setTimeout(() => cursor.classList.remove("click"), 800);
      }
    };

    const handleMouseMove = (event) => {
      const x = event.pageX - cursor.offsetWidth / 2;
      const y = event.pageY - cursor.offsetHeight / 2;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        const sections = ["Home", "About", "Course", "Gallery", "Enrollment", "Footer"];
        const currentSectionIndex = sections.findIndex((id) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top >= -100;
        });

        if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
          const nextSection = document.getElementById(sections[currentSectionIndex + 1]);
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        <div className="custom-cursor"></div>
        <Router>
          <Progress />
          <Header />
          <Routes>
            <Route path="/" element={<Hompage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/:courseId" element={<CourseEnquiry />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
