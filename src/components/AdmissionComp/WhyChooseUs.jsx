import React from 'react';
import './WhyChooseUs.css';
import Icon from '@mui/material/Icon';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p className="intro">Discover the key reasons why our institution stands out as a premier choice for your academic journey:</p>
      
      <div className="reasons">
        <div className="reason-card">
          <Icon className="icon">school</Icon>
          <h3>Experienced Faculty</h3>
          <p>Our professors are experts in their fields, dedicated to guiding students toward academic excellence.</p>
        </div>
        <div className="reason-card">
          <Icon className="icon">business</Icon>
          <h3>Advanced Facilities</h3>
          <p>We provide state-of-the-art facilities and resources, including modern labs, libraries, and tech tools.</p>
        </div>
        <div className="reason-card">
          <Icon className="icon">emoji_events</Icon>
          <h3>Award-Winning Programs</h3>
          <p>Our institution offers programs recognized for excellence, helping students achieve outstanding career outcomes.</p>
        </div>
        <div className="reason-card">
          <Icon className="icon">public</Icon>
          <h3>Global Opportunities</h3>
          <p>We offer exchange programs and global partnerships to broaden students' perspectives and career options.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
