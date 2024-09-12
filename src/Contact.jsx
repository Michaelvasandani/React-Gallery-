import React, { useState } from 'react';
import Navbar from './NavBar';
import './Contact.css'; // Ensure your CSS is properly linked

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your logic to send the form data
    console.log(formData);

    // Display success message after submission
    setSuccessMessage('Thank you for reaching out! We will get back to you soon.');
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

    return (
    <div className="contact">
      <nav id="desktop-nav">
       <Navbar />
     </nav>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Jl Bintaro Rosalia 3 Blok tf3</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>087875298225</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>vasandanimichael@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <h2>Send Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <span>Type your message</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
          {successMessage && <p className="successMessage">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
