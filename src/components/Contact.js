import React, { useState } from 'react';
import './Contact.css';

const Contact = React.forwardRef((props, ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Your Web3Forms Access Key
  const ACCESS_KEY = "5a6e21ad-dc28-4895-8e24-5b06b48d4638";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again.");
        console.error("Form Error:", data);
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
      console.error("Network Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Ready to take your brand to the next level? Get in touch with us today!</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>9205430446 / 8800358365</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@socialuplift.in</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-details">
                <h3>Social Media</h3>
                <p>@socialuplift.in</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{ color: '#ff9fb8', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: '#fff', marginBottom: '1.5rem' }}>We have received your message and will get back to you shortly.</p>
                <button className="btn" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Honeypot Spam Protection (Hidden) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-control" placeholder="Enter subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Enter your message" required></textarea>
                </div>

                {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}

                <button type="submit" className="btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;