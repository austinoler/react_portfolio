import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      {formSubmitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;