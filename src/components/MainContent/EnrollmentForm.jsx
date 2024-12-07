import React, { useEffect } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./EnrollmentForm.css";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function EnrollmentForm({ id }) {
  return (
    <section id="Enrollment">
      <div className="container">
        <div className="leftSide">
          <div className="Form">
            <div className="headfORM">
              <h3 className="Formheading">Start Your Enrollment</h3>
              <p>We are variations of passages that have suffered.</p>
            </div>
            <form action="#">
              <input name="Name" type="text" placeholder="Your Name" />
              <input name="email" type="email" placeholder="Email address" />
              <select name="Courses">
                <option value="" disabled selected>
                  Choose Course
                </option>
                <option value="Web Development Basics">Web Development Basics</option>
                <option value="Introduction to Data Science">Introduction to Data Science</option>
                <option value="Advanced JavaScript">Advanced JavaScript</option>
                <option value="UI/UX Design Essentials">UI/UX Design Essentials</option>
                <option value="Machine Learning Foundations">Machine Learning Foundations</option>
              </select>
              <textarea rows={3} name="Message" id="msg" placeholder="Type Message"></textarea>
            </form>
            <button className="button enroll">Enroll Now</button>
          </div>
        </div>
        <div className="rightSide">
          <div className="skills">
            <AutoStoriesIcon />
            <h2>Our Skills</h2>
          </div>
          <h1 className="mainHeading">
            Explore Your <span className="highLight">Creativity And Talent</span> With Us.
          </h1>
          <p className="desc">
            There are many variations of passages available but the majority have suffered alteration in some form by injected humor. If you are going to use a passage, make sure it’s appropriate.
          </p>
          <div className="qualities">
            <div className="quality">
              <h3>Our Students</h3> <p>85%</p>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
            <div className="quality">
              <h3>Our Courses</h3> <p>63%</p>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '63%' }}></div>
            </div>
            <div className="quality">
              <h3>Our Teachers</h3> <p>75%</p>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '75%' }}></div>
            </div>
          </div>
          <button className="button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default EnrollmentForm;
