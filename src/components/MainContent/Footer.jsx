// Footer.js
import React from 'react';
import './Footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer({id}) {
  return (
    <section id="Footer">
      <div className="footer-container">
        {/* University Info */}
        <div className="footer-column">
          <h3>Novalyn University</h3>
          <p>
            We are dedicated to providing quality education and supporting our
            students &lsquo; journey towards success.
          </p>
          <p><PhoneIcon /> +1 234 567 890</p>
          <p><LocationOnIcon /> 123 University Ave, City, Country</p>
          <p><EmailIcon /> info@novalyn.edu</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#About">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#news">Update News</a></li>
          </ul>
        </div>

        {/* Campus Links */}
        <div className="footer-column">
          <h3>Our Campus</h3>
          <ul>
            <li><a href="#safety">Campus Safety</a></li>
            <li><a href="#activities">Student Activities</a></li>
            <li><a href="#academics">Academic Department</a></li>
            <li><a href="#planning">Planning & Administration</a></li>
            <li><a href="#facilities">Facility Services</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates and news.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
