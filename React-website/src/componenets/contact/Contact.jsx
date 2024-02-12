import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './contact.css'

const ContactInfo = () => {
  return (
    <div className="contact-info" id='contact'>
      <h1>Contact Me</h1>
      <div className="box">
        <div className="info-item">
          <FaMapMarkerAlt className="icon large-icon" />
          <p> Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div className="box">
        <div className="info-item">
          <FaEnvelope className="icon large-icon" />
          <p>bons6710hos@gmail.com</p>
        </div>
      </div>
      <div className="box">
        <div className="info-item center">
          <FaPhone className="icon large-icon" />
          <p>+251938756685</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
