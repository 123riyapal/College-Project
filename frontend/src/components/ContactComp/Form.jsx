import React, { useState } from 'react';
import axios from 'axios';
import contact from "../images/contact.avif";
import './form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setResponseMessage(response.data.success);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setResponseMessage(error.response?.data?.error || "Something went wrong");
    }
  };

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
        {responseMessage && <p className="response-message">{responseMessage}</p>}
        <form className="ContactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="Cbutton">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
