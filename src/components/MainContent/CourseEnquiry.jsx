import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './CourseEnquiry.css';

function CourseEnquiry() {
  const { courseId } = useParams();
  const location = useLocation();
  const { course } = location.state || {};

  if (!course) {
    return <p>No course information available.</p>;
  }

  return (
    <div className="course-enquiry">
      {/* Course Title and Main Info */}
      <div className="course-header">
        <h1>{course.title}</h1>
        <div className="course-info">
          <p><strong>Start Date:</strong> {course.date}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Available Seats:</strong> {course.seats}</p>
          <p><strong>Rating:</strong> {course.rating}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="course-content">
        {/* Description Section */}
        <section className="course-description">
          <h2>About the Course</h2>
          <p>{course.description}</p>
        </section>

        {/* Requirements Section */}
        <section className="course-requirements">
          <h2>Course Requirements</h2>
          <ul>
            <li>Basic knowledge of programming</li>
            <li>High school diploma</li>
            <li>Access to a laptop or PC</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="professional-experience">
          <h2>Professional Experience</h2>
          <p>This course is designed to equip students with the knowledge and skills needed for a career in engineering. You’ll gain hands-on experience and have the opportunity to work with real-world projects.</p>
        </section>
      </div>

      {/* Sidebar for Course Details */}
      <aside className="course-sidebar">
        <div className="course-features">
          <h3>Course Features</h3>
          <p><strong>Language:</strong> {course.language || 'English'}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Location:</strong> {course.location || 'On-Campus'}</p>
        </div>
        <button className="enroll-button">Enroll Now</button>
      </aside>
    </div>
    
  );
}

export default CourseEnquiry;
