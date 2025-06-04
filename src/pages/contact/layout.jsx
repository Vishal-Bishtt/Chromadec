import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, User, MessageSquare } from 'lucide-react';
import Header from '../../cum/Header';
import Footer from '../../cum/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: '1.6'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
    padding: '4rem 2rem',
    textAlign: 'center',
    borderBottom: '2px solid #ffffff'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #ffffff, #cccccc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    color: '#cccccc',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const contactInfoStyle = {
    backgroundColor: '#111111',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #333333',
    height: 'fit-content'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#000000',
    borderRadius: '8px',
    border: '1px solid #222222',
    transition: 'all 0.3s ease'
  };

  const contactItemHoverStyle = {
    ...contactItemStyle,
    backgroundColor: '#222222',
    borderColor: '#ffffff'
  };

  const iconStyle = {
    marginRight: '1rem',
    color: '#ffffff',
    minWidth: '24px'
  };

  const formStyle = {
    backgroundColor: '#111111',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #333333'
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: '#000000',
    border: '2px solid #333333',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#ffffff',
    backgroundColor: '#111111'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
    fontFamily: 'inherit'
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#cccccc',
    transform: 'translateY(-2px)'
  };

  const footerStyle = {
    backgroundColor: '#111111',
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid #333333'
  };

  const [hoveredItem, setHoveredItem] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <>
      <Header />
      <div style={containerStyle}>
        {/* Title Section */}
            <div style={headerStyle}>
              <h1 style={titleStyle}>Get In Touch</h1>
              <p style={subtitleStyle}>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Main Content */}
        <main style={mainContentStyle}>
          {/* Contact Information */}
          <div style={contactInfoStyle}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '2rem',
              color: '#ffffff',
              fontWeight: '600'
            }}>
              Contact Information
            </h2>
            
            <div 
              style={hoveredItem === 'email' ? contactItemHoverStyle : contactItemStyle}
              onMouseEnter={() => setHoveredItem('email')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Mail style={iconStyle} size={20} />
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '500' }}>Email</h3>
                <p style={{ margin: '0', color: '#cccccc' }}>hello@yourwebsite.com</p>
              </div>
            </div>

            <div 
              style={hoveredItem === 'phone' ? contactItemHoverStyle : contactItemStyle}
              onMouseEnter={() => setHoveredItem('phone')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Phone style={iconStyle} size={20} />
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '500' }}>Phone</h3>
                <p style={{ margin: '0', color: '#cccccc' }}>+1 (555) 123-4567</p>
              </div>
            </div>

            <div 
              style={hoveredItem === 'address' ? contactItemHoverStyle : contactItemStyle}
              onMouseEnter={() => setHoveredItem('address')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <MapPin style={iconStyle} size={20} />
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '500' }}>Address</h3>
                <p style={{ margin: '0', color: '#cccccc' }}>123 Business Street<br />City, State 12345</p>
              </div>
            </div>

            <div 
              style={hoveredItem === 'hours' ? contactItemHoverStyle : contactItemStyle}
              onMouseEnter={() => setHoveredItem('hours')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Clock style={iconStyle} size={20} />
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '500' }}>Business Hours</h3>
                <p style={{ margin: '0', color: '#cccccc' }}>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={formStyle}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '2rem',
              color: '#ffffff',
              fontWeight: '600'
            }}>
              Send us a Message
            </h2>
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                style={focusedInput === 'name' ? inputFocusStyle : inputStyle}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                style={focusedInput === 'email' ? inputFocusStyle : inputStyle}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                required
              />
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={focusedInput === 'subject' ? inputFocusStyle : inputStyle}
                onFocus={() => setFocusedInput('subject')}
                onBlur={() => setFocusedInput(null)}
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={focusedInput === 'message' ? { ...textareaStyle, borderColor: '#ffffff', backgroundColor: '#111111' } : textareaStyle}
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
                required
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={buttonHovered ? buttonHoverStyle : buttonStyle}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #000000',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}