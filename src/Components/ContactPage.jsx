import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-section">
      
      {/* 1. Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components 
          you need to change to create a truly happens.
        </p>
      </div>

      {/* 2. White Form Card */}
      <div className="contact-card">
        <form className="contact-form">
          
          {/* Row for Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>
          </div>

          {/* Subject Input */}
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Write a subject" />
          </div>

          {/* Message Input */}
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message" rows="6"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>

      {/* 3. Bottom Information Footer */}
      <div className="info-footer">
        <div className="info-column">
          <h3>Call Us:</h3>
          <p className="phone-number">+91 7978171372</p>
        </div>
        
        <div className="info-column">
          <h3>Hours:</h3>
          <p>Mon-Fri: 11am - 8pm</p>
          <p>Sat, Sun: 9am - 10pm</p>
        </div>

        <div className="info-column">
          <h3>Our Location:</h3>
          <p>Bhadrak</p>
          <p>DakshinKurua</p>
          <p>Odisha , 756117</p>
        </div>
      </div>

    </div>
  );
}

export default ContactPage;