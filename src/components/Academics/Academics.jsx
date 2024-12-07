// Academics.js
import React, { useState } from 'react';
import './Academics.css';
import Footer from '../MainContent/Footer';
import libraryImg from '../images/library.jpg';
import educationImg from '../images/education.jpg';
import summerImg from '../images/summer.jpg';
import navalRtocImg from '../images/nVALRTOC.avif';
import AcademicHero from "./AcademicHero"
/**
 * CollapsibleCard component:
 * Represents a card that can toggle open and closed to reveal or hide content.
 * Props:
 *  - title: The title displayed on the card
 *  - content: The detailed content that appears when the card is expanded
 */
function CollapsibleCard({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`collapsible-card ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <h3>{title}</h3>
      <div className={`content ${isOpen ? 'show' : ''}`}>
        {content}
      </div>
    </div>
  );
}

/**
 * Academics component:
 * Main page for displaying academic-related information, including study categories, programs,
 * upcoming events, and achievements. This component uses a variety of sections to showcase
 * academic offerings in an interactive and visually organized layout.
 */
function Academics() {
  return (
    <div>
      <AcademicHero/>
          <section className="academics-page">
      {/* Page Header */}
      <header className="academics-header">
        <h1>Academics</h1>
        <p>Discover a diverse range of programs and opportunities to enrich your academic journey.</p>
      </header>

      {/* Study Categories Section */}
      <section className="study-section">
        <h2>Study <span className='highLight'>Categories</span> </h2>
        <div className="cards-container">
          <CollapsibleCard 
            title="Undergraduate" 
            content={<p>Explore over 90 undergraduate majors, with a broad array of resources and facilities.</p>} 
          />
          <CollapsibleCard 
            title="Graduate" 
            content={<p>Specialized graduate programs to further education and research in chosen fields.</p>} 
          />
          <CollapsibleCard 
            title="Online Learning" 
            content={<p>Flexible online learning options to support career growth from anywhere.</p>} 
          />
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h2>Academic <span className='highLight'>Programs</span> </h2>
        <div className="program-cards">
          <div className="program-card">
            <img src={libraryImg} alt="Library" />
            <h3>Library</h3>
            <p>Access extensive resources, digital collections, and dedicated study areas.</p>
          </div>
          <div className="program-card">
            <img src={educationImg} alt="Specialized Education" />
            <h3>Specialized Education</h3>
            <p>Programs designed for varied learning needs with flexible schedules.</p>
          </div>
          <div className="program-card">
            <img src={summerImg} alt="Summer Programs" />
            <h3>Summer Programs</h3>
            <p>Additional learning opportunities to enhance skills during the summer.</p>
          </div>
          <div className="program-card">
            <img src={navalRtocImg} alt="Naval ROTC" />
            <h3>Naval ROTC</h3>
            <p>Leadership training for students pursuing careers in the Navy and Marine Corps.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming  <span className='highLight'>Academic Events</span></h2>
        <div className="events-grid">
          <div className="event-card">
            <h3>Admissions Registration</h3>
            <p>January 10, 2024</p>
          </div>
          <div className="event-card">
            <h3>Last Day to Withdraw</h3>
            <p>February 15, 2024</p>
          </div>
          <div className="event-card">
            <h3>Thanksgiving Break</h3>
            <p>November 25, 2024</p>
          </div>
          <div className="event-card">
            <h3>Exams Resume</h3>
            <p>December 3, 2024</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2> Our <span className='highLight'>Achievements</span> </h2>
        <p>Highlighting milestones and recognitions of academic excellence.</p>
        <ul>
          <li>Ranked Top 5 in National Science Competitions.</li>
          <li>Over 200+ Research Publications in Top Journals.</li>
          <li>Multiple awards for innovation in technology and education.</li>
        </ul>
      </section>

      {/* Footer (optional) */}
      {/* Uncomment the following line if you want to include the Footer component */}
    </section>
    <Footer />

    </div>
  );
}

export default Academics;
