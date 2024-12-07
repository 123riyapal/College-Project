// src/components/Form.js

import React from 'react';
import contact from "../images/contact.avif";
import './form.css';

function Form() {
  return (
    <div className="contact-container">
      <div className="left">
        <img src={contact} alt="Contact Us" />
      </div>
      <div className="right">
        <h3>Get In Touch</h3>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <form className="ContactForm" action="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button className="Cbutton">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
